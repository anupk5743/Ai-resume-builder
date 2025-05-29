import React, { forwardRef } from 'react';
import { useResume } from '../../context/ResumeContext';

const MinimalTemplate = forwardRef((props, ref) => {
  const { resumeData } = useResume();
  const { personalInfo, education, experience, projects, skills, languages, certifications } = resumeData;

  return (
    <div 
      ref={ref} 
      className="bg-white w-[8.5in] h-[11in] mx-auto my-4 p-8 shadow-lg"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {/* Header */}
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-1 uppercase tracking-wide">
          {personalInfo.fullName || 'Your Name'}
        </h1>
        
        <div className="text-sm text-gray-600 space-y-0.5">
          {personalInfo.email && <div>{personalInfo.email}</div>}
          
          <div className="flex flex-wrap gap-2">
            {personalInfo.phone && <span>{personalInfo.phone}</span>}
            {personalInfo.location && (
              <>
                {personalInfo.phone && <span>•</span>}
                <span>{personalInfo.location}</span>
              </>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
            {personalInfo.github && (
              <>
                {personalInfo.linkedin && <span>•</span>}
                <span>{personalInfo.github}</span>
              </>
            )}
            {personalInfo.website && (
              <>
                {(personalInfo.linkedin || personalInfo.github) && <span>•</span>}
                <span>{personalInfo.website}</span>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Summary */}
      {personalInfo.summary && (
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 leading-relaxed">{personalInfo.summary}</p>
        </section>
      )}

      {/* Experience */}
      {experience.some(exp => exp.company || exp.title) && (
        <section className="mb-6">
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Professional Experience
          </h2>
          
          <div className="space-y-4">
            {experience.map((exp, index) => (
              (exp.company || exp.title) && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-800">{exp.title || 'Position'}</h3>
                    <span className="text-gray-600 text-xs">
                      {exp.startDate}{exp.endDate ? ` - ${exp.endDate}` : ''}
                    </span>
                  </div>
                  
                  <h4 className="text-gray-700 font-medium">{exp.company || 'Company'}{exp.location ? `, ${exp.location}` : ''}</h4>
                  
                  {exp.description && (
                    <p className="mt-1 text-sm text-gray-700">{exp.description}</p>
                  )}
                  
                  {exp.achievements.length > 0 && exp.achievements[0] !== '' && (
                    <ul className="mt-2 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-700 ml-4 list-disc">
                          {achievement}
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
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Education
          </h2>
          
          <div className="space-y-4">
            {education.map((edu, index) => (
              (edu.institution || edu.degree) && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-800">{edu.degree || 'Degree'}</h3>
                    <span className="text-gray-600 text-xs">
                      {edu.startDate}{edu.endDate ? ` - ${edu.endDate}` : ''}
                    </span>
                  </div>
                  
                  <h4 className="text-gray-700 font-medium">{edu.institution || 'Institution'}{edu.location ? `, ${edu.location}` : ''}</h4>
                  
                  {edu.gpa && (
                    <p className="mt-1 text-sm text-gray-700">GPA: {edu.gpa}</p>
                  )}
                  
                  {edu.description && (
                    <p className="mt-1 text-sm text-gray-700">{edu.description}</p>
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
          <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
            Projects
          </h2>
          
          <div className="space-y-4">
            {projects.map((proj, index) => (
              proj.title && (
                <div key={index} className="text-sm">
                  <div className="flex justify-between">
                    <h3 className="font-bold text-gray-800">{proj.title}</h3>
                    <span className="text-gray-600 text-xs">
                      {proj.startDate}{proj.endDate ? ` - ${proj.endDate}` : ''}
                    </span>
                  </div>
                  
                  {proj.technologies && (
                    <p className="text-gray-700 font-medium">{proj.technologies}</p>
                  )}
                  
                  {proj.description && (
                    <p className="mt-1 text-sm text-gray-700">{proj.description}</p>
                  )}
                  
                  {proj.link && (
                    <p className="mt-1 text-xs text-gray-600">{proj.link}</p>
                  )}
                </div>
              )
            ))}
          </div>
        </section>
      )}

      {/* Bottom Section */}
      <div className="mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Skills */}
          {skills.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                Skills
              </h2>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="text-xs text-gray-700"
                  >
                    {skill}{index < skills.length - 1 ? ',' : ''}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Languages */}
          {languages.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                Languages
              </h2>
              <ul className="text-xs text-gray-700 space-y-1">
                {languages.map((language, index) => (
                  <li key={index}>{language}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Certifications */}
          {certifications.length > 0 && (
            <section>
              <h2 className="text-base font-bold text-gray-900 uppercase tracking-wider mb-3 border-b border-gray-200 pb-1">
                Certifications
              </h2>
              <ul className="text-xs text-gray-700 space-y-1">
                {certifications.map((cert, index) => (
                  <li key={index}>{cert}</li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </div>
    </div>
  );
});

MinimalTemplate.displayName = 'MinimalTemplate';

export default MinimalTemplate;