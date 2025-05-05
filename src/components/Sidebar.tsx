import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  BarChart3, 
  Mail, 
  FileText, 
  Users, 
  Settings, 
  Home,
  GraduationCap
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <div className="h-full flex flex-col bg-blue-900 text-white">
      <div className="flex items-center justify-center h-16 border-b border-blue-800">
        <div className="flex items-center">
          <GraduationCap className="h-8 w-8 text-yellow-400" />
          <span className="ml-2 text-xl font-semibold">BEF</span>
        </div>
      </div>
      <div className="p-4 text-center border-b border-blue-800">
        <h2 className="text-lg font-semibold">VBDA Email System</h2>
        <p className="text-xs text-blue-300">Viksit Bharat 2047</p>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="p-4 space-y-1">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <Home className="h-5 w-5 mr-3" />
              <span>Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/campaigns"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <Mail className="h-5 w-5 mr-3" />
              <span>Campaigns</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/templates"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <FileText className="h-5 w-5 mr-3" />
              <span>Templates</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recipients"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <Users className="h-5 w-5 mr-3" />
              <span>Recipients</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/analytics"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <BarChart3 className="h-5 w-5 mr-3" />
              <span>Analytics</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-800 text-white'
                    : 'text-blue-200 hover:bg-blue-800 hover:text-white'
                }`
              }
            >
              <Settings className="h-5 w-5 mr-3" />
              <span>Settings</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="p-4 border-t border-blue-800">
        <div className="bg-blue-800 rounded-lg p-3 text-center">
          <p className="text-xs text-blue-200">Bharat Economic Forum</p>
          <p className="text-xs text-blue-200">© 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;