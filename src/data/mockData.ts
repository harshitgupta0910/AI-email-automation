import { Recipient, Campaign, EmailTemplate } from '../types';
import { v4 as uuidv4 } from 'uuid';

export const mockRecipients: Recipient[] = [
  {
    id: uuidv4(),
    firstName: 'Sundar',
    lastName: 'Pichai',
    email: 'sundar.pichai@example.com',
    organization: 'Alphabet Inc.',
    role: 'CEO',
    achievement: 'Announced $10B investment in India digitization',
    source: 'Economic Times, Jan 2025',
    tags: ['Tech', 'Global Leaders'],
    status: 'active',
    dateAdded: '2025-05-15T10:30:00Z',
  },
  {
    id: uuidv4(),
    firstName: 'Mukesh',
    lastName: 'Ambani',
    email: 'mukesh.ambani@example.com',
    organization: 'Reliance Industries',
    role: 'Chairman',
    achievement: 'Launched green hydrogen project worth $75B',
    source: 'Business Standard, March 2025',
    tags: ['Energy', 'Indian Leaders'],
    status: 'active',
    dateAdded: '2025-05-16T09:15:00Z',
  },
  {
    id: uuidv4(),
    firstName: 'Nirmala',
    lastName: 'Sitharaman',
    email: 'nirmala.sitharaman@example.com',
    organization: 'Government of India',
    role: 'Finance Minister',
    achievement: 'Announced new economic reforms for Viksit Bharat',
    source: 'PIB, April 2025',
    tags: ['Government', 'Policy Makers'],
    status: 'active',
    dateAdded: '2025-05-16T14:45:00Z',
  },
  {
    id: uuidv4(),
    firstName: 'Falguni',
    lastName: 'Nayar',
    email: 'falguni.nayar@example.com',
    organization: 'Nykaa',
    role: 'Founder & CEO',
    achievement: 'Expanded Nykaa global footprint to 10 new countries',
    source: 'Forbes India, Feb 2025',
    tags: ['Retail', 'Women Leaders'],
    status: 'active',
    dateAdded: '2025-05-17T11:20:00Z',
  },
  {
    id: uuidv4(),
    firstName: 'Satya',
    lastName: 'Nadella',
    email: 'satya.nadella@example.com',
    organization: 'Microsoft',
    role: 'CEO',
    achievement: 'Established new AI research center in Bengaluru',
    source: 'Tech Crunch, March 2025',
    tags: ['Tech', 'Global Leaders'],
    status: 'active',
    dateAdded: '2025-05-18T08:30:00Z',
  },
];

export const mockTemplates: EmailTemplate[] = [
  {
    id: uuidv4(),
    name: 'VBDA 2025 Initial Invitation',
    subject: '{FirstName}, Join Us at Viksit Bharat Dialogues & Awards 2025',
    content: `Dear {FirstName},

Your {Achievement}, announced in {Source}, is creating jobs and boosting India's economy. We admire your commitment to a stronger India, aligning with Viksit Bharat 2047.

The Bharat Economic Forum (BEF) invites you to the Viksit Bharat Dialogues & Awards (VBDA) on 25th July 2025 at Bharat Mandapam, New Delhi. VBDA celebrates leaders like you, uniting 500+ innovators and policymakers to shape a $30 trillion economy.

Participating in VBDA lets you network with CEOs and ministers, share your vision with 5M+ people via our media, and position {Organization} as a key contributor to India's growth. Be a speaker, VIP, or awardee to amplify your impact.

Can we schedule a 15-minute call to discuss your role in VBDA? Contact me at contact@bharateconomicforum.org or +91 8744089014. Visit https://www.bharateconomicforum.org/viksit-bharat-dialogues for details.

Warm regards,
Manish Patel
Founder & Chairman, BEF`,
    type: 'invitation',
    variables: [
      'FirstName',
      'Achievement',
      'Source',
      'Organization',
    ],
    createdAt: '2025-05-15T10:00:00Z',
    updatedAt: '2025-05-15T10:00:00Z',
  },
  {
    id: uuidv4(),
    name: 'VBDA 2025 Follow-Up',
    subject: '{FirstName}, Don\'t Miss VBDA 2025!',
    content: `Dear {FirstName},

I'm following up on our invitation to the Viksit Bharat Dialogues & Awards (VBDA) on 25th July 2025. Your {Achievement} makes you a perfect fit to join 500+ leaders shaping India's $30T economy. With limited seats, don't miss networking with policymakers and gaining 5M+ media reach.

Let's discuss your participation in a quick call. Reach me at contact@bharateconomicforum.org or +91 8744089014.

Best,
Manish Patel
Founder & Chairman, BEF`,
    type: 'followUp',
    variables: [
      'FirstName',
      'Achievement',
    ],
    createdAt: '2025-05-15T10:30:00Z',
    updatedAt: '2025-05-15T10:30:00Z',
  },
  {
    id: uuidv4(),
    name: 'VBDA 2025 Final Reminder',
    subject: '{FirstName}, Last Chance: Limited Seats for VBDA 2025',
    content: `Dear {FirstName},

This is your final reminder about the Viksit Bharat Dialogues & Awards (VBDA) on 25th July 2025. With only a few seats remaining, we'd like to confirm your participation soon.

As a leader at {Organization} who has achieved {Achievement}, your insights on India's economic future are invaluable to our discussions on reaching the $30T economy goal.

Please RSVP by this Friday to secure your place among 500+ top leaders and policymakers.

Looking forward to your positive response.

Regards,
Manish Patel
Founder & Chairman, BEF`,
    type: 'reminder',
    variables: [
      'FirstName',
      'Organization',
      'Achievement',
    ],
    createdAt: '2025-05-15T11:00:00Z',
    updatedAt: '2025-05-15T11:00:00Z',
  },
];

export const mockCampaigns: Campaign[] = [
  {
    id: uuidv4(),
    name: 'VBDA 2025 Initial Outreach',
    subject: 'Join Us at Viksit Bharat Dialogues & Awards 2025',
    templateId: mockTemplates[0].id,
    status: 'scheduled',
    sentCount: 0,
    openCount: 0,
    clickCount: 0,
    responseCount: 0,
    scheduleDate: '2025-06-01T09:00:00Z',
    followUpDays: [5, 10],
    recipients: 'all',
    createdAt: '2025-05-20T15:30:00Z',
    updatedAt: '2025-05-20T15:30:00Z',
  },
];

export const mockAnalytics = {
  totalRecipients: 156,
  totalCampaigns: 3,
  totalEmails: 412,
  averageOpenRate: 68,
  averageClickRate: 42,
  responseRate: 35,
  dailyStats: [
    { date: '2025-05-15', sent: 150, opened: 102, clicked: 64, responded: 48 },
    { date: '2025-05-16', sent: 12, opened: 8, clicked: 5, responded: 6 },
    { date: '2025-05-17', sent: 45, opened: 30, clicked: 18, responded: 12 },
    { date: '2025-05-18', sent: 0, opened: 0, clicked: 0, responded: 2 },
    { date: '2025-05-19', sent: 100, opened: 68, clicked: 40, responded: 35 },
    { date: '2025-05-20', sent: 105, opened: 72, clicked: 45, responded: 40 },
  ],
};