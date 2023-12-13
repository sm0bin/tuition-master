import React from 'react';

const d = () => {
    return (
        <div>
            {/* <form className="flex flex-col gap-4 border shadow rounded-2xl p-6">

                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="name" className="text-gray-700 dark:text-gray-400">Name</label>
                            </div>
                            <input className='w-full rounded-lg' id="name" name="name" type="text" placeholder="Name" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="email" className="text-gray-700 dark:text-gray-400">Email</label>
                            </div>
                            <input className='w-full rounded-lg' id="email" name="email" type="email" placeholder="Email" required />
                        </div>

                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="message" className="text-gray-700 dark:text-gray-400">Message</label>
                            </div>
                            <textarea className='w-full rounded-lg' id="message" name="message" placeholder="Message" required rows={4} />
                        </div>

                        <input type="submit" value="Submit" className="px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
                    </form> 
                     <div>
                    <h2 className="font-bold text-3xl text-blue-500 mb-6">FAQs</h2>
                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">How do I sign up as a tutor?</span> <br />
                        To sign up as a tutor, simply create an account and fill out your profile. You can then start creating your services and schedules. Once your profile is complete, you can start connecting with learners and sharing your knowledge!
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">How do I sign up as a learner?</span> <br />
                        To sign up as a learner, simply create an account and fill out your profile. You can then start browsing services and schedules. Once you find a tutor you like, you can book a session and start learning!
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">How do I book a session?</span> <br />
                        To book a session, simply browse our list of services and schedules. Once you find a tutor you like, you can book a session and start learning!
                    </p>

                    <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                        <span className="font-bold text-gray-600">How do I cancel a session?</span> <br />
                        To cancel a session, please contact us at <span className="font-medium">support@tuitionmaster.com</span> or through our contact form. Please note that cancellation fees may apply.
                    </p>
                </div> */}

            <h2 className="font-bold text-3xl text-blue-500 mb-3 mt-12">Terms and Conditions</h2>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                <span className="font-bold text-gray-600">Privacy Policy:</span> <br />
                At Tuition Master, we are committed to protecting your privacy. We will never share your personal information with third parties without your consent. For more information, please read our Privacy Policy.
            </p>

            <p className="text-gray-500 dark:text-gray-400 text-xl mb-4 leading-relaxed">
                <span className="font-bold text-gray-600">Terms and Conditions:</span> <br />
                By using Tuition Master, you agree to our Terms and Conditions. For more information, please read our Terms and Conditions.
            </p>
        </div>
    );
};

export default d;