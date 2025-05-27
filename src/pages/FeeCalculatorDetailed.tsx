
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, ArrowLeft, Download } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "@/components/ui/sonner";

const FeeCalculatorDetailed = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scenarioId = searchParams.get('scenarioId');
  
  const [calculationParams, setCalculationParams] = useState({
    transactionAmount: "1000",
    cardType: "visa",
    region: "domestic",
    merchantType: "retail",
    volume: "100000",
    averageTicket: "50"
  });
  
  const [results, setResults] = useState<any>(null);

  useEffect(() => {
    if (scenarioId) {
      // Auto-populate based on scenario
      calculateFees();
    }
  }, [scenarioId]);

  const calculateFees = () => {
    const amount = parseFloat(calculationParams.transactionAmount);
    const volume = parseFloat(calculationParams.volume);
    const avgTicket = parseFloat(calculationParams.averageTicket);
    
    // Base rates
    let interchangeRate = 0.012; // 1.2%
    let schemeRate = 0.003; // 0.3%
    let processingRate = 0.008; // 0.8%
    let crossBorderRate = 0;
    
    // Adjust rates based on parameters
    if (calculationParams.cardType === "amex") {
      interchangeRate = 0.025;
    }
    
    if (calculationParams.region === "international") {
      crossBorderRate = 0.005;
    }
    
    if (calculationParams.merchantType === "ecommerce") {
      processingRate = 0.012;
    }
    
    // Volume discounts
    if (volume > 50000) {
      interchangeRate *= 0.95; // 5% discount
    }
    
    const interchangeFee = amount * interchangeRate;
    const schemeFee = amount * schemeRate;
    const processingFee = amount * processingRate;
    const crossBorderFee = amount * crossBorderRate;
    
    const totalFeePerTransaction = interchangeFee + schemeFee + processingFee + crossBorderFee;
    const totalFeePercentage = (totalFeePerTransaction / amount) * 100;
    
    // Monthly projections
    const monthlyTransactions = volume / avgTicket;
    const monthlyFees = monthlyTransactions * totalFeePerTransaction;
    const monthlyRevenue = volume;
    const netRevenue = monthlyRevenue - monthlyFees;
    
    setResults({
      perTransaction: {
        amount,
        interchangeFee,
        schemeFee,
        processingFee,
        crossBorderFee,
        totalFee: totalFeePerTransaction,
        feePercentage: totalFeePercentage,
        netAmount: amount - totalFeePerTransaction
      },
      monthly: {
        transactions: monthlyTransactions,
        volume: monthlyRevenue,
        totalFees: monthlyFees,
        netRevenue,
        averageFeePerTransaction: totalFeePerTransaction
      },
      breakdown: {
        interchangeRate: interchangeRate * 100,
        schemeRate: schemeRate * 100,
        processingRate: processingRate * 100,
        crossBorderRate: crossBorderRate * 100
      }
    });
    
    toast.success("Calculation Complete", {
      description: "Fee breakdown has been calculated"
    });
  };

  const exportResults = () => {
    toast.success("Export Started", {
      description: "Downloading fee calculation results..."
    });
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate(-1)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <Calculator className="w-8 h-8 text-orange-600" />
                Detailed Fee Calculator
              </h1>
              <p className="text-slate-600 mt-2">
                Comprehensive fee analysis with scenario modeling
              </p>
            </div>
          </div>
          {results && (
            <Button onClick={exportResults} className="bg-orange-600 hover:bg-orange-700">
              <Download className="w-4 h-4 mr-2" />
              Export Results
            </Button>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Parameters */}
          <Card>
            <CardHeader>
              <CardTitle>Calculation Parameters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="amount">Transaction Amount ($)</Label>
                <Input
                  id="amount"
                  type="number"
                  value={calculationParams.transactionAmount}
                  onChange={(e) => setCalculationParams(prev => ({ ...prev, transactionAmount: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="cardType">Card Type</Label>
                <Select 
                  value={calculationParams.cardType} 
                  onValueChange={(value) => setCalculationParams(prev => ({ ...prev, cardType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="visa">Visa</SelectItem>
                    <SelectItem value="mastercard">Mastercard</SelectItem>
                    <SelectItem value="amex">American Express</SelectItem>
                    <SelectItem value="discover">Discover</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="region">Region</Label>
                <Select 
                  value={calculationParams.region} 
                  onValueChange={(value) => setCalculationParams(prev => ({ ...prev, region: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">Domestic</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="merchantType">Merchant Type</Label>
                <Select 
                  value={calculationParams.merchantType} 
                  onValueChange={(value) => setCalculationParams(prev => ({ ...prev, merchantType: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="ecommerce">eCommerce</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="fuel">Fuel Station</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="volume">Monthly Volume ($)</Label>
                <Input
                  id="volume"
                  type="number"
                  value={calculationParams.volume}
                  onChange={(e) => setCalculationParams(prev => ({ ...prev, volume: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="avgTicket">Average Ticket ($)</Label>
                <Input
                  id="avgTicket"
                  type="number"
                  value={calculationParams.averageTicket}
                  onChange={(e) => setCalculationParams(prev => ({ ...prev, averageTicket: e.target.value }))}
                />
              </div>

              <Button onClick={calculateFees} className="w-full bg-orange-600 hover:bg-orange-700">
                Calculate Fees
              </Button>
            </CardContent>
          </Card>

          {/* Per Transaction Results */}
          <Card>
            <CardHeader>
              <CardTitle>Per Transaction</CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Transaction Amount</p>
                      <p className="text-lg font-semibold">${results.perTransaction.amount.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Total Fee %</p>
                      <p className="text-lg font-semibold text-red-600">{results.perTransaction.feePercentage.toFixed(2)}%</p>
                    </div>
                  </div>

                  <div className="space-y-2 border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Interchange ({results.breakdown.interchangeRate.toFixed(2)}%)</span>
                      <span className="font-medium">${results.perTransaction.interchangeFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Scheme ({results.breakdown.schemeRate.toFixed(2)}%)</span>
                      <span className="font-medium">${results.perTransaction.schemeFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Processing ({results.breakdown.processingRate.toFixed(2)}%)</span>
                      <span className="font-medium">${results.perTransaction.processingFee.toFixed(2)}</span>
                    </div>
                    {results.perTransaction.crossBorderFee > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cross-Border ({results.breakdown.crossBorderRate.toFixed(2)}%)</span>
                        <span className="font-medium">${results.perTransaction.crossBorderFee.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Fee</span>
                      <span className="text-red-600">${results.perTransaction.totalFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                      <span>Net Amount</span>
                      <span className="text-green-600">${results.perTransaction.netAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Enter parameters to calculate fees</p>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Monthly Projections */}
          <Card>
            <CardHeader>
              <CardTitle>Monthly Projections</CardTitle>
            </CardHeader>
            <CardContent>
              {results ? (
                <div className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">Monthly Volume</p>
                    <p className="text-xl font-bold text-slate-900">${results.monthly.volume.toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-sm text-slate-600">Total Transactions</p>
                    <p className="text-xl font-bold text-slate-900">{Math.round(results.monthly.transactions).toLocaleString()}</p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-600">Total Fees</p>
                    <p className="text-xl font-bold text-red-600">${results.monthly.totalFees.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600">Net Revenue</p>
                    <p className="text-xl font-bold text-green-600">${results.monthly.netRevenue.toLocaleString(undefined, {maximumFractionDigits: 0})}</p>
                  </div>
                  
                  <div className="text-center text-sm text-slate-600">
                    Average fee per transaction: ${results.monthly.averageFeePerTransaction.toFixed(2)}
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-slate-500">Monthly projections will appear here</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FeeCalculatorDetailed;
