import React from 'react';
import { useResume } from '../context/ResumeContext';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import ResumeForm from '../components/form/ResumeForm';
import ResumePreview from '../components/preview/ResumePreview';

const ResumeBuilder: React.FC = () => {
  const { activeSection } = useResume();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 flex flex-col md:flex-row overflow-hidden">
          <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-gray-50">
            <div className="page-transition max-w-2xl mx-auto">
              <ResumeForm />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4 overflow-y-auto bg-gray-100 border-l border-gray-200 hidden md:block">
            <div className="sticky top-4">
              <ResumePreview />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ResumeBuilder;