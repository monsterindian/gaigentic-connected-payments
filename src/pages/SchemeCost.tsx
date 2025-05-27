
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, AlertTriangle, DollarSign, FileText, Bot, MessageSquare, Brain } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";

const SchemeCost = () => {
  const navigate = useNavigate();

  const anomalies = [
    {
      id: 1,
      feeType: "Cross-Border Adjustment Penalty",
      amount: "$2,847.50",
      description: "Unrecognized penalty line - verify against latest Mastercard bulletin",
      severity: "high",
      impact: "Medium",
      aiConfidence: "94%"
    },
    {
      id: 2,
      feeType: "Network Assessment Fee Variance",
      amount: "$1,203.25",
      description: "Rate mismatch: invoiced 0.14% vs model 0.12%",
      severity: "medium",
      impact: "Low",
      aiConfidence: "87%"
    },
    {
      id: 3,
      feeType: "Processing Integrity Fee",
      amount: "$856.00",
      description: "New fee code not in pricing model - requires review",
      severity: "high",
      impact: "High",
      aiConfidence: "96%"
    }
  ];

  const handleReview = (anomaly: any) => {
    navigate(`/anomaly-review?id=${anomaly.id}`);
  };

  const handleResolve = (anomaly: any) => {
    navigate(`/anomaly-resolution?id=${anomaly.id}`);
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-800 rounded-xl flex items-center justify-center">
                <Search className="w-6 h-6 text-white" />
              </div>
              Scheme Cost AI Agent
              <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                <Bot className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </h1>
            <p className="text-slate-600 mt-2">
              Your AI assistant for reconciling card scheme invoices and identifying cost discrepancies
            </p>
          </div>
          <Button 
            className="bg-slate-700 hover:bg-slate-800"
            onClick={() => toast.success("🤖 AI Agent Ready", { description: "Upload your invoice and I'll analyze it for you" })}
          >
            <FileText className="w-4 h-4 mr-2" />
            Upload Invoice for AI Analysis
          </Button>
        </div>

        {/* AI Agent Status */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center animate-pulse">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Agent Status: Actively Monitoring</h3>
                  <p className="text-sm text-slate-600">Continuously analyzing invoices and detecting anomalies</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                ● Online
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card className="shadow-lg border-slate-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Detected Anomalies</p>
                  <p className="text-2xl font-bold text-slate-900">23</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">Financial Impact</p>
                  <p className="text-2xl font-bold text-slate-900">$12.4K</p>
                </div>
                <DollarSign className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Processed Invoices</p>
                  <p className="text-2xl font-bold text-slate-900">847</p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Accuracy Rate</p>
                  <p className="text-2xl font-bold text-slate-900">97.8%</p>
                </div>
                <Bot className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Detected Anomalies */}
        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="text-slate-800 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Detected Anomalies
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-slate-900">{anomaly.feeType}</h3>
                        <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}>
                          {anomaly.severity.toUpperCase()}
                        </Badge>
                        <Badge variant="outline" className="border-slate-300">
                          {anomaly.impact} Impact
                        </Badge>
                        <Badge className="bg-purple-100 text-purple-700">
                          <Bot className="w-3 h-3 mr-1" />
                          AI Confidence: {anomaly.aiConfidence}
                        </Badge>
                      </div>
                      <p className="text-slate-600 text-sm mb-2">{anomaly.description}</p>
                      <p className="text-lg font-semibold text-red-600">{anomaly.amount}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => handleReview(anomaly)}
                      >
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Ask Agent to Review
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-slate-700 hover:bg-slate-800"
                        onClick={() => handleResolve(anomaly)}
                      >
                        <Bot className="w-3 h-3 mr-1" />
                        Let Agent Resolve
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

export default SchemeCost;
