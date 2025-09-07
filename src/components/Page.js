import React, { useState, useRef } from 'react';
import { 
  FaChevronDown, 
  FaEnvelope, 
  FaPhone, 
  FaLinkedin, 
  FaGithub,
  FaCertificate
} from 'react-icons/fa';
import Header from './Header';
import Section from './Section';
import Button from './Button';
import { Card, CardContent } from './Card';
import profileImage from '../utils/DSC03501.jpg';
import hpLogo from '../utils/640px-HP_logo_2012.svg.png';
import gmuLogo from '../utils/yt_profile_800x800-2x.jpg';
import manipalLogo from '../utils/manipal logo (1).png';
import gsLogo from '../utils/Goldman_Sachs.svg.png';
import sparksLogo from '../utils/logo.png';
import vasLogo from '../utils/image.png';

export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['Summary', 'Experience', 'Projects', 'Skills', 'Education', 'Certifications', 'Contact'];
  const sectionRefs = useRef([]);
  const headerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openCourseworkIndex, setOpenCourseworkIndex] = useState(null);
  
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  const scrollToSection = (index) => {
    setIsMenuOpen(false);
    const section = sectionRefs.current[index];
    const header = headerRef.current;
    if (section && header) {
      const headerHeight = header.offsetHeight;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({
        top: sectionTop,
        behavior: 'smooth'
      });
    }
  };

  return (
   <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-black'}`}>


      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        sections={sections} 
        scrollToSection={scrollToSection} 
        headerRef={headerRef} 
        isDarkMode={isDarkMode}
        toggleTheme={toggleTheme} 
        profileImage={profileImage}
      />
      
      <main className="container mx-auto py-12 px-4 md:px-0">
        {/* Summary Section */}
        <Section ref={el => {sectionRefs.current[0] = el}} title="Summary">
          <div className="flex flex-col items-center">
            <img
              src={profileImage}
              alt="Sai Sujith Reddy Ravula"
              width={200}
              height={200}
              className="rounded-full mb-6 border-4 border-blue-500 shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
            <h2 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-teal-500' : 'bg-gradient-to-r from-blue-500 to-teal-400'}`}>Sai Sujith Reddy Ravula</h2>
            <p className={`text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-6`}>Software Engineer</p>
            <p className={`max-w-4xl mx-auto text-lg ${isDarkMode ? 'text-gray-300' : 'text-black'}`}>
              Software Engineer with 4 years experience in building cloud-native, event-driven web applications and microservices. 
              Hands-on expertise in Java, Node.js, Spring Boot, React, and AWS with a strong background in RESTful APIs, CI/CD, 
              and low-latency architecture. Proven success in improving system performance, automating CI/CD pipelines, and enhancing system observability using modern monitoring tools. Seeking backend or platform engineering roles focused on distributed systems, API development,UX/UI Design, and cloud infrastructure.
            </p>
          </div>
          <div className="mt-8">
            <FaChevronDown 
              className="mx-auto text-blue-500 animate-bounce cursor-pointer" 
              size={32} 
              onClick={() => scrollToSection(1)} 
            />
          </div>
        </Section>

        {/* Experience Section */}
        {/* Experience Section */}
<Section ref={el => {sectionRefs.current[1] = el}} title="Experience">
  <div className="space-y-6">
    {[
      {
        title: "Software Engineer",
        company: "Goldman Sachs",
        location: "Hybrid",
        period: "March 2024 - Present",
        logo: gsLogo,
        responsibilities: [
          "Developed scalable REST APIs using Java (Spring Boot) and Python (Django) to power enterprise business processes, enabling real-time communication between modules and improving overall workflow efficiency by over 20%.",
          "Designed efficient and secure data access patterns by optimizing SQL queries in MySQL and PostgreSQL and integrating Snowflake for analytical workloads, which reduced latency and significantly improved dashboard responsiveness.",
          "Led the design and deployment of microservices using Spring Boot and Docker, orchestrated via AWS services such as EC2, Lambda, and S3, contributing to application scalability and ensuring continuous availability with 99.9% uptime.",
          "Automated comprehensive test suites using JUnit and Mockito for unit and integration testing while using Postman for validating API endpoints, achieving over 90% test coverage and reducing post-deployment defects by 25%."
        ]
      },
      {
        title: "Software Engineer",
        company: "Hewlett-Packard Inc",
        location: "Bangalore, India",
        period: "Jun 2020 - Jan 2023",
        logo: hpLogo,
        responsibilities: [
          "Developed Spring Boot APIs handling 2M+ daily requests with 95% code coverage (JUnit/Mockito)",
          "Led integration of backend services with React.js frontends, reducing TTI (Time to Interactive) by 40%",
          "Created end-to-end RESTful services with advanced request/response validation",
          "Automated deployments with Docker/Jenkins, enabling 5x faster release cycles",
          "Applied Spring Security and JWT token-based authentication to protect APIs"
        ]
      },
      // ADDED: Vas Technologies experience
      {
        title: "Full Stack Developer (Java/React)",
        company: "Vas Technologies Inc",
        location: "Hyderabad, India",
        period: "May 2021 - Jan 2022",
        logo: vasLogo, // Use placeholder if no specific logo
        responsibilities: [
          "Migrated legacy frontend to React.js with Redux and React Router, improving page load speed by 25%",
          "Built Node.js and Express.js REST APIs integrated with PostgreSQL and Redis handling 5K+ daily requests with 99ms latency",
          "Applied Agile methodologies with 2-week sprints, sprint planning, code reviews, and deployments"
        ]
      },
      // ADDED: Sparks Foundation experience
      {
        title: "Android Developer Intern",
        company: "Sparks Foundation",
        location: "Bangalore, India",
        period: "March 2021 - May 2021",
        logo: sparksLogo, // Use placeholder if no specific logo
        responsibilities: [
          "Developed core payment features using Android SDK and React Native, implementing MVVM architecture",
          "Implemented JWT-based Role-Based Access Control (RBAC) to enforce secure access management",
          "Optimized API call latency by 40% using Retrofit/okHTTP caching strategies"
        ]
      }
    ].map((job, index) => (
      <Card key={`${job.company}-${index}`} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
            <div className="flex items-center mb-2 sm:mb-0">
              {job.logo ? (
                <img
                  src={job.logo}
                  alt={`${job.company} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-contain mr-3"
                />
              ) : (
                <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-gray-600 dark:text-gray-300">
                    {job.company.charAt(0)}
                  </span>
                </div>
              )}
              <div>
                <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">{job.title}</h4>
                <p className="text-sm sm:text-base">{job.company} | {job.location}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:!text-gray-300">{job.period}</p>

          </div>
          <ul className="list-disc list-inside space-y-2">
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    ))}
  </div>
</Section>
        {/* Projects Section */}
        <Section ref={el => {sectionRefs.current[2] = el}} title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "StudySync: Course Management System",
                period: "Aug 2024 - Nov 2024",
                technologies: "Java, Spring Boot, MySQL, Docker, Jenkins, AWS",
                achievements: [
                  "Engineered multi-role course management system supporting 1000+ student interactions",
                  "Implemented JWT-based authentication and secure file handling",
                  "Achieved 99.8% uptime with Dockerized AWS EC2 deployment"
                ],
                link: "#"
              },
              {
                title: "Linguify: AI Grammar Feedback Engine",
                period: "Feb 2024 - Apr 2024",
                technologies: "Java, Spring Boot, React.js, Hugging Face, Docker",
                achievements: [
                  "Built LLM-powered backend with Hugging Face transformers",
                  "Reduced inference latency by 45% via model quantization",
                  "Created responsive React frontend with RESTful API integration"
                ],
                link: "https://github.com/Ravulasaisujithreddy/genie-prompt"
              }
            ].map((project) => (
              <Card key={project.title} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400">{project.title}</h4>
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
                      {project.period}
                    </span>
                  </div>
                  <p className="text-sm mb-3">{project.technologies}</p>
                  <ul className="list-disc list-inside space-y-1 mb-4 flex-grow">
                    {project.achievements.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Button 
                    variant="project" 
                    className="mt-auto"
                    onClick={() => window.open(project.link, '_blank')}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Skills Section */}
        <Section ref={el => {sectionRefs.current[3] = el}} title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: 'Languages', skills: ['Java', 'Python', 'C', 'C++', 'C#', 'JavaScript', 'TypeScript', 'Bash', 'HTML5', 'CSS3'] },
              { title: 'Frameworks', skills: ['React', 'NodeJS', 'Express', 'Spring Boot', 'Fast API', 'Flask'] },
              { title: 'Databases', skills: ['SQL (PostgreSQL)', 'NoSQL (MongoDB)'] },
              { title: 'DevOps', skills: ['AWS (EC2, Lambda, S3)', 'Azure', 'Docker', 'Kubernetes', 'Linux'] },
              { title: 'Technologies', skills: ['Kafka', 'Redis', 'JUnit', 'OAuth 2.0', 'JWT', 'Jira'] }
            ].map((category, index) => (
              <Card key={category.title} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4 text-lg text-blue-600 dark:text-blue-400">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' 
                            : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section ref={el => {sectionRefs.current[4] = el}} title="Education">
          <div className="space-y-6">
            {[
              {
                degree: "Master of Science in Computer Science",
                university: "George Mason University",
                location: "Virginia, VA",
                period: "Expected Dec 2024",
                gpa: "3.63/4.00",
                logo: gmuLogo,
                coursework: [
                  { label: 'Distributed and Operating Systems' },
                  { label: 'Object Oriented Designs (OOP)' },
                  { label: 'Software Testing' },
                  { label: 'Secure Software Design' }
                ],
                contributions: [
                  "Graduate Grading Assistant (Aug 2024 - Dec 2024): Managed grading for 300+ students",
                  "Collaborated with professors on assignment and exam design using Java",
                  "Enhanced academic operations with improved efficiency"
                ]
              },
              {
                degree: "Bachelor of Technology in Computer Science",
                university: "Manipal University",
                location: "Karnataka, India",
                period: "May 2022",
                gpa: "8.61/10.0",
                logo: manipalLogo,
                coursework: [
                  { label: 'Data Structures' },
                  { label: 'Algorithms' },
                  { label: 'Database Systems' },
                  { label: 'Machine Learning' }
                ]
              }
            ].map((edu, index) => (
              <Card key={edu.degree} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <img
                        src={edu.logo}
                        alt={`${edu.university} logo`}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain mr-3"
                      />
                      <div>
                        <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">{edu.degree}</h4>
                        <p className="text-sm sm:text-base">{edu.university} | {edu.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      
                      <p className="text-sm sm:text-base font-medium">GPA: {edu.gpa}</p>
                      {edu.contributions && (
                        <p className="text-xs text-gray-500 dark:text-gray-400">Dean Scholarship Award</p>
                      )}
                    </div>
                  </div>
                  
                  {edu.contributions && (
                    <div className="mt-4">
                      <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">Academic Contributions:</h5>
                      <ul className="list-disc list-inside space-y-1">
                        {edu.contributions.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-4">
                    <button 
                      className="text-blue-600 hover:underline"
                      onClick={() => setOpenCourseworkIndex(openCourseworkIndex === index ? null : index)}
                    >
                      Coursework
                    </button>
                    {openCourseworkIndex === index && (
                      <div className="flex flex-wrap mt-2">
                        {edu.coursework.map((sub, i) => (
                          <span 
                            key={i} 
                            className={`px-3 py-1 mx-1 my-1 rounded-full text-sm ${
                              isDarkMode 
                                ? 'bg-blue-900 text-blue-200' 
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {sub.label}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Certifications Section */}
        <Section ref={el => {sectionRefs.current[5] = el}} title="Certifications">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "AWS Cloud Practitioner",
              "Advanced React By Meta",
              "MySQL Database Development Mastery",
              "Exploratory Data Analysis"
            ].map((cert) => (
              <Card key={cert} className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
                <CardContent className="p-4 flex items-center">
                  <FaCertificate className="text-yellow-500 mr-3 flex-shrink-0" size={24} />
                  <span className="font-medium">{cert}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section ref={el => {sectionRefs.current[6] = el}} title="Contact">
          <Card className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${isDarkMode ? 'bg-gray-800' : ''}`}>
            <CardContent className="p-6">
              <div className="flex justify-center space-x-4 mb-4">
                {[
                  { icon: FaEnvelope, label: 'Email', link: 'mailto:saisujithreddy.ravula@gmail.com' },
                  { icon: FaPhone, label: 'Phone', link: 'tel:+15715648084' },
                  { icon: FaLinkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/ravula-saisujith-reddy/' },
                  { icon: FaGithub, label: 'GitHub', link: 'https://github.com/Ravulasaisujithreddy' }
                ].map((item) => (
                  <Button 
                    key={item.label} 
                    variant="outline" 
                    size="icon" 
                    onClick={() => item.link && window.open(item.link, '_blank')}
                    className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200"
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                ))}
              </div>
              <div className="text-center">
                <p>Email: saisujithreddy.ravula@gmail.com</p>
                <p>Phone: +1 571-564-8084</p>
                <p>Location: Washington, DC</p>
              </div>
            </CardContent>
          </Card>
        </Section>
      </main>

      <footer className={`py-6 text-center ${isDarkMode ? 'text-gray-300 bg-gray-800' : 'text-gray-600 bg-gray-100'}`}>
        <p>© {new Date().getFullYear()} SAI SUJITH REDDY RAVULA. All rights reserved.</p>
      </footer>
    </div>
  );
}