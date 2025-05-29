import React, { createContext, useContext, useState, useEffect } from 'react';
import { ResumeData, EducationItem, ExperienceItem, ProjectItem, initialResumeData } from '../types/resume';

interface ResumeContextType {
  resumeData: ResumeData;
  setResumeData: React.Dispatch<React.SetStateAction<ResumeData>>;
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
  selectedTemplate: string;
  setSelectedTemplate: React.Dispatch<React.SetStateAction<string>>;
  addEducation: () => void;
  removeEducation: (index: number) => void;
  addExperience: () => void;
  removeExperience: (index: number) => void;
  addProject: () => void;
  removeProject: (index: number) => void;
  updatePersonalInfo: (field: string, value: string) => void;
  updateEducation: (index: number, field: string, value: string) => void;
  updateExperience: (index: number, field: string, value: string) => void;
  updateProject: (index: number, field: string, value: string) => void;
  updateSkills: (skills: string[]) => void;
  generateAIContent: (section: string, prompt?: string) => void;
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : initialResumeData;
  });
  
  const [activeSection, setActiveSection] = useState('personal');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');

  useEffect(() => {
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
  }, [resumeData]);

  const addEducation = () => {
    const newEducation: EducationItem = {
      degree: '',
      institution: '',
      location: '',
      startDate: '',
      endDate: '',
      gpa: '',
      description: '',
    };
    
    setResumeData({
      ...resumeData,
      education: [...resumeData.education, newEducation],
    });
  };

  const removeEducation = (index: number) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const addExperience = () => {
    const newExperience: ExperienceItem = {
      title: '',
      company: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [''],
    };
    
    setResumeData({
      ...resumeData,
      experience: [...resumeData.experience, newExperience],
    });
  };

  const removeExperience = (index: number) => {
    const updatedExperience = [...resumeData.experience];
    updatedExperience.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const addProject = () => {
    const newProject: ProjectItem = {
      title: '',
      description: '',
      technologies: '',
      link: '',
      startDate: '',
      endDate: '',
    };
    
    setResumeData({
      ...resumeData,
      projects: [...resumeData.projects, newProject],
    });
  };

  const removeProject = (index: number) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects.splice(index, 1);
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData({
      ...resumeData,
      personalInfo: {
        ...resumeData.personalInfo,
        [field]: value,
      },
    });
  };

  const updateEducation = (index: number, field: string, value: string) => {
    const updatedEducation = [...resumeData.education];
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    };
    
    setResumeData({
      ...resumeData,
      education: updatedEducation,
    });
  };

  const updateExperience = (index: number, field: string, value: string | boolean | string[]) => {
    const updatedExperience = [...resumeData.experience];
    
    if (field === 'achievements' && typeof value === 'string') {
      updatedExperience[index] = {
        ...updatedExperience[index],
        achievements: value.split('\n').filter(item => item.trim() !== ''),
      };
    } else {
      updatedExperience[index] = {
        ...updatedExperience[index],
        [field]: value,
      };
    }
    
    setResumeData({
      ...resumeData,
      experience: updatedExperience,
    });
  };

  const updateProject = (index: number, field: string, value: string) => {
    const updatedProjects = [...resumeData.projects];
    updatedProjects[index] = {
      ...updatedProjects[index],
      [field]: value,
    };
    
    setResumeData({
      ...resumeData,
      projects: updatedProjects,
    });
  };

  const updateSkills = (skills: string[]) => {
    setResumeData({
      ...resumeData,
      skills,
    });
  };

  // Mock AI content generation function
  const generateAIContent = (section: string, prompt?: string) => {
    // In a real application, this would call an API to generate content
    // For now, we'll just use some pre-defined templates
    
    const suggestions: Record<string, Record<string, string>> = {
      summary: {
        default: "Dedicated software engineer with 5+ years of experience developing scalable web applications. Proven expertise in JavaScript, React, and Node.js with a passion for creating elegant solutions to complex problems.",
        developer: "Innovative software developer with a strong background in full-stack development and a passion for creating efficient, scalable applications. Experienced in JavaScript, TypeScript, React, and Node.js with a track record of delivering high-quality code on time.",
        designer: "Creative UI/UX designer with 4+ years of experience crafting intuitive and visually appealing interfaces. Proficient in design tools including Figma, Adobe XD, and Sketch with a strong understanding of user-centered design principles.",
        manager: "Results-oriented project manager with 7+ years of experience leading cross-functional teams to deliver complex software projects on time and within budget. Skilled in Agile methodologies, risk management, and stakeholder communication.",
      },
      experience: {
        default: "Led development of a customer-facing web application that increased user engagement by 45%. Implemented responsive design principles and optimized performance, reducing load times by 30%.",
        developer: "Architected and implemented RESTful APIs used by over 500,000 users monthly. Reduced server response time by 40% through query optimization and caching strategies.",
        designer: "Redesigned the company's flagship product UI, resulting in a 35% increase in user retention and positive feedback from 92% of surveyed users.",
        manager: "Managed a team of 12 developers across 3 time zones to deliver a mission-critical application under tight deadlines, resulting in $2M in new revenue.",
      },
      education: {
        default: "Bachelor of Science in Computer Science\nState University\n2015 - 2019\nGPA: 3.8/4.0",
        advanced: "Master of Science in Computer Science\nSpecialization in Artificial Intelligence\nTech University\n2019 - 2021\nGPA: 3.9/4.0",
      },
      skills: {
        default: "JavaScript, TypeScript, React, Node.js, Express, MongoDB, Git, Agile, Problem Solving, Team Collaboration",
        developer: "JavaScript, TypeScript, React, Redux, Node.js, Express, GraphQL, MongoDB, PostgreSQL, Docker, AWS, CI/CD, Unit Testing",
        designer: "Figma, Adobe XD, Sketch, Photoshop, Illustrator, UI/UX Design, Wireframing, Prototyping, User Research, Accessibility",
        manager: "Agile, Scrum, Kanban, JIRA, Confluence, Risk Management, Budgeting, Stakeholder Management, Team Leadership",
      },
    };

    let content = '';
    
    if (section === 'summary') {
      content = suggestions.summary[prompt || 'default'] || suggestions.summary.default;
      setResumeData({
        ...resumeData,
        personalInfo: {
          ...resumeData.personalInfo,
          summary: content,
        },
      });
    } else if (section === 'experience' && resumeData.experience.length > 0) {
      content = suggestions.experience[prompt || 'default'] || suggestions.experience.default;
      const updatedExperience = [...resumeData.experience];
      updatedExperience[0] = {
        ...updatedExperience[0],
        description: content,
      };
      setResumeData({
        ...resumeData,
        experience: updatedExperience,
      });
    } else if (section === 'education' && resumeData.education.length > 0) {
      const educationLines = (suggestions.education[prompt || 'default'] || suggestions.education.default).split('\n');
      if (educationLines.length >= 4) {
        const updatedEducation = [...resumeData.education];
        updatedEducation[0] = {
          ...updatedEducation[0],
          degree: educationLines[0],
          institution: educationLines[1],
          startDate: educationLines[2].split(' - ')[0],
          endDate: educationLines[2].split(' - ')[1],
          gpa: educationLines[3].replace('GPA: ', ''),
        };
        setResumeData({
          ...resumeData,
          education: updatedEducation,
        });
      }
    } else if (section === 'skills') {
      const skillsList = (suggestions.skills[prompt || 'default'] || suggestions.skills.default).split(', ');
      setResumeData({
        ...resumeData,
        skills: skillsList,
      });
    }
  };

  const value = {
    resumeData,
    setResumeData,
    activeSection,
    setActiveSection,
    selectedTemplate,
    setSelectedTemplate,
    addEducation,
    removeEducation,
    addExperience,
    removeExperience,
    addProject,
    removeProject,
    updatePersonalInfo,
    updateEducation,
    updateExperience,
    updateProject,
    updateSkills,
    generateAIContent,
  };

  return <ResumeContext.Provider value={value}>{children}</ResumeContext.Provider>;
};

export const useResume = (): ResumeContextType => {
  const context = useContext(ResumeContext);
  if (!context) {
    throw new Error('useResume must be used within a ResumeProvider');
  }
  return context;
};