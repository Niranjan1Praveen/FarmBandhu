import React from "react";
import './AboutUs.css';
import { useTranslation } from "react-i18next";

export default function AboutUs() {
    const { t } = useTranslation('aboutUs');

    return (
        <section id="about-us-container" className="section-p">
            <h1 className="welcome-title">{t('aboutUs.sectionTitle')}</h1>
            <div className="group">
                <p className="content">{t('aboutUs.introduction')}</p>
                <p className="content">{t('aboutUs.dedication')}</p>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.whoWeAre.title')}</h1>
                <p className="content">{t('aboutUs.whoWeAre.description.0')}</p>
                <p className="content">{t('aboutUs.whoWeAre.description.1')}</p>
                <p className="content">{t('aboutUs.whoWeAre.description.2')}</p>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.ourVision.title')}</h1>
                <p className="content">{t('aboutUs.ourVision.description.0')}</p>
                <p className="content">{t('aboutUs.ourVision.description.1')}</p>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.ourMission.title')}</h1>
                <p className="content">{t('aboutUs.ourMission.description.0')}</p>
                <p className="content">{t('aboutUs.ourMission.description.1')}</p>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.whatWeOffer.title')}</h1>
                <ol>
                    <li><span>{t('aboutUs.whatWeOffer.offerings.0.tool')}</span>: {t('aboutUs.whatWeOffer.offerings.0.description')}</li>
                    <li><span>{t('aboutUs.whatWeOffer.offerings.1.tool')}</span>: {t('aboutUs.whatWeOffer.offerings.1.description')}</li>
                    <li><span>{t('aboutUs.whatWeOffer.offerings.2.tool')}</span>: {t('aboutUs.whatWeOffer.offerings.2.description')}</li>
                </ol>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.ourCommitment.title')}</h1>
                <p className="content">{t('aboutUs.ourCommitment.description.0')}</p>
                <p className="content">{t('aboutUs.ourCommitment.description.1')}</p>
            </div>

            <div className="group">
                <h1 className="title">{t('aboutUs.joinUs.title')}</h1>
                <p className="content">{t('aboutUs.joinUs.description.0')}</p>
                <p className="content">{t('aboutUs.joinUs.description.1')}</p>
            </div>
        </section>
    );
}
