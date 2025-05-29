import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Plus, Trash2 } from 'lucide-react';

const ProjectsForm: React.FC = () => {
  const { resumeData, addProject, removeProject, updateProject } = useResume();

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Projects</h2>
        <button
          type="button"
          className="btn-primary py-1 px-3 text-sm flex items-center"
          onClick={addProject}
        >
          <Plus className="w-4 h-4 mr-1" />
          Add Project
        </button>
      </div>

      {resumeData.projects.length === 0 ? (
        <div className="text-center py-6 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No project entries yet.</p>
          <button
            type="button"
            className="mt-2 btn-outline py-1 px-3 text-sm inline-flex items-center"
            onClick={addProject}
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Project
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {resumeData.projects.map((project, index) => (
            <div key={index} className="p-4 border border-gray-200 rounded-lg bg-white">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-800">
                  Project #{index + 1}
                </h3>
                <button
                  type="button"
                  className="inline-flex items-center p-1.5 text-xs font-medium rounded text-red-700 bg-red-50 hover:bg-red-100"
                  onClick={() => removeProject(index)}
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="form-group">
                <label className="label">Project Title</label>
                <input
                  type="text"
                  className="input"
                  value={project.title}
                  onChange={(e) => updateProject(index, 'title', e.target.value)}
                  placeholder="E-commerce Website"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="form-group">
                  <label className="label">Start Date</label>
                  <input
                    type="text"
                    className="input"
                    value={project.startDate}
                    onChange={(e) =>
                      updateProject(index, 'startDate', e.target.value)
                    }
                    placeholder="MM/YYYY"
                  />
                </div>

                <div className="form-group">
                  <label className="label">End Date</label>
                  <input
                    type="text"
                    className="input"
                    value={project.endDate}
                    onChange={(e) => updateProject(index, 'endDate', e.target.value)}
                    placeholder="MM/YYYY or Present"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="label">Description</label>
                <textarea
                  className="input"
                  rows={3}
                  value={project.description}
                  onChange={(e) =>
                    updateProject(index, 'description', e.target.value)
                  }
                  placeholder="Describe the project and your role in it"
                />
              </div>

              <div className="form-group">
                <label className="label">Technologies Used</label>
                <input
                  type="text"
                  className="input"
                  value={project.technologies}
                  onChange={(e) =>
                    updateProject(index, 'technologies', e.target.value)
                  }
                  placeholder="React, Node.js, MongoDB, etc."
                />
              </div>

              <div className="form-group">
                <label className="label">Project Link (Optional)</label>
                <input
                  type="url"
                  className="input"
                  value={project.link}
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                  placeholder="https://example.com"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectsForm;