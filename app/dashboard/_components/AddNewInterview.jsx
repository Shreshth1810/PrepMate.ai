"use client";
import React, { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatSession } from "@/utils/GeminiAIModal";
import { LoaderCircle } from "lucide-react";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { v4 as uuidv4 } from "uuid";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { useRouter } from "next/navigation";
import { FaPlus, FaBrain, FaRocket, FaStar } from "react-icons/fa";

const AddNewInterview = () => {
  const [openDailog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState();
  const [jobDesc, setJobDesc] = useState();
  const [jobExperience, setJobExperience] = useState();
  const [loading, setLoading] = useState(false);
  const [jsonResponse, setJsonResponse] = useState([]);
  const { user } = useUser();
  const router = useRouter();

  const onSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log(jobPosition, jobDesc, jobExperience);

    const InputPrompt = `
  Job Positions: ${jobPosition}, 
  Job Description: ${jobDesc}, 
  Years of Experience: ${jobExperience}. 
  Based on this information, please provide 5 interview questions with answers in JSON format, ensuring "Question" and "Answer" are fields in the JSON.
`;

    const result = await chatSession.sendMessage(InputPrompt);
    const MockJsonResp = result.response
      .text()
      .replace("```json", "")
      .replace("```", "")
      .trim();
    console.log(JSON.parse(MockJsonResp));
    // const parsedResp = MockJsonResp
    setJsonResponse(MockJsonResp);

    if (MockJsonResp) {
      const resp = await db
        .insert(MockInterview)
        .values({
          mockId: uuidv4(),
          jsonMockResp: MockJsonResp,
          jobPosition: jobPosition,
          jobDesc: jobDesc,
          jobExperience: jobExperience,
          createdBy: user?.primaryEmailAddress?.emailAddress,
          createdAt: moment().format("YYYY-MM-DD"),
        })
        .returning({ mockId: MockInterview.mockId });
        
      console.log("Inserted ID:", resp);

      if (resp) {
        setOpenDialog(false);
        router.push("/dashboard/interview/" + resp[0]?.mockId);
      }
    } else {
      console.log("ERROR");
    }
    setLoading(false);
  };

  return (
    <div className="group">
      <div
        className="card-modern p-8 cursor-pointer bg-gradient-to-br from-primary/5 to-secondary/10 border-2 border-dashed border-primary/30 hover:border-primary/60 hover:from-primary/10 hover:to-secondary/20 transition-all duration-300 group-hover:scale-102"
        onClick={() => setOpenDialog(true)}
      >
        <div className="flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-modern rounded-2xl flex items-center justify-center shadow-glow group-hover:shadow-glow-lg transition-all duration-300">
            <FaPlus className="text-white text-2xl group-hover:rotate-90 transition-transform duration-300" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">Create New Interview</h3>
            <p className="text-muted-foreground text-sm">Start a new AI-powered mock interview session</p>
          </div>
          <div className="flex items-center space-x-2 text-primary text-sm font-medium">
            <FaStar className="text-xs" />
            <span>AI Generated Questions</span>
          </div>
        </div>
      </div>

      <Dialog open={openDailog}>
        <DialogContent className="max-w-2xl border-0 shadow-2xl">
          <div className="glass-effect rounded-2xl p-8">
            <DialogHeader className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-modern rounded-2xl flex items-center justify-center shadow-glow">
                  <FaBrain className="text-white text-2xl" />
                </div>
              </div>
              <DialogTitle className="text-3xl font-bold text-gradient">
                Create Your Interview
              </DialogTitle>
              <DialogDescription className="text-lg text-muted-foreground mt-4">
                Tell us about your job role and let our AI create personalized interview questions
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={onSubmit} className="space-y-6">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                    <FaRocket className="text-primary" />
                    <span>Job Role / Position</span>
                  </label>
                  <Input
                    className="input-modern h-12 text-base border-2 focus:border-primary bg-background/50"
                    placeholder="e.g., Full Stack Developer, Product Manager"
                    required
                    onChange={(e) => setJobPosition(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                    <FaBrain className="text-primary" />
                    <span>Job Description / Tech Stack</span>
                  </label>
                  <Textarea
                    className="input-modern min-h-[100px] text-base border-2 focus:border-primary bg-background/50 resize-none"
                    placeholder="e.g., React, Node.js, TypeScript, AWS, MongoDB, Docker..."
                    required
                    onChange={(e) => setJobDesc(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground flex items-center space-x-2">
                    <FaStar className="text-primary" />
                    <span>Years of Experience</span>
                  </label>
                  <Input
                    className="input-modern h-12 text-base border-2 focus:border-primary bg-background/50"
                    placeholder="e.g., 3"
                    max="50"
                    type="number"
                    required
                    onChange={(e) => setJobExperience(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex gap-4 pt-6">
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 h-12 text-base border-2 hover:bg-secondary/80"
                  onClick={() => setOpenDialog(false)}
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  disabled={loading}
                  className="flex-1 h-12 text-base btn-gradient shadow-glow hover:shadow-glow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <div className="flex items-center space-x-2">
                      <LoaderCircle className="animate-spin w-5 h-5" />
                      <span>Generating Questions...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <FaRocket />
                      <span>Start Interview</span>
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewInterview;
