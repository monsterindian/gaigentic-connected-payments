
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Activity, Brain, TrendingUp, Target, Zap, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AIPerformance = () => {
  const navigate = useNavigate();

  const performanceMetrics = [
    { agent: "Scheme Cost Agent", accuracy: "97.8%", tasksCompleted: 847, costsSaved: "$47.2K", trend: "+0.3%" },
    { agent: "Pricing Agent", accuracy: "94.2%", tasksCompleted: 423, revenueOptimized: "$128K", trend: "+1.2%" },
    { agent: "Margin Agent", accuracy: "91.5%", tasksCompleted: 156, riskReduced: "23%", trend: "+0.8%" }
  ];

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Activity className="w-8 h-8 text-blue-600" />
                AI Agent Performance Dashboard
              </h1>
              <p className="text-slate-600 mt-2">
                Detailed analytics and performance metrics for all AI agents
              </p>
            </div>
          </div>
        </div>

        {/* Overall Performance */}
        <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-900">97.2%</p>
                <p className="text-sm text-slate-600">Average AI Accuracy</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-900">1,426</p>
                <p className="text-sm text-slate-600">Tasks Completed</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-900">$175K</p>
                <p className="text-sm text-slate-600">Value Generated</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <p className="text-2xl font-bold text-slate-900">99.9%</p>
                <p className="text-sm text-slate-600">System Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Individual Agent Performance */}
        <div className="space-y-6">
          {performanceMetrics.map((agent, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <Brain className="w-5 h-5 text-blue-600" />
                    {agent.agent}
                  </span>
                  <Badge className="bg-green-100 text-green-800">
                    Active
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div>
                    <p className="text-sm text-slate-600">Accuracy Rate</p>
                    <p className="text-2xl font-bold text-slate-900">{agent.accuracy}</p>
                    <p className="text-xs text-green-600">{agent.trend} improvement</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Tasks Completed</p>
                    <p className="text-2xl font-bold text-slate-900">{agent.tasksCompleted}</p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Value Impact</p>
                    <p className="text-2xl font-bold text-green-600">
                      {agent.costsSaved || agent.revenueOptimized || agent.riskReduced}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Status</p>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm">Learning & Processing</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Progress */}
        <Card>
          <CardHeader>
            <CardTitle>AI Learning Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Pattern Recognition</span>
                  <span>94%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '94%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Anomaly Detection</span>
                  <span>97%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '97%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Predictive Modeling</span>
                  <span>89%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                  <div className="bg-purple-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AIPerformance;
