import React, { useState } from 'react';
import { Upload, CheckCircle, XCircle, FileText } from 'lucide-react';
import Button from './Button';
import { Recipient } from '../types';
import { v4 as uuidv4 } from 'uuid';

interface CSVUploaderProps {
  onUploadComplete: (recipients: Recipient[]) => void;
}

const CSVUploader: React.FC<CSVUploaderProps> = ({ onUploadComplete }) => {
  const [file, setFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [mappedHeaders, setMappedHeaders] = useState<{[key: string]: string}>({});
  const [headers, setHeaders] = useState<string[]>([]);
  const [previewData, setPreviewData] = useState<string[][]>([]);
  
  const requiredFields = [
    { id: 'firstName', label: 'First Name' },
    { id: 'lastName', label: 'Last Name' },
    { id: 'email', label: 'Email' },
    { id: 'organization', label: 'Organization' },
    { id: 'role', label: 'Role' },
    { id: 'achievement', label: 'Achievement' },
  ];
  
  const optionalFields = [
    { id: 'source', label: 'Source' },
    { id: 'tags', label: 'Tags' },
  ];
  
  const resetUploader = () => {
    setFile(null);
    setUploadStatus('idle');
    setHeaders([]);
    setPreviewData([]);
    setMappedHeaders({});
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      parseCSV(selectedFile);
    }
  };
  
  const parseCSV = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const lines = text.split('\n');
      
      if (lines.length > 0) {
        const headerLine = lines[0].trim();
        const csvHeaders = headerLine.split(',').map(h => h.trim());
        setHeaders(csvHeaders);
        
        // Generate initial field mapping based on header names
        const initialMapping: {[key: string]: string} = {};
        csvHeaders.forEach(header => {
          const normalizedHeader = header.toLowerCase();
          
          if (normalizedHeader.includes('first') || normalizedHeader.includes('fname')) {
            initialMapping[header] = 'firstName';
          } else if (normalizedHeader.includes('last') || normalizedHeader.includes('lname')) {
            initialMapping[header] = 'lastName';
          } else if (normalizedHeader.includes('email')) {
            initialMapping[header] = 'email';
          } else if (normalizedHeader.includes('org') || normalizedHeader.includes('company')) {
            initialMapping[header] = 'organization';
          } else if (normalizedHeader.includes('role') || normalizedHeader.includes('title') || normalizedHeader.includes('position')) {
            initialMapping[header] = 'role';
          } else if (normalizedHeader.includes('achieve') || normalizedHeader.includes('accomplish')) {
            initialMapping[header] = 'achievement';
          } else if (normalizedHeader.includes('source')) {
            initialMapping[header] = 'source';
          } else if (normalizedHeader.includes('tag')) {
            initialMapping[header] = 'tags';
          }
        });
        setMappedHeaders(initialMapping);
        
        // Parse and set preview data
        const dataRows = lines.slice(1, 6).map(line => 
          line.split(',').map(cell => cell.trim())
        );
        setPreviewData(dataRows);
      }
    };
    reader.readAsText(file);
  };
  
  const handleHeaderMapping = (csvHeader: string, fieldId: string) => {
    setMappedHeaders({
      ...mappedHeaders,
      [csvHeader]: fieldId
    });
  };
  
  const handleUpload = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulating upload and processing
    setTimeout(() => {
      // Check if required fields are mapped
      const mappedRequiredFields = requiredFields.map(field => field.id).filter(
        id => Object.values(mappedHeaders).includes(id)
      );
      
      if (mappedRequiredFields.length !== requiredFields.length) {
        setUploadStatus('error');
        setIsUploading(false);
        return;
      }
      
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result as string;
        const lines = text.split('\n');
        const headerLine = lines[0].trim();
        const csvHeaders = headerLine.split(',').map(h => h.trim());
        
        // Convert CSV to recipients
        const recipients: Recipient[] = [];
        const dataRows = lines.slice(1).filter(row => row.trim() !== '');
        
        dataRows.forEach(row => {
          const values = row.split(',').map(cell => cell.trim());
          const recipient: any = {
            id: uuidv4(),
            status: 'active',
            dateAdded: new Date().toISOString()
          };
          
          csvHeaders.forEach((header, index) => {
            const mappedField = mappedHeaders[header];
            if (mappedField && values[index]) {
              recipient[mappedField] = values[index];
            }
          });
          
          if (recipient.email) {
            recipients.push(recipient as Recipient);
          }
        });
        
        setUploadStatus('success');
        setIsUploading(false);
        onUploadComplete(recipients);
      };
      reader.readAsText(file);
    }, 1500);
  };
  
  return (
    <div className="space-y-4">
      {uploadStatus === 'idle' && !file && (
        <div 
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center"
          onDragOver={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          onDrop={(e) => {
            e.preventDefault();
            e.stopPropagation();
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile) {
              setFile(droppedFile);
              parseCSV(droppedFile);
            }
          }}
        >
          <Upload className="h-10 w-10 text-gray-400 mx-auto" />
          <p className="mt-1 font-medium">Drag and drop a CSV file</p>
          <p className="text-sm text-gray-500 mt-1">or</p>
          <input
            id="csv-upload"
            type="file"
            accept=".csv"
            className="hidden"
            onChange={handleFileChange}
          />
          <Button
            variant="primary"
            size="sm"
            className="mt-3"
            onClick={() => document.getElementById('csv-upload')?.click()}
          >
            Browse Files
          </Button>
          <p className="text-xs text-gray-500 mt-3">
            The file should include fields for name, email, organization, role, and achievement.
          </p>
        </div>
      )}
      
      {file && uploadStatus === 'idle' && (
        <div className="space-y-4">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-blue-500 mr-3" />
            <div>
              <p className="font-medium">{file.name}</p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024).toFixed(2)} KB • {headers.length} columns
              </p>
            </div>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-4">
            <h3 className="font-medium mb-3">Map CSV Fields</h3>
            <p className="text-sm text-gray-500 mb-4">
              Map your CSV columns to our system fields. Required fields are marked with *.
            </p>
            
            <div className="space-y-4">
              {requiredFields.map(field => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="text-sm font-medium">
                    {field.label} <span className="text-red-500">*</span>
                  </div>
                  <div className="md:col-span-2">
                    <select
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={Object.keys(mappedHeaders).find(key => mappedHeaders[key] === field.id) || ''}
                      onChange={(e) => handleHeaderMapping(e.target.value, field.id)}
                    >
                      <option value="">Not Mapped</option>
                      {headers.map(header => (
                        <option key={header} value={header}>{header}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
              
              {optionalFields.map(field => (
                <div key={field.id} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-center">
                  <div className="text-sm font-medium">
                    {field.label}
                  </div>
                  <div className="md:col-span-2">
                    <select
                      className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      value={Object.keys(mappedHeaders).find(key => mappedHeaders[key] === field.id) || ''}
                      onChange={(e) => handleHeaderMapping(e.target.value, field.id)}
                    >
                      <option value="">Not Mapped</option>
                      {headers.map(header => (
                        <option key={header} value={header}>{header}</option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {previewData.length > 0 && (
            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <h3 className="font-medium p-4 border-b border-gray-200">Preview Data</h3>
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {headers.map((header, index) => (
                      <th
                        key={index}
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {header}
                        {mappedHeaders[header] && (
                          <span className="block text-blue-600 normal-case">
                            → {
                              [...requiredFields, ...optionalFields].find(
                                f => f.id === mappedHeaders[header]
                              )?.label || mappedHeaders[header]
                            }
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {previewData.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          <div className="flex justify-end space-x-3">
            <Button
              variant="secondary"
              onClick={resetUploader}
            >
              Cancel
            </Button>
            <Button
              variant="primary"
              isLoading={isUploading}
              onClick={handleUpload}
            >
              Upload and Process
            </Button>
          </div>
        </div>
      )}
      
      {uploadStatus === 'success' && (
        <div className="text-center p-6 bg-green-50 rounded-lg">
          <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Upload Successful</h3>
          <p className="mt-1 text-sm text-gray-500">
            Your recipients have been successfully added to the system.
          </p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={resetUploader}
          >
            Upload Another File
          </Button>
        </div>
      )}
      
      {uploadStatus === 'error' && (
        <div className="text-center p-6 bg-red-50 rounded-lg">
          <XCircle className="h-12 w-12 text-red-500 mx-auto" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">Upload Failed</h3>
          <p className="mt-1 text-sm text-gray-500">
            Please ensure all required fields are mapped correctly.
          </p>
          <Button
            variant="primary"
            className="mt-4"
            onClick={() => setUploadStatus('idle')}
          >
            Try Again
          </Button>
        </div>
      )}
    </div>
  );
};

export default CSVUploader;