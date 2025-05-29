import React from 'react';
import { useResume } from '../../context/ResumeContext';
import PersonalInfoForm from './sections/PersonalInfoForm';
import EducationForm from './sections/EducationForm';
import ExperienceForm from './sections/ExperienceForm';
import ProjectsForm from './sections/ProjectsForm';
import SkillsForm from './sections/SkillsForm';
import LanguagesForm from './sections/LanguagesForm';
import CertificationsForm from './sections/CertificationsForm';
import MobileSectionSelector from '../ui/MobileSectionSelector';

const ResumeForm: React.FC = () => {
  const { activeSection } = useResume();

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'personal':
        return <PersonalInfoForm />;
      case 'education':
        return <EducationForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'projects':
        return <ProjectsForm />;
      case 'skills':
        return <SkillsForm />;
      case 'languages':
        return <LanguagesForm />;
      case 'certifications':
        return <CertificationsForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="resume-section">
      <div className="md:hidden mb-6">
        <MobileSectionSelector />
      </div>
      
      {renderActiveSection()}
    </div>
  );
};

export default ResumeForm;