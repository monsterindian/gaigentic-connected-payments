
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft, Activity, AlertTriangle, TrendingUp, Brain, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PredictiveAlerts = () => {
  const navigate = useNavigate();
  const [alertSettings, setAlertSettings] = useState({
    anomalyPrediction: true,
    costSpikes: true,
    marginThreats: false,
    regulatoryChanges: true
  });

  const predictions = [
    {
      type: "Cost Spike",
      probability: "87%",
      timeframe: "Next 7 days",
      description: "Mastercard assessment fees likely to increase by 12% due to volume threshold change",
      impact: "$8,400",
      confidence: "High",
      action: "Prepare pricing adjustments"
    },
    {
      type: "Anomaly Risk",
      probability: "73%",
      timeframe: "Next 3 days",
      description: "Visa processing integrity fees showing unusual pattern - new charge type expected",
      impact: "$2,100",
      confidence: "Medium",
      action: "Monitor closely"
    },
    {
      type: "Margin Opportunity",
      probability: "92%",
      timeframe: "Next 14 days",
      description: "Market conditions favorable for rate optimization on mid-tier merchants",
      impact: "+$15,200",
      confidence: "High",
      action: "Execute pricing strategy"
    }
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
                <Activity className="w-8 h-8 text-purple-600" />
                AI Predictive Alerts
              </h1>
              <p className="text-slate-600 mt-2">
                Proactive AI insights and future event predictions
              </p>
            </div>
          </div>
        </div>

        {/* Alert Configuration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-blue-600" />
              Alert Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Anomaly Prediction</h4>
                  <p className="text-sm text-slate-600">Predict anomalies before they occur</p>
                </div>
                <Switch 
                  checked={alertSettings.anomalyPrediction}
                  onCheckedChange={(checked) => setAlertSettings(prev => ({...prev, anomalyPrediction: checked}))}
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Cost Spike Alerts</h4>
                  <p className="text-sm text-slate-600">Early warning for unexpected costs</p>
                </div>
                <Switch 
                  checked={alertSettings.costSpikes}
                  onCheckedChange={(checked) => setAlertSettings(prev => ({...prev, costSpikes: checked}))}
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Margin Threat Detection</h4>
                  <p className="text-sm text-slate-600">Identify risks to profit margins</p>
                </div>
                <Switch 
                  checked={alertSettings.marginThreats}
                  onCheckedChange={(checked) => setAlertSettings(prev => ({...prev, marginThreats: checked}))}
                />
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Regulatory Changes</h4>
                  <p className="text-sm text-slate-600">Monitor regulatory impact predictions</p>
                </div>
                <Switch 
                  checked={alertSettings.regulatoryChanges}
                  onCheckedChange={(checked) => setAlertSettings(prev => ({...prev, regulatoryChanges: checked}))}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Active Predictions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-purple-600" />
              AI Predictions & Early Warnings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      prediction.type === 'Cost Spike' ? 'bg-red-500' :
                      prediction.type === 'Anomaly Risk' ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <h3 className="font-semibold text-slate-900">{prediction.type}</h3>
                    <Badge variant="outline" className="border-slate-300">
                      {prediction.probability} probability
                    </Badge>
                    <Badge className={`${
                      prediction.confidence === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {prediction.confidence} confidence
                    </Badge>
                  </div>
                  <span className="text-sm text-slate-500">{prediction.timeframe}</span>
                </div>
                
                <p className="text-slate-600 mb-3">{prediction.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-slate-600">Predicted Impact</p>
                    <p className={`font-semibold ${prediction.impact.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                      {prediction.impact}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600">Recommended Action</p>
                    <p className="font-medium text-slate-900">{prediction.action}</p>
                  </div>
                  <div className="flex justify-end">
                    <Button size="sm" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Prediction Accuracy */}
        <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-8 h-8 text-purple-600" />
                <div>
                  <h3 className="font-semibold text-slate-900">AI Prediction Accuracy</h3>
                  <p className="text-sm text-slate-600">Our AI agents maintain high accuracy in future predictions</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-3xl font-bold text-purple-600">94.2%</p>
                <p className="text-sm text-slate-600">30-day accuracy rate</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default PredictiveAlerts;
