import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, Trash2, Sparkles } from 'lucide-react';

const EducationForm: React.FC = () => {
  const { 
    resumeData, 
    addEducation, 
    removeEducation, 
    updateEducation, 
    generateAIContent 
  } = useResume();
  
  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        <button
          type="button"
          className="btn-primary py-1 px-3 text-sm flex items-center"
          onClick={addEducation}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Education
        </button>
      </div>

      {resumeData.education.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No education entries yet.</p>
          <button
            type="button"
            className="mt-2 btn-outline py-1 px-3 text-sm inline-flex items-center"
            onClick={addEducation}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Education
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resumeData.education.map((education, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Education #{index + 1}
                </h3>
                <div className="flex space-x-2">
                  {index === 0 && (
                    <button
                      type="button"
                      className="inline-flex items-center p-1.5 text-xs font-medium rounded text-primary-700 bg-primary-50 hover:bg-primary-100"
                      onClick={() => generateAIContent('education')}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex items-center p-1.5 text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                    onClick={() => removeEducation(index)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="label">Degree</label>
                  <input
                    type="text"
                    className="input"
                    value={education.degree}
                    onChange={(e) => updateEducation(index, 'degree', e.target.value)}
                    placeholder="Bachelor of Science"
                  />
                </div>

                <div className="form-group">
                  <label className="label">Institution</label>
                  <input
                    type="text"
                    className="input"
                    value={education.institution}
                    onChange={(e) =>
                      updateEducation(index, 'institution', e.target.value)
                    }
                    placeholder="University Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input"
                  value={education.location}
                  onChange={(e) => updateEducation(index, 'location', e.target.value)}
                  placeholder="City, State, Country"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="form-group">
                  <label className="label">Start Date</label>
                  <input
                    type="text"
                    className="input"
                    value={education.startDate}
                    onChange={(e) =>
                      updateEducation(index, 'startDate', e.target.value)
                    }
                    placeholder="MM/YYYY"
                  />
                </div>

                <div className="form-group">
                  <label className="label">End Date</label>
                  <input
                    type="text"
                    className="input"
                    value={education.endDate}
                    onChange={(e) => updateEducation(index, 'endDate', e.target.value)}
                    placeholder="MM/YYYY or Present"
                  />
                </div>

                <div className="form-group">
                  <label className="label">GPA</label>
                  <input
                    type="text"
                    className="input"
                    value={education.gpa}
                    onChange={(e) => updateEducation(index, 'gpa', e.target.value)}
                    placeholder="3.8/4.0"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">Description (Optional)</label>
                <textarea
                  className="input"
                  rows={3}
                  value={education.description}
                  onChange={(e) =>
                    updateEducation(index, 'description', e.target.value)
                  }
                  placeholder="Relevant coursework, honors, or achievements"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EducationForm;