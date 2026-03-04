import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* --- Navigation --- */}
    

      {/* --- Hero Section --- */}
      <header className="max-w-7xl mx-auto px-8 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Build your future <span className="text-indigo-600">faster than ever.</span>
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
          Stop wrestling with complex configurations. Our platform gives you the tools to deploy 
          scalable applications in minutes, not months.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg shadow-indigo-200 hover:scale-105 transition">
            Start Free Trial
          </button>
          <button className="px-8 py-4 bg-white border border-slate-300 rounded-xl font-bold hover:bg-slate-50 transition">
            View Demo
          </button>
        </div>
      </header>

      {/* --- Features Grid --- */}
      <section className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: 'Lightning Fast', desc: 'Optimized for speed and high-concurrency workloads.' },
            { title: 'Secure by Default', desc: 'Enterprise-grade encryption for all your sensitive data.' },
            { title: 'Global Edge', desc: 'Deploy to over 100+ locations worldwide instantly.' }
          ].map((feature, idx) => (
            <div key={idx} className="p-8 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg mb-4 flex items-center justify-center text-indigo-600 font-bold">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* --- Footer --- */}
      <footer className="py-12 text-center border-t border-slate-200 text-slate-500 text-sm">
        © 2026 NexusAI Inc. Built with React & Tailwind.
      </footer>
    </div>
  );
};

export default Home;