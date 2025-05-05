import React from 'react';
// import { Calendar, Zap, Plus, Eye, BarChart2, Mail, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { Calendar, Zap, Plus, Eye, BarChart2, Mail, CheckCircle, AlertCircle, Clock, FileText } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';
import { useAppContext } from '../context/AppContext';

const Campaigns: React.FC = () => {
  const { campaigns, templates } = useAppContext();
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'draft':
        return <Clock className="h-5 w-5 text-gray-500" />;
      case 'scheduled':
        return <Calendar className="h-5 w-5 text-yellow-500" />;
      case 'sending':
        return <Zap className="h-5 w-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return <AlertCircle className="h-5 w-5 text-red-500" />;
    }
  };
  
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'draft':
        return 'bg-gray-100 text-gray-800';
      case 'scheduled':
        return 'bg-yellow-100 text-yellow-800';
      case 'sending':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-red-100 text-red-800';
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Campaigns</h1>
        <Button variant="primary" icon={<Plus className="h-4 w-4" />}>
          Create Campaign
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card className="bg-gradient-to-br from-blue-800 to-blue-900 text-white">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-semibold">Quick Launch</h2>
            <Zap className="h-6 w-6 text-yellow-300" />
          </div>
          <p className="mt-2 text-blue-100">
            Create a new campaign in minutes with AI-powered personalization and scheduling.
          </p>
          <Button 
            className="mt-4 bg-white text-blue-800 hover:bg-blue-50"
            icon={<Plus className="h-4 w-4" />}
          >
            New Campaign
          </Button>
        </Card>
        
        {campaigns.map((campaign) => {
          const template = templates.find(t => t.id === campaign.templateId);
          
          return (
            <Card key={campaign.id} className="transition-shadow hover:shadow-md">
              <div className="flex justify-between items-start">
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">{campaign.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{campaign.subject}</p>
                  </div>
                </div>
                <div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(campaign.status)}`}>
                    {campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1)}
                  </span>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="bg-gray-50 rounded-md p-2">
                  <div className="text-sm font-medium text-gray-900">{campaign.sentCount}</div>
                  <div className="text-xs text-gray-500">Sent</div>
                </div>
                <div className="bg-gray-50 rounded-md p-2">
                  <div className="text-sm font-medium text-gray-900">{campaign.openCount}</div>
                  <div className="text-xs text-gray-500">Opened</div>
                </div>
                <div className="bg-gray-50 rounded-md p-2">
                  <div className="text-sm font-medium text-gray-900">{campaign.responseCount}</div>
                  <div className="text-xs text-gray-500">Responses</div>
                </div>
              </div>
              
              <div className="mt-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 text-gray-400 mr-1.5" />
                  <span className="text-sm text-gray-500">
                    {campaign.status === 'scheduled' ? 'Scheduled for: ' : 'Sent on: '}
                    {new Date(campaign.scheduleDate).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </span>
                </div>
                
                {template && (
                  <div className="flex items-center mt-1.5">
                    <FileText className="h-4 w-4 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-500">
                      Template: {template.name}
                    </span>
                  </div>
                )}
                
                {campaign.followUpDays.length > 0 && (
                  <div className="flex items-center mt-1.5">
                    <Zap className="h-4 w-4 text-gray-400 mr-1.5" />
                    <span className="text-sm text-gray-500">
                      Follow-ups: {campaign.followUpDays.join(', ')} days
                    </span>
                  </div>
                )}
              </div>
              
              <div className="mt-5 pt-4 border-t border-gray-100 flex justify-between">
                <Button variant="secondary" size="sm" icon={<Eye className="h-4 w-4" />}>
                  View
                </Button>
                <Button variant="secondary" size="sm" icon={<BarChart2 className="h-4 w-4" />}>
                  Analytics
                </Button>
              </div>
            </Card>
          );
        })}
        
        <Card className="border-2 border-dashed border-gray-300 bg-gray-50 flex flex-col items-center justify-center p-6 transition-colors hover:bg-gray-100 hover:border-gray-400 cursor-pointer">
          <Mail className="h-10 w-10 text-gray-400" />
          <h3 className="mt-3 font-medium text-gray-900">Create New Campaign</h3>
          <p className="mt-1 text-sm text-gray-500 text-center">
            Start a new email campaign with automated follow-ups
          </p>
          <Button variant="primary" className="mt-4" icon={<Plus className="h-4 w-4" />}>
            New Campaign
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Campaigns;