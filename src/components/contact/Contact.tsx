import React from 'react';
import './Contact.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGitAlt } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contact: React.FC = () => {
    return (
        <section id="contact">            
            <h2 className='sectionHeader'>📞 Contact</h2>
            <div className='flex-container'>
                <div className='flex-item left'> 
                    <h3>Let's connect</h3>
                    <span> Thank you for visiting. If you have any questions, feedback, or would like to explore potential collaboration opportunities, I’d be delighted to hear from you. Please feel free to reach out using the contact details below or simply fill out the form to send a message directly.</span>
                    <h4> <a href='tel:+917004889412' ><FontAwesomeIcon icon={faPhone} size="1x" color='#042b4aff'/> Call Me +91 7004889412</a></h4>
                    <h4> <a href='mailto:ravikumarrana66@gmail.com?subject=Inquiry&body=Hi Ravi, I saw your portfolio..."' ><FontAwesomeIcon icon={faEnvelope} size="1x" color='#042b4aff'/> ravikumarrana66@gmail.com</a></h4>
                    <h4><a href='https://www.linkedin.com/in/ravi-kumar-rana0795/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="1x" color='#042b4aff'/> linkedIn </a></h4>
                    <h4><FontAwesomeIcon icon={faGitAlt} size="1x" color='#042b4aff'/> gitHub</h4>
                </div>
                <div className='flex-item right form'>
                    <div className='inputGroup'>
                        <label htmlFor='name'>Name</label>
                        <input type='text' id='name' placeholder='Your Name Please'/>
                    </div>
                    <div className='inputGroup'>
                        <label  htmlFor='email'>Email</label>
                        <input type='text' id='email' placeholder='Your Email Please'/>
                    </div>
                    <div className='inputGroup'>
                        <label  htmlFor='message'>Message</label>
                        <textarea id='message' placeholder='Your Message Please' rows={5}/>
                    </div>
                    <div>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Contact;