"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for demonstration
const scriptData = {
  pacing: [
    { name: 'Act 1', value: 70 },
    { name: 'Act 2', value: 85 },
    { name: 'Act 3', value: 95 },
  ],
  characters: [
    { name: 'Protagonist', value: 120 },
    { name: 'Antagonist', value: 80 },
    { name: 'Supporting 1', value: 60 },
    { name: 'Supporting 2', value: 40 },
  ],
  emotions: [
    { name: 'Joy', value: 30 },
    { name: 'Sadness', value: 20 },
    { name: 'Anger', value: 15 },
    { name: 'Fear', value: 25 },
    { name: 'Surprise', value: 10 },
  ],
};

export default function FeedbackReports() {
  const [activeTab, setActiveTab] = useState('pacing');

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback Report</CardTitle>
        <CardDescription>Visual analysis of your script</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger value="pacing">Pacing</TabsTrigger>
            <TabsTrigger value="characters">Characters</TabsTrigger>
            <TabsTrigger value="emotions">Emotional Intensity</TabsTrigger>
          </TabsList>
          <TabsContent value="pacing">
            <ChartDisplay data={scriptData.pacing} dataKey="value" />
          </TabsContent>
          <TabsContent value="characters">
            <ChartDisplay data={scriptData.characters} dataKey="value" />
          </TabsContent>
          <TabsContent value="emotions">
            <ChartDisplay data={scriptData.emotions} dataKey="value" />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

function ChartDisplay({ data, dataKey }: { data: any[], dataKey: string }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey={dataKey} fill="var(--chart-1)" />
      </BarChart>
    </ResponsiveContainer>
  );
}