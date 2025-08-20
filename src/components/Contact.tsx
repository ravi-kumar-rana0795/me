import React, { type FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';

const Contact: React.FC = () => {

    const onSubmitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    }
    return (
        <section id="contact" className="flex-row px-5 py-10 md:px-20 py-10 ">
            <div className="flex-row"> <h2 className='sectionHeader'>📞 Contact</h2></div>
            <div className='flex flex-col md:flex-row gap-4  py-10 mt-5'>
                <div className='w-full md:w-[50%] '>
                    <h3 className='font-bold'>Let's connect</h3>
                    <div className='break-words whitespace-normal text-md'> Thank you for visiting. If you have any questions, feedback, or would like to explore potential collaboration opportunities, I’d be delighted to hear from you. Please feel free to reach out using the contact details below or simply fill out the form to send a message directly.</div>
                    <h4 className='font-bold mt-3'> <a href='tel:+917004889412' ><FontAwesomeIcon icon={faPhone} size="1x" /> Call Me +91 7004889412</a></h4>
                    <h4 className='font-bold mt-3'> <a href='mailto:ravikumarrana66@gmail.com?subject=Inquiry&body=Hi Ravi, I saw your portfolio..."' ><FontAwesomeIcon icon={faEnvelope} size="1x"  /> ravikumarrana66@gmail.com</a></h4>
                    <h4 className='font-bold mt-3'><a href='https://www.linkedin.com/in/ravi-kumar-rana0795/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="1x"  /> linkedIn </a></h4>
                    <h4 className='font-bold mt-3'><a href='https://www.linkedin.com/in/ravi-kumar-rana0795/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="1x"  /> Facebook </a></h4>
                    {/* <h4 className='font-bold mt-3'><FontAwesomeIcon icon={faGitAlt} size="1x" color='#042b4aff' /> gitHub</h4> */}
                </div>
                <div className='w-full md:w-[50%] rounded-lg shadow-md p-4 mt-4 border border-[var(--primary-color)]'>
                        <form className="w-full max-w p-6 rounded-xl" onSubmit={onSubmitHandler}>
                            <div>
                                <label className="block font-semibold text-white mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Name Please"
                                    className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-black-600"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-white mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your Email Please"
                                    className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-black-600"
                                />
                            </div>

                            <div>
                                <label className="block font-semibold text-white mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Your Message Please"
                                    className="w-full px-4 py-2 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-black-600"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-6 py-2 mt-2 text-[var(--text-color)] font-semibold border border-[var(--secondary-color)] rounded-md hover:border-2 transition-colors"
                            >
                                Send Message
                            </button>

                        </form>
                </div>
            </div>
        </section>

    );
}

export default Contact;