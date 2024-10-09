"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { FileText, Eye } from 'lucide-react';

// Mock data for demonstration
const scripts = [
  { id: 1, title: 'The Great Adventure', uploadDate: '2023-05-15', status: 'Analyzed' },
  { id: 2, title: 'Love in Paris', uploadDate: '2023-05-20', status: 'Pending' },
  { id: 3, title: 'Sci-Fi Odyssey', uploadDate: '2023-05-25', status: 'Analyzed' },
];

export default function MyScripts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Scripts</CardTitle>
        <CardDescription>View and manage your uploaded scripts</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Upload Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {scripts.map((script) => (
              <TableRow key={script.id}>
                <TableCell className="font-medium">{script.title}</TableCell>
                <TableCell>{script.uploadDate}</TableCell>
                <TableCell>{script.status}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}