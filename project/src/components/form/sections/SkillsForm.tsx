import React, { useState } from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, X, Sparkles } from 'lucide-react';

const SkillsForm: React.FC = () => {
  const { resumeData, updateSkills, generateAIContent } = useResume();
  const [newSkill, setNewSkill] = useState('');

  const handleAddSkill = () => {
    if (newSkill.trim() === '') return;
    
    const updatedSkills = [...resumeData.skills, newSkill.trim()];
    updateSkills(updatedSkills);
    setNewSkill('');
  };

  const handleRemoveSkill = (index: number) => {
    const updatedSkills = [...resumeData.skills];
    updatedSkills.splice(index, 1);
    updateSkills(updatedSkills);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        <button
          type="button"
          className="inline-flex items-center px-3 py-1.5 text-sm font-medium rounded text-primary-700 bg-primary-50 hover:bg-primary-100"
          onClick={() => generateAIContent('skills')}
        >
          <Sparkles className="w-4 h-4 mr-1" />
          Generate Skills
        </button>
      </div>

      <div className="form-group">
        <label htmlFor="newSkill" className="label">
          Add Skills
        </label>
        <div className="flex">
          <input
            type="text"
            id="newSkill"
            className="input rounded-r-none"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Enter a skill (e.g., JavaScript)"
          />
          <button
            type="button"
            className="btn-primary rounded-l-none"
            onClick={handleAddSkill}
          >
            <Plus className="w-5 h-5" />
          </button>
        </div>
        <p className="mt-1 text-sm text-gray-500">
          Press Enter to add a skill after typing
        </p>
      </div>

      <div className="mt-4">
        <label className="label">Your Skills</label>
        {resumeData.skills.length === 0 ? (
          <div className="p-4 bg-gray-50 rounded-lg text-center">
            <p className="text-gray-500">No skills added yet</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 p-4 bg-gray-50 rounded-lg min-h-[100px]">
            {resumeData.skills.map((skill, index) => (
              <div
                key={index}
                className="inline-flex items-center bg-white px-3 py-1 rounded-full text-sm border border-gray-200"
              >
                {skill}
                <button
                  type="button"
                  className="ml-1 text-gray-400 hover:text-red-500"
                  onClick={() => handleRemoveSkill(index)}
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

export default SkillsForm;