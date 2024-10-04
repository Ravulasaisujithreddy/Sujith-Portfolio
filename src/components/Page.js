import React, { useState, useRef } from 'react';
import { FaChevronDown, FaEnvelope, FaPhone, FaLinkedin, FaGithub} from 'react-icons/fa';
import Header from './Header';
import Section from './Section';
import Button from './Button';
import { Card, CardContent} from './Card';
import imageSrc from '../utils/IMG_20221120_085848-01.JPG';


export function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = ['About', 'Skills', 'Experience', 'Education', 'Contact'];
  const sectionRefs = useRef([]);
  const headerRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [openCourseworkIndex, setOpenCourseworkIndex] = useState(null); // Track the open coursework index
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode); // Toggle dark mode state
  };

  const scrollToSection = (index) => {
    setIsMenuOpen(false);
    const section = sectionRefs.current[index];
    const header = headerRef.current;
    console.log('Section:', section);
    console.log('Header:', header);
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
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900'}`}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} sections={sections} scrollToSection={scrollToSection} headerRef={headerRef} isDarkMode={isDarkMode} // Pass dark mode state to Header
        toggleTheme={toggleTheme} />
      <main className="container mx-auto py-12 px-4 md:px-0">
        <Section ref={el => {sectionRefs.current[0] = el}} title="About" className="text-center">
          <img
            src={imageSrc} // Updated path to access the image correctly
            alt="SAI SUJITH REDDY RAVULA"
            width={200}
            height={200}
            className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          />
          <h2 className={`text-4xl font-bold mb-4 bg-clip-text text-transparent ${isDarkMode ? 'bg-gradient-to-r from-blue-400 to-teal-500' : 'bg-gradient-to-r from-blue-500 to-teal-400'}`}>Sujith</h2>
          <p className={`text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} mb-6`}>Software Engineer</p>
          <p className={`max-w-2xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          I am a driven and adaptable software engineer specializing in front-end development with expertise in designing, developing, and implementing web-based applications using React JS, JavaScript, and modern CSS frameworks. My background includes hands-on experience in building responsive, user-friendly interfaces and optimizing application performance. I have successfully delivered robust systems for organizations like Hewlett-Packard, focusing on front-end development and ensuring high usability standards. With strong problem-solving and analytical skills, I am quick to embrace new technologies and thrive in collaborative environments to deliver innovative front-end solutions. I am seeking to gain valuable experience in front-end technologies like React, CSS, and modern web development practices to excel in front-end roles while constantly learning Java and Spring Boot to enhance my back-end skills. </p>
          <div className="mt-8">
            <FaChevronDown className="mx-auto text-blue-500 animate-bounce cursor-pointer" size={32} onClick={() => scrollToSection(1)} />
          </div>
        </Section>

        <Section ref={el => {sectionRefs.current[1] = el}} title="Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
  { title: 'Programming Languages', skills: ['Java', 'C++','C', 'C#'] },
  { title: 'Web Technologies', skills: ['ReactJS','JavaScript','HTML5', 'CSS3',  'JSON', 'Tailwind CSS', 'GSAP'] },
  { title: 'Databases', skills: ['MySQL', 'MongoDB'] },
  { title: 'Tools & frameworks', skills: ['Postman', 'GIT', 'JIRA', 'Spring Boot'] }
]
.map((category, index) => (
              <Card key={category.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-4 text-lg text-blue-600 dark:text-blue-400">{category.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section ref={el => {sectionRefs.current[2] = el}} title="Experience">
          <div className="space-y-6 ">
            {[
              {
                title: "Software Engineer",
                company: "Hewlett-Packard inc",
                period: "July 2022 – December 2022",
                responsibilities: [
                  "Worked in an Agile environment, participating in daily scrums and bi-weekly sprints to ensure timely project delivery.",
                  "Wrote unit tests for a cloud-based certificate management project to ensure high code quality and reliability.",
                  "Understood and migrated existing RESTful APIs developed in C# to Java and Spring Boot for improved performance and maintainability.",
                  "Gained valuable experience through knowledge transfer sessions, learning how MongoDB, Java, and Spring Boot were effectively used in the project to manage data, build scalable applications, and implement RESTful services."
                ]
              },
              {
                title: "Research and Development Intern",
                company: "Hewlett-Packard",
                period: "Feb 2022 – June 2022",
                responsibilities: [
                  "Developed a comprehensive web application for HP Security Management, utilizing React JS, JavaScript, HTML, and CSS to create a highly responsive and user-friendly interface for generating certificates based on user-selected policies in the cloud server.",
                  "Participated in weekly project evaluations, incorporating feedback from senior team members to identify areas for improvement. Added new features and functions to enhance overall performance and user experience.",
                  "Implemented a robust and secure login system utilizing OAuth 2.0, designed to be used across all employees. This system ensures seamless user authentication, authorization, and data protection through token-based security, allowing employees to securely access the platform",
                  "Consumed RESTful APIs using `fetch`, `PUT`, `POST`, and `GET` requests to efficiently handle JSON data for dynamic retrieval, processing, and updates across the application.",
                  "The system displays the success or failure of the task execution based on the result of the remediation process.Upon sucessfull task completion, enabled users to download reports as PDFs."
                ]
              }
            ].map((job, index) => (
              <Card key={job.title} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/640px-HP_logo_2012.svg-DJE1x76b1N7HwYWcP4yXSZoEXVxiik.png"
                        alt="Hewlett-Packard (HP) logo"
                        width={40}
                        height={40}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain mr-3"
                      />
                      <div>
                        <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">{job.title}</h4>
                        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">{job.company}</p>
                      </div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">{job.period}</p>
                  </div>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-800 space-y-2">
                    {job.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section ref={el => {sectionRefs.current[3] = el}} title="Education">
          <div className="space-y-6">
            {[
              {
                degree: "Master of Science in Computer Science",
                university: "George Mason University",
                location: "Virginia, VA",
                period: "Expected Dec 2024",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/yt_profile_800x800-2x-cKsKaLxKtyCwPXx2OwJzGqDKM4NQED.jpg",
                coursework: [
                  { label: 'SWE 632: User Interface Design, Development, and Programming' },
                  { label: 'SWE 637: Software Testing (High Impact Grant Award Recipient)' },
                  { label: 'SWE 621: Software Design & Architecture' },
                  { label: 'SWE 681: Secure Software Design and Programming' }
                ],
                Grade:"3.7/4",
              },
             
              {
                degree: "Bachelor of Technology in Electronics and Communication ",
                university: "Manipal University",
                location: "Karnataka",
                period: "May 2022",
                logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manipal%20logo%20(1)-OqZMJBITdlI105PI2gV23CbZnT255X.png",
                coursework: [
                  { label: 'Data Structures & Algorithms' },
                  { label: 'C / C++' },
                  { label: 'Communication Networks' },
                  { label: 'Object oriented Programming' },
                  { label: 'Database Systems' }
                ],
                Grade:"8.61/10",
              }
            ].map((edu, index) => (
                <Card key={edu.degree} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <img
                          src={edu.logo}
                          alt={`${edu.university} logo`}
                          width={40}
                          height={40}
                          className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain mr-3"
                        />
                        <div>
                          <h4 className="text-xl font-medium text-blue-600 dark:text-blue-400">{edu.degree}</h4>
                          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">{edu.university}</p>
                          </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">{edu.location}</p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">{edu.period}</p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-800">Grade:{edu.Grade}</p>
                    </div>
                  </div>
                  {edu.degree === "Master of Science in Computer Science" && (<div>
                  <h5 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Academic Contributions:</h5>
                          <ul className="list-disc list-inside text-gray-600 dark:text-gray-800">
                            
                              <strong>Graduate Grading Assistant (Grader)</strong>
                              <ul className="list-disc list-inside">
                                <li>Evaluated assignments in Math courses for two sections, focusing on problem-solving techniques</li>
                                <li>Provided constructive feedback to class of 100 students, improving their understanding of course material.</li>
                                <li>Worked closely with faculty to maintain grading standards and support student learning.</li>
                              </ul>
                          
                          </ul>
                  </div>)}
                  <div className="text-right mt-4"> {/* Ensure button is aligned to the right */}
                    <button 
                      className="text-blue-600 hover:underline"
                      onClick={() => {
                        setOpenCourseworkIndex(openCourseworkIndex === index ? null : index); // Toggle the current index
                      }}
                    >
                      Coursework
                    </button>
                  </div>
                  {openCourseworkIndex === index && (
                    <div className="flex flex-wrap mt-2"> {/* Added flex container */}
                      {edu.coursework.map((sub, index) => ( // Check if the current index is open
                        <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 mx-2 mt-2 rounded-full text-sm transition-all duration-300 hover:bg-blue-200 dark:hover:bg-blue-800">
                          {sub.label}
                        </span>
                      ))}
                    </div>
                  )}
                  
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>

        <Section ref={el => {sectionRefs.current[4] = el}} title="Contact">
          <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex justify-center space-x-4 mb-4">
                {[
                  { icon: FaEnvelope, label: 'Email',link: 'mailto:saisujithreddy.ravula@gmail.com' },
                  { icon: FaPhone, label: 'Phone',link: 'tel:+15715648084' },
                  { icon: FaLinkedin, label: 'LinkedIn',link: 'https://www.linkedin.com/in/ravula-saisujith-reddy/'},
                  { icon: FaGithub, label: 'GitHub',link : 'https://github.com/Ravulasaisujithreddy' }
                ].map((item, index) => (
                  <Button key={item.label} variant="outline" size="icon" onClick={() => item.link && window.open(item.link, '_blank')}  className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-200">
                    <item.icon className="h-4 w-4" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                ))}
              </div>
              <div className="text-center text-gray-600 dark:text-gray-800">
                <p>Email: saisujithreddy.ravula@gmail.com</p>
                <p>Phone: +1 5715648084</p>
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