import React, { useState } from 'react';
import * as d3 from 'd3';
import './CropRecommendation.css';
import { Link } from 'react-router-dom';
import goBackTo from '../../assets/images/icons/less-than.svg';
import { useTranslation } from "react-i18next";
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';
import Cropyieldweight from '../CropYieldWeight/CropYieldWeight';

// Register Chart.js components
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
// BarChart Component
const BarChart = ({ data }) => {
    // Labels corresponding to each parameter
    const labels = ['N', 'P', 'K', 'Temperature', 'Humidity', 'pH', 'Rainfall'];
    const values = [
        data.N,
        data.P,
        data.K,
        data.temperature,
        data.humidity,
        data.ph,
        data.rainfall
    ];

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Parameters',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',   // Light Red
                    'rgba(54, 162, 235, 0.5)',   // Light Blue
                    'rgba(255, 206, 86, 0.5)',   // Light Yellow
                    'rgba(75, 192, 192, 0.5)',   // Light Teal
                    'rgba(153, 102, 255, 0.5)',  // Light Purple
                    'rgba(255, 159, 64, 0.5)',   // Light Orange
                    'rgba(34, 202, 75, 0.5)'     // Light Green
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',     // Red
                    'rgba(54, 162, 235, 1)',     // Blue
                    'rgba(255, 206, 86, 1)',     // Yellow
                    'rgba(75, 192, 192, 1)',     // Teal
                    'rgba(153, 102, 255, 1)',    // Purple
                    'rgba(255, 159, 64, 1)',     // Orange
                    'rgba(34, 202, 75, 1)'       // Green
                ],
                borderWidth: 2
            }
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            title: { display: true, text: 'Average Feature Values per Crop Type' },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Crop Growth Parameters'
                },
                grid: {
                    display: false
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Paramter Values'
                },
                beginAtZero: true
            }
        },
        barPercentage: 0.5, // Adjust bar width
        categoryPercentage: 0.5 // Adjust category spacing
    };

    return <Bar data={chartData} options={options} />;
};

// CropRecommendation Component
const CropRecommendation = () => {
    const [estimatedYield, setEstimatedYield] = useState();
    const { t } = useTranslation('cropRecomm');
    const [nitrogen, setNitrogen] = useState('');
    const [phosphorus, setPhosphorus] = useState('');
    const [potassium, setPotassium] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [ph, setPh] = useState('');
    const [rainfall, setRainfall] = useState('');
    const [area, setArea] = useState('');
    const [production, setProduction] = useState('');
    const [result, setResult] = useState('');
    const [chartData, setChartData] = useState(null);
    const [currentStep, setCurrentStep] = useState(1);
    const [weightedAnalysis, setWeightedAnalysis] = useState(false);
    const cropDict = {
        rice: "Rice",
        maize: "Maize",
        jute: "Jute",
        cotton: "Cotton",
        coconut: "Coconut",
        papaya: "Papaya",
        orange: "Orange",
        apple: "Apple",
        muskmelon: "Muskmelon",
        watermelon: "Watermelon",
        grapes: "Grapes",
        mango: "Mango",
        banana: "Banana",
        pomegranate: "Pomegranate",
        lentil: "Lentil",
        blackgram: "Blackgram",
        mungbean: "Mungbean",
        mothbeans: "Mothbeans",
        pigeonpeas: "Pigeonpeas",
        kidneybeans: "Kidneybeans",
        chickpea: "Chickpea",
        coffee: "Coffee"
    };

    const handlePredict = async (e) => {
        e.preventDefault();
        
        const inputData = {
            Nitrogen: +nitrogen,
            Phosphorus: +phosphorus,
            Potassium: +potassium,
            Temperature: +temperature,
            Humidity: +humidity,
            Ph: +ph,
            Rainfall: +rainfall
        };

        if(!nitrogen || !phosphorus || !potassium || !temperature || !humidity || !ph || !rainfall){
            alert("Please fill all fields!");
        }
        else{
            try {
                const data = await d3.csv('/data/cropRecommendation/Crop_recommendation.csv');
    
                // Find closest crop
                const distances = data.map(d => {
                    const distance = Math.sqrt(
                        Math.pow(d.N - inputData.Nitrogen, 2) +
                        Math.pow(d.P - inputData.Phosphorus, 2) +
                        Math.pow(d.K - inputData.Potassium, 2) +
                        Math.pow(d.temperature - inputData.Temperature, 2) +
                        Math.pow(d.humidity - inputData.Humidity, 2) +
                        Math.pow(d.ph - inputData.Ph, 2) +
                        Math.pow(d.rainfall - inputData.Rainfall, 2)
                    );
                    return { ...d, distance };
                });
    
                const closestCrop = distances.reduce((min, d) => d.distance < min.distance ? d : min);
                setResult(`${cropDict[closestCrop.label]} is the best crop to be cultivated in your farmland.`);
    
                // Prepare data for BarChart
                const featureData = {
                    N: +closestCrop.N,
                    P: +closestCrop.P,
                    K: +closestCrop.K,
                    temperature: +closestCrop.temperature,
                    humidity: +closestCrop.humidity,
                    ph: +closestCrop.ph,
                    rainfall: +closestCrop.rainfall
                };
    
                setChartData(featureData);
            } catch (error) {
                console.error('Error loading or processing data:', error);
                setResult('Error processing the crop recommendation.');
            }
        }
        
    };
    const predictYield = (e) => {
        e.preventDefault();
    
        const numericArea = parseFloat(area);
        const numericProduction = parseFloat(production);
    
        if (isNaN(numericArea) || isNaN(numericProduction) || numericArea <= 0) {
            alert("Please enter valid numerical values for area and production!");
        } else {
            setEstimatedYield((numericProduction / numericArea).toFixed(2));  // Optional: limit to two decimal places
        }
    };
    
    const span_styles = {
        borderRadius: "100%",
        padding: "12px 20px",
        border: "5px solid rgb(3, 99, 209)",
        textAlign: "center",
    };

    const line_styles = {
        backgroundColor: "rgb(3, 99, 209)"
    };
    const nextStep = (event) => {
        event.preventDefault();
        setCurrentStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setCurrentStep((prev) => prev - 1);
    };
    return (
        <div id='crop-recomm-container' className='section-p'>
            <Link to="/" className="go-back-to">
                <img src={goBackTo} alt="" className="icon" />
                {t('cropRecommendation.backLinkText')}
            </Link>
            <div className="tools-menu">
                {currentStep === 1 ? <span style={span_styles}>{1}</span> : <span>1</span>}
                {currentStep === 2 ? <hr className='menu-line' style={line_styles}/> : <hr className='menu-line'/> }
                {currentStep === 2 ? <span style={span_styles}>{2}</span> : <span>2</span>}
            </div>
            {currentStep === 1 && <form className="crop-recomm">
                <h1 className='title'>{t('cropRecommendation.title')}</h1>
                <span className='analytical-note-text'>Note: Farmers may struggle with certain inputs needed for analysis. We recommend consulting local district officers or Krishi Vikas Kendra (KVK) experts for assistance.</span>
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.nitrogen')}
                    value={nitrogen}
                    onChange={e => setNitrogen(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.phosphorus')}
                    value={phosphorus}
                    onChange={e => setPhosphorus(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.potassium')}
                    value={potassium}
                    onChange={e => setPotassium(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.temperature')}
                    value={temperature}
                    onChange={e => setTemperature(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.humidity')}
                    value={humidity}
                    onChange={e => setHumidity(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.ph')}
                    value={ph}
                    onChange={e => setPh(e.target.value)}
                    required
                    min={1}
                    max={14}
                />
                <input
                    type="number"
                    placeholder={t('cropRecommendation.placeholders.rainfall')}
                    value={rainfall}
                    onChange={e => setRainfall(e.target.value)}
                    required
                />
                <div className="tools-btn-box">
                    <button onClick={handlePredict} className='crop-recomm-btn button' type='submit'>
                        {t('cropRecommendation.buttonText')}
                    </button>
                    <button onClick={nextStep} className="tools-btn">Proceed to Yield Calculator</button>
                </div>
                
                {result && <h2 className='result'>{result}</h2>}
                {chartData && <BarChart data={chartData} />}
            </form>
            }
            {currentStep === 2 && <form className="crop-yield crop-recomm">
                <h1>Yield Calculator</h1>
                <span className='analytical-note-text'>Note: Farmers may struggle with certain inputs needed for analysis. We recommend consulting local district officers or Krishi Vikas Kendra (KVK) experts for assistance.</span>

                <input
                    type="number"
                    placeholder='Area'
                    value={area}
                    onChange={e => setArea(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder='Production'
                    value={production}
                    onChange={e => setProduction(e.target.value)}
                    required
                />
                <div className="tools-btn-box">
                    <button className='crop-recomm-btn button' onClick={predictYield}>
                        Predict Yield
                    </button>
                    <button onClick={prevStep} className="tools-btn">Go back</button>
                </div>
                {estimatedYield && <h2 className='result'>Estimated Yield: {estimatedYield} hg/ha</h2>}
                <span className='weighted-analysis-link' onClick={()=>setWeightedAnalysis(true)}>Do you wish to do a weighted analysis of the yield?</span>
            </form> 
        }
        {weightedAnalysis && 
            <Cropyieldweight area={area} production={production} />
        }
        </div>
    );
};

export default CropRecommendation;