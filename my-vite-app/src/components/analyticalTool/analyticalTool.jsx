import React, { useState, useEffect, useCallback } from 'react';
import './analyticalTool.css';
import { useSpeechSynthesis } from 'react-speech-kit';
import speaker from '../../assets/images/icons/speaker.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import Papa from 'papaparse';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const AnalyticalTool = ({ crop, state, hectares,district }) => {
  const [farmCategory, setFarmCategory] = useState('');
  const [priceRealizations, setPriceRealizations] = useState({});
  const [landData, setLandData] = useState(null);
  const [valueShares, setValueShares] = useState(null);
  const [cropPrices, setCropPrices] = useState([]);
  const [modalPrice, setModalPrice] = useState('Loading...');

  useEffect(() => {
    setFarmCategory(determineCategory(hectares));
  }, [hectares]);

  useEffect(() => {
    fetchData();
  }, [state, crop, hectares]);

  const determineCategory = (hectares) => {
    if (hectares < 1) return 'Marginal';
    if (hectares < 2) return 'Small';
    if (hectares < 4) return 'SemiMedium';
    if (hectares < 10) return 'Medium';
    return 'Large';
  };

  const fetchData = async () => {
    try {
      await Promise.all([
        parseCSV('/data/farmDatasets/AnalyticsTool/4.3private.csv', 'Private'),
        parseCSV('/data/farmDatasets/AnalyticsTool/4.3mandi.csv', 'Mandi'),
        parseCSV('/data/farmDatasets/AnalyticsTool/4.3inputdealers.csv', 'InputDealers'),
        parseCSV('/data/farmDatasets/AnalyticsTool/4.3coop&govt.csv', 'CoopAndGovt'),
        parseCSV('/data/farmDatasets/AnalyticsTool/1.8.csv', 'landData'),
        parseCSV('/data/farmDatasets/AnalyticsTool/1.4.csv', 'valueShares'),
        parseCSV('/data/farmDatasets/AnalyticsTool/cropPrices.csv', 'cropPrices')
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const parseCSV = async (url, type) => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        complete: (result) => {
          const data = result.data;
          if (type === 'landData') {
            setLandData(data);
          } else if (type === 'valueShares') {
            setValueShares(data);
          } else if (type === 'cropPrices') {
            setCropPrices(data);
            updateModalPrice(data); // Update modal price on new data
          } else {
            setPriceRealizations(prevState => ({
              ...prevState,
              [type]: getPriceRealisation(data, crop)
            }));
          }
        },
        error: (error) => console.error(`Error parsing ${type} CSV:`, error)
      });
    } catch (error) {
      console.error(`Error fetching ${type} CSV:`, error);
    }
  };

  const getPriceRealisation = (data, crop) => {
    const normalizedCrop = crop.toLowerCase().trim();
    const filtered = data.filter(d => d.Crops && d.Crops.toLowerCase().trim() === normalizedCrop);
    if (filtered.length > 0) {
      return filtered[0];
    }
    return null;
  };

  const updateModalPrice = (data) => {
    const normalizedCrop = crop.toLowerCase().trim();
    const normalizedState = state.toLowerCase().trim();
    
    const filtered = data.filter(d => 
      d.Crops && d.State &&
      d.Crops.toLowerCase().includes(normalizedCrop) &&
      d.State.toLowerCase().includes(normalizedState)
    );
    
    if (filtered.length > 0) {
      const modalPrices = filtered.map(d => parseFloat(d['Modal Price'])).filter(price => !isNaN(price));
      const mostRecentModalPrice = modalPrices[modalPrices.length - 1];
      setModalPrice(mostRecentModalPrice ? `${mostRecentModalPrice} Rs.` : 'No data available');
    } else {
      setModalPrice('No data available');
    }
  };
  

  const plotPriceRealisation = useCallback(() => {
    if (!priceRealizations || Object.keys(priceRealizations).length === 0) return null;

    const labels = [];
    const dataValues = [];

    // if (priceRealizations.Local) {
    //   labels.push('Local');
    //   dataValues.push(priceRealizations.Local[farmCategory]);
    // }
    if (priceRealizations.Private) {
      labels.push('Private');
      dataValues.push(priceRealizations.Private[farmCategory]);
    }
    if (priceRealizations.Mandi) {
      labels.push('Mandi');
      dataValues.push(priceRealizations.Mandi[farmCategory]);
    }
    if (priceRealizations.InputDealers) {
      labels.push('Input Dealers');
      dataValues.push(priceRealizations.InputDealers[farmCategory]);
    }
    if (priceRealizations.CoopAndGovt) {
      labels.push('Cooperative and Govt');
      dataValues.push(priceRealizations.CoopAndGovt[farmCategory]);
    }

    const data = {
      labels: labels,
      datasets: [{
        label: `Price Realisation (Rs./kg) for ${crop} (${farmCategory}) in ${state}`,
        data: dataValues,
        backgroundColor: 'skyblue',
        borderColor: '#000000',
        borderWidth: 2,
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
        x: {
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#4A4A4A',
          },
        },
      },
    };

    return <div style={{ width: '100%', height: '400px' }}><Bar data={data} options={options} /></div>;
  }, [priceRealizations, farmCategory, crop, state]);

  const plotLandComparison = useCallback(() => {
    if (!landData) return null;
    const stateData = landData.find(d => d['State/UT'] === state);
    if (!stateData) return null;

    const categories = ['Marginal', 'Small', 'SemiMedium', 'Medium', 'Large'];
    const avgSizes = categories.map(category => stateData[category]);
    const farmerCategorySize = stateData[farmCategory] || 0;

    const data = {
      labels: categories.concat('Your Land Size'),
      datasets: [
        {
          label: 'Average Land Size (hectares)',
          data: avgSizes.concat(hectares),
          backgroundColor: categories.map(() => 'lightblue').concat('pink'),
          borderColor: '#000000',
          borderWidth: 2,
        }
      ]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
        x: {
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#4A4A4A',
          },
        },
      },
    };

    return <div style={{ width: '100%', height: '400px' }}><Bar data={data} options={options} /></div>;
  }, [landData, farmCategory, state, hectares]);

  const plotValueShares = useCallback(() => {
    if (!valueShares) return null;
    const filtered = valueShares.filter(d => d.Crops && crop && d.Crops.toLowerCase().includes(crop.toLowerCase()));
    if (filtered.length === 0) return null;

    const values = Object.values(filtered[0]).slice(1);
    const years = Object.keys(filtered[0]).slice(1);

    const data = {
      labels: years,
      datasets: [{
        label: `Value Share of ${crop}`,
        data: values,
        borderColor: 'blue',
        fill: false
      }]
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
        x: {
          grid: {
            color: 'rgba(200,200,200,0.3)',
          },
          ticks: {
            color: '#4A4A4A',
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: '#4A4A4A',
          },
        },
      },
    };

    return <div style={{ width: '100%', height: '400px' }}><Line data={data} options={options} /></div>;
  }, [valueShares, crop]);

  const voiceText = (graphType) => {
    let text = '';
    
    if (graphType === 'priceRealisation') {
        text = `This chart shows the price realization for ${crop} in ${state} across various market channels like Private, Mandi, Input Dealers, and Cooperative and Govt.`;
    } else if (graphType === 'landComparison') {
        text = `This chart compares your land size of ${hectares} hectares with the average land sizes for different farm categories in ${state}, such as Marginal, Small, SemiMedium, Medium, and Large.`;
    } else if (graphType === 'valueShares') {
        text = `This chart displays the value share of ${crop} over the years, highlighting trends in the crop's value contribution.`;
    }

    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    
    const femaleVoice = voices.find(voice => voice.name.includes('Female') || voice.name.includes('female'));

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.volume = 0.5;
    utterance.pitch = 1;   
    utterance.voice = femaleVoice || voices[0];

    synth.speak(utterance);
};


  return (
    <div className='analytical-charts-container'>
      <h1>Agricultural Analysis for {state}</h1>
      <div className='modal-price-display'>
        <h2>1. Per Quintal(100 kg) Wholesale Price for {crop} in {district}({state}): <span>{modalPrice}</span> </h2>
      </div>
      <div className='charts-box'>
        <h2>2. Price Realisation</h2>
        {plotPriceRealisation()}
        <button onClick={(e) => {
          e.preventDefault();
          voiceText('priceRealisation');
        }} className="charts-box-speaker">
          <span>Explain this chart</span>
          <img src={speaker} alt="explain this graph" className='icon' />
        </button>
      </div>
      <div className='charts-box'>
        <h2>3. Land Size Comparison</h2>
        {plotLandComparison()}
        <button onClick={(e) => {
          e.preventDefault();
          voiceText('landComparison');
        }} className="charts-box-speaker">
          <span>Explain this chart</span>
          <img src={speaker} alt="explain this graph" className='icon' />
        </button>
      </div>
      <div className='charts-box'>
        <h2>4. Value Share Over the Years</h2>
        {plotValueShares()}
        <button onClick={(e) => {
          e.preventDefault();
          voiceText('valueShares');
        }} className="charts-box-speaker">
          <span>Explain this chart</span>
          <img src={speaker} alt="explain this graph" className='icon' />
        </button>
      </div>
      
      <span className='analytical-note-text'>(NOTE: The analysis is based on the report, "The March of Agriculture since independence" by Department of Agriculture and Farmers Welfare Government of India.)</span>
    </div>
  );
};

export default AnalyticalTool;
