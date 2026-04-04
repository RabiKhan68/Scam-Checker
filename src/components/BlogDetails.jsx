import { useParams } from "react-router-dom";

const blogData = {
  1: {
    title: "How to Spot Online Scams in 2026",
    content: `Scammers are getting smarter... Always verify links, avoid unknown downloads...
    Online scams in 2026 have become more advanced than ever, powered by artificial intelligence and social engineering techniques. However, there are still clear warning signs you can use to protect yourself.
    First, always check the urgency of the message. Scammers often create panic by saying things like “your account will be blocked” or “act now or lose access.” Legitimate companies rarely pressure users like this.
    Second, look closely at the sender’s details. Fake emails and messages often use addresses that look similar to real ones but contain small changes. Always verify the source before clicking any links.
    Third, be cautious with unexpected links or attachments. Hover over links to preview the URL, and avoid downloading files from unknown sources. Many scams rely on malware hidden in attachments.
    Another key sign is too-good-to-be-true offers. Free money, unrealistic discounts, or guaranteed returns are classic scam tactics. If it sounds too good to be true, it probably is.
    Also, watch for AI-generated content. In 2026, scammers use AI to create realistic voices, images, and even videos. If something feels slightly “off” or unnatural, double-check its authenticity.
    Finally, always verify through official channels. If you receive a suspicious message from a bank, company, or friend, contact them directly using trusted contact details.
    Staying alert, questioning unusual messages, and using tools like scam checkers can help you stay safe in today’s digital world.`
  },
  2: {
    title: "Top 5 WhatsApp Scams You Must Avoid",
    content: `WhatsApp scams are increasing... Never share OTP or personal data...
    WhatsApp remains one of the most targeted platforms for scammers. Here are the top five scams you need to watch out for in 2026.

    1. OTP Scams
    Scammers pretend to be someone you know and ask for a verification code (OTP). Never share your OTP with anyone, even if the request seems urgent.

    2. Fake Job Offers
    You may receive messages offering high-paying jobs with little effort. These scams often ask for registration fees or personal details. Always verify job offers from official sources.

    3. Prize or Lottery Scams
    Messages claiming you’ve won a prize are common. They usually ask for payment to “claim” your reward. Legitimate contests never require upfront fees.

    4. Fake Customer Support
    Scammers pose as bank or service representatives. They may ask for sensitive information like passwords or account details. Real companies never request such information via WhatsApp.

    5. Malicious Links
    You may receive links disguised as offers or important updates. Clicking them can install malware or steal your data. Avoid clicking unknown links.
    To stay safe, enable two-step verification, never share personal information, and always double-check suspicious messages. Awareness is your best defense against WhatsApp scams.`
  },
  3: {
    title: "Is This Website Safe? Quick Checklist",
    content: `Check HTTPS, domain age, reviews, and trust signals...
    Before trusting any website, it’s important to check if it’s safe. Here’s a quick checklist you can follow.
    Start with the URL. Secure websites use “https://” instead of “http://”. The extra “s” means the connection is encrypted.
    Next, check the domain name carefully. Scammers often create fake websites with names that look similar to real ones. Even a small spelling difference can indicate a scam.
    Look at the website design and content. Poor grammar, low-quality images, and broken links are common signs of fake websites.
    Also, search for reviews online. If other users report scams or negative experiences, avoid the site.
    Check for contact information. Legitimate websites usually provide a physical address, phone number, or customer support details.
    Be cautious if the website asks for sensitive information too quickly, such as credit card details or passwords without proper verification.
    Finally, use a scam-checking tool to analyze the website before interacting with it.
    By following this checklist, you can quickly identify risky websites and protect your personal information.`
  },
  4: {
    title: "How to stay safe from AI dating scams",
    content: `AI dating scams are becoming increasingly common in 2026. Scammers use advanced technology to create fake profiles that feel incredibly real.
    The first warning sign is moving too fast emotionally. If someone expresses strong feelings very quickly, it may be a scam. Real relationships take time to develop.
    Second, be cautious of perfect profiles. AI-generated images and bios often appear flawless. If everything seems too perfect, it’s worth questioning.
    Another red flag is avoiding video calls. Scammers often make excuses to avoid real-time interaction because they cannot maintain the illusion.
    Watch out for financial requests. Scammers may ask for money due to emergencies, travel issues, or investment opportunities. Never send money to someone you haven’t met in real life.
    Also, be aware of inconsistent stories. AI-generated conversations may sometimes contradict earlier details.
    To stay safe, verify identities using reverse image searches, keep conversations within the app, and avoid sharing personal or financial information.
    Most importantly, trust your instincts. If something feels wrong, it’s better to step back and investigate before continuing.`
  }
};

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData[id];

  if (!blog) return <p className="text-center mt-10">Blog not found</p>;

  return (
    <div className="min-h-screen bg-gray-900 px-4 py-10">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4">{blog.title}</h1>

        <p className="text-gray-700 leading-relaxed">
          {blog.content}
        </p>
      </div>

    </div>
  );
}