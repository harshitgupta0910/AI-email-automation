import React from 'react';
import { Users, BarChart3, Mail, Calendar, TrendingUp } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import Card from '../components/Card';
import Button from '../components/Button';
import { useAppContext } from '../context/AppContext';
import { mockAnalytics } from '../data/mockData';

const Dashboard: React.FC = () => {
  const { campaigns, recipients, templates } = useAppContext();
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-3">
          <Button 
            variant="primary" 
            icon={<Mail className="h-4 w-4" />}
            onClick={() => window.location.href = '/campaigns/new'}
          >
            New Campaign
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Recipients"
          value={recipients.length}
          icon={<Users className="h-6 w-6" />}
          change={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Campaigns"
          value={campaigns.filter(c => c.status === 'scheduled' || c.status === 'sending').length}
          icon={<Mail className="h-6 w-6" />}
          change={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Avg. Open Rate"
          value={`${mockAnalytics.averageOpenRate}%`}
          icon={<BarChart3 className="h-6 w-6" />}
          change={{ value: 3, isPositive: true }}
        />
        <StatsCard
          title="Response Rate"
          value={`${mockAnalytics.responseRate}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          change={{ value: 2, isPositive: false }}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <Card title="Upcoming Campaigns">
          <div className="space-y-3">
            {campaigns.filter(c => c.status === 'scheduled').length > 0 ? (
              campaigns
                .filter(c => c.status === 'scheduled')
                .slice(0, 5)
                .map(campaign => (
                  <div 
                    key={campaign.id} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <h4 className="font-medium">{campaign.name}</h4>
                      <div className="flex items-center mt-1">
                        <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                        <span className="text-sm text-gray-500">
                          {new Date(campaign.scheduleDate).toLocaleDateString('en-US', {
                            day: '2-digit',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                        Scheduled
                      </span>
                    </div>
                  </div>
                ))
            ) : (
              <div className="text-center py-4 text-gray-500">
                No upcoming campaigns
              </div>
            )}
          </div>
          <div className="mt-3">
            <Button 
              variant="secondary" 
              size="sm" 
              fullWidth
              onClick={() => window.location.href = '/campaigns'}
            >
              View All Campaigns
            </Button>
          </div>
        </Card>
        
        <Card title="Recent Activities">
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-600">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Campaign Scheduled</p>
                <p className="text-sm text-gray-500">VBDA 2025 Initial Outreach was scheduled</p>
                <p className="text-xs text-gray-400 mt-1">30 minutes ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-600">
                  <Users className="h-4 w-4" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Recipients Added</p>
                <p className="text-sm text-gray-500">5 new recipients were added to the database</p>
                <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-8 w-8 rounded-full bg-purple-100 text-purple-600">
                  <Mail className="h-4 w-4" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">Template Created</p>
                <p className="text-sm text-gray-500">New email template "VBDA 2025 Final Reminder" was created</p>
                <p className="text-xs text-gray-400 mt-1">1 day ago</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1">
        <Card title="Email Performance">
          <div className="h-64 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                Analytics chart would be displayed here showing email open rates, click rates, and responses over time.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;