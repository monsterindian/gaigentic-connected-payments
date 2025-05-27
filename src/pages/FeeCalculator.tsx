
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calculator, DollarSign } from "lucide-react";
import { useState } from "react";

const FeeCalculator = () => {
  const [transactionAmount, setTransactionAmount] = useState("");
  const [cardType, setCardType] = useState("");
  const [region, setRegion] = useState("");
  const [merchantType, setMerchantType] = useState("");
  const [calculatedFees, setCalculatedFees] = useState<any>(null);

  const calculateFees = () => {
    const amount = parseFloat(transactionAmount);
    if (!amount || !cardType || !region || !merchantType) return;

    // Mock calculation logic
    const interchangeFee = amount * 0.012; // 1.2%
    const schemeFee = amount * 0.003; // 0.3%
    const processingFee = amount * 0.008; // 0.8%
    const crossBorderFee = region === "international" ? amount * 0.005 : 0; // 0.5%
    
    const totalFees = interchangeFee + schemeFee + processingFee + crossBorderFee;
    const netAmount = amount - totalFees;

    setCalculatedFees({
      transactionAmount: amount,
      interchangeFee,
      schemeFee,
      processingFee,
      crossBorderFee,
      totalFees,
      netAmount,
      feePercentage: (totalFees / amount) * 100
    });
  };

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <Calculator className="w-8 h-8 text-slate-700" />
              Fee Calculator
            </h1>
            <p className="text-slate-600 mt-2">
              Calculate processing fees for different transaction types and scenarios
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Form */}
          <Card className="shadow-lg border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-slate-800">Transaction Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 p-6">
              <div>
                <Label htmlFor="amount" className="text-slate-700">Transaction Amount</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  className="border-slate-300 focus:border-slate-500"
                />
              </div>

              <div>
                <Label htmlFor="cardType" className="text-slate-700">Card Type</Label>
                <Select value={cardType} onValueChange={setCardType}>
                  <SelectTrigger className="border-slate-300 focus:border-slate-500">
                    <SelectValue placeholder="Select card type" />
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
                <Label htmlFor="region" className="text-slate-700">Region</Label>
                <Select value={region} onValueChange={setRegion}>
                  <SelectTrigger className="border-slate-300 focus:border-slate-500">
                    <SelectValue placeholder="Select region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="domestic">Domestic</SelectItem>
                    <SelectItem value="eu">European Union</SelectItem>
                    <SelectItem value="international">International</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="merchantType" className="text-slate-700">Merchant Type</Label>
                <Select value={merchantType} onValueChange={setMerchantType}>
                  <SelectTrigger className="border-slate-300 focus:border-slate-500">
                    <SelectValue placeholder="Select merchant type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="ecommerce">eCommerce</SelectItem>
                    <SelectItem value="restaurant">Restaurant</SelectItem>
                    <SelectItem value="fuel">Fuel Station</SelectItem>
                    <SelectItem value="supermarket">Supermarket</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={calculateFees} className="w-full bg-slate-700 hover:bg-slate-800">
                <DollarSign className="w-4 h-4 mr-2" />
                Calculate Fees
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="shadow-lg border-slate-200">
            <CardHeader className="bg-slate-50 border-b border-slate-200">
              <CardTitle className="text-slate-800">Fee Breakdown</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              {calculatedFees ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600">Transaction Amount</p>
                      <p className="text-lg font-semibold text-slate-900">${calculatedFees.transactionAmount.toFixed(2)}</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600">Total Fee %</p>
                      <p className="text-lg font-semibold text-red-600">{calculatedFees.feePercentage.toFixed(2)}%</p>
                    </div>
                  </div>

                  <div className="border-t border-slate-200 pt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Interchange Fee</span>
                      <span className="font-medium text-slate-800">${calculatedFees.interchangeFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Scheme Fee</span>
                      <span className="font-medium text-slate-800">${calculatedFees.schemeFee.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Processing Fee</span>
                      <span className="font-medium text-slate-800">${calculatedFees.processingFee.toFixed(2)}</span>
                    </div>
                    {calculatedFees.crossBorderFee > 0 && (
                      <div className="flex justify-between">
                        <span className="text-slate-600">Cross-Border Fee</span>
                        <span className="font-medium text-slate-800">${calculatedFees.crossBorderFee.toFixed(2)}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-slate-200 pt-4">
                    <div className="flex justify-between text-lg font-semibold">
                      <span className="text-slate-800">Total Fees</span>
                      <span className="text-red-600">${calculatedFees.totalFees.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold mt-2">
                      <span className="text-slate-800">Net Amount</span>
                      <span className="text-green-600">${calculatedFees.netAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8">
                  <Calculator className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                  <p className="text-slate-500">Enter transaction details to calculate fees</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default FeeCalculator;
