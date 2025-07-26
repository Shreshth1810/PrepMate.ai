"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { ModeToggle } from "@/components/ModeToggle";
import Link from "next/link";
import { FaBrain, FaHome, FaQuestionCircle, FaCrown, FaInfoCircle, FaBars, FaTimes } from "react-icons/fa";

const Header = ({ logo }) => {
  const [isUserButtonLoaded, setUserButtonLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const SkeletonLoader = () => (
    <div className="w-8 h-8 bg-muted rounded-full animate-pulse"></div>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setUserButtonLoaded(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const path = usePathname();

  const navigationItems = [
    { href: "/dashboard", label: "Dashboard", icon: FaHome },
    // { href: "/dashboard/question", label: "Questions", icon: FaQuestionCircle },
    { href: "/dashboard/upgrade", label: "Upgrade", icon: FaCrown },
    { href: "/dashboard/howit", label: "How it works?", icon: FaInfoCircle },
  ];

  return (
    <header className="sticky top-0 z-50 glass-effect border-b backdrop-blur-xl">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link className="flex items-center space-x-3 group" href="/dashboard">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
                <FaBrain className="text-white text-xl" />
              </div>
              <div className="absolute inset-0 bg-gradient-modern rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
            </div>
            <span className="hidden md:block text-xl font-bold text-gradient">PrepMate.ai</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = path === item.href;
              
              return (
                <Link key={item.href} href={item.href}>
                  <div className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-gradient-modern text-white shadow-glow' 
                      : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                    }
                  `}>
                    <Icon className={`text-base ${isActive ? 'text-white' : ''}`} />
                    <span>{item.label}</span>
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-modern rounded-xl blur opacity-30"></div>
                    )}
                  </div>
                </Link>
              );
            })}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <div className="relative">
              {isUserButtonLoaded ? (
                <div className="relative">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-xl shadow-medium hover:shadow-glow transition-all duration-300",
                      }
                    }}
                  />
                </div>
              ) : (
                <SkeletonLoader />
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-300"
            >
              {isOpen ? (
                <FaTimes className="w-5 h-5 text-foreground" />
              ) : (
                <FaBars className="w-5 h-5 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-card/95 backdrop-blur-sm animate-fade-in-up">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = path === item.href;
                
                return (
                  <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                    <div className={`
                      flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300
                      ${isActive 
                        ? 'bg-gradient-modern text-white shadow-glow' 
                        : 'text-muted-foreground hover:text-primary hover:bg-secondary/50'
                      }
                    `}>
                      <Icon className={`text-base ${isActive ? 'text-white' : ''}`} />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
