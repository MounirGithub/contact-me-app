import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css'; // Assurez-vous de créer ce fichier pour les styles
import Mypdf from '../assets/file/Mounir.online.pdf';

export const Popup = ({ show, onClose }) => {
    const [formData, setFormData] = useState({ name: '', email: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name && formData.email) {
            emailjs.send(process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_USER_ID)
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    setFormSubmitted(true);
                    const link = document.createElement('a');
                    link.href = Mypdf;
                    link.download = 'Mounir_Online_CV.pdf';
                    link.click();
                }, (err) => {
                    console.log('FAILED...', err);
                });
        }
    };

    if (!show) {
        return null;
    }

    return (
        <div className="popup-overlay">
            <div className="popup-content">
                {!formSubmitted ? (
                    <form onSubmit={handleSubmit} className="popup-form" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <h2 style={{ color: 'black' }}>Download CV</h2>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="popup-input"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="popup-input"
                        />
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <button type="submit" className="btn btn-primary popup-submit">Submit</button>
                            <button type="button" className="btn btn-secondary popup-cancel" onClick={onClose}>Cancel</button>
                        </div>
                    </form>
                ) : (
                    <div className="popup-success">
                        <h2>Success!</h2>
                        <p>Thank you! CV is being downloaded.</p>
                        <button className="btn btn-secondary" onClick={onClose}>Close</button>
                    </div>
                )}
            </div>
        </div>
    );
};
