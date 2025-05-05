export interface Recipient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  role: string;
  achievement: string;
  source?: string;
  tags?: string[];
  status: 'active' | 'unsubscribed' | 'bounced';
  dateAdded: string;
}

export interface Campaign {
  id: string;
  name: string;
  subject: string;
  templateId: string;
  status: 'draft' | 'scheduled' | 'sending' | 'completed';
  sentCount: number;
  openCount: number;
  clickCount: number;
  responseCount: number;
  scheduleDate: string;
  followUpDays: number[];
  recipients: string[] | 'all'; // recipient IDs or 'all'
  createdAt: string;
  updatedAt: string;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  content: string;
  type: 'invitation' | 'followUp' | 'reminder' | 'custom';
  variables: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Analytics {
  totalRecipients: number;
  totalCampaigns: number;
  totalEmails: number;
  averageOpenRate: number;
  averageClickRate: number;
  responseRate: number;
  dailyStats: DailyStats[];
}

export interface DailyStats {
  date: string;
  sent: number;
  opened: number;
  clicked: number;
  responded: number;
}