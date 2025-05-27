import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search, AlertTriangle, DollarSign, FileText, Bot, MessageSquare, Brain, Upload, Zap, Activity, TrendingUp, Target } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SchemeCost = () => {
  const navigate = useNavigate();
  const [invoiceFile, setInvoiceFile] = useState<File | null>(null);
  const [analysisMode, setAnalysisMode] = useState("comprehensive");

  const anomalies = [
    {
      id: 1,
      feeType: "Cross-Border Adjustment Penalty",
      amount: "$2,847.50",
      description: "Unrecognized penalty line - verify against latest Mastercard bulletin",
      severity: "high",
      impact: "Medium",
      aiConfidence: "94%",
      predictedCause: "New fee structure not in model",
      suggestedAction: "Update pricing model immediately"
    },
    {
      id: 2,
      feeType: "Network Assessment Fee Variance",
      amount: "$1,203.25",
      description: "Rate mismatch: invoiced 0.14% vs model 0.12%",
      severity: "medium",
      impact: "Low",
      aiConfidence: "87%",
      predictedCause: "Tier volume threshold change",
      suggestedAction: "Renegotiate tier terms"
    },
    {
      id: 3,
      feeType: "Processing Integrity Fee",
      amount: "$856.00",
      description: "New fee code not in pricing model - requires review",
      severity: "high",
      impact: "High",
      aiConfidence: "96%",
      predictedCause: "New regulatory requirement",
      suggestedAction: "Pass through to merchants"
    }
  ];

  const handleReview = (anomaly: any) => {
    navigate(`/anomaly-review?id=${anomaly.id}`);
  };

  const handleResolve = (anomaly: any) => {
    navigate(`/anomaly-resolution?id=${anomaly.id}`);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setInvoiceFile(file);
      toast.success("🤖 AI Agent Processing", {
        description: `Analyzing ${file.name} with advanced ML algorithms...`
      });
    }
  };

  const handleAIAnalysis = () => {
    navigate('/ai-performance');
  };

  const handlePredictiveAlert = () => {
    navigate('/predictive-alerts');
  };

  const handleBulkReconciliation = () => {
    navigate('/bulk-processing');
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
          <div className="flex gap-2">
            <Button 
              variant="outline"
              onClick={handlePredictiveAlert}
              className="border-blue-300 hover:bg-blue-50"
            >
              <Activity className="w-4 h-4 mr-2" />
              AI Predict
            </Button>
            <Button 
              className="bg-slate-700 hover:bg-slate-800"
              onClick={() => document.getElementById('invoice-upload')?.click()}
            >
              <Upload className="w-4 h-4 mr-2" />
              AI Analyze Invoice
            </Button>
            <input
              id="invoice-upload"
              type="file"
              accept=".pdf,.xlsx,.csv"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
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
                  <div className="flex items-center gap-4 mt-1 text-xs text-slate-500">
                    <span>Last scan: 3 min ago</span>
                    <span>Processing rate: 97 invoices/hour</span>
                    <span>Learning from 12,847 patterns</span>
                  </div>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800">
                ● Online & Learning
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
                <Label htmlFor="analysis-mode">AI Analysis Mode</Label>
                <select 
                  id="analysis-mode"
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                  value={analysisMode}
                  onChange={(e) => setAnalysisMode(e.target.value)}
                >
                  <option value="comprehensive">Comprehensive Deep Scan</option>
                  <option value="quick">Quick Pattern Detection</option>
                  <option value="predictive">Predictive Analysis</option>
                  <option value="comparative">Comparative Analysis</option>
                </select>
              </div>
              <div>
                <Label htmlFor="sensitivity">AI Sensitivity Level</Label>
                <select 
                  id="sensitivity"
                  className="w-full mt-1 px-3 py-2 border border-slate-300 rounded-md"
                >
                  <option value="high">High (Catch Everything)</option>
                  <option value="medium">Medium (Balanced)</option>
                  <option value="low">Low (Major Issues Only)</option>
                </select>
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={handleAIAnalysis} className="bg-slate-700 hover:bg-slate-800">
                <Brain className="w-4 h-4 mr-2" />
                AI Deep Scan
              </Button>
              <Button variant="outline" onClick={handleBulkReconciliation}>
                <Zap className="w-4 h-4 mr-2" />
                AI Bulk Process
              </Button>
              <Button variant="outline" onClick={handlePredictiveAlert}>
                <Activity className="w-4 h-4 mr-2" />
                AI Future Alerts
              </Button>
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
                  <p className="text-xs text-green-600">↓ 12% this week</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-500" />
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-600">AI Saved Costs</p>
                  <p className="text-2xl font-bold text-slate-900">$47.2K</p>
                  <p className="text-xs text-green-600">↑ 8% this month</p>
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
                  <p className="text-xs text-blue-600">+156 this week</p>
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
                  <p className="text-xs text-green-600">↑ 0.3% improvement</p>
                </div>
                <Target className="w-8 h-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Detected Anomalies */}
        <Card className="shadow-lg border-slate-200">
          <CardHeader className="bg-slate-50 border-b border-slate-200">
            <CardTitle className="text-slate-800 flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Detected Anomalies & Intelligent Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {anomalies.map((anomaly) => (
                <div key={anomaly.id} className="border border-slate-200 rounded-lg p-4 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
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
                      
                      <p className="text-slate-600 text-sm mb-3">{anomaly.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-slate-600">Financial Impact</p>
                          <p className="text-lg font-semibold text-red-600">{anomaly.amount}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">AI Predicted Cause</p>
                          <p className="text-sm font-medium text-slate-800">{anomaly.predictedCause}</p>
                        </div>
                        <div>
                          <p className="text-sm text-slate-600">AI Suggested Action</p>
                          <p className="text-sm font-medium text-blue-600">{anomaly.suggestedAction}</p>
                        </div>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-1 flex items-center gap-1">
                          <Brain className="w-3 h-3" />
                          AI Analysis Complete - Ready for human review
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="border-slate-300 hover:bg-slate-100"
                        onClick={() => handleReview(anomaly)}
                      >
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Ask Agent Details
                      </Button>
                      <Button 
                        size="sm" 
                        className="bg-slate-700 hover:bg-slate-800"
                        onClick={() => handleResolve(anomaly)}
                      >
                        <Bot className="w-3 h-3 mr-1" />
                        Auto-Resolve with AI
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Learning & Performance */}
        <Card className="bg-gradient-to-br from-slate-600 to-slate-800 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  AI Agent Performance & Learning
                </h3>
                <p className="text-slate-200 text-sm mb-3">Your scheme cost agent is continuously improving through machine learning</p>
                <div className="flex items-center gap-6 text-sm">
                  <span>🎯 Detected 847 anomalies this month</span>
                  <span>⚡ 97.8% accuracy rate</span>
                  <span>📚 Learning from 50+ scheme bulletins</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10"
                  onClick={() => toast.success("📊 AI Performance", { description: "Viewing detailed performance metrics and learning progress..." })}
                >
                  <Activity className="w-4 h-4 mr-2" />
                  View AI Metrics
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default SchemeCost;
