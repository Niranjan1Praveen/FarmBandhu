import React from 'react';
import './FilterBlock.css'
import searchIcon from '../../assets/images/icons/search.svg'

const Filterblock = ({search, getSelectedVal, getInputVal}) => {
    return (
        <section id='filterBlock' className='section-p'>
                <select name="categories" id="categories" onChange={getSelectedVal}>
                    <option value="">All Categories</option>
                    <option value="blogs">blogs</option>
                    <option value="subsidies">subsidies</option>
                </select>
                <form>
                    <input type="text" placeholder='Search for blogs,subsidies,...' onChange={getInputVal} onKeyUp={search}/>
                    <button>
                        <img src={searchIcon} alt="search blogs button" />
                    </button>
                </form>
        </section>
    );
}

export default Filterblock;
