'use client';

import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export default function ResumeUpload() {
    const [uploadStatus, setUploadStatus] = useState<string>('');
    const [isUploading, setIsUploading] = useState(false);

    const onDrop = useCallback(async (acceptedFiles: File[]) => {
        if (acceptedFiles.length === 0) return;

        const file = acceptedFiles[0];
        if (file.type !== 'application/pdf') {
            setUploadStatus('Please upload a PDF file');
            return;
        }

        setIsUploading(true);
        setUploadStatus('Uploading...');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://localhost:8000/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json();

            if (response.ok) {
                setUploadStatus('Resume uploaded successfully!');
            } else {
                setUploadStatus(`Error: ${data.message}`);
            }
        } catch (error) {
            setUploadStatus('Error uploading resume. Please try again.');
        } finally {
            setIsUploading(false);
        }
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        },
        multiple: false,
    });

    return (
        <div className="w-full max-w-xl min-w-xl mx-auto p-6">
            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-gray-400'}`}
            >
                <input {...getInputProps()} />
                <div className="space-y-4">
                    <div className="text-4xl mb-4">📄</div>
                    <>
                        <p className="text-lg text-gray-600 font-newsone">
                            Drag and drop your resume here, or click to select
                        </p>
                        <p className="text-sm text-gray-500 font-newsone">
                            Supports PDF files only
                        </p>
                    </>
                </div>
            </div>

            {uploadStatus && (
                <div className={`mt-4 p-4 rounded-lg text-center font-newsone ${uploadStatus.includes('Error')
                    ? 'bg-red-100 text-red-700'
                    : uploadStatus.includes('success')
                        ? 'bg-green-100 text-green-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                    {uploadStatus}
                </div>
            )}
        </div>
    );
} 