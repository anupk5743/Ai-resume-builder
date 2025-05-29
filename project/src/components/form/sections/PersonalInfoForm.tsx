import React from 'react';
import { useResume } from '../../../context/ResumeContext';
import { Sparkles } from 'lucide-react';

const PersonalInfoForm: React.FC = () => {
  const { resumeData, updatePersonalInfo, generateAIContent } = useResume();
  const { personalInfo } = resumeData;

  return (
    <div className="card animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Personal Information</h2>
      </div>

      <div className="space-y-4">
        <div className="form-group">
          <label htmlFor="fullName" className="label">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className="input"
            value={personalInfo.fullName}
            onChange={(e) => updatePersonalInfo('fullName', e.target.value)}
            placeholder="John Doe"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              value={personalInfo.email}
              onChange={(e) => updatePersonalInfo('email', e.target.value)}
              placeholder="john.doe@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="label">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="input"
              value={personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              placeholder="(123) 456-7890"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="location" className="label">
            Location
          </label>
          <input
            type="text"
            id="location"
            className="input"
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo('location', e.target.value)}
            placeholder="City, State, Country"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-group">
            <label htmlFor="linkedin" className="label">
              LinkedIn
            </label>
            <input
              type="url"
              id="linkedin"
              className="input"
              value={personalInfo.linkedin}
              onChange={(e) => updatePersonalInfo('linkedin', e.target.value)}
              placeholder="linkedin.com/in/johndoe"
            />
          </div>

          <div className="form-group">
            <label htmlFor="github" className="label">
              GitHub
            </label>
            <input
              type="url"
              id="github"
              className="input"
              value={personalInfo.github}
              onChange={(e) => updatePersonalInfo('github', e.target.value)}
              placeholder="github.com/johndoe"
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="website" className="label">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="input"
            value={personalInfo.website}
            onChange={(e) => updatePersonalInfo('website', e.target.value)}
            placeholder="johndoe.com"
          />
        </div>

        <div className="form-group">
          <div className="flex justify-between items-center">
            <label htmlFor="summary" className="label">
              Professional Summary
            </label>
            <button
              type="button"
              className="inline-flex items-center px-2 py-1 text-xs font-medium rounded text-primary-700 bg-primary-50 hover:bg-primary-100"
              onClick={() => generateAIContent('summary')}
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Generate with AI
            </button>
          </div>
          <textarea
            id="summary"
            rows={4}
            className="input"
            value={personalInfo.summary}
            onChange={(e) => updatePersonalInfo('summary', e.target.value)}
            placeholder="A brief summary of your professional background and career goals"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoForm;