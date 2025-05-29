import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, Trash2, Sparkles } from 'lucide-react';

const ExperienceForm: React.FC = () => {
  const { 
    resumeData, 
    addExperience, 
    removeExperience, 
    updateExperience,
    generateAIContent
  } = useResume();

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
        <button
          type="button"
          className="btn-primary py-1 px-3 text-sm flex items-center"
          onClick={addExperience}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Experience
        </button>
      </div>

      {resumeData.experience.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No experience entries yet.</p>
          <button
            type="button"
            className="mt-2 btn-outline py-1 px-3 text-sm inline-flex items-center"
            onClick={addExperience}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Experience
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resumeData.experience.map((experience, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Experience #{index + 1}
                </h3>
                <div className="flex space-x-2">
                  {index === 0 && (
                    <button
                      type="button"
                      className="inline-flex items-center p-1.5 text-xs font-medium rounded text-primary-700 bg-primary-50 hover:bg-primary-100"
                      onClick={() => generateAIContent('experience')}
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    type="button"
                    className="inline-flex items-center p-1.5 text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                    onClick={() => removeExperience(index)}
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="label">Job Title</label>
                  <input
                    type="text"
                    className="input"
                    value={experience.title}
                    onChange={(e) => updateExperience(index, 'title', e.target.value)}
                    placeholder="Software Engineer"
                  />
                </div>

                <div className="form-group">
                  <label className="label">Company</label>
                  <input
                    type="text"
                    className="input"
                    value={experience.company}
                    onChange={(e) =>
                      updateExperience(index, 'company', e.target.value)
                    }
                    placeholder="Company Name"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">Location</label>
                <input
                  type="text"
                  className="input"
                  value={experience.location}
                  onChange={(e) =>
                    updateExperience(index, 'location', e.target.value)
                  }
                  placeholder="City, State, Country"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="label">Start Date</label>
                  <input
                    type="text"
                    className="input"
                    value={experience.startDate}
                    onChange={(e) =>
                      updateExperience(index, 'startDate', e.target.value)
                    }
                    placeholder="MM/YYYY"
                  />
                </div>

                <div className="form-group">
                  <div className="flex items-center justify-between">
                    <label className="label">End Date</label>
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={`current-${index}`}
                        className="rounded text-primary-600 focus:ring-primary-500 h-4 w-4"
                        checked={experience.current}
                        onChange={(e) =>
                          updateExperience(index, 'current', e.target.checked)
                        }
                      />
                      <label
                        htmlFor={`current-${index}`}
                        className="ml-2 text-sm text-gray-700"
                      >
                        Current
                      </label>
                    </div>
                  </div>
                  <input
                    type="text"
                    className="input"
                    value={experience.endDate}
                    onChange={(e) =>
                      updateExperience(index, 'endDate', e.target.value)
                    }
                    placeholder={experience.current ? 'Present' : 'MM/YYYY'}
                    disabled={experience.current}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">Description</label>
                <textarea
                  className="input"
                  rows={3}
                  value={experience.description}
                  onChange={(e) =>
                    updateExperience(index, 'description', e.target.value)
                  }
                  placeholder="Describe your responsibilities and achievements"
                />
              </div>

              <div className="form-group">
                <label className="label">Key Achievements</label>
                <textarea
                  className="input"
                  rows={4}
                  value={experience.achievements.join('\n')}
                  onChange={(e) =>
                    updateExperience(index, 'achievements', e.target.value)
                  }
                  placeholder="List each achievement on a new line"
                />
                <p className="mt-1 text-xs text-gray-500">
                  Enter each achievement on a new line
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceForm;