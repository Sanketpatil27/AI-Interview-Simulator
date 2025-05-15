"use client"

import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import {
  Menu, X, ChevronDown, ArrowRight, Activity, BrainCircuit, Gauge, LineChart,
  Lightbulb, MessageSquare, FileText, Zap, Check, Facebook, Twitter, Linkedin,
  Instagram, Youtube, Star, CheckCircle
} from 'lucide-react';
import Link from "next/link";
import Image from "next/image";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'AI Interviewer - Master Your Interview Skills';

    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const features = [
    {
      icon: <BrainCircuit size={24} />,
      title: 'Intelligent Interviewer',
      description: 'AI-powered interviewer adapts to your responses and simulates real interview scenarios.'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'Real-time Feedback',
      description: 'Get instant feedback on your answers with specific suggestions for improvement.'
    },
    {
      icon: <Activity size={24} />,
      title: 'Progress Tracking',
      description: 'Monitor your improvement over time with detailed performance analytics.'
    },
    {
      icon: <LineChart size={24} />,
      title: 'Performance Analysis',
      description: 'Comprehensive reports that highlight your strengths and areas for improvement.'
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Select Your Interview Type',
      description: 'Choose from various interview types including behavioral, technical, and role-specific interviews.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 2,
      title: 'Practice with AI',
      description: 'Engage in realistic interviews with our AI interviewer that adapts to your responses in real-time.',
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 3,
      title: 'Receive Detailed Feedback',
      description: 'Get personalized feedback on your answers, communication skills, and areas for improvement.',
      image: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      number: 4,
      title: 'Track Your Progress',
      description: 'Monitor your improvement over time with detailed analytics and performance metrics.',
      image: 'https://images.pexels.com/photos/7114/laptop-mobile.jpg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  const plans = [
    {
      title: 'Free',
      price: 'Free',
      description: 'Basic interview practice for beginners',
      features: [
        { text: '5 AI interviews per month', included: true },
        { text: 'Basic feedback on responses', included: true },
        { text: 'Limited question library', included: true },
        { text: 'Performance tracking', included: false },
      ]
    },
    {
      title: 'Pro',
      price: '$19',
      description: 'Complete interview preparation for job seekers',
      features: [
        { text: 'Unlimited AI interviews', included: true },
        { text: 'Detailed feedback & suggestions', included: true },
        { text: 'Full question library', included: true },
        { text: 'Performance tracking & analytics', included: true },
        { text: 'Industry-specific questions', included: true },
        { text: 'Personalized coaching', included: false },
        { text: 'Interview recordings', included: true },
        { text: 'Premium question library', included: false }
      ],
      isPopular: true
    },
    {
      title: 'Premium',
      price: '$39',
      description: 'Advanced preparation for career professionals',
      features: [
        { text: 'Unlimited AI interviews', included: true },
        { text: 'Detailed feedback & suggestions', included: true },
        { text: 'Full question library', included: true },
        { text: 'Performance tracking & analytics', included: true },
        { text: 'Industry-specific questions', included: true },
        { text: 'Personalized coaching sessions', included: true },
        { text: 'Interview recordings & analysis', included: true },
        { text: 'Premium question library', included: true }
      ]
    }
  ];

  const faqs = [
    {
      question: 'How does the AI Interviewer work?',
      answer: 'Our AI Interviewer uses natural language processing to conduct realistic interview simulations. It asks industry-standard questions, analyzes your responses, and provides personalized feedback to help you improve your interview skills.'
    },
    {
      question: 'Is the AI Interviewer as effective as practicing with a real person?',
      answer: 'While nothing completely replaces human interaction, our AI Interviewer provides several advantages: it\'s available 24/7, offers objective feedback, allows unlimited practice, and uses data from thousands of successful interviews to provide insights that even experienced recruiters might miss.'
    },
    {
      question: 'What types of interviews does the platform support?',
      answer: 'We support various interview types including behavioral, technical, case, situational, and role-specific interviews across multiple industries and job levels from entry-level to executive positions.'
    },
    {
      question: 'How accurate is the feedback provided?',
      answer: 'Our AI feedback system is trained on thousands of successful interview responses and incorporates input from hiring managers across industries. The platform provides actionable, specific feedback that has been validated to improve interview performance.'
    },
    {
      question: 'Can I practice for technical interviews?',
      answer: 'Yes! Our platform includes technical interview preparation for software engineering, data science, and other technical roles with specialized question banks and coding challenge simulations.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-transparent bg-clip-text">
                <Image src={'/logo2.png'} alt='logo' width={200} height={120} />
              </span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">How It Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">Pricing</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href={'http://localhost:3000//dashboard'}>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm hover:shadow font-medium">
                  Get Started
                </button>
              </Link>
            </div>

            <button
              className="md:hidden focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden ${isMenuOpen
            ? 'max-h-screen opacity-100 visible'
            : 'max-h-0 opacity-0 invisible'
            } transition-all duration-300 overflow-hidden`}>
            <div className="pt-4 pb-6 space-y-4">
              <a href="#features" className="block py-2 text-gray-700 font-medium">Features</a>
              <a href="#how-it-works" className="block py-2 text-gray-700 font-medium">How It Works</a>
              <a href="#pricing" className="block py-2 text-gray-700 font-medium">Pricing</a>
              <a href="#faq" className="block py-2 text-gray-700 font-medium">FAQ</a>
              <div className="pt-4 space-y-3">
                <Link href={'/dashboard'}>
                  <button className="w-full px-4 py-3 text-center bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors shadow-sm font-medium">
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 text-center lg:text-left">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">
                    Master Your Interviews
                  </span>{' '}
                  with AI Coaching
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Practice interviews with our AI-powered coach that adapts to your responses and provides personalized feedback to help you land your dream job.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Link href={'http://localhost:3000//dashboard'}>
                    <button className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all shadow-sm hover:shadow-md font-medium text-lg flex items-center justify-center group">
                      Start Practicing Now
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>
                <div className="mt-8 flex items-center justify-center lg:justify-start">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden bg-gray-200"
                        style={{
                          backgroundImage: `url(https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=100)`,
                          backgroundPosition: `${i * 25}% 50%`,
                          backgroundSize: 'cover'
                        }}
                      />
                    ))}
                  </div>
                  <div className="ml-4 text-sm text-gray-500">
                    <span className="font-medium text-gray-700">10+</span> interviews practiced this week
                  </div>
                </div>
              </div>
              <div className="flex-1 relative">
                <div className="relative z-10 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4 flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg mr-3">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-t-2xl rounded-br-2xl p-4 text-gray-700">
                          Tell me about a time when you faced a challenging problem at work. How did you approach it?
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 flex items-center justify-end">
                      <div className="flex-1">
                        <div className="bg-purple-100 rounded-t-2xl rounded-bl-2xl p-4 text-gray-700 ml-auto">
                          In my previous role, we faced a critical deadline with unexpected technical issues. I organized the team to prioritize problems, delegated tasks based on strengths, and implemented a temporary solution while working on a permanent fix.
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-gray-200 rounded-full ml-3 flex items-center justify-center font-medium">
                        You
                      </div>
                    </div>

                    <div className="mb-4 flex items-center">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-bold text-lg mr-3">
                        AI
                      </div>
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-t-2xl rounded-br-2xl p-4 text-gray-700">
                          Good response! You showed problem-solving skills and leadership.
                          <span className="block mt-2 text-purple-600">
                            Suggestion: Add specific metrics about the impact of your solution.
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <input
                        type="text"
                        placeholder="Type your response..."
                        className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      />
                      <button className="ml-2 bg-purple-600 text-white rounded-lg px-4 hover:bg-purple-700">
                        Send
                      </button>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-indigo-200 rounded-full opacity-50 blur-xl"></div>
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-200 rounded-full opacity-50 blur-xl"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-gray-50" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Transform Your Interview Skills
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI Interviewer provides all the tools you need to prepare for your next big interview.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
                  <div className="w-12 h-12 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20" id="how-it-works">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Our simple four-step process helps you prepare for interviews with ease and confidence.
              </p>
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 font-bold text-lg mb-4">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                    <ul className="space-y-2">
                      {[1, 2, 3].map((i) => (
                        <li key={i} className="flex items-center text-gray-600">
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                          <span>
                            {index === 0 && i === 1 && 'Behavioral interviews for leadership roles'}
                            {index === 0 && i === 2 && 'Technical interviews for engineering positions'}
                            {index === 0 && i === 3 && 'Industry-specific question banks'}

                            {index === 1 && i === 1 && 'Natural conversation flow like a real interview'}
                            {index === 1 && i === 2 && 'Follow-up questions based on your responses'}
                            {index === 1 && i === 3 && 'Adjustable difficulty levels'}

                            {index === 2 && i === 1 && 'Content analysis of your responses'}
                            {index === 2 && i === 2 && 'Specific improvement suggestions'}
                            {index === 2 && i === 3 && 'Sample high-quality answers'}

                            {index === 3 && i === 1 && 'Performance trends over time'}
                            {index === 3 && i === 2 && 'Comparison with successful candidates'}
                            {index === 3 && i === 3 && 'Identify recurring improvement areas'}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="relative">
                      <div className="w-full h-64 md:h-80 bg-gray-200 rounded-xl overflow-hidden relative z-10">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div
                        className={`absolute w-full h-full top-4 ${index % 2 === 0 ? 'right-4' : 'left-4'} border-2 border-purple-500 rounded-xl -z-10`}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20" id="pricing">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Choose the plan that fits your needs. No hidden fees or long-term commitments.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-sm overflow-hidden transition-transform hover:scale-105 transform h-full flex flex-col ${plan.isPopular ? 'border-2 border-purple-500 relative' : 'border border-gray-200'
                    }`}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-0 bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                      MOST POPULAR
                    </div>
                  )}
                  <div className="p-6 md:p-8 flex-grow">
                    <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                    <div className="mb-4">
                      <span className="text-3xl font-bold">{plan.price}</span>
                      {plan.price !== 'Free' && <span className="text-gray-500 ml-1">/mo</span>}
                    </div>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                          ) : (
                            <X className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
                          )}
                          <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 md:p-8 pt-4 bg-gray-50">
                    <button
                      className={`w-full py-3 rounded-lg font-medium ${plan.isPopular
                        ? 'bg-purple-600 hover:bg-purple-700 text-white'
                        : 'bg-white border border-gray-300 hover:border-purple-500 text-gray-700 hover:text-purple-600'
                        } transition-colors`}
                    >
                      {plan.isPopular ? 'Start 7-Day Free Trial' : 'Get Started'}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Need a custom solution for your team or company?
              </p>
              <button className="font-medium text-purple-600 hover:text-purple-700 underline">
                Contact our sales team
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Ace Your Next Interview?
              </h2>
              <p className="text-xl opacity-90 mb-8">
                Start practicing with our AI Interviewer today and take your interview skills to the next level.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Link href={'http://localhost:3000//dashboard'}>
                  <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-gray-100 transition-colors shadow-sm hover:shadow-md font-medium text-lg flex items-center justify-center group">
                    Get Started for Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
              <p className="opacity-80">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">AI Interviewer</h3>
              <p className="mb-4">
                Revolutionizing interview preparation with AI technology to help you land your dream job.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>© {new Date().getFullYear()} AI Interviewer. All rights reserved.</p>
              <div className="mt-4 md:mt-0">
                <ul className="flex space-x-6">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
