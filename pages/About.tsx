
import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in pt-12 pb-20">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-light mb-4 text-anthropic-text">About Me</h1>
          <p className="text-lg text-anthropic-gray font-sans font-light">
            Biography, Education, Honors & Academic Services
          </p>
        </div>

        {/* Biography Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-anthropic-text/10 pb-4">
            <BookOpen size={24} className="text-anthropic-accent" />
            <h2 className="text-2xl font-serif text-anthropic-text">Biography</h2>
          </div>

          <div className="bg-white border border-anthropic-text/5 rounded-xl p-8">
            <p className="text-anthropic-gray font-light leading-relaxed mb-6">
              I am a prospective Ph.D. student (starting Fall 2026) jointly at the College of Computer Science and Artificial Intelligence,
              <a href="https://www.fudan.edu.cn/en/" target="_blank" rel="noreferrer" className="text-anthropic-accent hover:underline font-medium"> Fudan University</a>, and the
              <a href="https://www.sii.edu.cn/" target="_blank" rel="noreferrer" className="text-anthropic-accent hover:underline font-medium"> Shanghai Innovation Institute</a>, advised by
              <a href={PERSONAL_INFO.advisorLink} target="_blank" rel="noreferrer" className="text-anthropic-accent hover:underline font-medium"> {PERSONAL_INFO.advisor}</a>.
              Currently, I am a senior undergraduate student at
              <a href="https://en.hit.edu.cn/" target="_blank" rel="noreferrer" className="text-anthropic-accent hover:underline font-medium"> Harbin Institute of Technology</a>.
            </p>
            <p className="text-anthropic-gray font-light leading-relaxed mb-6">
              {PERSONAL_INFO.bio}
            </p>
            <p className="text-anthropic-gray font-light leading-relaxed">
              If you are interested in any form of academic collaboration, please feel free to email me at
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-anthropic-accent hover:underline font-medium"> {SOCIAL_LINKS.email}</a>.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-anthropic-text/10 pb-4">
            <GraduationCap size={24} className="text-anthropic-accent" />
            <h2 className="text-2xl font-serif text-anthropic-text">Education</h2>
          </div>

          <div className="space-y-4">
            {PERSONAL_INFO.education.map((edu, index) => (
              <div
                key={index}
                className="bg-white border border-anthropic-text/5 rounded-xl p-6 hover:shadow-sm transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-serif text-anthropic-text">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-sm text-anthropic-gray/60">
                    <Calendar size={14} />
                    <span className="font-mono">{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-anthropic-gray">
                  <MapPin size={16} className="text-anthropic-accent/60" />
                  <span className="font-light">{edu.school}, {edu.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Honors Section */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6 border-b border-anthropic-text/10 pb-4">
            <Award size={24} className="text-anthropic-accent" />
            <h2 className="text-2xl font-serif text-anthropic-text">Honors and Awards</h2>
          </div>

          <div className="bg-white border border-anthropic-text/5 rounded-xl overflow-hidden">
            {PERSONAL_INFO.honors.map((honor, index) => (
              <div
                key={index}
                className={`flex gap-6 p-6 ${index !== PERSONAL_INFO.honors.length - 1 ? 'border-b border-anthropic-text/5' : ''}`}
              >
                <span className="text-anthropic-accent font-mono text-sm whitespace-nowrap pt-0.5">
                  {honor.year}
                </span>
                <p className="text-anthropic-gray font-light">{honor.title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Academic Services Section */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-b border-anthropic-text/10 pb-4">
            <BookOpen size={24} className="text-anthropic-accent" />
            <h2 className="text-2xl font-serif text-anthropic-text">Academic Services</h2>
          </div>

          <div className="bg-white border border-anthropic-text/5 rounded-xl p-6">
            <p className="text-anthropic-gray font-light">
              <span className="font-medium text-anthropic-text">Conference Reviewer: </span>
              {PERSONAL_INFO.services.join(', ')}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
