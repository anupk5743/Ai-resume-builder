import React, { forwardRef } from 'react';
import { useResume } from '../../context/ResumeContext';
import { Mail, Phone, MapPin, Globe, Linkedin, Github } from 'lucide-react';

interface ProfessionalTemplateProps {}

const ProfessionalTemplate = forwardRef<HTMLDivElement, ProfessionalTemplateProps>((props, ref) => {
  const { resumeData } = useResume();
  const { personalInfo, education, experience, projects, skills, languages, certifications } = resumeData;

  return (
    <div 
      ref={ref} 
      className="bg-white w-[8.5in] h-[11in] mx-auto my-4 p-6 shadow-lg"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{personalInfo.fullName || 'Your Name'}</h1>
        
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
          {personalInfo.email && (
            <div className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              <span>{personalInfo.email}</span>
            </div>
          )}
          
          {personalInfo.phone && (
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          
          {personalInfo.location && (
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{personalInfo.location}</span>
            </div>
          )}
          
          {personalInfo.website && (
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              <span>{personalInfo.website}</span>
            </div>
          )}
          
          {personalInfo.linkedin && (
            <div className="flex items-center">
              <Linkedin className="w-4 h-4 mr-1" />
              <span>{personalInfo.linkedin}</span>
            </div>
          )}
          
          {personalInfo.github && (
            <div className="flex items-center">
              <Github className="w-4 h-4 mr-1" />
              <span>{personalInfo.github}</span>
            </div>
          )}
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
            Summary
          </h2>
          <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
          <p className="text-sm text-gray-700">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.some(exp => exp.company || exp.title) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
            Experience
          </h2>
          <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
          
          <div className="space-y-4">
            {experience.map((exp, index) => (
              (exp.company || exp.title) && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-800">{exp.title || 'Position'}</h3>
                    <span className="text-secondary-600 font-medium">
                      {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                    </span>
                  </div>
                  
                  <h4 className="text-gray-600 font-medium">{exp.company || 'Company'}{exp.location ? ` • ${exp.location}` : ''}</h4>
                  
                  {exp.description && (
                    <p className="mt-1 text-gray-700">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] !== '' && (
                    <ul className="mt-2 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-700 flex">
                          <span className="mr-2">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {education.some(edu => edu.institution || edu.degree) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
            Education
          </h2>
          <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-800">{edu.degree || 'Degree'}</h3>
                    <span className="text-secondary-600 font-medium">
                      {edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
                    </span>
                  </div>
                  
                  <h4 className="text-gray-600 font-medium">{edu.institution || 'Institution'}{edu.location ? ` • ${edu.location}` : ''}</h4>
                  
                  {edu.gpa && (
                    <p className="mt-1 text-gray-700">GPA: {edu.gpa}</p>
                  )}
                  
                  {edu.description && (
                    <p className="mt-1 text-gray-700">{edu.description}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Projects */}
      {projects.some(proj => proj.title) && (
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
            Projects
          </h2>
          <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
          
          <div className="space-y-4">
            {projects.map((proj, index) => (
              proj.title && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-800">{proj.title}</h3>
                    <span className="text-secondary-600 font-medium">
                      {proj.startDate}{proj.endDate ? ` - ${proj.endDate}` : ''}
                    </span>
                  </div>
                  
                  {proj.technologies && (
                    <h4 className="text-gray-600 font-medium">{proj.technologies}</h4>
                  )}
                  
                  {proj.description && (
                    <p className="mt-1 text-gray-700">{proj.description}</p>
                  )}
                  
                  {proj.link && (
                    <p className="mt-1 text-secondary-600">{proj.link}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Skills, Languages, and Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Skills */}
        {skills.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
              Skills
            </h2>
            <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Languages */}
        {languages.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
              Languages
            </h2>
            <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
            <ul className="text-sm text-gray-700 space-y-1">
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Certifications */}
        {certifications.length > 0 && (
          <section>
            <h2 className="text-lg font-bold text-gray-800 uppercase tracking-wider mb-2">
              Certifications
            </h2>
            <div className="h-1 w-16 bg-secondary-600 mb-3"></div>
            <ul className="text-sm text-gray-700 space-y-1">
              {certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
});

ProfessionalTemplate.displayName = 'ProfessionalTemplate';

export default ProfessionalTemplate;