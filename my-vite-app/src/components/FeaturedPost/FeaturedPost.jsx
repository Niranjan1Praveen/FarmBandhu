import React from "react";
import "./FeaturedPost.css";
import pollChart from '../../assets/images/icons/chart-simple.svg';
import Homecharts from "../homeCharts/homeCharts";
import { useTranslation } from "react-i18next";

export default function FeaturedPost() {
    const { t } = useTranslation('featuredPost');

    return (
        <section id="fePost-root" className="section-p">
            <div className="fePost-title">
                <h1>{t('section.fePost-root.title')}</h1>
            </div>
            
            <div className="authorDetails">
                <img src={pollChart} alt="" className="icon"/>
                <p>
                    <a href="">{t('section.fePost-root.authorDetails.authorLink')}</a>
                    on {t('section.fePost-root.authorDetails.date')}
                </p>
            </div>
            
            <main className="fePost-container">
                {/* First Container */}
                <div id="polls-section">
                    <form className="fe-polls">
                        <div className="poll">
                            <h4>{t('section.fePost-root.pollsSection.poll1.title')}</h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll1.options.0')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll1.options.1')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll1.options.2')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll1.options.3')}</label>
                            </div>
                            <div className="poll-votes">
                                <small>{`Total Votes: ${t('section.fePost-root.pollsSection.poll1.totalVotes')}`}</small>
                                <small>{t('section.fePost-root.pollsSection.poll1.daysLeft')}</small>
                                <button className="poll-btn">{t('section.fePost-root.pollsSection.poll1.voteButtonText')}</button>
                            </div>
                        </div>
                    </form>
                    <form className="fe-polls">
                        <div className="poll">
                            <h4>{t('section.fePost-root.pollsSection.poll2.title')}</h4>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll2.options.0')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll2.options.1')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll2.options.2')}</label>
                            </div>
                            <div className="group">
                                <input type="checkbox" name="" id="" />
                                <label htmlFor="">{t('section.fePost-root.pollsSection.poll2.options.3')}</label>
                            </div>
                            <div className="poll-votes">
                                <small>{`Total Votes: ${t('section.fePost-root.pollsSection.poll2.totalVotes')}`}</small>
                                <small>{t('section.fePost-root.pollsSection.poll2.daysLeft')}</small>
                                <button className="poll-btn">{t('section.fePost-root.pollsSection.poll2.voteButtonText')}</button>
                            </div>
                        </div>
                    </form>
                </div>
                
                {/* Second Container */}
                <div className="fePost-content">
                    <h4>{t('section.fePost-root.postContent.title')}</h4>
                    <p>{t('section.fePost-root.postContent.content.0')}</p>
                    <p>{t('section.fePost-root.postContent.content.1')}</p>
                    <p>{t('section.fePost-root.postContent.content.2')}</p>
                    <p>{t('section.fePost-root.postContent.content.3')}</p>
                    <p>{t('section.fePost-root.postContent.content.4')}</p>
                    <h3>{t('section.fePost-root.postContent.illustrationsTitle')}</h3>
                </div>
                <Homecharts/>
            </main>
        </section>
    );
}
