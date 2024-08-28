import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import cropOptions from '../../data/yieldCropOptions';
import './CropYieldWeight.css';
import locationOptions from '../../data/yieldLocationOptions';

const seasonOptions = [
  { value: 'Kharif', label: 'Kharif' },
  { value: 'Rabi', label: 'Rabi' },
  { value: 'Whole Year', label: 'Whole Year' },
];

const years = Array.from({ length: 16 }, (_, i) => ({
  value: 2005 + i,
  label: 2005 + i
}));

const Cropyieldweight = ({ area, production }) => {
  const { t } = useTranslation('cropYield');
  const [crop, setCrop] = useState(null);
  const [location, setLocation] = useState(null);
  const [season, setSeason] = useState(null);
  const [year, setYear] = useState('');
  const [weightedYieldPrediction, setWeightedYieldPrediction] = useState(null);
  const [data, setData] = useState([]);

  // Load CSV data using D3
  const loadCsvData = async () => {
    const data = await d3.csv('/data/cropYieldPrediction/crop_yield.csv');
    return data;
  };

  const preprocessData = (data) => {
    return data.map(row => ({
      Crop: row.Crop,
      Crop_Year: +row.Crop_Year,
      Season: row.Season.trim(),
      State: row.State,
      Area: +row.Area,
      Production: +row.Production,
      Yield: +row.Yield
    }));
  };

  const calculateWeightedYield = (userInputs, data) => {
    let totalWeight = 0;
    let weightedYieldSum = 0;

    data.forEach(row => {
      if (row.Crop !== userInputs.crop || 
          row.State !== userInputs.location || 
          row.Season !== userInputs.season) return;

      const distance = 
        Math.abs(row.Crop_Year - userInputs.year) +
        Math.abs(row.Area - userInputs.area) +
        Math.abs(row.Production - userInputs.production);

      const weight = 1 / (distance + 1); 
      totalWeight += weight;
      weightedYieldSum += row.Yield * weight;
    });

    return totalWeight > 0 ? (weightedYieldSum / totalWeight) : null;
  };

  const handlePredict = () => {
    if (!crop || !location || !season || !year || !area || !production) {
      alert('Please fill in all fields!');
      return;
    }

    const userInputs = {
      crop: crop.value,
      location: location.value,
      season: season.value,
      year: parseInt(year),
      area: parseFloat(area),
      production: parseFloat(production)
    };

    const estimatedWeightedYield = calculateWeightedYield(userInputs, data);

    if (estimatedWeightedYield === null) {
      setWeightedYieldPrediction('No data available for the selected criteria.');
    } else {
      setWeightedYieldPrediction(`${estimatedWeightedYield.toFixed(2)} hg/ha`);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const csvData = await loadCsvData();
      const processedData = preprocessData(csvData);
      setData(processedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <form className='crop-yield-weight'>
        <label>
          {t('form.yieldPrediction.fields.crop')}
          <Select
            value={crop}
            onChange={(selectedOption) => setCrop(selectedOption)}
            options={cropOptions}
          />
        </label>
        <br />
        <label>
          {t('form.yieldPrediction.fields.location')}
          <Select
            value={location}
            onChange={(selectedOption) => setLocation(selectedOption)}
            options={locationOptions}
          />
        </label>
        <br />
        <label>
          {t('form.yieldPrediction.fields.season')}
          <Select
            value={season}
            onChange={(selectedOption) => setSeason(selectedOption)}
            options={seasonOptions}
          />
        </label>
        <br />
        <label>
          {t('form.yieldPrediction.fields.year')}
          <Select
            value={year}
            onChange={(selectedOption) => setYear(selectedOption ? selectedOption.value : '')}
            options={years}
          />
        </label>
        <br />
        <button type="button" onClick={handlePredict} className='crop-yield-btn'>
          {t('form.yieldPrediction.buttonText')}
        </button>
        {weightedYieldPrediction && (
          <h2 className='result'>Weighted Yield Prediction: {weightedYieldPrediction}</h2>
        )}
      </form>
      
    </div>
  );
};

export default Cropyieldweight;
