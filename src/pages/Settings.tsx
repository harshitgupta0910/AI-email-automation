import React from 'react';
import { Save, Mail, Lock, Bell, Globe, BrainCircuit, UserCog } from 'lucide-react';
import Button from '../components/Button';
import Card from '../components/Card';

const Settings: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
      </div>
      
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-3">
          <div className="sticky top-20">
            <div className="bg-white shadow rounded-lg">
              <nav className="space-y-1">
                <a
                  href="#email-settings"
                  className="flex items-center px-4 py-3 text-sm font-medium text-blue-800 bg-blue-50 rounded-md"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Email Settings
                </a>
                <a
                  href="#security"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <Lock className="h-5 w-5 mr-3" />
                  Security
                </a>
                <a
                  href="#notifications"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <Bell className="h-5 w-5 mr-3" />
                  Notifications
                </a>
                <a
                  href="#account"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <UserCog className="h-5 w-5 mr-3" />
                  Account
                </a>
                <a
                  href="#ai-settings"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <BrainCircuit className="h-5 w-5 mr-3" />
                  AI Settings
                </a>
                <a
                  href="#api-integration"
                  className="flex items-center px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md"
                >
                  <Globe className="h-5 w-5 mr-3" />
                  API Integration
                </a>
              </nav>
            </div>
          </div>
        </div>
        
        <div className="col-span-12 lg:col-span-9 space-y-6">
          <Card title="Email Settings" id="email-settings">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="sender-name" className="block text-sm font-medium text-gray-700">
                    Sender Name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      id="sender-name"
                      name="sender-name"
                      defaultValue="Manish Patel"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-3">
                  <label htmlFor="reply-to" className="block text-sm font-medium text-gray-700">
                    Reply-To Email
                  </label>
                  <div className="mt-1">
                    <input
                      type="email"
                      id="reply-to"
                      name="reply-to"
                      defaultValue="contact@bharateconomicforum.org"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="email-service" className="block text-sm font-medium text-gray-700">
                    Email Service Provider
                  </label>
                  <div className="mt-1">
                    <select
                      id="email-service"
                      name="email-service"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue="sendgrid"
                    >
                      <option value="sendgrid">SendGrid</option>
                      <option value="mailgun">Mailgun</option>
                      <option value="aws-ses">Amazon SES</option>
                      <option value="smtp">Custom SMTP</option>
                    </select>
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="api-key" className="block text-sm font-medium text-gray-700">
                    API Key / Secret
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="api-key"
                      name="api-key"
                      defaultValue="SG.xxxxxxxxxxxxxxxxxxxx"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    Keep this field secret. Never share your API keys.
                  </p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="track-opens"
                    name="track-opens"
                    type="checkbox"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="track-opens" className="font-medium text-gray-700">
                    Track email opens
                  </label>
                  <p className="text-gray-500">Collect data on who opens your emails.</p>
                </div>
              </div>
              
              <div className="relative flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="track-clicks"
                    name="track-clicks"
                    type="checkbox"
                    defaultChecked
                    className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="track-clicks" className="font-medium text-gray-700">
                    Track link clicks
                  </label>
                  <p className="text-gray-500">Monitor which links recipients click in your emails.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button variant="primary" icon={<Save className="h-4 w-4" />}>
                Save Email Settings
              </Button>
            </div>
          </Card>
          
          <Card title="AI Settings" id="ai-settings">
            <div className="space-y-6">
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-6">
                  <label htmlFor="ai-provider" className="block text-sm font-medium text-gray-700">
                    AI Provider
                  </label>
                  <div className="mt-1">
                    <select
                      id="ai-provider"
                      name="ai-provider"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue="grok"
                    >
                      <option value="grok">Grok (xAI)</option>
                      <option value="openai">OpenAI (GPT-4)</option>
                      <option value="huggingface">Hugging Face</option>
                      <option value="anthropic">Anthropic Claude</option>
                    </select>
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="ai-api-key" className="block text-sm font-medium text-gray-700">
                    AI API Key
                  </label>
                  <div className="mt-1">
                    <input
                      type="password"
                      id="ai-api-key"
                      name="ai-api-key"
                      defaultValue="xai_key_xxxxxxxxxxxxxxxxxxxxx"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    The API key for your selected AI provider.
                  </p>
                </div>
                
                <div className="sm:col-span-6">
                  <h3 className="text-sm font-medium text-gray-700">AI Personalization Settings</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Control how the AI personalizes your emails.
                  </p>
                  
                  <div className="mt-4 space-y-4">
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="use-achievement"
                          name="personalization-options"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="use-achievement" className="font-medium text-gray-700">
                          Use recipient achievements
                        </label>
                        <p className="text-gray-500">Include personalized references to recipient achievements.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="use-organization"
                          name="personalization-options"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="use-organization" className="font-medium text-gray-700">
                          Reference organization
                        </label>
                        <p className="text-gray-500">Include references to the recipient's organization.</p>
                      </div>
                    </div>
                    
                    <div className="relative flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="use-web-scraping"
                          name="personalization-options"
                          type="checkbox"
                          defaultChecked
                          className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="use-web-scraping" className="font-medium text-gray-700">
                          Enable web scraping for additional context
                        </label>
                        <p className="text-gray-500">Allow the system to search for additional information about recipients.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="sm:col-span-6">
                  <label htmlFor="ai-tone" className="block text-sm font-medium text-gray-700">
                    Email Tone
                  </label>
                  <div className="mt-1">
                    <select
                      id="ai-tone"
                      name="ai-tone"
                      className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      defaultValue="professional"
                    >
                      <option value="professional">Professional</option>
                      <option value="friendly">Friendly</option>
                      <option value="formal">Formal</option>
                      <option value="persuasive">Persuasive</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Button
                variant="secondary"
                className="mr-3"
              >
                Test AI Integration
              </Button>
              <Button variant="primary" icon={<Save className="h-4 w-4" />}>
                Save AI Settings
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;