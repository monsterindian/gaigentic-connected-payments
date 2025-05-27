
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, Target, Bot, Brain, MessageSquare, Sparkles } from "lucide-react";
import { toast } from "@/components/ui/sonner";

const ClientPricing = () => {
  const pricingRecommendations = [
    {
      id: 1,
      merchant: "TechCorp LATAM",
      segment: "eCommerce",
      currentMargin: "2.1%",
      recommendedMargin: "3.2%",
      adjustments: [
        "Cross-border fee: 0.75% → 0.90%",
        "FX markup: 2.5% → 2.8%"
      ],
      rationale: "High-risk profile justifies higher cross-border fee for FX exposure",
      priority: "high",
      aiConfidence: "92%"
    },
    {
      id: 2,
      merchant: "RetailPlus EU",
      segment: "Retail",
      currentMargin: "3.8%",
      recommendedMargin: "4.1%",
      adjustments: [
        "Interchange markup: 0.4% → 0.5%"
      ],
      rationale: "Volume tier qualification allows for competitive rate adjustment",
      priority: "medium",
      aiConfidence: "88%"
    },
    {
      id: 3,
      merchant: "FinServices Inc",
      segment: "Financial",
      currentMargin: "4.2%",
      recommendedMargin: "4.5%",
      adjustments: [
        "Risk assessment fee: 0.25% → 0.35%"
      ],
      rationale: "Regulatory compliance costs require margin adjustment",
      priority: "low",
      aiConfidence: "85%"
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
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleRunAnalysis}
          >
            <Brain className="w-4 h-4 mr-2" />
            Run AI Analysis
          </Button>
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
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                ● Active Learning
              </Badge>
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
                  <p className="text-sm font-medium text-slate-600">AI Recommendations</p>
                  <p className="text-2xl font-bold text-slate-900">34</p>
                </div>
                <Bot className="w-8 h-8 text-purple-500" />
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
                      <div className="flex items-center gap-3 mb-2">
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
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-slate-600">Current Margin</p>
                          <p className="text-lg font-semibold text-red-600">{rec.currentMargin}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">AI Recommended Margin</p>
                          <p className="text-lg font-semibold text-green-600">{rec.recommendedMargin}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-slate-700 mb-1 flex items-center gap-1">
                          <Bot className="w-3 h-3" />
                          AI Suggested Adjustments:
                        </p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {rec.adjustments.map((adj, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                              {adj}
                            </li>
                          ))}
                        </ul>
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
                        Ask Agent to Review
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApply(rec)}
                      >
                        <Bot className="w-3 h-3 mr-1" />
                        Let Agent Apply
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default ClientPricing;
