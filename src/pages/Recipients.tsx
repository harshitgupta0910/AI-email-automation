import React, { useState } from 'react';
import { Plus, Upload, Download, Search, Filter, MoreHorizontal, UserPlus } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';
import CSVUploader from '../components/CSVUploader';

const Recipients: React.FC = () => {
  const { recipients, addRecipients } = useAppContext();
  const [showUploader, setShowUploader] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredRecipients = recipients.filter(
    recipient => 
      recipient.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipient.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipient.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipient.organization.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUploadComplete = (newRecipients: any[]) => {
    addRecipients(newRecipients);
    setShowUploader(false);
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Recipients</h1>
        <div className="flex space-x-3">
          <Button 
            variant="secondary" 
            icon={<Upload className="h-4 w-4" />}
            onClick={() => setShowUploader(true)}
          >
            Import CSV
          </Button>
          <Button 
            variant="primary" 
            icon={<UserPlus className="h-4 w-4" />}
          >
            Add Recipient
          </Button>
        </div>
      </div>
      
      {showUploader ? (
        <Card title="Import Recipients" className="animate-fadeIn">
          <CSVUploader onUploadComplete={handleUploadComplete} />
        </Card>
      ) : (
        <>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Search recipients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex space-x-3">
              <Button 
                variant="secondary" 
                size="sm"
                icon={<Filter className="h-4 w-4" />}
              >
                Filter
              </Button>
              <Button 
                variant="secondary" 
                size="sm"
                icon={<Download className="h-4 w-4" />}
              >
                Export
              </Button>
            </div>
          </div>
          
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {filteredRecipients.length > 0 ? (
                filteredRecipients.map((recipient) => (
                  <li key={recipient.id}>
                    <div className="block hover:bg-gray-50 transition-colors duration-200">
                      <div className="px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                              <span className="font-medium text-blue-800">
                                {recipient.firstName.charAt(0)}
                                {recipient.lastName.charAt(0)}
                              </span>
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-blue-800">
                                {recipient.firstName} {recipient.lastName}
                              </div>
                              <div className="text-sm text-gray-500">{recipient.email}</div>
                            </div>
                          </div>
                          <div className="ml-2 flex-shrink-0 flex">
                            <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                              {recipient.status}
                            </p>
                          </div>
                        </div>
                        <div className="mt-2 sm:flex sm:justify-between">
                          <div className="sm:flex sm:space-x-6">
                            <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                              <span>
                                {recipient.organization} • {recipient.role}
                              </span>
                            </div>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <div className="mr-6 text-gray-400 text-xs">
                              Added: {new Date(recipient.dateAdded).toLocaleDateString()}
                            </div>
                            <div className="cursor-pointer">
                              <MoreHorizontal className="h-5 w-5 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <li className="py-10 text-center">
                  <UserPlus className="mx-auto h-8 w-8 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No recipients found</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {searchTerm ? 'Try adjusting your search' : 'Import or add some recipients to get started'}
                  </p>
                  <div className="mt-6">
                    <Button 
                      variant="primary"
                      icon={<Plus className="h-4 w-4" />}
                    >
                      Add Recipient
                    </Button>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Recipients;