import React from "react"
import "./FeaturedPost.css"
import pollChart from '../../assets/images/icons/chart-simple.svg'
import Homecharts from "../homeCharts/homeCharts"

export default function FeaturedPost(){
    return(
        <section id="fePost-root" className="section-p">
            <div className="fePost-title">
                <h1>Important Data for Farmers</h1>
            </div>
            
            <div className="authorDetails">
                <img src={pollChart} alt="" className="icon"/>
                <p><a href="">Featured Poll</a>on Tue, Jun 27, 2024</p>
            </div>
            
            <main className="fePost-container">
                {/* First Container */}
                <div id="polls-section">
                    <form className="fe-polls">
                        <div className="poll">
                            <h4>What Feature Do You Find Most Valuable in Farm Bandhu?</h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Price Comparison Tool:Compare crop prices from various sources to get the best rates.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Market Insights:Understand land distribution and the competitive landscape.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Historical Performance Analysis:Track and analyze crop performance over the years.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">User-Friendly Interface:Access data easily with our intuitive platform.</label>
                            </div>
                            
                            <div className="poll-votes">
                                <small>Total Votes: 24</small>
                                <small>5 days left</small>
                                <button className="poll-btn">Vote now</button>
                            </div>
                        </div>
                    </form>
                    <form className="fe-polls">
                        
                        <div className="poll">
                            <h4>How Has Farm Bandhu Helped You in Your Farming Decisions?</h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Improved Profit Margins:By selling crops at the best possible prices.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Better Market Understanding:Through insights into land distribution and competition.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Informed Crop Planning:Using historical performance data to plan future cycles.</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">Enhanced Overall Productivity:By utilizing advanced data analytics and predictions.</label>
                            </div>
                            <div className="poll-votes">
                                <small>Total Votes: 24</small>
                                <small>5 days left</small>
                                <button className="poll-btn">Vote now</button>
                            </div>
                        </div>

                    </form>
                </div>
                
                {/* Second Container */}
                <div className="fePost-content">
                    <h4>Farm Bandhu: Empowering Farmers, Transforming Agriculture</h4>
                    <p>Empowering Farmers Across India:From small farms to large fields, Farm Bandhu is here to support every farmer's journey.</p>
                    <p>"Life on a farm is a school of patience. You can't hurry crops or make an ox in a day or two." <i className="quote-author">-Henri Alain</i></p>
                    <p>Welcome to FarmBandhu, your go-to platform for region-specific insights and data-driven farming solutions. </p>
                    <p>Explore detailed local market trends, crop performance, and land utilization analyses.</p>
                    <p>Empower your farming decisions and maximize profitability with FarmBandhu's tailored data insights.</p>
                    <h3>Some Important Illustrations for you!</h3>
                </div>

                <Homecharts/>
            </main>
        </section>
    )
}