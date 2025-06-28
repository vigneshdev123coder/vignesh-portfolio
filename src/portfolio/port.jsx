

import React, { useState, useEffect, useRef } from 'react';
import {
  Home, User, Lightbulb, Briefcase, Mail, Github, Linkedin,
   ExternalLink, Code, Database, Globe, XCircle, HardHat, Award, Sparkles, Menu // Import Menu icon
} from 'lucide-react';
import "./port.css";
import CanaraBankImage from './canara bank.jpeg';
import WeatherImage from './weather.jpeg';
import RestaurantImage from './restaurant.jpeg';
import image from "./portfolio img.png"
import image2 from "./port3.jpg"

// Define project data with direct paths to images in the root folder
// Images should be placed directly in the 'public' or root serving directory of the application.
const projectData = [
  {
    id: 'banking-app',
    image: CanaraBankImage, // Corrected path: directly reference from the public folder
    title: 'Banking Application',
    description: 'Allows users to test banking features like transactions and account management in a simplified, interactive environment. Features efficient navigation with React Router for seamless transitions and secure access with login/logout forms.',
    tags: ['React', 'React Router', 'Hooks', 'CSS', 'HTML'],
    liveDemo: 'https://react-project-banking-app.vercel.app/',
    github: 'https://github.com/vigneshdev123coder/REACT-PROJECT-BANKING-APP',
    longDescription: 'This application is used to Users can test banking features like transactions and account management. It Allows users to experience core banking operations in a simplified, interactive environment. It helps Efficient navigation with React Router enables seamless transitions between pages without reloading the page, enhancing user experience. And also users can securely access their accounts and manage banking features with login and logout forms.',
    features: [
      'Allows users to test banking features like transactions and account management.',
      'Enables core banking operations in a simplified, interactive environment.',
      'Efficient navigation with React Router for seamless page transitions.',
      'Secure account access and management with login and logout forms.',
      'Technologies Used: React, React Router, Hooks, CSS, HTML, login/logout react-router-dom.'
    ]
  },
  {
    id: 'weather-app',
    image: WeatherImage, // Corrected path: directly reference from the public folder
    title: 'Weather App',
    description: 'Displays current temperature, humidity, and weather conditions worldwide using real-time API integration. Provides search functionality and works responsively on all devices.',
    tags: ['HTML', 'CSS', 'JavaScript', 'Open Weather API'],
    liveDemo: 'https://vigneshdev123coder.github.io/weather-app-js-project/',
    github: 'https://github.com/vigneshdev123coder/weather-app-js-project',
    longDescription: 'This weather app displays current temperature, humidity, and weather conditions. This app allows users to check the weather for any city worldwide. It uses real-time API integration to fetch accurate and up-to-date weather information dynamically. Provides a search functionality that allows users to quickly find weather updates for any location. It works on desktops, tablets, and mobile devices without installation.',
    features: [
      'Displays current temperature, humidity, and weather conditions worldwide.',
      'Allows users to check the weather for any city.',
      'Uses real-time API integration for accurate and up-to-date weather information.',
      'Provides search functionality for quick weather updates.',
      'Works on desktops, tablets, and mobile devices without installation.',
      'Technologies Used: HTML, CSS, JavaScript, Open Weather API for real-time weather updates and a responsive user experience.'
    ]
  },
  {
    id: 'restaurant-template',
    image: RestaurantImage, // Corrected path: directly reference from the public folder
    title: 'Best-Food Restaurant Template',
    description: 'Helps restaurants showcase their menu, location, and contact details. Provides a smooth and accessible, responsive browsing experience on any device using modern CSS techniques.',
    tags: ['HTML', 'CSS', 'Flexbox', 'CSS Grid', 'Media Queries'],
    liveDemo: 'https://vigneshdev123coder.github.io/html-project-best-food-template/',
    github: 'https://github.com/vigneshdev123coder/html-project-best-food-template',
    longDescription: 'This best-food restaurant template helps restaurants showcase their menu, location, and contact details, attracting more customers. Customers can explore the restaurant\'s menu, location, and contact details in a simple and structured layout. Provides a smooth and accessible experience on any device. And The responsive design ensures a smooth browsing experience on desktops, tablets, and mobile devices without requiring additional software or installations.',
    features: [
      'Helps restaurants showcase their menu, location, and contact details.',
      'Customers can explore menu, location, and contact details in a simple layout.',
      'Provides a smooth and accessible experience on any device.',
      'Responsive design ensures a smooth browsing experience on desktops, tablets, and mobile devices.',
      'No additional software or installations required.',
      'Technologies Used: HTML, CSS, Flexbox, and CSS Grid, and used media queries for a responsive, structured experience.'
    ]
  }
];

// New data for Experience section
const experienceData = [
  {
    id: '24hr7-commerce',
    title: 'Web Developer Intern',
    company: '24hr7 Commerce Pvt. Ltd.',
    duration: 'Mar 2025 - Present',
    description: [
      'Developed multilingual form submission modules in React with backend in Node.js & Express.',
      'Integrated Razorpay for secure online payments and auto-generated PDF previews.',
      'Created folder-based file upload system using MySQL for structured storage.',
      'Built modular chatbot with multilingual and voice-input support.',
      'Used React Router for page navigation and managed application state with Hooks.',
    ],
    technologies: ['React.js', 'Node.js', 'Express', 'MySQL', 'Razorpay'],
  },
];

// New data for Certifications section with updated links
const certificationData = [
  {
    id: 'hacker-rank-css',
    title: 'Certified in HackerRank CSS',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/11b59700ef55', // Updated link
  },
  {
    id: 'hacker-rank-javascript',
    title: 'Certified in HackerRank JavaScript',
    issuer: 'HackerRank',
    link: 'https://www.hackerrank.com/certificates/e672543e9d3e', // Updated link
  },
  {
    id: 'full-stack-10000-coders',
    title: 'Certified in Full Stack - 10000 Coders',
    issuer: '10000 Coders',
    link: 'https://drive.google.com/file/d/1XLmQZ9eYFGSRjf6Nptbxzc5_W1PoqsgP/view?usp=sharing', // Updated link
  },
];


// Main App component renamed to Port
const Port = () => {
  // State for active section for navigation highlighting
  const [activeSection, setActiveSection] = useState('home');
  // State for managing the currently selected project for modal display
  const [selectedProject, setSelectedProject] = useState(null);
  // State for the enhanced description generated by LLM
  const [enhancedDescription, setEnhancedDescription] = useState('');
  // State for loading indicator during LLM call
  const [isEnhancing, setIsEnhancing] = useState(false);
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  // Refs for each section to determine scroll position
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null); // New ref for Experience
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const certificationsRef = useRef(null); // New ref for Certifications
  const contactRef = useRef(null);

  // Effect to handle scroll-based section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'about', ref: aboutRef },
        { id: 'experience', ref: experienceRef }, // Added experience section
        { id: 'skills', ref: skillsRef },
        { id: 'projects', ref: projectsRef },
        { id: 'certifications', ref: certificationsRef }, // Added certifications section
        { id: 'contact', ref: contactRef },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const sectionTop = section.ref.current.offsetTop - 100; // Offset for header
          const sectionHeight = section.ref.current.offsetHeight;

          if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to smooth scroll to a section
  const scrollToSection = (ref, sectionId) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  // Function to handle viewing project details in a modal
  const handleViewProject = (project) => {
    setSelectedProject(project);
    setEnhancedDescription(''); // Clear previous enhanced description
  };

  // Function to close the project details modal
  const handleCloseProjectModal = () => {
    setSelectedProject(null);
    setEnhancedDescription(''); // Clear enhanced description when closing
  };

  // Function to call Gemini API for description enhancement
  const handleEnhanceDescription = async () => {
    if (!selectedProject || isEnhancing) return;

    setIsEnhancing(true);
    setEnhancedDescription('Generating enhanced description...'); // Provide immediate feedback

    try {
      const prompt = `Elaborate on the following project description, making it more engaging, professional, and slightly longer. Focus on key achievements and technologies used. Keep it concise but detailed:\n\n"${selectedProject.longDescription}"`;

      let chatHistory = [];
      chatHistory.push({ role: "user", parts: [{ text: prompt }] });

      const payload = { contents: chatHistory };
      const apiKey = ""; // Canvas will automatically provide the API key
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
                 method: 'POST',
                 headers: { 'Content-Type': 'application/json' },
                 body: JSON.stringify(payload)
             });

      const result = await response.json();

      if (result.candidates && result.candidates.length > 0 &&
          result.candidates[0].content && result.candidates[0].content.parts &&
          result.candidates[0].content.parts.length > 0) {
        const text = result.candidates[0].content.parts[0].text;
        setEnhancedDescription(text);
      } else {
        setEnhancedDescription('Failed to generate enhanced description. Please try again.');
        console.error('Gemini API response format unexpected:', result);
      }
    } catch (error) {
      setEnhancedDescription('Error generating description: ' + error.message);
      console.error('Error calling Gemini API:', error);
    } finally {
      setIsEnhancing(false);
    }
  };


  return (
    <div className="portfolio-app-container">
      {/* Navigation Bar */}
      <header className="header">
        <nav className="container mx-auto px-4 flex justify-between items-center">
          <div className="header-title">My Portfolio</div>
          <ul className={`nav-list ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
            <li>
              <button
                onClick={() => scrollToSection(homeRef, 'home')}
                className={`nav-button ${
                  activeSection === 'home' ? 'active' : ''
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutRef, 'about')}
                className={`nav-button ${
                  activeSection === 'about' ? 'active' : ''
                }`}
              >
                <User size={18} />
                <span>About</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(experienceRef, 'experience')} // New nav item for Experience
                className={`nav-button ${
                  activeSection === 'experience' ? 'active' : ''
                }`}
              >
                <HardHat size={18} /> {/* Icon for experience */}
                <span>Experience</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(skillsRef, 'skills')}
                className={`nav-button ${
                  activeSection === 'skills' ? 'active' : ''
                }`}
              >
                <Lightbulb size={18} />
                <span>Skills</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(projectsRef, 'projects')}
                className={`nav-button ${
                  activeSection === 'projects' ? 'active' : ''
                }`}
              >
                <Briefcase size={18} />
                <span>Projects</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(certificationsRef, 'certifications')} // New nav item for Certifications
                className={`nav-button ${
                  activeSection === 'certifications' ? 'active' : ''
                }`}
              >
                <Award size={18} /> {/* Icon for certifications */}
                <span>Certifications</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef, 'contact')}
                className={`nav-button ${
                  activeSection === 'contact' ? 'active' : ''
                }`}
              >
                <Mail size={18} />
                <span>Contact</span>
              </button>
            </li>
          </ul>
          {/* Mobile Menu Button (Hamburger) */}
          <div className="mobile-menu-button">
            <button
              className="text-gray-700 dark:text-gray-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <XCircle size={24} /> : <Menu size={24} />} {/* Toggle icon */}
            </button>
          </div>
        </nav>
      </header>

      <main className="main-content">
        {/* Home Section */}
        <section ref={homeRef} id="home" className="section home-section">
          <div className="home-content-wrapper">
            <h1 className="home-title typing">
              Hi, I'm Vignesh Goud
            </h1>
            <p className="home-subtitle">
              A web developer creating engaging web experiences.
            </p>
            <div className="action-buttons">
              <a
                href="#projects"
                onClick={() => scrollToSection(projectsRef, 'projects')}
                className="view-work-button"
              >
                View My Work
              </a>
              <a
                href="/vigneshgoud fullstack-resume.pdf"
                download="vigneshgoud_fullstack_resume.pdf"
                className="download-resume-button"
              >
                Download My Resume
              </a>
            </div>
          </div>
          <img
            src={image} // Path to the uploaded profile image
            alt="Profile Picture"
            className="profile-picture"
          />
        </section>

        {/* About Section */}
        <section ref={aboutRef} id="about" className="section about-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">About Me</h2>
            <div className="about-content">
              <div className="about-text">
                <div className="profile-summary">
                  {/* <h3>Profile Summary</h3> */}
                  <p>
                    Hey! I'm Vignesh Goud, a full-stack web developer with a focus on <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React.js</strong>, <strong>Node.js</strong>, and <strong>MySQL</strong>. I love creating clean, responsive, and real-world web apps.
                  </p>
                  <p>
                    During my internship at <strong>24hr7 Commerce Pvt. Ltd.</strong>, I worked on dynamic forms, multilingual features, file uploads, and payment systems. I enjoy solving problems, learning new things, and turning ideas into working solutions.
                  </p>
                  <a
                    href="/vigneshgoud fullstack-resume.pdf"
                    download="vigneshgoud_fullstack_resume.pdf"
                    className="download-about-button"
                  >
                    Download My Resume
                  </a>
                </div>
              </div>
              <div className="about-image-container">
                <img
                  src={image2}
                  alt="About Me"
                  className="about-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section ref={experienceRef} id="experience" className="section experience-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Experience</h2>
            <div className="experience-list">
              {experienceData.map((job) => (
                <div key={job.id} className="experience-card">
                  <h3 className="experience-title">{job.title}</h3>
                  <p className="experience-company-duration">
                    {job.company} | {job.duration}
                  </p>
                  <ul className="experience-description-list">
                    {job.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                  <div className="experience-technologies">
                    {job.technologies.map((tech, index) => (
                      <span key={index} className="experience-tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section ref={certificationsRef} id="certifications" className="section certifications-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationData.map((cert) => (
                <div key={cert.id} className="certification-card">
                  <h3 className="certification-title">{cert.title}</h3>
                  <p className="certification-issuer">{cert.issuer}</p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="certification-link-button"
                  >
                    View Credential <ExternalLink size={16} className="icon" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section ref={skillsRef} id="skills" className="section skills-section">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">My Skills</h2>
            <div className="skills-grid">
              {/* Added Skills */}
              <div className="skill-card">
                <Code size={48} className="skill-icon html-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">HTML</span>
              </div>
              <div className="skill-card">
                <Globe size={48} className="skill-icon css-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">CSS</span>
              </div>
              <div className="skill-card">
                <Code size={48} className="skill-icon javascript-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">JavaScript</span>
              </div>
              <div className="skill-card">
                <Briefcase size={48} className="skill-icon react-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">React.js</span>
              </div>
              <div className="skill-card">
                <Code size={48} className="skill-icon node-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">Node.js</span>
              </div>
              <div className="skill-card">
                <Code size={48} className="skill-icon express-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">Express.js</span>
              </div>
              <div className="skill-card">
                <Database size={48} className="skill-icon mysql-color" />
                <span className="text-lg font-medium text-slate-800 dark:text-slate-200">MySQL</span>
              </div>
              {/* Existing Skills (if any, ensure they are still here or re-added if removed unintentionally) */}
              {/* You can add more here following the same structure */}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} id="projects" className="section project-section">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">My Projects</h2>
            <div className="projects-grid">
              {projectData.map((project) => (
                <div key={project.id} className="project-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tags">
                      {project.tags.map((tag) => (
                        <span key={tag} className={`tag ${tag.toLowerCase().replace(/\s/g, '-')}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project-links">
                        {/* Only show live demo and github in modal, if they are available */}
                        {project.liveDemo && (
                            <a
                                href={project.liveDemo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Live Demo <ExternalLink size={16} className="project-link-icon" />
                            </a>
                        )}
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link github"
                            >
                                GitHub <Github size={16} className="project-link-icon" />
                            </a>
                        )}
                    </div>
                    {/* New "View Details" button */}
                    <button
                      onClick={() => handleViewProject(project)}
                      className="view-details-button"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section ref={contactRef} id="contact" className="section contact-section">
          <div className="container mx-auto max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-800 dark:text-slate-100">Get in Touch</h2>
            <p className="text-center text-lg text-slate-700 dark:text-slate-300 mb-8">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
            <form className="contact-form">
              <div>
                <label htmlFor="name" className="form-label sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="form-label sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="form-label sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="form-textarea"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="form-submit-button"
              >
                Send Message
              </button>
            </form>

            <div className="social-links-container">
              <h3 className="social-links-title">Find Me On</h3>
              <div className="social-links-grid">
                <a
                  href="https://github.com/vigneshdev123coder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github size={32} />
                </a>
                <a
                  href="https://www.linkedin.com/in/vignesh-goud-8187212b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <Linkedin size={32} />
                </a>
                {/* <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link twitter"
                >
                  <Twitter size={32} />
                </a> */}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Vignesh Goud. All rights reserved.</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={handleCloseProjectModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close-button" onClick={handleCloseProjectModal}>
              <XCircle size={28} />
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="project-modal-image"
            />
            <h3 className="project-modal-title">{selectedProject.title}</h3>
            {/* Display original description if no enhanced description is available */}
            <p className="project-modal-description">
                {enhancedDescription || selectedProject.longDescription}
            </p>
            {selectedProject.features && selectedProject.features.length > 0 && (
              <div className="project-modal-features">
                <h4>Key Features:</h4>
                <ul>
                  {selectedProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className="project-modal-links">
              {selectedProject.liveDemo && (
                <a
                  href={selectedProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link-button live"
                >
                  Live Demo <ExternalLink size={16} className="project-modal-link-icon" />
                </a>
              )}
              {selectedProject.github && (
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-modal-link-button github"
                >
                  GitHub <Github size={16} className="project-modal-link-icon" />
                </a>
              )}
            </div>
            <button
                onClick={handleEnhanceDescription}
                className="enhance-button"
                disabled={isEnhancing}
            >
                {isEnhancing ? (
                    <>
                        <div className="loading-spinner"></div>
                        <span>Enhancing...</span>
                    </>
                ) : (
                    <>
                        <Sparkles size={18} />
                        <span>Enhance Description</span>
                    </>
                )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Port;
