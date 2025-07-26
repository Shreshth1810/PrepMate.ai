"use client";
import { useUser } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import InterviewItemCard from "./InterviewItemCard";
import { Skeleton } from "@/components/ui/skeleton";
import { FaHistory, FaFileAlt } from "react-icons/fa";

const InterviewList = () => {
  const { user } = useUser();
  const [interviewList, setInterviewList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(
          eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress)
        )
        .orderBy(desc(MockInterview.id));

      console.log(result);
      setInterviewList(result);
    } catch (error) {
      console.error("Error fetching interviews:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center shadow-glow">
            <FaHistory className="text-white text-lg" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Interview History</h2>
            <p className="text-muted-foreground">Your previous mock interview sessions</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="card-modern p-6 animate-pulse">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-1/2 mb-2" />
              <Skeleton className="h-4 w-1/3 mb-4" />
              <div className="flex gap-2">
                <Skeleton className="h-10 flex-1" />
                <Skeleton className="h-10 flex-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-modern rounded-xl flex items-center justify-center shadow-glow">
          <FaHistory className="text-white text-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold">Interview History</h2>
          <p className="text-muted-foreground">
            {interviewList.length > 0 
              ? `${interviewList.length} mock interview${interviewList.length !== 1 ? 's' : ''} completed` 
              : "No interviews yet"
            }
          </p>
        </div>
      </div>

      {interviewList.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {interviewList.map((interview, index) => (
            <div 
              key={index} 
              className="animate-scale-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <InterviewItemCard interview={interview} />
            </div>
          ))}
        </div>
      ) : (
        <div className="card-modern p-12 text-center bg-gradient-to-br from-muted/20 to-muted/10">
          <div className="w-16 h-16 bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <FaFileAlt className="text-2xl text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2">No Interviews Yet</h3>
          <p className="text-muted-foreground mb-6">
            Start your first AI mock interview to see your progress here
          </p>
        </div>
      )}
    </div>
  );
};

export default InterviewList;
