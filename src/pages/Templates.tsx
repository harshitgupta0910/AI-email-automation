import React from 'react';
import { FileText, Plus, Copy, Edit, Trash } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

const Templates: React.FC = () => {
  const { templates } = useAppContext();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Email Templates</h1>
        <Button variant="primary" icon={<Plus className="h-4 w-4" />}>
          Create Template
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.id} className="transition-shadow hover:shadow-md">
            <div className="flex justify-between items-start">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <FileText className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">{template.name}</h3>
                  <p className="text-sm text-gray-500 mt-1">{template.subject}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button className="text-gray-400 hover:text-gray-500 transition-colors">
                  <Copy className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Edit className="h-4 w-4" />
                </button>
                <button className="text-gray-400 hover:text-red-500 transition-colors">
                  <Trash className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="mt-3">
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                template.type === 'invitation'
                  ? 'bg-blue-100 text-blue-800'
                  : template.type === 'followUp'
                  ? 'bg-purple-100 text-purple-800'
                  : template.type === 'reminder'
                  ? 'bg-yellow-100 text-yellow-800'
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {template.type.charAt(0).toUpperCase() + template.type.slice(1)}
              </span>
            </div>
            
            <div className="mt-4">
              <div className="border border-gray-200 rounded-md p-3 bg-gray-50 h-28 overflow-hidden text-sm text-gray-600">
                {template.content.substring(0, 150)}...
              </div>
            </div>
            
            <div className="mt-4">
              <span className="text-xs text-gray-500">Variables: </span>
              <div className="flex flex-wrap gap-1 mt-1">
                {template.variables.map((variable) => (
                  <span
                    key={variable}
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                  >
                    {`{${variable}}`}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
              <span className="text-xs text-gray-500">Created: {new Date(template.createdAt).toLocaleDateString()}</span>
              <Button variant="secondary" size="sm">
                Edit Template
              </Button>
            </div>
          </Card>
        ))}
        
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-6 transition-colors hover:bg-gray-100 hover:border-gray-400 cursor-pointer">
          <FileText className="h-10 w-10 text-gray-400" />
          <h3 className="mt-3 font-medium text-gray-900">Create New Template</h3>
          <p className="mt-1 text-sm text-gray-500 text-center">
            Design a new email template with AI-powered personalization
          </p>
          <Button variant="primary" className="mt-4" icon={<Plus className="h-4 w-4" />}>
            New Template
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Templates;