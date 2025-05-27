
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, TrendingUp, Target } from "lucide-react";
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
      priority: "high"
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
      priority: "medium"
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
      priority: "low"
    }
  ];

  const handleReview = (recommendation: any) => {
    toast.success("Review Started", {
      description: `Reviewing pricing for ${recommendation.merchant}`
    });
  };

  const handleApply = (recommendation: any) => {
    toast.success("Pricing Applied", {
      description: `New pricing structure applied for ${recommendation.merchant}`
    });
  };

  const handleRunAnalysis = () => {
    toast.success("Analysis Started", {
      description: "Running comprehensive pricing analysis across all merchants"
    });
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <DollarSign className="w-8 h-8 text-green-600" />
              Client Pricing Assistant
            </h1>
            <p className="text-slate-600 mt-2">
              Optimize merchant pricing with AI-driven recommendations based on risk profiles and market benchmarks
            </p>
          </div>
          <Button 
            className="bg-green-600 hover:bg-green-700"
            onClick={handleRunAnalysis}
          >
            <Target className="w-4 h-4 mr-2" />
            Run Analysis
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Merchants Analyzed</p>
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
                  <p className="text-sm font-medium text-slate-600">Avg Margin Improvement</p>
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
                  <p className="text-sm font-medium text-slate-600">Revenue Impact</p>
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
                  <p className="text-sm font-medium text-slate-600">Recommendations</p>
                  <p className="text-2xl font-bold text-slate-900">34</p>
                </div>
                <Target className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pricing Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle>Pricing Optimization Recommendations</CardTitle>
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
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-slate-600">Current Margin</p>
                          <p className="text-lg font-semibold text-red-600">{rec.currentMargin}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">Recommended Margin</p>
                          <p className="text-lg font-semibold text-green-600">{rec.recommendedMargin}</p>
                        </div>
                      </div>
                      
                      <div className="mb-3">
                        <p className="text-sm font-medium text-slate-700 mb-1">Suggested Adjustments:</p>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {rec.adjustments.map((adj, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                              {adj}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <p className="text-sm text-slate-600 italic">{rec.rationale}</p>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleReview(rec)}
                      >
                        Review
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-green-600 hover:bg-green-700"
                        onClick={() => handleApply(rec)}
                      >
                        Apply
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
