export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">

      <div className="max-w-4xl mx-auto">

        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          About Scam Puncher
        </h1>

        {/* WHO WE ARE */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
          <p>
            Scam Puncher is a modern web platform built to help people stay safe in the digital world.
            Our goal is simple: <strong>identify, analyze, and prevent scams before they harm you.</strong>
          </p>
        </section>

        {/* WHAT WE DO */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">What We Do</h2>
          <ul className="pl-6 space-y-2 list-none">
            <li>Analyze suspicious messages, links, or information</li>
            <li>Search and explore phone-related data</li>
            <li>Track trending and commonly searched devices</li>
            <li>Save favorites for quick access</li>
            <li>Deliver fast and user-friendly results</li>
          </ul>
        </section>

        {/* MISSION */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p>
            Our mission is to empower users to recognize scams and stay one step ahead of fraudsters.
          </p>
        </section>

        {/* WHY US */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Why Scam Puncher?</h2>
          <ul className="list-disc pl-6 space-y-2 list-none">
            <li>Easy to use interface</li>
            <li>Fast and responsive system</li>
            <li>Focus on user privacy</li>
            <li>Smart tracking of trends</li>
            <li>Built for everyone</li>
          </ul>
        </section>

        {/* VISION */}
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p>
            We aim to build a trusted global platform where users can confidently verify online content 
            and protect themselves from scams.
          </p>
        </section>

        {/* DISCLAIMER */}
        <section className="mt-8 p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded text-black">
          <h2 className="text-lg font-semibold mb-1">Disclaimer</h2>
          <p className="text-sm text-black">
            Scam Puncher provides guidance and analysis only. Users should always use their own judgment 
            before making decisions based on results.
          </p>
        </section>

      </div>

    </div>
  );
}