
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BarChart3, TrendingUp, AlertTriangle, Target, Bot, Brain, Sparkles, MessageSquare, Zap } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const MarginSimulator = () => {
  const [currentFee, setCurrentFee] = useState("2.5");
  const [proposedFee, setProposedFee] = useState("2.8");
  const [volume, setVolume] = useState("1000000");

  const aiInsights = [
    {
      type: "opportunity",
      title: "AI Detected Optimization Opportunity",
      description: "Increasing interchange fee by 0.3% could improve margins by $180K annually with minimal client impact risk",
      confidence: "94%",
      impact: "High",
      severity: "positive"
    },
    {
      type: "risk",
      title: "AI Risk Assessment Alert",
      description: "Cross-border fee increase may trigger client renegotiation for 3 high-volume merchants",
      confidence: "87%",
      impact: "Medium",
      severity: "warning"
    },
    {
      type: "recommendation",
      title: "AI Strategic Recommendation",
      description: "Consider phased implementation over 6 months to reduce client churn probability by 23%",
      confidence: "91%",
      impact: "Low",
      severity: "info"
    }
  ];

  const handleRunAIAnalysis = () => {
    toast.success("🧠 AI Margin Agent Analyzing", {
      description: "Your AI agent is running advanced margin simulations and risk assessments..."
    });
  };

  const handleAIOptimize = () => {
    toast.success("🤖 AI Optimization Started", {
      description: "AI agent is calculating optimal fee structures using machine learning models..."
    });
  };

  const handleAskAgent = () => {
    toast.success("💬 AI Agent Ready", {
      description: "Your margin analysis agent is ready to answer questions about scenarios and risks"
    });
  };

  const currentMargin = parseFloat(currentFee) * parseFloat(volume) / 100;
  const proposedMargin = parseFloat(proposedFee) * parseFloat(volume) / 100;
  const improvement = proposedMargin - currentMargin;

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              Margin Analysis AI Agent
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </h1>
            <p className="text-slate-600 mt-2">
              Your AI assistant for modeling fee changes and analyzing profit margin scenarios
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={handleAskAgent}
              className="border-purple-300 hover:bg-purple-50"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Ask AI Agent
            </Button>
            <Button 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleRunAIAnalysis}
            >
              <Brain className="w-4 h-4 mr-2" />
              Run AI Analysis
            </Button>
          </div>
        </div>

        {/* AI Agent Status */}
        <Card className="bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center animate-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Agent Status: Analyzing Scenarios</h3>
                  <p className="text-sm text-slate-600">Continuously modeling margin impacts and identifying optimization opportunities</p>
                </div>
              </div>
              <Badge className="bg-purple-100 text-purple-800">
                ● Learning Mode
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Simulation Input */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              AI-Powered Margin Simulator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <Label htmlFor="current-fee">Current Fee Rate (%)</Label>
                <Input
                  id="current-fee"
                  type="number"
                  step="0.1"
                  value={currentFee}
                  onChange={(e) => setCurrentFee(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="proposed-fee">Proposed Fee Rate (%)</Label>
                <Input
                  id="proposed-fee"
                  type="number"
                  step="0.1"
                  value={proposedFee}
                  onChange={(e) => setProposedFee(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="volume">Monthly Volume ($)</Label>
                <Input
                  id="volume"
                  type="number"
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRunAIAnalysis} className="bg-purple-600 hover:bg-purple-700">
                <Brain className="w-4 h-4 mr-2" />
                AI Analyze Impact
              </Button>
              <Button variant="outline" onClick={handleAIOptimize}>
                <Bot className="w-4 h-4 mr-2" />
                AI Auto-Optimize
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* AI Results */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Current Monthly Margin</p>
                  <p className="text-2xl font-bold text-slate-900">${currentMargin.toLocaleString()}</p>
                </div>
                <TrendingUp className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Projected Margin</p>
                  <p className="text-2xl font-bold text-slate-900">${proposedMargin.toLocaleString()}</p>
                </div>
                <Target className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Calculated Improvement</p>
                  <p className="text-2xl font-bold text-green-600">+${improvement.toLocaleString()}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights & Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Agent Insights & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {aiInsights.map((insight, index) => (
                <div key={index} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{insight.title}</h3>
                        <Badge 
                          variant={insight.severity === 'positive' ? 'default' : insight.severity === 'warning' ? 'destructive' : 'secondary'}
                          className={
                            insight.severity === 'positive' ? 'bg-green-100 text-green-800' :
                            insight.severity === 'warning' ? 'bg-orange-100 text-orange-800' :
                            'bg-blue-100 text-blue-800'
                          }
                        >
                          {insight.impact} IMPACT
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-700">
                          <Bot className="w-3 h-3 mr-1" />
                          AI Confidence: {insight.confidence}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm">{insight.description}</p>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => toast.success("🤖 AI Agent Explaining", { description: `Getting detailed analysis for: ${insight.title}` })}
                    >
                      <MessageSquare className="w-3 h-3 mr-1" />
                      Ask Agent
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Quick Actions */}
        <Card className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  AI Agent Quick Actions
                </h3>
                <p className="text-purple-100 text-sm">Let your AI agent handle complex margin analysis tasks</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10"
                  onClick={() => toast.success("🤖 AI Running", { description: "Generating comprehensive margin impact report..." })}
                >
                  <Bot className="w-4 h-4 mr-2" />
                  Generate AI Report
                </Button>
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10"
                  onClick={() => toast.success("🧠 AI Modeling", { description: "Creating predictive scenarios for next quarter..." })}
                >
                  <Brain className="w-4 h-4 mr-2" />
                  AI Predict Scenarios
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default MarginSimulator;
