"use client"

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload, FileText, AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ScriptUpload() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
      setUploadError(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'application/x-fountain': ['.fdx'],
    },
    multiple: false,
  });

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setUploadError(null);

    // TODO: Implement actual file upload logic here
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating upload delay

    // Simulating a successful upload
    setUploading(false);
    setFile(null);
    // In a real app, you'd handle the response and update the UI accordingly
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload Your Script</CardTitle>
        <CardDescription>Drag and drop your script file or click to select</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
            isDragActive ? 'border-primary' : 'border-muted-foreground'
          }`}
        >
          <input {...getInputProps()} />
          {file ? (
            <div className="flex items-center justify-center space-x-2">
              <FileText className="h-6 w-6" />
              <span>{file.name}</span>
            </div>
          ) : (
            <div>
              <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
              <p className="mt-2">Drag 'n' drop your script here, or click to select</p>
              <p className="text-sm text-muted-foreground">Supported formats: PDF, DOCX, FDX</p>
            </div>
          )}
        </div>
        {uploadError && (
          <Alert variant="destructive" className="mt-4">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{uploadError}</AlertDescription>
          </Alert>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handleUpload} disabled={!file || uploading} className="w-full">
          {uploading ? 'Uploading...' : 'Upload Script'}
        </Button>
      </CardFooter>
    </Card>
  );
}