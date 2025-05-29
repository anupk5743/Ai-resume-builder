import React from 'react';
import { useResume } from '../../context/ResumeContext';

const MobileSectionSelector: React.FC = () => {
  const { activeSection, setActiveSection } = useResume();

  const sections = [
    { id: 'personal', label: 'Personal' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'certifications', label: 'Certifications' },
  ];

  return (
    <div className="card p-3">
      <label htmlFor="sectionSelector" className="label mb-2">
        Resume Section
      </label>
      <select
        id="sectionSelector"
        className="input"
        value={activeSection}
        onChange={(e) => setActiveSection(e.target.value)}
      >
        {sections.map((section) => (
          <option key={section.id} value={section.id}>
            {section.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default MobileSectionSelector;