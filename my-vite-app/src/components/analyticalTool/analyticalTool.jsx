import React, { useState, useEffect, useCallback } from 'react';
import './analyticalTool.css';
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

const AnalyticalTool = ({ crop, state, hectares }) => {
  const [farmCategory, setFarmCategory] = useState('');
  const [priceRealizations, setPriceRealizations] = useState({});
  const [landData, setLandData] = useState(null);
  const [valueShares, setValueShares] = useState(null);

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
    await Promise.all([
      parseCSV('../../src/farmDatasets/AnalyticsTool/4.3local.csv', 'Local'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/4.3private.csv', 'Private'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/4.3mandi.csv', 'Mandi'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/4.3inputdealers.csv', 'InputDealers'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/4.3coop&govt.csv', 'CoopAndGovt'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/1.8.csv', 'landData'),
      parseCSV('../../src/farmDatasets/AnalyticsTool/1.4.csv', 'valueShares')
    ]);
  };

  const parseCSV = async (url, type) => {
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
        } else {
          setPriceRealizations(prevState => ({
            ...prevState,
            [type]: getPriceRealisation(data, crop)
          }));
        }
      }
    });
  };

  const getPriceRealisation = (data, crop) => {
    const filtered = data.filter(d => d.Crops.toLowerCase().includes(crop.toLowerCase()));
    if (filtered.length > 0) {
      return filtered[0];
    }
    return null;
  };

  const plotPriceRealisation = useCallback(() => {
    if (!priceRealizations || Object.keys(priceRealizations).length === 0) return null;

    const labels = [];
    const dataValues = [];

    if (priceRealizations.Local) {
      labels.push('Local');
      dataValues.push(priceRealizations.Local[farmCategory]);
    }
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
        label: `Value Share of ${crop} Over the Years`,
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

  return (
    <div className='analytical-charts-container'>
      <h1>Agricultural Analysis for {state}</h1>
      <div className='charts-box'>
        <h2>1. Price Realisation</h2>
        {plotPriceRealisation()}
      </div>
      <div className='charts-box'>
        <h2>2. Land Size Comparison</h2>
        {plotLandComparison()}
      </div>
      <div className='charts-box'>
        <h2>3. Value Share Over the Years</h2>
        {plotValueShares()}
      </div>
      <span className='analytical-note-text'>(NOTE: The analysis is based on the report, "The March of Agriculture since independence" by  Department of Agriculture and Farmers Welfare Government of India.)</span>
    </div>
  );
};

export default AnalyticalTool;
