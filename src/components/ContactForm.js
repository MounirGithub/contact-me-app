import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

export const ContactForm = ({ firstItemRef }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    try {
      setDisabled(true);
      const templateParams = { name, email, subject, message };
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      setDisabled(false);
      reset();
    }
  };

  return (
    <Container className='ContactForm d-flex justify-content-center' ref={firstItemRef} >
      <Row className='justify-content-center'>
        <Col md={30}>
          <h2 className='text-center mb-4'>Contact me</h2>
          <Form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Row className='mb-3'>
              <Col md={6}>
                <Form.Group controlId='formName'>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your name'
                    {...register('name', {
                      required: 'Please enter your name',
                      maxLength: {
                        value: 30,
                        message: 'Please use 30 characters or less'
                      }
                    })}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.name?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId='formEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter your email'
                    {...register('email', {
                      required: 'Please enter a valid email address',
                      pattern: {
                        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type='invalid'>
                    {errors.email?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Form.Group controlId='formSubject' className='mb-3'>
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter subject'
                {...register('subject', {
                  required: 'Please enter a subject',
                  maxLength: {
                    value: 75,
                    message: 'Subject cannot exceed 75 characters'
                  }
                })}
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.subject?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId='formMessage' className='mb-3'>
              <Form.Label>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={3}
                placeholder='Enter your message'
                {...register('message', {
                  required: 'Please enter a message'
                })}
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type='invalid'>
                {errors.message?.message}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant='primary' type='submit' disabled={disabled}>
              Submit
            </Button>
          </Form>
          {alertInfo.display && (
            <Alert
              variant={alertInfo.type}
              className='mt-4'
              onClose={() => setAlertInfo({ display: false, message: '', type: '' })}
              dismissible
            >
              {alertInfo.message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
};
