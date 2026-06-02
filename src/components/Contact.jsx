import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { useInView } from 'react-intersection-observer';

export const Contact = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [disabled, setDisabled] = useState(false);
    const [alert, setAlert] = useState(null);

    const onSubmit = async (data) => {
        try {
            setDisabled(true);
            await emailjs.send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                { name: data.name, email: data.email, message: data.message },
                process.env.REACT_APP_USER_ID
            );
            setAlert({ type: 'success', message: 'Message sent successfully!' });
            reset();
        } catch (e) {
            console.error(e);
            setAlert({ type: 'error', message: 'Something went wrong. Please try again.' });
        } finally {
            setDisabled(false);
            setTimeout(() => setAlert(null), 5000);
        }
    };

    return (
        <section className="contact" id="contact">
            <div ref={ref} className={`contact__container reveal ${inView ? 'visible' : ''}`}>
                <h2 className="section__title">Contact</h2>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
                    Have a project in mind? Let's talk.
                </p>

                <form className="contact__form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <input
                        className="contact__input"
                        type="text"
                        placeholder="Your name"
                        {...register('name', { required: 'Name is required', maxLength: 50 })}
                    />
                    {errors.name && <span style={{ color: '#ff5050', fontSize: '0.8rem' }}>{errors.name.message}</span>}

                    <input
                        className="contact__input"
                        type="email"
                        placeholder="Your email"
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Invalid email',
                            },
                        })}
                    />
                    {errors.email && <span style={{ color: '#ff5050', fontSize: '0.8rem' }}>{errors.email.message}</span>}

                    <textarea
                        className="contact__textarea"
                        placeholder="Your message"
                        {...register('message', { required: 'Message is required', maxLength: 1000 })}
                    />
                    {errors.message && <span style={{ color: '#ff5050', fontSize: '0.8rem' }}>{errors.message.message}</span>}

                    <button className="contact__submit" type="submit" disabled={disabled}>
                        {disabled ? 'Sending...' : 'Send'}
                    </button>
                </form>

                {alert && (
                    <div className={`contact__alert contact__alert--${alert.type}`}>
                        {alert.message}
                    </div>
                )}

                <div className="contact__socials">
                    <a
                        href="https://www.linkedin.com/in/benmounir/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                        aria-label="LinkedIn"
                    >
                        in
                    </a>
                    <a
                        href="https://github.com/MounirGithub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact__social-link"
                        aria-label="GitHub"
                    >
                        GH
                    </a>
                </div>
            </div>
        </section>
    );
};
