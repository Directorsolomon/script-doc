"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ScriptReviewForm() {
  const [file, setFile] = useState<File | null>(null);
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      alert('Please select a file to upload');
      return;
    }
    setLoading(true);
    
    // TODO: Implement API call to GPT or custom API for script review
    // For now, we'll use a mock response
    setTimeout(() => {
      setReview(`This is a mock review of the script "${file.name}". In a real application, this would be the response from a GPT model or custom API analyzing the script's structure, characters, dialogue, and overall potential.`);
      setLoading(false);
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Submit Your Script</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <Label htmlFor="script-file">Upload Script (PDF)</Label>
            <Input
              id="script-file"
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={loading || !file}>
            {loading ? 'Analyzing...' : 'Review Script'}
          </Button>
        </CardContent>
      </Card>
      
      {review && (
        <Card>
          <CardHeader>
            <CardTitle>Script Review</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{review}</p>
          </CardContent>
        </Card>
      )}
    </form>
  );
}