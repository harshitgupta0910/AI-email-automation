import React from 'react';
import { Users, Mail, BarChart3, CalendarClock, TrendingUp, CheckCircle2 } from 'lucide-react';
import StatsCard from '../components/StatsCard';
import Card from '../components/Card';
import { mockAnalytics } from '../data/mockData';

const Analytics: React.FC = () => {
  const { totalRecipients, totalCampaigns, totalEmails, averageOpenRate, averageClickRate, responseRate, dailyStats } = mockAnalytics;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
      </div>
      
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <StatsCard
          title="Total Recipients"
          value={totalRecipients}
          icon={<Users className="h-6 w-6" />}
        />
        <StatsCard
          title="Total Campaigns"
          value={totalCampaigns}
          icon={<Mail className="h-6 w-6" />}
        />
        <StatsCard
          title="Total Emails"
          value={totalEmails}
          icon={<Mail className="h-6 w-6" />}
        />
        <StatsCard
          title="Average Open Rate"
          value={`${averageOpenRate}%`}
          icon={<BarChart3 className="h-6 w-6" />}
          change={{ value: 5.2, isPositive: true }}
        />
        <StatsCard
          title="Average Click Rate"
          value={`${averageClickRate}%`}
          icon={<TrendingUp className="h-6 w-6" />}
          change={{ value: 2.5, isPositive: true }}
        />
        <StatsCard
          title="Response Rate"
          value={`${responseRate}%`}
          icon={<CheckCircle2 className="h-6 w-6" />}
          change={{ value: 1.8, isPositive: false }}
        />
      </div>
      
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Card title="Daily Email Activity">
          <div className="h-72 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                Daily email activity chart would display here, showing sends, opens, clicks, and responses over time.
              </p>
            </div>
          </div>
        </Card>
        
        <Card title="Recent Email Activity">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Sent
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Opened
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Clicked
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Responded
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dailyStats.map((day, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {new Date(day.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {day.sent}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {day.opened} <span className="text-xs text-gray-500">({Math.round(day.opened / day.sent * 100) || 0}%)</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {day.clicked} <span className="text-xs text-gray-500">({Math.round(day.clicked / day.sent * 100) || 0}%)</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {day.responded} <span className="text-xs text-gray-500">({Math.round(day.responded / day.sent * 100) || 0}%)</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex justify-center mt-4">
            <button className="text-sm text-blue-600 hover:text-blue-800">
              View Full Report
            </button>
          </div>
        </Card>
      </div>
      
      <div className="grid grid-cols-1">
        <Card title="Campaign Performance">
          <div className="h-72 flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 text-gray-400 mx-auto" />
              <p className="mt-2 text-sm text-gray-500">
                Campaign performance comparison chart would display here, showing metrics across different campaigns.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;