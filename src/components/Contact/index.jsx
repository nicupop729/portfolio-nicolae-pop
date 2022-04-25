import { useEffect, useState, useRef } from 'react';
import Loader from 'react-loaders';
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [inputs, setInputs] = useState({
    user_name: '', user_email: '', subject: '', message: '',
  });
  const [status, setStatus] = useState(null);
  const form = useRef();

  useEffect(() => {
    const effect = () => setTimeout(() => setLetterClass('text-animate-hover'), 4000);
    effect();
  }, []);

  const timer = () => {
    const timer = setTimeout(() => {
      setStatus(null);
    }, 7000);
    return () => clearTimeout(timer);
  };

  const resetForm = () => {
    setInputs({
      user_name: '',
      user_email: '',
      subject: '',
      message: '',
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_x9bl2zd',
        'contact_form',
        form.current,
        'WygAtZ1O29rbws5mi',
      )
      .then(
        (response) => {
          resetForm();
          setStatus(response.status);
          setInputs({
            user_name: '', user_email: '', subject: '', message: '',
          });
          timer();
        },
        (response) => {
          resetForm();
          setStatus(response.status);
          timer();
        },
      );
  };

  // const newLocal = ' ';

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in freelance opportunities - especially ambitious or
            large projects. However, if you have other request or question,
            don&apos;t hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input
                    placeholder="Name"
                    type="text"
                    name="user_name"
                    onChange={(e) => setInputs({ ...inputs, user_name: e.target.value })}
                    value={inputs.user_name}
                    required
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="user_email"
                    onChange={(e) => setInputs({ ...inputs, user_email: e.target.value })}
                    value={inputs.user_email}
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    onChange={(e) => setInputs({ ...inputs, subject: e.target.value })}
                    value={inputs.subject}
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    value={inputs.message}
                    onChange={(e) => setInputs({ ...inputs, message: e.target.value })}
                    required
                  />
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
            {status === 200 && (
              <p
                style={{
                  color: 'green',
                  backgroundColor: '#dcedc8',
                  padding: '0.5rem',
                  borderRadius: '5px',
                }}
              >
                Message sent successfully!
              </p>
            )}
            {status !== 200 && status !== null && (
              <p
                style={{
                  color: 'red',
                  backgroundColor: '#fefee2',
                  padding: '0.5rem',
                  borderRadius: '5px',
                }}
              >
                Failed to send the message, please try again!
              </p>
            )}
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
