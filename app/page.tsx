"use client"; // Enables client-side interactivity for demos

import { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [slackInput, setSlackInput] = useState('');
  const [slackOutput, setSlackOutput] = useState('');
  const [leadName, setLeadName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bulletproof: Logs to console (in prod: hook to Zapier/Slack webhook)
    console.log('Lead captured:', formData);
    alert(`Thanks, ${formData.name}! Your $2,500 AI audit is en route. (Real automation: Slack ping + Calendly book sent.)`);
    setShowModal(false);
  };

  const handleSlackRewrite = () => {
    // Simple sim (prod: fetch('/api/openai') )
    setSlackOutput(`AI Magic: "${slackInput}" → "Polished reply: Let's align on this ASAP. 📅"`);
  };

  const handleLeadBook = () => {
    alert(`${leadName}'s slot booked! (Real: Calendly API call.)`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 font-sans">
      {/* Header with Your New Cyan Hex Logo */}
      <header className="flex items-center justify-between mb-8 max-w-6xl mx-auto">
        <div className="flex items-center space-x-3">
          <svg width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" className="hover:scale-110 transition">
            <defs>
              <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" stopOpacity="1" />
                <stop offset="100%" stopColor="#0099CC" stopOpacity="1" />
              </linearGradient>
            </defs>
            <polygon points="24,4 40,14 40,34 24,44 8,34 8,14" fill="url(#logoGrad)" stroke="#00D4FF" strokeWidth="1" />
            <circle cx="24" cy="18" r="2.5" fill="white" />
            <circle cx="30" cy="24" r="2.5" fill="white" />
            <circle cx="18" cy="30" r="2.5" fill="white" />
            <path d="M24 18 L30 24 L24 30 L18 24 Z" stroke="white" strokeWidth="1" fill="none" />
          </svg>
          <div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">AutoFlowGPT</h1>
            <p className="text-sm text-gray-600">Next-Gen AI Automation for SMEs</p>
          </div>
        </div>
        <button onClick={() => setShowModal(true)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Free Audit</button>
      </header>

      {/* Hero */}
      <section className="text-center max-w-3xl mx-auto mb-16">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Stop Wasting 40+ Hours Weekly</h2>
          <p className="text-xl text-gray-700 mb-6">Join 500+ businesses saving $50K+ annually. Get your custom AI strategy in 24 hours—or it's FREE.</p>
          <button onClick={() => setShowModal(true)} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition">🚀 Claim $2,500 AI Audit</button>
        </div>
      </section>

      {/* Live Demos Section */}
      <section className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Live AI Automations: Try Them Now</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Demo 1: Slack */}
          <div className="bg-white rounded-xl p-6 shadow-md border">
            <h3 className="font-semibold mb-4">Slack AI Rewriter</h3>
            <textarea value={slackInput} onChange={(e) => setSlackInput(e.target.value)} placeholder="Messy message..." className="w-full p-3 border rounded mb-3" rows={2} />
            <button onClick={handleSlackRewrite} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Rewrite →</button>
            {slackOutput && <p className="mt-3 p-3 bg-green-50 rounded text-sm text-green-700">{slackOutput}</p>}
          </div>
          {/* Demo 2: Lead Booker */}
          <div className="bg-white rounded-xl p-6 shadow-md border">
            <h3 className="font-semibold mb-4">WhatsApp → Calendly Book</h3>
            <input value={leadName} onChange={(e) => setLeadName(e.target.value)} placeholder="Lead name..." className="w-full p-3 border rounded mb-3" />
            <button onClick={handleLeadBook} className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Book Slot</button>
          </div>
          {/* Demo 3: Invoice (File Upload Sim) */}
          <div className="bg-white rounded-xl p-6 shadow-md border">
            <h3 className="font-semibold mb-4">Invoice PDF → Airtable</h3>
            <input type="file" accept=".pdf" className="w-full p-3 border rounded mb-3" onChange={(e) => alert('Extracted: $1,250 | Due: Nov 17 (Real: GPT-4 Vision sync)')} />
          </div>
          {/* Demos 4-5: Quick Buttons */}
          <div className="bg-white rounded-xl p-6 shadow-md border">
            <h3 className="font-semibold mb-4">Gmail → Notion Sync</h3>
            <button className="w-full bg-indigo-600 text-white py-2 rounded mt-4">Simulate Sync</button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border">
            <h3 className="font-semibold mb-4">IG DM → Sheets Reply</h3>
            <button className="w-full bg-purple-600 text-white py-2 rounded mt-4">Trigger Reply</button>
          </div>
        </div>
      </section>

      {/* Modal for Assessment */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4">
            <h3 className="font-bold mb-4">Quick Audit Signup</h3>
            <form onSubmit={handleSubmit}>
              <input value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Name" className="w-full p-3 border rounded mb-3" required />
              <input type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="Email" className="w-full p-3 border rounded mb-3" required />
              <input value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} placeholder="Company Size" className="w-full p-3 border rounded mb-3" />
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded font-bold">Send Audit</button>
            </form>
            <button onClick={() => setShowModal(false)} className="mt-4 text-gray-500 underline">Cancel</button>
          </div>
        </div>
      )}

      <footer className="text-center text-gray-500 text-sm mt-16">© 2025 AutoFlowGPT | Powered by Next.js on Vercel</footer>
    </main>
  );
}
