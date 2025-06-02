import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DollarSign, Users, TrendingUp, Target, Bot, Brain, MessageSquare, Sparkles, Zap, Activity, TrendingDown } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const ClientPricing = () => {
  const [selectedMerchant, setSelectedMerchant] = useState("");
  const [optimizationGoal, setOptimizationGoal] = useState("profit");

  const pricingRecommendations = [
    {
      id: 1,
      merchant: "TechCorp LATAM",
      segment: "eCommerce",
      currentMargin: "2.1%",
      rationale: "High-risk profile incurs higher cross-border fee for FX exposure",
      priority: "high",
      aiConfidence: "92%",
      predictedImpact: "+$24K/month",
      churnRisk: "Low (8%)"
    },
    {
      id: 2,
      merchant: "RetailPlus EU",
      segment: "Retail",
      currentMargin: "3.8%",
      rationale: "Volume tier qualification allows for competitive rate adjustment",
      priority: "medium",
      aiConfidence: "88%",
      predictedImpact: "+$12K/month",
      churnRisk: "Very Low (3%)"
    },
    {
      id: 3,
      merchant: "FinServices Inc",
      segment: "Financial",
      currentMargin: "4.2%",
      rationale: "Regulatory compliance costs require margin adjustment",
      priority: "low",
      aiConfidence: "85%",
      predictedImpact: "+$8K/month",
      churnRisk: "Medium (15%)"
    }
  ];

  const handleReview = (recommendation: any) => {
    toast.success("🤖 AI Agent Analyzing", {
      description: `Your pricing agent is reviewing optimization for ${recommendation.merchant}`
    });
  };

  const handleApply = (recommendation: any) => {
    toast.success("✅ AI Agent Applied Changes", {
      description: `Pricing optimization applied for ${recommendation.merchant} with AI assistance`
    });
  };

  const handleRunAnalysis = () => {
    toast.success("🧠 AI Analysis Started", {
      description: "Your pricing optimization agent is analyzing all merchant portfolios"
    });
  };

  const handlePredictiveAnalysis = () => {
    toast.success("🔮 AI Predictive Analysis", {
      description: "Agent is running 6-month revenue and churn predictions..."
    });
  };

  const handleMarketBenchmark = () => {
    toast.success("📊 AI Market Analysis", {
      description: "Comparing your pricing against 500+ competitors using AI..."
    });
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              Pricing Optimization AI Agent
              <Badge variant="secondary" className="bg-green-100 text-green-700">
                <Sparkles className="w-3 h-3 mr-1" />
                AI Optimized
              </Badge>
            </h1>
            <p className="text-slate-600 mt-2">
              Your AI assistant for optimizing merchant pricing with intelligent recommendations
            </p>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={handlePredictiveAnalysis}
              className="border-green-300 hover:bg-green-50"
            >
              <Activity className="w-4 h-4 mr-2" />
              AI Predict
            </Button>
            <Button 
              className="bg-green-600 hover:bg-green-700"
              onClick={handleRunAnalysis}
            >
              <Brain className="w-4 h-4 mr-2" />
              Run AI Analysis
            </Button>
          </div>
        </div>

        {/* AI Agent Status */}
        <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center animate-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Agent Status: Optimizing Pricing</h3>
                  <p className="text-sm text-slate-600">Continuously analyzing merchant portfolios and market conditions</p>
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span>Last optimization: 12 min ago</span>
                    <span>Learning from 1,847 pricing decisions</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                ● Active Learning
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* AI Configuration Panel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-600" />
              AI Agent Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="merchant-focus">AI Focus Merchant</Label>
                <Input
                  id="merchant-focus"
                  placeholder="Enter merchant name for focused analysis"
                  value={selectedMerchant}
                  onChange={(e) => setSelectedMerchant(e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="optimization-goal">AI Optimization Goal</Label>
                <select 
                  id="optimization-goal"
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                  value={optimizationGoal}
                  onChange={(e) => setOptimizationGoal(e.target.value)}
                >
                  <option value="profit">Maximize Profit</option>
                  <option value="retention">Minimize Churn Risk</option>
                  <option value="growth">Accelerate Growth</option>
                  <option value="competitive">Stay Competitive</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleRunAnalysis} className="bg-green-600 hover:bg-green-700">
                <Brain className="w-4 h-4 mr-2" />
                AI Analyze All
              </Button>
              <Button variant="outline" onClick={handleMarketBenchmark}>
                <TrendingUp className="w-4 h-4 mr-2" />
                AI Market Benchmark
              </Button>
              <Button variant="outline" onClick={handlePredictiveAnalysis}>
                <Activity className="w-4 h-4 mr-2" />
                AI Future Scenarios
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Analyzed Merchants</p>
                  <p className="text-2xl font-bold text-slate-900">147</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Predicted Improvement</p>
                  <p className="text-2xl font-bold text-slate-900">+1.2%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Revenue Impact</p>
                  <p className="text-2xl font-bold text-slate-900">$2.4M</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Churn Prevention</p>
                  <p className="text-2xl font-bold text-slate-900">-34%</p>
                </div>
                <TrendingDown className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Pricing Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Pricing Optimization Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pricingRecommendations.map((rec) => (
                <div key={rec.id} className="border rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="font-semibold text-slate-900">{rec.merchant}</h3>
                        <Badge variant="secondary">{rec.segment}</Badge>
                        <Badge variant={rec.priority === 'high' ? 'destructive' : rec.priority === 'medium' ? 'default' : 'secondary'}>
                          {rec.priority.toUpperCase()} PRIORITY
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-700">
                          <Bot className="w-3 h-3 mr-1" />
                          AI Confidence: {rec.aiConfidence}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-slate-600">Current Margin</p>
                          <p className="text-lg font-semibold text-red-600">{rec.currentMargin}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Predicted Impact</p>
                          <p className="text-lg font-semibold text-blue-600">{rec.predictedImpact}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Churn Risk</p>
                          <p className="text-lg font-semibold text-orange-600">{rec.churnRisk}</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-1 flex items-center gap-1">
                          <Brain className="w-3 h-3" />
                          AI Rationale:
                        </p>
                        <p className="text-sm text-blue-700">{rec.rationale}</p>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReview(rec)}
                      >
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Ask Agent
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApply(rec)}
                      >
                        <Bot className="w-3 h-3 mr-1" />
                        Apply with AI
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Learning Progress */}
        <Card className="bg-gradient-to-br from-green-600 to-emerald-700 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Agent Learning Progress
                </h3>
                <p className="text-green-100 text-sm mb-3">Your pricing agent is continuously learning from market data and outcomes</p>
                <div className="flex items-center gap-6 text-sm">
                  <span>📊 Analyzed 1,847 pricing decisions</span>
                  <span>🎯 Accuracy improved 12% this month</span>
                  <span>⚡ Processing 42 market signals/hour</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10"
                  onClick={() => toast.success("🧠 AI Learning", { description: "Reviewing latest pricing performance and market changes..." })}
                >
                  <Activity className="w-4 h-4 mr-2" />
                  View Learning
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ClientPricing;
