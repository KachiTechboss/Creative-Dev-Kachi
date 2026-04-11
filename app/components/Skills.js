'use client';

import React, { useState } from "react";
import TextScramble from './TextScramble';
import { 
  SiGithub, 
  SiReact, 
  SiHtml5, 
  SiJavascript, 
  SiGit,
  SiTailwindcss,
  SiNextdotjs,
  SiBootstrap,
  SiTypescript,
  SiFigma,
  SiVercel,
  SiNpm
} from "react-icons/si";
import { FaCss3Alt, FaRocket, FaPlug, FaUsers, FaSearchDollar, FaLaptopCode, FaMobileAlt, FaPaintBrush, FaCode } from "react-icons/fa";
import { MdDashboard, MdSpeed } from "react-icons/md";

const techSkills = [
  { icon: <SiHtml5 />, name: "HTML5", level: 95 },
  { icon: <FaCss3Alt />, name: "CSS3", level: 92 },
  { icon: <SiJavascript />, name: "JavaScript", level: 90 },
  { icon: <SiTypescript />, name: "TypeScript", level: 75 },
  { icon: <SiReact />, name: "React", level: 90 },
  { icon: <SiNextdotjs />, name: "Next.js", level: 85 },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 88 },
  { icon: <SiBootstrap />, name: "Bootstrap", level: 85 },
  { icon: <SiGit />, name: "Git", level: 80 },
  { icon: <SiGithub />, name: "GitHub", level: 85 },
];

const serviceSkills = [
  { icon: <MdDashboard />, name: "SaaS Dashboard", desc: "Custom analytics dashboards with real-time data visualization and interactive charts." },
  { icon: <FaUsers />, name: "CRM Frontend Systems", desc: "User management interfaces with role-based access, data tables, and workflow automation." },
  { icon: <FaPlug />, name: "API Integration", desc: "Seamless REST/GraphQL API integration with loading states, error handling, and caching." },
  { icon: <FaSearchDollar />, name: "SEO Optimization", desc: "Technical SEO with meta tags, structured data, sitemap generation, and Core Web Vitals." },
  { icon: <FaRocket />, name: "Speed Optimization", desc: "Code-splitting, lazy loading, image optimization, and lighthouse performance tuning." },
  { icon: <FaLaptopCode />, name: "Landing Pages", desc: "High-converting landing pages with A/B testing ready layouts and compelling CTAs." },
  { icon: <FaMobileAlt />, name: "Responsive Design", desc: "Mobile-first, cross-browser compatible layouts that look perfect on every screen size." },
  { icon: <FaPaintBrush />, name: "UI/UX Implementation", desc: "Pixel-perfect conversion of Figma/XD designs into clean, maintainable code." },
];

const tools = [
  { icon: <FaCode />, name: "VS Code" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiVercel />, name: "Vercel" },
  { icon: <SiNpm />, name: "npm" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "GitHub" },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all' 
    ? serviceSkills 
    : serviceSkills.filter((_, i) => {
        if (activeTab === 'development') return i < 3;
        if (activeTab === 'optimization') return i >= 3 && i < 5;
        if (activeTab === 'design') return i >= 5;
        return true;
      });

  return (
    <section className="skills-section">
      <div className="container">
        <TextScramble text="My Skills" className="section-title" />
        <p className="skills-intro">Technologies I work with daily to build modern, performant web applications.</p>

        {/* Tech Skills with progress bars */}
        <div className="skills-bars-grid">
          {techSkills.map((skill, i) => (
            <div key={i} className="skill-bar-item fade-in-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="skill-bar-header">
                <div className="skill-bar-icon">{skill.icon}</div>
                <span className="skill-bar-name">{skill.name}</span>
                <span className="skill-bar-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div className="skill-bar-fill" style={{ width: `${skill.level}%`, animationDelay: `${i * 0.1 + 0.3}s` }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <TextScramble text="My Services" className="section-title" />

        <div className="services-tabs">
          {['all', 'development', 'optimization', 'design'].map(tab => (
            <button 
              key={tab} 
              className={`services-tab ${activeTab === tab ? 'services-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        <div className="service-skills-grid">
          {filteredServices.map((skill, i) => (
            <div 
              key={skill.name} 
              className="service-skill-card fade-in-up" 
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="service-skill-icon">{skill.icon}</div>
              <h4 className="service-skill-name">{skill.name}</h4>
              <p className="service-skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>

        {/* Tools Section */}
        <TextScramble text="Tools I Use" className="skills-subtitle" tag="h3" />
        <div className="tools-grid">
          {tools.map((tool, i) => (
            <div key={i} className="tool-item fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="tool-icon">{tool.icon}</div>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>

        {/* Stats banner */}
        <div className="skills-stats-banner fade-in-up">
          <div className="skills-stat-item">
            <MdSpeed className="skills-stat-icon" />
            <div className="skills-stat-number">95+</div>
            <div className="skills-stat-label">Lighthouse Score</div>
          </div>
          <div className="skills-stat-item">
            <FaLaptopCode className="skills-stat-icon" />
            <div className="skills-stat-number">60+</div>
            <div className="skills-stat-label">Projects Built</div>
          </div>
          <div className="skills-stat-item">
            <FaRocket className="skills-stat-icon" />
            <div className="skills-stat-number">3+</div>
            <div className="skills-stat-label">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
