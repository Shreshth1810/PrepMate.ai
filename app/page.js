import React from 'react'
import { Button } from '@/components/ui/button';
import Head from 'next/head';
import Contect from './_components/Contect';
import Link from 'next/link';
import { FaGithub, FaRocket, FaBrain, FaChartLine, FaStar, FaArrowRight, FaMicrophone, FaVideo, FaLightbulb } from "react-icons/fa";

const page = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <Head>
        <title>PrepMate.ai</title>
        <meta name="description" content="Ace your next interview with AI-powered mock interviews" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative overflow-hidden scroll-smooth">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 bg-mesh-gradient opacity-10 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-modern rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-warm rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-gradient-cool rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: '4s' }}></div>

        {/* Header Section */}
        <header className="relative z-10 glass-effect border-b">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center">
                <FaBrain className="text-white text-xl" />
              </div>
              <h1 className="text-3xl font-bold text-gradient">PrepMate.ai</h1>
            </div>
            
            <nav className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors ">Features</Link>
              <Link href="/dashboard">
                <Button className="btn-gradient shadow-glow hover:shadow-glow-lg transition-all duration-300">
                  Get Started <FaArrowRight className="ml-2 text-sm" />
                </Button>
              </Link>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative z-10 flex flex-col items-center justify-center text-center py-24 px-6">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-bounce-gentle">
              <FaStar className="mr-2" />
              AI-Powered Interview Preparation
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Ace Your Next</span>
              <br />
              <span className="text-foreground">Interview</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
              Master your interview skills with AI-powered mock interviews, personalized feedback, and comprehensive performance analytics
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/dashboard">
                <Button size="lg" className="btn-gradient text-lg px-8 py-4 shadow-large hover:shadow-glow-lg hover:scale-102 transition-all duration-300">
                  <FaRocket className="mr-2" />
                  Start Free Trial
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-2 hover:bg-secondary/50 hover:scale-102 transition-all duration-300">
                  <FaLightbulb className="mr-2" />
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Floating Stats */}
          {/* <div className="grid grid-cols-3 gap-8 mt-16 animate-scale-in" style={{ animationDelay: '0.5s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">10K+</div>
              <div className="text-sm text-muted-foreground">Interviews Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">4.9★</div>
              <div className="text-sm text-muted-foreground">User Rating</div>
            </div>
          </div> */}
        </section>

        {/* Features Section */}
        <section id="features" className="relative z-10 py-24 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to excel in your interviews, powered by advanced AI technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-modern p-8 group animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="w-14 h-14 bg-gradient-modern rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBrain className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">AI Mock Interviews</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Experience realistic interview scenarios with our advanced AI that adapts to your responses and provides contextual questions.
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn More <FaArrowRight className="ml-2 text-sm" />
                </div>
              </div>
              
              <div className="card-modern p-8 group animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <div className="w-14 h-14 bg-gradient-warm rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaChartLine className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Instant Feedback</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Get detailed, actionable feedback on your performance with suggestions for improvement and strengths analysis.
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn More <FaArrowRight className="ml-2 text-sm" />
                </div>
              </div>
              
              <div className="card-modern p-8 group animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <div className="w-14 h-14 bg-gradient-cool rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaMicrophone className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Voice & Video Analysis</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Analyze your communication skills with voice tone, pace, and body language insights for complete preparation.
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn More <FaArrowRight className="ml-2 text-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 py-24 px-6">
          <div className="container mx-auto">
            <div className="card-modern p-12 text-center bg-gradient-to-r from-primary/5 to-secondary/10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to <span className="text-gradient">Succeed</span>?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of professionals who have already improved their interview skills with PrepMate.ai
              </p>
              <Link href="/dashboard">
                <Button size="lg" className="btn-gradient text-lg px-10 py-4 shadow-large hover:shadow-glow-lg hover:scale-102 transition-all duration-300">
                  <FaRocket className="mr-2" />
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modern Footer */}
      <footer className="relative z-10 py-12 border-t bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-modern rounded-lg flex items-center justify-center">
                <FaBrain className="text-white text-sm" />
              </div>
              <span className="text-lg font-bold text-gradient">PrepMate.ai</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <span className="text-muted-foreground">© 2025 PrepMate.ai. Created by Vaibhav Pal</span>
              <div className="flex items-center space-x-4">
                <a href="https://github.com/1vaibhavpal1/" className="text-muted-foreground hover:text-primary transition-colors">
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default page