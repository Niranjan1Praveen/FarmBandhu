import React, { useEffect, useState } from 'react';
import { Line, Bar, Pie } from 'react-chartjs-2';
import Papa from 'papaparse';
import './homeCharts.css';
import { useTranslation } from 'react-i18next';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Homecharts = () => {
  const { t } = useTranslation('homeCharts');
  const [growthRates, setGrowthRates] = useState([]);
  const [areaShares, setAreaShares] = useState([]);
  const [valueShares, setValueShares] = useState([]);
  const [landHolding, setLandHolding] = useState([]);
  const [priceRealisation, setPriceRealisation] = useState([]);
  const [areaSharesColumn, setAreaSharesColumn] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const growthRatesResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/1.2.csv');
      const areaSharesResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/1.3.csv');
      const valueSharesResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/1.4.csv');
      const landHoldingResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/1.8.csv');
      const priceRealisationLocalResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/4.3local.csv');
      const priceRealisationPrivateResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/4.3private.csv');
      const priceRealisationMandiResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/4.3mandi.csv');
      const priceRealisationInputResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/4.3inputdealers.csv');
      const priceRealisationCoopResponse = await parseCSV('/data/farmDatasets/AnalyticsTool/4.3coop&govt.csv');

      setGrowthRates(growthRatesResponse);
      setAreaShares(areaSharesResponse);
      setValueShares(valueSharesResponse);
      setLandHolding(landHoldingResponse);
      setPriceRealisation([
        ...priceRealisationLocalResponse,
        ...priceRealisationPrivateResponse,
        ...priceRealisationMandiResponse,
        ...priceRealisationInputResponse,
        ...priceRealisationCoopResponse
      ]);

      setAreaSharesColumn(Object.keys(areaSharesResponse[0]).pop());
    };

    fetchData();
  }, []);

  const parseCSV = async (url) => {
    const response = await fetch(url);
    const text = await response.text();
    return new Promise((resolve, reject) => {
      Papa.parse(text, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (result) => {
          const validData = result.data.filter(row => Object.values(row).every(value => value !== null && value !== ''));
          resolve(validData);
        },
        error: (error) => {
          console.error('Error parsing CSV: ', error);
          reject(error);
        }
      });
    });
  };

  const growthRatesData = {
    labels: growthRates.map((row) => row.Crops),
    datasets: Object.keys(growthRates[0] || {}).slice(1).map((col, index) => ({
      label: col,
      data: growthRates.map((row) => row[col]),
      borderColor: `rgba(${index * 50}, ${index * 30}, ${index * 10}, 1)`,
      fill: false
    }))
  };

  const areaSharesData = {
    labels: areaShares.map((row) => row.Crops),
    datasets: Object.keys(areaShares[0] || {}).slice(1).map((col, index) => ({
      label: col,
      data: areaShares.map((row) => row[col]),
      backgroundColor: `rgba(${index * 50}, ${index * 30}, ${index * 10}, 0.6)`
    }))
  };

  const valueSharesData = {
    labels: valueShares.map((row) => row.Crops),
    datasets: Object.keys(valueShares[0] || {}).slice(1).map((col, index) => ({
      label: col,
      data: valueShares.map((row) => row[col]),
      borderColor: `rgba(${index * 50}, ${index * 30}, ${index * 10}, 1)`,
      fill: false
    }))
  };

  const landHoldingData = {
    labels: landHolding.map((row) => row['State/UT']),
    datasets: Object.keys(landHolding[0] || {}).slice(1).map((col, index) => ({
      label: col,
      data: landHolding.map((row) => row[col]),
      backgroundColor: `rgba(${index * 50}, ${index * 30}, ${index * 10}, 0.6)`
    }))
  };

  const priceRealisationData = {
    labels: priceRealisation.map((row) => row.Crops),
    datasets: Object.keys(priceRealisation[0] || {}).slice(1).map((col, index) => ({
      label: col,
      data: priceRealisation.map((row) => row[col]),
      backgroundColor: `rgba(${index * 50}, ${index * 30}, ${index * 10}, 0.6)`
    }))
  };

  const latestAreaSharesData = {
    labels: areaShares.map((row) => row.Crops),
    datasets: [
      {
        data: areaShares.map((row) => row[areaSharesColumn]),
        backgroundColor: areaShares.map((_, index) => `rgba(${index * 50}, ${index * 30}, ${index * 10}, 0.6)`)
      }
    ]
  };
  return (
    <div className="homeCharts-container">
            <div className="charts-box">
                <h2>{t('homeCharts.historicalGrowthRates.title')}</h2>
                {t('homeCharts.historicalGrowthRates.dataAvailable') && <Line data={growthRatesData} />}
            </div>
            <div className="charts-box">
                <h2>{t('homeCharts.areaSharesOfCropCategories.title')}</h2>
                {t('homeCharts.areaSharesOfCropCategories.dataAvailable') && <Pie data={latestAreaSharesData} />}
            </div>
            <div className="charts-box">
                <h2>{t('homeCharts.areaSharesToGCA.title')}</h2>
                {t('homeCharts.areaSharesToGCA.dataAvailable') && <Bar data={areaSharesData} />}
            </div>
            <div className="charts-box">
                <h2>{t('homeCharts.valueSharesOfCropCategories.title')}</h2>
                {t('homeCharts.valueSharesOfCropCategories.dataAvailable') && <Line data={valueSharesData} />}
            </div>
        </div>
  );
};

export default Homecharts;
