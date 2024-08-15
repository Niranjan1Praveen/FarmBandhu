import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import { transpose, multiply, inv } from 'mathjs';
import Select from 'react-select';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import goBackTo from '../../assets/images/icons/less-than.svg';
import './CropYield.css';

const cropOptions = [
  { value: 'Cassava', label: 'Cassava' },
  { value: 'Maize', label: 'Maize' },
  { value: 'Potatoes', label: 'Potatoes' },
  { value: 'Rice, paddy', label: 'Rice, paddy' },
  { value: 'Sorghum', label: 'Sorghum' },
  { value: 'Soybeans', label: 'Soybeans' },
  { value: 'Sweet potatoes', label: 'Sweet potatoes' },
  { value: 'Wheat', label: 'Wheat' },
];

const linearRegression = (data) => {
  const X = data.map(row => [1, row.average_rain_fall_mm_per_year, row.pesticides_tonnes, row.avg_temp]);
  const y = data.map(row => row.hg_ha_yield);

  const X_transpose = transpose(X);
  const X_transpose_X = multiply(X_transpose, X);
  const X_transpose_X_inv = inv(X_transpose_X);
  const X_transpose_y = multiply(X_transpose, y.map(val => [val]));

  const coefficients = multiply(X_transpose_X_inv, X_transpose_y);
  return coefficients.flat();
};

const YieldPredictor = () => {
  const [crop, setCrop] = useState(null);
  const [rainfall, setRainfall] = useState('');
  const [pesticides, setPesticides] = useState('');
  const [temp, setTemp] = useState('');
  const [yieldPrediction, setYieldPrediction] = useState(null);
  const [model, setModel] = useState(null);

  const loadCsvData = async () => {
    const data = await d3.csv('/data/cropYieldPrediction/yield_df_updated.csv');
    return data;
  };

  const preprocessData = (data) => {
    return data.map(row => ({
      average_rain_fall_mm_per_year: +row.average_rain_fall_mm_per_year,
      pesticides_tonnes: +row.pesticides_tonnes,
      avg_temp: +row.avg_temp,
      hg_ha_yield: +row["hg/ha_yield"]
    }));
  };

  const trainModel = async () => {
    const data = await loadCsvData();
    const processedData = preprocessData(data);
    const model = linearRegression(processedData);
    setModel(model);
  };

  const handlePredict = () => {
    if (!model) {
      alert('Model not trained yet!');
      return;
    }

    const features = [1, parseFloat(rainfall), parseFloat(pesticides), parseFloat(temp)];
    const prediction = multiply(features, model);
    setYieldPrediction(prediction);
  };

  useEffect(() => {
    trainModel();
  }, []);

  const { t } = useTranslation('cropYield');

  return (
    <div className='crop-yield section-p'>
      <Link to="/" className="go-back-to">
        <img src={goBackTo} alt="" className="icon" />
        {t('form.step1.backLinkText')}
      </Link>
      <h1>{t('form.yieldPrediction.title')}</h1>
      <span className='analytical-note-text'>Note: Farmers may struggle with certain inputs needed for analysis. We recommend consulting local district officers or Krishi Vikas Kendra (KVK) experts for assistance.</span>
      <form>
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
          {t('form.yieldPrediction.fields.rainfall')}
          <input type="number" value={rainfall} onChange={(e) => setRainfall(e.target.value)} />
        </label>
        <br />
        <label>
          {t('form.yieldPrediction.fields.pesticides')}
          <input type="number" value={pesticides} onChange={(e) => setPesticides(e.target.value)} />
        </label>
        <br />
        <label>
          {t('form.yieldPrediction.fields.temperature')}
          <input type="number" value={temp} onChange={(e) => setTemp(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handlePredict} className='crop-yield-btn button'>
          {t('form.yieldPrediction.buttonText')}
        </button>
      </form>
      {yieldPrediction !== null && (
        <div className='result'>
          <h2>
            {t('form.yieldPrediction.result.title')}
            {yieldPrediction.toFixed(2)} hg/ha
          </h2>
          <p>
            For each hectare of land, you can expect to harvest this amount of the crop. 
          </p>
        </div>
      )}
    </div>
  );
};

export default YieldPredictor;
