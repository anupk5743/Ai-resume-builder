import React, { useRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';
import { Eye } from 'lucide-react';

const ResumePreview: React.FC = () => {
  const { selectedTemplate } = useResume();
  const resumeRef = useRef<HTMLDivElement>(null);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate ref={resumeRef} />;
      case 'professional':
        return <ProfessionalTemplate ref={resumeRef} />;
      case 'minimal':
        return <MinimalTemplate ref={resumeRef} />;
      default:
        return <ModernTemplate ref={resumeRef} />;
    }
  };

  return (
    <div className="card">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Preview</h2>
        <button
          type="button"
          className="btn-outline py-1 px-2 text-sm flex items-center"
          onClick={() => {
            // In a real app, this would open a full-screen preview
            alert('Full preview would open here.');
          }}
        >
          <Eye className="w-4 h-4 mr-1" />
          Full Preview
        </button>
      </div>
      
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
        <div className="transform scale-[0.65] origin-top-left h-[154%] w-[154%]">
          {renderTemplate()}
        </div>
      </div>
      
      <p className="mt-3 text-center text-sm text-gray-500">
        Preview is scaled down. Use the export button to download the full PDF.
      </p>
    </div>
  );
};

export default ResumePreview;