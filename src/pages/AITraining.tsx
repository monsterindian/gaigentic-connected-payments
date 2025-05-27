
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Upload, Play, Pause, BookOpen, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/sonner";
import { useState } from "react";

const AITraining = () => {
  const navigate = useNavigate();
  const [trainingActive, setTrainingActive] = useState(false);

  const startTraining = () => {
    setTrainingActive(true);
    toast.success("🎓 AI Training Started", {
      description: "All agents are now learning from latest market data..."
    });
  };

  const pauseTraining = () => {
    setTrainingActive(false);
    toast.info("⏸️ Training Paused", {
      description: "AI training has been paused. Resume when ready."
    });
  };

  const trainingModules = [
    { name: "Scheme Fee Recognition", progress: 94, status: "active" },
    { name: "Anomaly Pattern Learning", progress: 87, status: "active" },
    { name: "Pricing Optimization", progress: 92, status: "completed" },
    { name: "Risk Assessment", progress: 76, status: "in-progress" },
    { name: "Regulatory Compliance", progress: 100, status: "completed" }
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
                <Brain className="w-8 h-8 text-purple-600" />
                AI Agent Training Center
              </h1>
              <p className="text-slate-600 mt-2">
                Train and optimize your AI agents with the latest financial data
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            {trainingActive ? (
              <Button 
                variant="outline"
                onClick={pauseTraining}
                className="border-orange-300 text-orange-700 hover:bg-orange-50"
              >
                <Pause className="w-4 h-4 mr-2" />
                Pause Training
              </Button>
            ) : (
              <Button 
                onClick={startTraining}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Training
              </Button>
            )}
          </div>
        </div>

        {/* Training Status */}
        <Card className={`${trainingActive ? 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200' : 'bg-slate-50'}`}>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${trainingActive ? 'bg-gradient-to-br from-purple-500 to-blue-600 animate-pulse' : 'bg-slate-400'}`}>
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Training Status: {trainingActive ? 'Active Learning' : 'Standby'}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {trainingActive ? 'Agents are actively processing new patterns' : 'Ready to begin training session'}
                  </p>
                </div>
              </div>
              <Badge className={trainingActive ? 'bg-green-100 text-green-800' : 'bg-slate-100 text-slate-700'}>
                {trainingActive ? '● Training' : '○ Idle'}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Training Modules */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-blue-600" />
              Training Modules
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {trainingModules.map((module, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium text-slate-900">{module.name}</h4>
                    <Badge 
                      variant={module.status === 'completed' ? 'default' : 'secondary'}
                      className={
                        module.status === 'completed' ? 'bg-green-100 text-green-800' :
                        module.status === 'active' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }
                    >
                      {module.status}
                    </Badge>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${module.status === 'completed' ? 'bg-green-600' : 'bg-blue-600'}`}
                      style={{ width: `${module.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-slate-600 mt-1">{module.progress}% complete</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Training Data Upload */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Upload className="w-5 h-5 text-green-600" />
              Upload Training Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-slate-300 rounded-lg p-8 text-center">
              <Upload className="w-12 h-12 text-slate-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-slate-900 mb-2">Upload New Training Data</h3>
              <p className="text-slate-600 mb-4">
                Upload scheme bulletins, pricing models, or transaction data to improve AI performance
              </p>
              <Button className="bg-green-600 hover:bg-green-700">
                <Upload className="w-4 h-4 mr-2" />
                Select Files
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <Target className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-medium">Scheme Data</h4>
                <p className="text-sm text-slate-600">Card scheme bulletins and fee updates</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <Target className="w-8 h-8 text-green-600 mb-2" />
                <h4 className="font-medium">Transaction Data</h4>
                <p className="text-sm text-slate-600">Historical transaction patterns</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <Target className="w-8 h-8 text-purple-600 mb-2" />
                <h4 className="font-medium">Market Data</h4>
                <p className="text-sm text-slate-600">Industry benchmarks and trends</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default AITraining;
