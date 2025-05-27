
import { Layout } from "@/components/Layout";
import { DashboardHeader } from "@/components/DashboardHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Settings as SettingsIcon, Save, User, Bell, Shield, Database } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoReconciliation, setAutoReconciliation] = useState(false);
  const [riskAlerts, setRiskAlerts] = useState(true);
  const [dataRetention, setDataRetention] = useState("12");

  return (
    <Layout>
      <DashboardHeader />
      
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
              <SettingsIcon className="w-8 h-8 text-slate-600" />
              Settings
            </h1>
            <p className="text-slate-600 mt-2">
              Configure your FinIntel AI platform preferences and system settings
            </p>
          </div>
          <Button>
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* User Profile */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                User Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Smith" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" defaultValue="john.smith@company.com" />
              </div>
              <div>
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="analyst">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="analyst">Financial Analyst</SelectItem>
                    <SelectItem value="manager">Manager</SelectItem>
                    <SelectItem value="admin">Administrator</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="department">Department</Label>
                <Input id="department" defaultValue="Financial Operations" />
              </div>
            </CardContent>
          </Card>

          {/* Notifications */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="notifications">Email Notifications</Label>
                  <p className="text-sm text-slate-600">Receive updates about anomalies and reports</p>
                </div>
                <Switch
                  id="notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="risk-alerts">Risk Alerts</Label>
                  <p className="text-sm text-slate-600">Get notified about high-risk transactions</p>
                </div>
                <Switch
                  id="risk-alerts"
                  checked={riskAlerts}
                  onCheckedChange={setRiskAlerts}
                />
              </div>
              <div>
                <Label htmlFor="alert-threshold">Alert Threshold ($)</Label>
                <Input id="alert-threshold" type="number" defaultValue="5000" />
              </div>
            </CardContent>
          </Card>

          {/* System Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                System Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-reconciliation">Auto Reconciliation</Label>
                  <p className="text-sm text-slate-600">Automatically reconcile daily invoices</p>
                </div>
                <Switch
                  id="auto-reconciliation"
                  checked={autoReconciliation}
                  onCheckedChange={setAutoReconciliation}
                />
              </div>
              <div>
                <Label htmlFor="reconciliation-time">Reconciliation Time</Label>
                <Select defaultValue="02:00">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01:00">01:00 AM</SelectItem>
                    <SelectItem value="02:00">02:00 AM</SelectItem>
                    <SelectItem value="03:00">03:00 AM</SelectItem>
                    <SelectItem value="04:00">04:00 AM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="anomaly-threshold">Anomaly Detection Sensitivity</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                Data Management
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="data-retention">Data Retention (months)</Label>
                <Select value={dataRetention} onValueChange={setDataRetention}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="6">6 months</SelectItem>
                    <SelectItem value="12">12 months</SelectItem>
                    <SelectItem value="24">24 months</SelectItem>
                    <SelectItem value="36">36 months</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="backup-frequency">Backup Frequency</Label>
                <Select defaultValue="daily">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="w-full">
                  <Database className="w-4 h-4 mr-2" />
                  Export Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* API Settings */}
        <Card>
          <CardHeader>
            <CardTitle>API Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="api-endpoint">API Endpoint</Label>
                <Input id="api-endpoint" defaultValue="https://api.finintel.com/v1" />
              </div>
              <div>
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" type="password" defaultValue="••••••••••••••••" />
              </div>
              <div>
                <Label htmlFor="rate-limit">Rate Limit (requests/minute)</Label>
                <Input id="rate-limit" type="number" defaultValue="100" />
              </div>
              <div>
                <Label htmlFor="timeout">Request Timeout (seconds)</Label>
                <Input id="timeout" type="number" defaultValue="30" />
              </div>
            </div>
            <div className="mt-6">
              <Button variant="outline">
                Test Connection
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Settings;
