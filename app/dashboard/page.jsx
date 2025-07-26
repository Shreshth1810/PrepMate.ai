import { UserButton } from "@clerk/nextjs";
import React from "react";
import AddNewInterview from "./_components/AddNewInterview";
import InterviewList from "./_components/InterviewList";
import { FaRocket, FaChartLine, FaTrophy, FaPlus } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient opacity-5"></div>
        <div className="relative z-10 p-10">
          <div className="animate-fade-in-up">

          <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-modern rounded-xl flex items-center justify-center shadow-glow">
                <FaRocket className="text-white text-xl" />
              </div>

              <div>
                <h1 className="text-4xl font-bold text-gradient">Dashboard</h1>
                <p className="text-muted-foreground">Your AI-powered interview preparation hub</p>
              </div>
          </div>

          {/* Quick Stats */}
          {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="card-modern p-6 bg-gradient-to-r from-primary/5 to-primary/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Interviews Completed</p>
                    <p className="text-2xl font-bold text-primary">0</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-modern rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-white text-sm" />
                  </div>
                </div>
              </div>

              <div className="card-modern p-6 bg-gradient-to-r from-green-500/5 to-green-500/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Success Rate</p>
                    <p className="text-2xl font-bold text-green-600">--%</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <FaTrophy className="text-white text-sm" />
                  </div>
                </div>
              </div>

              <div className="card-modern p-6 bg-gradient-to-r from-orange-500/5 to-orange-500/10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">Average Score</p>
                    <p className="text-2xl font-bold text-orange-600">--%</p>
                  </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                    <FaChartLine className="text-white text-sm" />
                  </div>
                </div>
              </div>
            </div>*/}
          </div> 

          {/* Action Section */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-2xl font-bold mb-2">Quick Actions</h2>
            <p className="text-muted-foreground mb-6">Create and start your AI mock interview session</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <AddNewInterview />
            </div>
          </div>

          {/* Interview History */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <InterviewList />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
