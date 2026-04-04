import React from 'react'

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Feeling like something's suspicious?",
            description: "Whether it's a sketchy website, a weird message, or an unknown number, if it gives you that gut feeling, it's worth checking out.",
            illustration: "/images/thinking.png",
        },
        {
            number: "2",
            title: "Send it to Scam Puncher",
            description: "Just upload the image, paste the text, or enter the URL or phone number into our free scam checker. It's like having a scam detective in your pocket.",
            illustration: "/images/mail.png",
        },
        {
            number: "3",
            title: "Get a clear response in seconds",
            description: "We analyze using the latest scam detection tech and give you a simple 'Safe' or 'Scam' answer, along with tips on how to stay protected.",
            illustration: "/images/responsibility.png",
        },
        {
            number: "4",
            title: "Help protect others",
            description: "If you find a scam, you can report it to us. Your contribution helps us keep everyone safer by improving our detection and warning others about new scams.",
            illustration: "/images/family.png",
        },
    ];

    return (
        <div className='bg-gray-900 py-20 px-6'>
            <div className='max-w-5xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>How It Works</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-8 group">
                            {/* Step Number */}
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-2xl bg-gray-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg group-hover:scale-110 transition-transform">
                                    {step.number}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1">
                                <div className="mb-8 flex justify-center">
                                    <img
                                    src={step.illustration}
                                    alt={`Step ${step.number}: ${step.tite}`}
                                    className='w-28 h-28 object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-110'
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;