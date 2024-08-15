import React from "react";
import "./ContactUsForm.css";
import Vaibhav from '../../assets/images/users/vaibhav.jpeg';
import Niranjan from '../../assets/images/users/niranjan.jpeg';
import Debshata from '../../assets/images/users/debshata.jpeg';
import Abhishek from '../../assets/images/users/abhishek.jpeg';

import { useTranslation } from "react-i18next";

export default function ContactUsForm() {
    const { t } = useTranslation('contactUs');

    return (
        <section id="contact-form" className="section-p">
            <form action="" name="contact-form" id="form">
                <span>{t('form.leaveMessage')}</span>
                <h2>{t('form.title')}</h2>
                <input type="text" name="name" id="name" placeholder={t('form.fields.name')} required />
                <input type="email" name="email" id="email" placeholder={t('form.fields.email')} required />
                <input type="text" name="subject" id="subject" placeholder={t('form.fields.subject')} required />
                <textarea name="message" id="area-msg" cols="30" rows="10" placeholder={t('form.fields.message')} required></textarea>
                <button type="submit">{t('form.submitButton')}</button>
            </form>
            
            <div className="members">
                <h2>{t('members.sectionTitle')}</h2>
                <div className="people">
                    <img src={Vaibhav} alt="vaibhav img" />
                    <p><span>{t('members.people.0.name')}</span>{t('members.people.0.phone')} <br/> {t('members.people.0.email')}</p>
                </div>
                <div className="people">
                    <img src={Niranjan} alt="niranjan img" />
                    <p><span>{t('members.people.1.name')}</span>{t('members.people.1.phone')}<br/> {t('members.people.1.email')}</p>
                </div>
                <div className="people">
                    <img src={Debshata} alt="debshata img" />
                    <p><span>{t('members.people.2.name')}</span>{t('members.people.2.phone')} <br/> {t('members.people.2.email')}</p>
                </div>
                <div className="people">
                    <img src={Abhishek} alt="abhishek img" />
                    <p><span>{t('members.people.3.name')}</span>{t('members.people.3.phone')} <br/> {t('members.people.3.email')}</p>
                </div>
            </div>
        </section>
    );
}
