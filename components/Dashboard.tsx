"use client"

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Upload, FileText, BarChart2, Settings } from 'lucide-react';
import ScriptUpload from './ScriptUpload';
import MyScripts from './MyScripts';
import FeedbackReports from './FeedbackReports';
import DashboardSummary from './DashboardSummary';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('summary');

  return (
    <div className="container mx-auto p-4">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 h-auto">
          <TabsTrigger value="summary" className="flex flex-col items-center py-2">
            <BarChart2 className="h-5 w-5 mb-1" />
            Summary
          </TabsTrigger>
          <TabsTrigger value="upload" className="flex flex-col items-center py-2">
            <Upload className="h-5 w-5 mb-1" />
            Upload Script
          </TabsTrigger>
          <TabsTrigger value="scripts" className="flex flex-col items-center py-2">
            <FileText className="h-5 w-5 mb-1" />
            My Scripts
          </TabsTrigger>
          <TabsTrigger value="reports" className="flex flex-col items-center py-2">
            <BarChart2 className="h-5 w-5 mb-1" />
            Feedback Reports
          </TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <DashboardSummary />
        </TabsContent>
        <TabsContent value="upload">
          <ScriptUpload />
        </TabsContent>
        <TabsContent value="scripts">
          <MyScripts />
        </TabsContent>
        <TabsContent value="reports">
          <FeedbackReports />
        </TabsContent>
      </Tabs>
    </div>
  );
}