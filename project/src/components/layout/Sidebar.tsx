import React from 'react';
import { useResume } from '../../context/ResumeContext';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  FolderKanban, 
  Lightbulb, 
  Languages, 
  Award,
  CheckCircle
} from 'lucide-react';
import classNames from 'classnames';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
  completed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  active, 
  onClick,
  completed = false
}) => {
  return (
    <button
      className={classNames(
        'flex items-center w-full px-3 py-2 text-left transition-colors rounded-md',
        {
          'bg-primary-50 text-primary-700': active,
          'hover:bg-gray-100': !active,
          'text-gray-800': !active && !completed,
          'text-green-600': completed && !active,
        }
      )}
      onClick={onClick}
    >
      <div className="mr-3">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
      {completed && !active && (
        <CheckCircle className="w-4 h-4 ml-auto text-green-600" />
      )}
    </button>
  );
};

const Sidebar: React.FC = () => {
  const { activeSection, setActiveSection, resumeData } = useResume();

  // Check if sections are completed
  const isPersonalInfoCompleted = () => {
    const { fullName, email } = resumeData.personalInfo;
    return fullName.trim() !== '' && email.trim() !== '';
  };

  const isEducationCompleted = () => {
    return resumeData.education.some(
      (edu) => edu.degree.trim() !== '' && edu.institution.trim() !== ''
    );
  };

  const isExperienceCompleted = () => {
    return resumeData.experience.some(
      (exp) => exp.title.trim() !== '' && exp.company.trim() !== ''
    );
  };

  const isProjectsCompleted = () => {
    return resumeData.projects.some(
      (proj) => proj.title.trim() !== '' && proj.description.trim() !== ''
    );
  };

  const isSkillsCompleted = () => {
    return resumeData.skills.length > 0;
  };

  return (
    <aside className="w-64 border-r border-gray-200 bg-white hidden md:block">
      <div className="p-4">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
          Resume Sections
        </h2>

        <nav className="mt-4 space-y-1">
          <SidebarItem
            icon={<User className="w-5 h-5" />}
            label="Personal Info"
            active={activeSection === 'personal'}
            onClick={() => setActiveSection('personal')}
            completed={isPersonalInfoCompleted()}
          />
          <SidebarItem
            icon={<GraduationCap className="w-5 h-5" />}
            label="Education"
            active={activeSection === 'education'}
            onClick={() => setActiveSection('education')}
            completed={isEducationCompleted()}
          />
          <SidebarItem
            icon={<Briefcase className="w-5 h-5" />}
            label="Experience"
            active={activeSection === 'experience'}
            onClick={() => setActiveSection('experience')}
            completed={isExperienceCompleted()}
          />
          <SidebarItem
            icon={<FolderKanban className="w-5 h-5" />}
            label="Projects"
            active={activeSection === 'projects'}
            onClick={() => setActiveSection('projects')}
            completed={isProjectsCompleted()}
          />
          <SidebarItem
            icon={<Lightbulb className="w-5 h-5" />}
            label="Skills"
            active={activeSection === 'skills'}
            onClick={() => setActiveSection('skills')}
            completed={isSkillsCompleted()}
          />
          <SidebarItem
            icon={<Languages className="w-5 h-5" />}
            label="Languages"
            active={activeSection === 'languages'}
            onClick={() => setActiveSection('languages')}
          />
          <SidebarItem
            icon={<Award className="w-5 h-5" />}
            label="Certifications"
            active={activeSection === 'certifications'}
            onClick={() => setActiveSection('certifications')}
          />
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;