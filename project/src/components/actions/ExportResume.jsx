import React, { useRef, useState } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Download, FileText, Loader } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import ModernTemplate from '../templates/ModernTemplate';
import ProfessionalTemplate from '../templates/ProfessionalTemplate';
import MinimalTemplate from '../templates/MinimalTemplate';

const ExportResume = () => {
  const { selectedTemplate, resumeData } = useResume();
  const [isExporting, setIsExporting] = useState(false);
  const exportRef = useRef(null);
  
  const getFileName = () => {
    const name = resumeData.personalInfo.fullName || 'Resume';
    return `${name.replace(/\s+/g, '_')}_${selectedTemplate}.pdf`;
  };

  const exportToPDF = async () => {
    if (!exportRef.current) return;
    
    setIsExporting(true);
    
    try {
      const element = exportRef.current;
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        allowTaint: true,
        backgroundColor: '#ffffff'
      });
      
      const imgData = canvas.toDataURL('image/png');
      
      // Standard US Letter size
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'in',
        format: [8.5, 11]
      });
      
      // Calculate ratio to fit the canvas in the PDF
      const imgWidth = 8.5;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save(getFileName());
    } catch (error) {
      console.error('Error exporting PDF:', error);
      alert('There was an error exporting your resume. Please try again.');
    } finally {
      setIsExporting(false);
    }
  };

  const renderHiddenTemplate = () => {
    switch (selectedTemplate) {
      case 'modern':
        return <ModernTemplate ref={exportRef} />;
      case 'professional':
        return <ProfessionalTemplate ref={exportRef} />;
      case 'minimal':
        return <MinimalTemplate ref={exportRef} />;
      default:
        return <ModernTemplate ref={exportRef} />;
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn-primary flex items-center"
        onClick={exportToPDF}
        disabled={isExporting}
      >
        {isExporting ? (
          <>
            <Loader className="h-4 w-4 mr-1 animate-spin" />
            Exporting...
          </>
        ) : (
          <>
            <Download className="h-4 w-4 mr-1" />
            Export PDF
          </>
        )}
      </button>
      
      {/* Hidden template used for export */}
      <div className="hidden">
        {renderHiddenTemplate()}
      </div>
    </>
  );
};

export default ExportResume;