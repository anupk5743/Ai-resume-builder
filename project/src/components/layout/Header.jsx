import React from 'react';
import { FileText, Cpu } from 'lucide-react';
import { useResume } from '../../context/ResumeContext';
import ExportResume from '../actions/ExportResume';

const Header = () => {
  const { selectedTemplate, setSelectedTemplate } = useResume();

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-primary-600" />
            <h1 className="ml-2 text-xl font-bold text-gray-900">AI Resume Builder</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-primary-50 text-primary-700 px-3 py-1 rounded-md">
                <Cpu className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">AI Powered</span>
              </div>
            </div>
            
            <div className="flex">
              <select
                value={selectedTemplate}
                onChange={(e) => setSelectedTemplate(e.target.value)}
                className="input py-1 text-sm w-auto"
              >
                <option value="modern">Modern Template</option>
                <option value="professional">Professional Template</option>
                <option value="minimal">Minimal Template</option>
              </select>
            </div>
            
            <ExportResume />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;