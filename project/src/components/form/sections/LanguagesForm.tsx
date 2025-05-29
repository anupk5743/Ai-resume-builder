import React, { useState } from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, X } from 'lucide-react';

const LanguagesForm: React.FC = () => {
  const { resumeData, setResumeData } = useResume();
  const [newLanguage, setNewLanguage] = useState('');

  const handleAddLanguage = () => {
    if (newLanguage.trim() === '') return;
    
    const updatedLanguages = [...resumeData.languages, newLanguage.trim()];
    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    });
    setNewLanguage('');
  };

  const handleRemoveLanguage = (index: number) => {
    const updatedLanguages = [...resumeData.languages];
    updatedLanguages.splice(index, 1);
    setResumeData({
      ...resumeData,
      languages: updatedLanguages,
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddLanguage();
    }
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Languages</h2>
      </div>

      <div className="form-group">
        <label htmlFor="newLanguage" className="label">
          Add Language
        </label>
        <div className="flex">
          <input
            type="text"
            id="newLanguage"
            className="input rounded-r-none"
            value={newLanguage}
            onChange={(e) => setNewLanguage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="English (Native)"
          />
          <button
            type="button"
            className="btn-primary rounded-l-none"
            onClick={handleAddLanguage}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Include proficiency level (e.g., Spanish - Intermediate)
        </p>
      </div>

      <div className="mt-4">
        <label className="label">Your Languages</label>
        {resumeData.languages.length === 0 ? (
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-500">No languages added yet</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg min-h-[100px]">
            {resumeData.languages.map((language, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
              >
                {language}
                <button
                  type="button"
                  className="ml-1 text-gray-400 hover:text-red-500"
                  onClick={() => handleRemoveLanguage(index)}
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

export default LanguagesForm;