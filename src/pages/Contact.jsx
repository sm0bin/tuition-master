import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <section className="my-12">
            <Helmet>
                <title>Tuition Master | Contact</title>
            </Helmet>
            <h2 className="font-bold text-5xl text-blue-500 mb-8 leading-tight">Contact Us</h2>
            <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Get in Touch</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                We are here to help you with any questions or concerns you may have. Please feel free to reach out to us via email or through our contact form. Our team will get back to you as soon as possible.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                    <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Contact Information</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        We are here to help you with any questions or concerns you may have. Our team will get back to you as soon as possible.
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Email:</span> <br />
                        support@tuitionmaster.com
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Office Hours:</span> <br />
                        Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Office Location:</span> <br />
                        1234 Main Street <br />
                        Rajshahi, Bangladesh, 6206 <br />
                        Bangladesh <br />
                    </p>
                </div>
                <div>
                    <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Connect with Us</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        Stay updated on the latest news, educational tips, and community highlights by following us on social media:
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Facebook: </span>
                        <Link to="https://www.facebook.com/" className="hover:underline">https://www.facebook.com/</Link>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">LinkedIn: </span>
                        <Link to="https://www.linkedin.com/in/" className="hover:underline">https://www.linkedin.com/in/</Link>
                    </p>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Twitter: </span>
                        <Link to="https://www.twitter.com/" className="hover:underline">https://www.twitter.com/</Link>
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Instagram: </span>
                        <Link to="https://www.instagram.com/" className="hover:underline">https://www.instagram.com/</Link>
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">YouTube: </span>
                        <Link to="https://www.youtube.com/" className="hover:underline">https://www.youtube.com/</Link>
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">Discord: </span>
                        <Link to="https://discord.gg/" className="hover:underline">https://discord.gg/</Link>
                    </p>


                </div>
            </div>








            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-16">
                <div>
                    <h2 className="font-bold text-3xl text-blue-500 mb-6">Contact Form</h2>


                    <form className="border p-6 rounded-2xl">
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Your Name" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="mail@email.com" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Message</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required placeholder="Your Message ..."></textarea>
                        </div>
                        <input type="submit" value="Submit" className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    </form>
                </div>

                <div>
                    <h2 className="font-bold text-3xl text-blue-500 mb-6">FAQs</h2>
                    <div id="accordion-open" data-accordion="open">
                        <h2 id="accordion-open-heading-1">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-1" aria-expanded="true" aria-controls="accordion-open-body-1">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>How do I sign up as a tutor?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-1" className="" aria-labelledby="accordion-open-heading-1">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                                <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                                    To sign up as a tutor, simply create an account and fill out your profile. You can then start creating your services and schedules. Once your profile is complete, you can start connecting with learners and sharing your knowledge!
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-2">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-2" aria-expanded="false" aria-controls="accordion-open-body-2">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>How do I sign up as a learner?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-2" className="hidden" aria-labelledby="accordion-open-heading-2">
                            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                                    To sign up as a learner, simply create an account and fill out your profile. You can then start browsing services and schedules. Once you find a tutor you like, you can book a session and start learning!
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-3">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-3" aria-expanded="false" aria-controls="accordion-open-body-3">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg> What are the differences between Flowbite and Tailwind UI?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-3" className="hidden" aria-labelledby="accordion-open-heading-3">
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                                    To book a session, simply browse our list of services and schedules. Once you find a tutor you like, you can book a session and start learning!
                                </p>
                            </div>
                        </div>
                        <h2 id="accordion-open-heading-4">
                            <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-open-body-4" aria-expanded="false" aria-controls="accordion-open-body-4">
                                <span className="flex items-center"><svg className="w-5 h-5 me-2 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path></svg>How do I cancel a session?</span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-open-body-4" className="hidden" aria-labelledby="accordion-open-heading-4">
                            <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                                <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                                    To cancel a session, please contact us at <span className="font-medium">support@tuitionmaster.com</span> or through our contact form. Please note that cancellation fees may apply.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>


            <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Schedule a Meeting</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                We would love to meet you! Please feel free to drop by our office during business hours or schedule a virtual meeting with our team.
            </p>
        </section>
    );
};

export default Contact;