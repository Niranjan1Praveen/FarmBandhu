import React from 'react';
import './Tools.css';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import errorImg from '../../assets/images/icons/exclamation.svg';
import AnalyticalTool from '../analyticalTool/analyticalTool';
import goBackTo from '../../assets/images/icons/less-than.svg'
const Tools = () => {
    const [currentStep, setCurrentStep] = React.useState(1);
    const [dataSubmitted, setDataSubmitted] = React.useState(false);
    const [showError, setShowError] = React.useState(false);
    const [formData, setFormData] = React.useState({
        crop: '',
        state: '',
        area: '',
    });

    const nextStep = (event) => {
        event.preventDefault();
        if (formData.crop) {
            setShowError(false);
            setCurrentStep((prev) => prev + 1);
        } else {
            setShowError(true);
        }
    };

    const prevStep = () => {
        setShowError(false);
        setDataSubmitted(false);
        setFormData({ ...formData, crop: '' });
        setCurrentStep((prev) => prev - 1);
    };

    const handleChange = (input) => (value) => {
        setFormData(
            { 
                ...formData, 
                [input]: input === 'area' ? (/^\d*\.?\d*$/.test(value) ? value : formData.area) : value }
            );
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.area) {
            setShowError(false);
            setDataSubmitted(true);
        } else {
            setShowError(true);
        }
    };

    const crop_options = [
        { label: "Paddy", value: "crop1" },
        { label: "Jowar", value: "crop2" },
        { label: "Wheat", value: "crop3" },
        { label: "Barley", value: "crop4" },
        { label: "Gram", value: "crop5" },
        { label: "Lentil", value: "crop6" },
        { label: "Mustard", value: "crop7" },
        { label: "Bajra", value: "crop8" },
        { label: "Maize", value: "crop9" },
        { label: "Arhar", value: "crop10" },
        { label: "Urad", value: "crop11" },
        { label: "Moong", value: "crop12" },
        { label: "Sugar cane", value: "crop13" },
        { label: "Cotton", value: "crop14" },
    ];

    const state_options = [
        { label: "Andhra Pradesh", value: "andhra_pradesh" },
        { label: "Bihar", value: "bihar" },
        { label: "Chhattisgarh", value: "chhattisgarh" },
        { label: "Goa", value: "goa" },
        { label: "Gujarat", value: "gujarat" },
        { label: "Haryana", value: "haryana" },
        { label: "Himachal Pradesh", value: "himachal_pradesh" },
        { label: "Jammu & Kashmir", value: "jammu_kashmir" },
        { label: "Jharkhand", value: "jharkhand" },
        { label: "Karnataka", value: "karnataka" },
        { label: "Kerala", value: "kerala" },
        { label: "Madhya Pradesh", value: "madhya_pradesh" },
        { label: "Maharashtra", value: "maharashtra" },
        { label: "Odisha", value: "odisha" },
        { label: "Punjab", value: "punjab" },
        { label: "Rajasthan", value: "rajasthan" },
        { label: "Tamil Nadu", value: "tamil_nadu" },
        { label: "Uttar Pradesh", value: "uttar_pradesh" },
        { label: "Uttarakhand", value: "uttarakhand" },
        { label: "West Bengal", value: "west_bengal" },
        { label: "Arunachal Pradesh", value: "arunachal_pradesh" },
        { label: "Assam", value: "assam" },
        { label: "Meghalaya", value: "meghalaya" },
        { label: "Mizoram", value: "mizoram" },
        { label: "Nagaland", value: "nagaland" },
        { label: "Sikkim", value: "sikkim" },
        { label: "Tripura", value: "tripura" },
        { label: "Andaman & Nicobar Islands", value: "andaman_nicobar" },
        { label: "Chandigarh", value: "chandigarh" },
        { label: "Dadar & Nagar Haveli", value: "dadar_nagar_haveli" },
        { label: "Daman & Diu", value: "daman_diu" },
        { label: "Delhi", value: "delhi" },
        { label: "Lakshadweep", value: "lakshadweep" },
        { label: "Puducherry", value: "puducherry" }
    ];

    const span_styles = {
        borderRadius: "100%",
        padding: "12px 20px",
        border: "5px solid rgb(3, 99, 209)",
        textAlign: "center",
    };

    const line_styles = {
        backgroundColor: "rgb(3, 99, 209)"
    };

    return (
        <section id="tools" className="section-p">
            <form className='tools-survey'>
                {currentStep === 1 && (
                    <Link to="/" className="go-back-to">
                        <img src={goBackTo} alt="" className="icon" />
                        go back to home page
                    </Link>
                )}
                <div className="form-container">
                    <h1 className='tools-title'>Fill the below details to receive Price Comparison, Land size Comparison and Crop Performance Analysis tailored to your region's specific conditions.</h1>
                    <div className="tools-menu">
                        {currentStep === 1 ? <span style={span_styles}>1</span> : <span>1</span>}
                        {currentStep === 2 ? <hr className='menu-line' style={line_styles}/> : <hr className='menu-line'/> }
                        {currentStep === 2 ? <span style={span_styles}>2</span> : <span>2</span>}
                    </div>
                    {currentStep === 1 && (
                        <div className="form-step">
                            <label>Select your Crop Type</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>Please select an option to proceed</span>
                                </div>
                            )}
                            <Select options={crop_options} onChange={handleChange('crop')} />
                            <button onClick={nextStep} className="tools-btn">Next</button>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div className="form-step">
                            <label>Select your State</label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>Please select an option to proceed</span>
                                </div>
                            )}
                            <Select options={state_options} onChange={handleChange('state')} />
                            <label>Enter your Farm Land Area <span>(in hectares)</span></label>
                            {showError && (
                                <div className='tools-error'>
                                    <img src={errorImg} alt="error" className='icon'/>
                                    <span>Please select an option to proceed</span>
                                </div>
                            )}
                            <input
                                type="text"
                                onChange={(e) => handleChange('area')(e.target.value)}
                                value={formData.area}
                                placeholder="4.7 and so on"
                            />
                            <div className="tools-btn-box">
                                <button onClick={prevStep} className="tools-btn">Back</button>
                                <button type="submit" className='tools-submit-btn tools-btn' onClick={handleSubmit}>Get Data Now</button>
                            </div>
                            {dataSubmitted && (
                                <AnalyticalTool crop={formData.crop.label} state={formData.state.label} hectares={parseFloat(formData.area)} />
                            )}
                        </div>
                    )}
                </div>
            </form>
        </section>
    );
};

export default Tools;
