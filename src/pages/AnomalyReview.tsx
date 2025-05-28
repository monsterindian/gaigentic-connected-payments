
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Eye, CheckCircle, XCircle, AlertTriangle, DollarSign, FileText } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const AnomalyReview = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const anomalyId = searchParams.get('id');
  
  const [anomaly, setAnomaly] = useState<any>(null);
  const [notes, setNotes] = useState("");

  useEffect(() => {
    const mockAnomalies = {
      "1": {
        id: 1,
        feeType: "Cross-Border Adjustment Penalty",
        amount: "$2,847.50",
        description: "Unrecognized penalty line - verify against latest Mastercard bulletin",
        severity: "high",
        impact: "Medium",
        invoiceRef: "MC-2024-Q1-001",
        detectedDate: "2024-01-15",
        schemeProvider: "Mastercard",
        transactionVolume: "45,230",
        expectedAmount: "$2,120.00",
        variance: "$727.50",
        relatedFeeLines: [
          {
            lineCode: "CBP-001",
            description: "Cross-Border Processing Fee",
            agreementRate: "0.47%",
            invoicedRate: "0.47%",
            status: "matched"
          },
          {
            lineCode: "CBP-ADJ-NEW",
            description: "Cross-Border Adjustment Penalty (New)",
            agreementRate: "Not defined",
            invoicedRate: "0.16%",
            status: "unrecognized"
          },
          {
            lineCode: "FX-RISK-001",
            description: "Foreign Exchange Risk Fee",
            agreementRate: "0.15%",
            invoicedRate: "0.15%",
            status: "matched"
          }
        ]
      },
      "2": {
        id: 2,
        feeType: "Network Assessment Fee Variance",
        amount: "$1,203.25",
        description: "Rate mismatch: invoiced 0.14% vs model 0.12%",
        severity: "medium",
        impact: "Low",
        invoiceRef: "VISA-2024-Q1-003",
        detectedDate: "2024-01-18",
        schemeProvider: "Visa",
        transactionVolume: "89,150",
        expectedAmount: "$1,069.80",
        variance: "$133.45",
        relatedFeeLines: [
          {
            lineCode: "NAF-001",
            description: "Network Assessment Fee",
            agreementRate: "0.12%",
            invoicedRate: "0.14%",
            status: "variance"
          }
        ]
      },
      "3": {
        id: 3,
        feeType: "Processing Integrity Fee",
        amount: "$856.00",
        description: "New fee code not in pricing model - requires review",
        severity: "high",
        impact: "High",
        invoiceRef: "MC-2024-Q1-005",
        detectedDate: "2024-01-20",
        schemeProvider: "Mastercard",
        transactionVolume: "12,450",
        expectedAmount: "$0.00",
        variance: "$856.00",
        relatedFeeLines: [
          {
            lineCode: "PIF-2024-NEW",
            description: "Processing Integrity Fee (2024)",
            agreementRate: "Not defined",
            invoicedRate: "6.88 bps",
            status: "new"
          }
        ]
      }
    };
    
    const data = mockAnomalies[anomalyId as keyof typeof mockAnomalies];
    if (data) {
      setAnomaly(data);
    }
  }, [anomalyId]);

  const handleApprove = () => {
    toast.success("Anomaly Approved", {
      description: `${anomaly?.feeType} has been approved and will be accepted`
    });
    navigate('/scheme-cost');
  };

  const handleReject = () => {
    toast.success("Anomaly Rejected", {
      description: `${anomaly?.feeType} has been flagged for dispute`
    });
    navigate('/scheme-cost');
  };

  if (!anomaly) {
    return (
      <Layout>
        <DashboardHeader />
        <div className="p-6">
          <p>Anomaly not found</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/scheme-cost')}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Scheme Cost
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Eye className="w-8 h-8 text-blue-600" />
                Anomaly Review
              </h1>
              <p className="text-slate-600 mt-2">
                Detailed analysis and resolution of pricing discrepancy
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={handleReject}
              className="border-red-200 text-red-700 hover:bg-red-50"
            >
              <XCircle className="w-4 h-4 mr-2" />
              Reject & Dispute
            </Button>
            <Button 
              onClick={handleApprove}
              className="bg-green-600 hover:bg-green-700"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Approve & Accept
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Anomaly Details */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{anomaly.feeType}</CardTitle>
                <div className="flex gap-2">
                  <Badge variant={anomaly.severity === 'high' ? 'destructive' : 'secondary'}>
                    {anomaly.severity.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className="border-slate-300">
                    {anomaly.impact} Impact
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
                <p className="text-slate-600">{anomaly.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Expected Amount</p>
                  <p className="text-2xl font-bold text-slate-900">{anomaly.expectedAmount}</p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Invoiced Amount</p>
                  <p className="text-2xl font-bold text-red-600">{anomaly.amount}</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Variance</p>
                  <p className="text-2xl font-bold text-orange-600">{anomaly.variance}</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-slate-600">Transaction Volume</p>
                  <p className="text-2xl font-bold text-blue-600">{anomaly.transactionVolume}</p>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Review Notes</h3>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Add your analysis and recommendations..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Invoice Information */}
          <Card>
            <CardHeader>
              <CardTitle>Invoice Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm font-medium text-slate-600">Invoice Reference</p>
                <p className="text-slate-900">{anomaly.invoiceRef}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Scheme Provider</p>
                <p className="text-slate-900">{anomaly.schemeProvider}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Detected Date</p>
                <p className="text-slate-900">{anomaly.detectedDate}</p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Risk Assessment</p>
                <div className="flex items-center gap-2 mt-1">
                  <AlertTriangle className={`w-4 h-4 ${anomaly.severity === 'high' ? 'text-red-500' : 'text-yellow-500'}`} />
                  <span className="capitalize">{anomaly.severity} Risk</span>
                </div>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Financial Impact</p>
                <div className="flex items-center gap-2 mt-1">
                  <DollarSign className="w-4 h-4 text-red-500" />
                  <span className="text-red-600 font-semibold">{anomaly.amount}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Related Fee Lines from Agreement */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-blue-600" />
              Related Fee Lines from Agreement
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {anomaly.relatedFeeLines?.map((feeLine: any, index: number) => (
                <div key={index} className="border rounded-lg p-4 bg-slate-50">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="font-semibold text-slate-900">{feeLine.lineCode}</p>
                      <p className="text-sm text-slate-600">{feeLine.description}</p>
                    </div>
                    <Badge 
                      variant={
                        feeLine.status === 'matched' ? 'default' : 
                        feeLine.status === 'variance' ? 'secondary' : 
                        'destructive'
                      }
                      className={
                        feeLine.status === 'matched' ? 'bg-green-100 text-green-800' :
                        feeLine.status === 'variance' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }
                    >
                      {feeLine.status === 'matched' ? 'MATCHED' : 
                       feeLine.status === 'variance' ? 'VARIANCE' : 
                       feeLine.status === 'unrecognized' ? 'UNRECOGNIZED' : 'NEW'}
                    </Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-600">Agreement Rate</p>
                      <p className={`font-medium ${feeLine.agreementRate === 'Not defined' ? 'text-red-600' : 'text-slate-900'}`}>
                        {feeLine.agreementRate}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-600">Invoiced Rate</p>
                      <p className={`font-medium ${feeLine.status === 'variance' || feeLine.status === 'unrecognized' || feeLine.status === 'new' ? 'text-red-600' : 'text-slate-900'}`}>
                        {feeLine.invoicedRate}
                      </p>
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

export default AnomalyReview;
