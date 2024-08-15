import React from 'react';
import './Tools.css'
import ToolsData from '../../data/ToolsData'
import { useNavigate } from 'react-router-dom';

const Tools = () => {

    const navigate = useNavigate();
    const handleNavigate = (path) => {
        navigate(path);
    };
    const ToolBoxes = ToolsData.map((data, id)=>{
        return (
                <div className="tools-box" key={id} onClick={() => handleNavigate(data.path)} style={data.styles}>
                    {data.comingSoon && (
                    <div className='tools-error'>
                        Coming Soon
                    </div>
                    )}
                    <h2 className="title">{data.title}</h2>
                    <small className='sub-title'>{data.subTitle}</small>
                    <span className='output'>{data.output}</span>
                </div>
        )
    })
    return (
        <section id='tools-container' className='section-p'>
            {ToolBoxes}
        </section>
    );
}

export default Tools;
