
import React from 'react';
import { ArrowRight, Mail, Github, Linkedin, GraduationCap } from 'lucide-react';
import { RESEARCH_INTERESTS, NEWS_ITEMS, SOCIAL_LINKS } from '../constants';
import HeroVisual from '../components/HeroVisual';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    alert(`Email "${SOCIAL_LINKS.email}" copied to clipboard.`);
  };

  // Helper to render content with links specifically on quoted text or full text
  const renderNewsContent = (content: string, link?: string) => {
    // Check for quoted text to link specifically
    const parts = content.split('"');

    // If we found a quoted part (e.g., My paper "Title" is...) and have a link
    if (parts.length >= 3 && link) {
        return (
            <>
                {parts[0]}"
                <a
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-anthropic-text underline decoration-anthropic-accent/50 hover:decoration-anthropic-accent hover:text-anthropic-accent transition-colors font-medium"
                >
                    {parts[1]}
                </a>
                "{parts[2]}
            </>
        );
    }

    // Fallback: Link the whole text if a link exists
    if (link) {
         return (
          <a
            href={link}
            className={link.startsWith('#') ? "hover:text-anthropic-accent transition-colors" : "hover:text-anthropic-accent transition-colors underline decoration-anthropic-text/30"}
            target={link.startsWith('#') ? "_self" : "_blank"}
            rel={link.startsWith('#') ? "" : "noreferrer"}
          >
            {content}
          </a>
        );
    }

    return <>{content}</>;
  };

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section */}
      <section className="pt-10 pb-16 md:pt-20 md:pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[500px]">
        {/* Left: Content */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 text-anthropic-text leading-tight">
            Building self-evolving<br />
            AI agents.
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-anthropic-gray leading-relaxed mb-8">
            I'm Mingzhe Li, a prospective Ph.D. student at Fudan University × Shanghai Innovation Institute.
            My research focuses on Reinforcement Learning, Self-Evolving Agents and Synthetic Data Generation. I aim to stimulate the self-evolving capabilities of LLM-based agents in real-world environments.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={copyEmail}
              className="text-anthropic-text hover:text-anthropic-accent transition-colors p-2 -ml-2 rounded-full hover:bg-anthropic-stone/30"
              aria-label="Email"
              title={`${SOCIAL_LINKS.email} (Click to Copy)`}
            >
              <Mail size={24} strokeWidth={1.5} />
            </button>
            <a
              href={SOCIAL_LINKS.scholar}
              target="_blank"
              rel="noreferrer"
              className="text-anthropic-text hover:text-anthropic-accent transition-colors p-2 rounded-full hover:bg-anthropic-stone/30"
              aria-label="Google Scholar"
              title="Google Scholar"
            >
              <GraduationCap size={24} strokeWidth={1.5} />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="text-anthropic-text hover:text-anthropic-accent transition-colors p-2 rounded-full hover:bg-anthropic-stone/30"
              aria-label="GitHub"
              title="GitHub"
            >
              <Github size={24} strokeWidth={1.5} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-anthropic-text hover:text-anthropic-accent transition-colors p-2 rounded-full hover:bg-anthropic-stone/30"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <Linkedin size={24} strokeWidth={1.5} />
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="relative h-[400px] w-full hidden lg:block overflow-hidden rounded-2xl">
          <HeroVisual />
        </div>
      </section>

       {/* News Section */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8 border-b border-anthropic-text/10 pb-4">
          <h2 className="text-3xl font-serif text-anthropic-text">News</h2>
          <span className="text-sm font-sans text-anthropic-gray/60 uppercase tracking-widest">Latest Updates</span>
        </div>

        <div className="max-h-60 overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-anthropic-stone scrollbar-track-transparent">
          <div className="space-y-6">
            {NEWS_ITEMS.map((news, index) => (
              <div key={index} className="flex gap-6 group">
                <span className="text-anthropic-gray/60 font-mono text-sm whitespace-nowrap pt-1 w-24 flex-shrink-0">
                  [{news.date}]
                </span>
                <p className="text-anthropic-gray font-light leading-relaxed group-hover:text-anthropic-text transition-colors">
                  {renderNewsContent(news.content, news.link)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Topics */}
      <section>
        <div className="flex items-baseline justify-between mb-8 border-b border-anthropic-text/10 pb-4">
          <h2 className="text-3xl font-serif text-anthropic-text">Research Topics</h2>
          <Link to="/publications" className="group flex items-center text-sm font-sans text-anthropic-accent hover:text-anthropic-text transition-colors">
            View Publications
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {RESEARCH_INTERESTS.map((interest, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border transition-all duration-300 hover:shadow-sm ${interest.colorTheme || 'bg-white border-anthropic-text/5'}`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-serif text-anthropic-text">{interest.title}</h3>
                </div>

                <p className="text-anthropic-gray font-sans font-light leading-relaxed flex-grow">
                  {interest.description}
                </p>

                {interest.period && (
                    <div className="mt-6 pt-4 border-t border-black/5">
                        <span className="text-xs font-mono text-anthropic-gray/60 uppercase tracking-wider">
                            {interest.period}
                        </span>
                    </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
