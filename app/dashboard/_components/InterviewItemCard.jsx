import React from 'react'
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { FaPlay, FaChartBar, FaCalendarAlt, FaBriefcase, FaClock } from 'react-icons/fa';

const InterviewItemCard = ({ interview }) => {
    const router = useRouter()
    
    const onStart = () => {
        router.push("/dashboard/interview/" + interview?.mockId)
    }
    
    const onFeedback = () => {
        router.push("/dashboard/interview/" + interview?.mockId + "/feedback")
    }

    return (
        <div className="card-modern p-6 group hover:scale-102 transition-all duration-300">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="w-8 h-8 bg-gradient-modern rounded-lg flex items-center justify-center">
                            <FaBriefcase className="text-white text-sm" />
                        </div>
                        <h3 className="font-bold text-lg text-primary line-clamp-1">
                            {interview?.jobPosition}
                        </h3>
                    </div>
                    
                    <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <FaClock className="text-xs" />
                            <span>{interview?.jobExperience} Years Experience</span>
                        </div>
                        
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                            <FaCalendarAlt className="text-xs" />
                            <span>Created: {interview.createdAt}</span>
                        </div>
                    </div>
                </div>
                
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            {/* Tags */}
            <div className="mb-6">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                    AI Generated Questions
                </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
                <Button 
                    onClick={onFeedback} 
                    variant="outline"
                    className="flex-1 h-10 border-2 hover:bg-secondary/80 hover:border-primary/30 transition-all duration-300"
                >
                    <FaChartBar className="mr-2 text-sm" />
                    <span className="text-sm font-medium">Feedback</span>
                </Button>
                
                <Button 
                    onClick={onStart} 
                    className="flex-1 h-10 btn-gradient shadow-glow hover:shadow-glow-lg transition-all duration-300"
                >
                    <FaPlay className="mr-2 text-sm" />
                    <span className="text-sm font-medium">Start</span>
                </Button>
            </div>

            {/* Hover Effect Indicator */}
            <div className="absolute inset-0 bg-gradient-modern opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-300 pointer-events-none"></div>
        </div>
    )
}

export default InterviewItemCard