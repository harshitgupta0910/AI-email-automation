import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Recipient, Campaign, EmailTemplate } from '../types';
import { mockRecipients, mockCampaigns, mockTemplates } from '../data/mockData';

interface AppContextType {
  recipients: Recipient[];
  campaigns: Campaign[];
  templates: EmailTemplate[];
  addRecipients: (newRecipients: Recipient[]) => void;
  addCampaign: (campaign: Campaign) => void;
  updateCampaign: (id: string, campaign: Partial<Campaign>) => void;
  deleteCampaign: (id: string) => void;
  addTemplate: (template: EmailTemplate) => void;
  updateTemplate: (id: string, template: Partial<EmailTemplate>) => void;
  deleteTemplate: (id: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [recipients, setRecipients] = useState<Recipient[]>(mockRecipients);
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns);
  const [templates, setTemplates] = useState<EmailTemplate[]>(mockTemplates);

  const addRecipients = (newRecipients: Recipient[]) => {
    setRecipients((prev) => [...prev, ...newRecipients]);
  };

  const addCampaign = (campaign: Campaign) => {
    setCampaigns((prev) => [...prev, campaign]);
  };

  const updateCampaign = (id: string, updatedCampaign: Partial<Campaign>) => {
    setCampaigns((prev) =>
      prev.map((camp) => (camp.id === id ? { ...camp, ...updatedCampaign } : camp))
    );
  };

  const deleteCampaign = (id: string) => {
    setCampaigns((prev) => prev.filter((camp) => camp.id !== id));
  };

  const addTemplate = (template: EmailTemplate) => {
    setTemplates((prev) => [...prev, template]);
  };

  const updateTemplate = (id: string, updatedTemplate: Partial<EmailTemplate>) => {
    setTemplates((prev) =>
      prev.map((temp) => (temp.id === id ? { ...temp, ...updatedTemplate } : temp))
    );
  };

  const deleteTemplate = (id: string) => {
    setTemplates((prev) => prev.filter((temp) => temp.id !== id));
  };

  return (
    <AppContext.Provider
      value={{
        recipients,
        campaigns,
        templates,
        addRecipients,
        addCampaign,
        updateCampaign,
        deleteCampaign,
        addTemplate,
        updateTemplate,
        deleteTemplate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};