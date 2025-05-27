
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Zap, FileText, CheckCircle, Clock, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const BulkProcessing = () => {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);

  const startBulkProcessing = () => {
    setProcessing(true);
    setProgress(0);
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setProcessing(false);
          toast.success("✅ Bulk Processing Complete", {
            description: "All 47 invoices processed successfully with AI analysis"
          });
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const pendingInvoices = [
    { id: "MC-2024-001", provider: "Mastercard", amount: "$24,567", status: "pending", priority: "high" },
    { id: "VISA-2024-003", provider: "Visa", amount: "$18,234", status: "pending", priority: "medium" },
    { id: "MC-2024-002", provider: "Mastercard", amount: "$31,890", status: "processing", priority: "high" },
    { id: "AMEX-2024-001", provider: "American Express", amount: "$9,456", status: "pending", priority: "low" },
    { id: "VISA-2024-004", provider: "Visa", amount: "$22,108", status: "completed", priority: "medium" }
  ];

  const processingStats = {
    total: 47,
    completed: 12,
    processing: 8,
    pending: 27,
    anomaliesFound: 5,
    costsSaved: "$12,340"
  };

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
                <Zap className="w-8 h-8 text-yellow-600" />
                AI Bulk Processing Center
              </h1>
              <p className="text-slate-600 mt-2">
                Process multiple invoices simultaneously with AI automation
              </p>
            </div>
          </div>
          <Button 
            onClick={startBulkProcessing}
            disabled={processing}
            className="bg-yellow-600 hover:bg-yellow-700"
          >
            <Zap className="w-4 h-4 mr-2" />
            {processing ? 'Processing...' : 'Start Bulk Process'}
          </Button>
        </div>

        {/* Processing Status */}
        {processing && (
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center animate-spin">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">AI Bulk Processing Active</h3>
                  <p className="text-sm text-slate-600">Processing invoices with advanced AI algorithms</p>
                </div>
              </div>
              <Progress value={progress} className="w-full" />
              <p className="text-sm text-slate-600 mt-2">{progress}% complete</p>
            </CardContent>
          </Card>
        )}

        {/* Processing Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{processingStats.total}</p>
              <p className="text-sm text-slate-600">Total Invoices</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <CheckCircle className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{processingStats.completed}</p>
              <p className="text-sm text-slate-600">Completed</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{processingStats.processing}</p>
              <p className="text-sm text-slate-600">Processing</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <FileText className="w-8 h-8 text-slate-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{processingStats.pending}</p>
              <p className="text-sm text-slate-600">Pending</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <AlertTriangle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{processingStats.anomaliesFound}</p>
              <p className="text-sm text-slate-600">Anomalies</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <Zap className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">{processingStats.costsSaved}</p>
              <p className="text-sm text-slate-600">Costs Saved</p>
            </CardContent>
          </Card>
        </div>

        {/* Invoice Queue */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Processing Queue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingInvoices.map((invoice, index) => (
                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50">
                  <div className="flex items-center gap-4">
                    <div className={`w-3 h-3 rounded-full ${
                      invoice.status === 'completed' ? 'bg-green-500' :
                      invoice.status === 'processing' ? 'bg-yellow-500 animate-pulse' : 'bg-slate-300'
                    }`}></div>
                    <div>
                      <p className="font-medium text-slate-900">{invoice.id}</p>
                      <p className="text-sm text-slate-600">{invoice.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold text-slate-900">{invoice.amount}</p>
                    <Badge 
                      variant={invoice.priority === 'high' ? 'destructive' : 
                               invoice.priority === 'medium' ? 'default' : 'secondary'}
                    >
                      {invoice.priority}
                    </Badge>
                    <Badge 
                      variant="outline"
                      className={
                        invoice.status === 'completed' ? 'border-green-300 text-green-700' :
                        invoice.status === 'processing' ? 'border-yellow-300 text-yellow-700' :
                        'border-slate-300 text-slate-700'
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Processing Features */}
        <Card className="bg-gradient-to-br from-blue-600 to-purple-700 text-white">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              AI Bulk Processing Capabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <h4 className="font-medium mb-1">Automated Recognition</h4>
                <p className="text-sm text-blue-100">AI identifies fee types and validates amounts</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Anomaly Detection</h4>
                <p className="text-sm text-blue-100">Real-time identification of discrepancies</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Smart Reconciliation</h4>
                <p className="text-sm text-blue-100">Automated matching with internal models</p>
              </div>
              <div>
                <h4 className="font-medium mb-1">Predictive Analysis</h4>
                <p className="text-sm text-blue-100">Forecasts potential issues before they occur</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default BulkProcessing;
