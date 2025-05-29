import React, { useState } from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, X } from 'lucide-react';

const CertificationsForm: React.FC = () => {
  const { resumeData, setResumeData } = useResume();
  const [newCertification, setNewCertification] = useState('');

  const handleAddCertification = () => {
    if (newCertification.trim() === '') return;
    
    const updatedCertifications = [...resumeData.certifications, newCertification.trim()];
    setResumeData({
      ...resumeData,
      certifications: updatedCertifications,
    });
    setNewCertification('');
  };

  const handleRemoveCertification = (index: number) => {
    const updatedCertifications = [...resumeData.certifications];
    updatedCertifications.splice(index, 1);
    setResumeData({
      ...resumeData,
      certifications: updatedCertifications,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddCertification();
    }
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Certifications</h2>
      </div>

      <div className="form-group">
        <label htmlFor="newCertification" className="label">
          Add Certification
        </label>
        <div className="flex">
          <input
            type="text"
            id="newCertification"
            className="input rounded-r-none"
            value={newCertification}
            onChange={(e) => setNewCertification(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="AWS Certified Solutions Architect - 2022"
          />
          <button
            type="button"
            className="btn-primary rounded-l-none"
            onClick={handleAddCertification}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Include certification name, issuing organization, and year
        </p>
      </div>

      <div className="mt-4">
        <label className="label">Your Certifications</label>
        {resumeData.certifications.length === 0 ? (
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-500">No certifications added yet</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg min-h-[100px]">
            {resumeData.certifications.map((certification, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
              >
                {certification}
                <button
                  type="button"
                  className="ml-1 text-gray-400 hover:text-red-500"
                  onClick={() => handleRemoveCertification(index)}
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationsForm;