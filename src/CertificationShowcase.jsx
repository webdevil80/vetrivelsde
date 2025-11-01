import React, { useEffect, useState } from 'react';
import ResumeButton from './ResumeButton';
import Skills from './Skills';
import Certifications from './Certifications';
import CareerTimeline from './CareerTimeline'; // Import CareerTimeline
import profileImg from "../public/resources/profile.jpg";


// Simulate fetching LinkedIn details (mocked data)
function fetchProfileDetails() {

  // In a real app, fetch from API here
  const response = {
    profile: {
      name: 'Vetrivel Dharuman',
      mobile: '+91 6381117900',
      mail: 'vetriveldharuman01@gmail.com',
      headline: 'Associate Application Developer',
      linkedInUrl: 'https://www.linkedin.com/in/vetrivel-dharuman/',
      githubUrl: 'https://github.com/webdevil80',
      description:
        'Designing and delivering end-to-end Java full-stack solutions that are scalable, secure, and user-centric - transforming complex business requirements into seamless digital experiences.',
    },
    skills: [
      'Java',
      'AngularJs',
      'HTML',
      'CSS', 
      'BPMN JS',
      'Hibernate/ JPA',
      'RESTful APIs',
      'Selenium',
      'JUnit',
      'Test Driven Development (TDD)',
      'Jenkins',
      'Oracle SQL',
      'Informatica - PowerCenter (ETL)',
      'Postman',
      'Python',
      'Solid Principles',
      'Typescript',
      'Git',
      'SQL',
      'React',
      'CI/CD',
      'ReactJs',
      'Postman',
      'Clean Code',
      'PostgreSQL',
      'Javascript',
      'Spring Boot',
      'Microservices',
      'Command Line Interface',
      'Data Structures & Algorithms',
    ],
    certifications: [
      {
        id: 'cert-bash-1',
        title: 'Bash Scripting and Shell Programming (Linux Command Line)',
        issuer: 'Udemy',
        description: 'Comprehensive training in Bash scripting and Linux command line automation.',
        certificateId: 'BASH-2025-001',
        issueDate: 'Feb 2025',
        expiryDate: null,
        tags: ['Bash', 'Linux', 'Scripting', 'Shell'],
        url: 'https://ude.my/UC-3a5138fe-3766-4aee-a1cf-f5ca1df05406',
      },
      {
        id: 'cert-excel-1',
        title: 'Microsoft Excel 2016 Beginners & Intermediate Excel Training',
        issuer: 'Udemy',
        description: 'Fundamental and intermediate skills for Microsoft Excel 2016.',
        certificateId: 'EXCEL-2025-001',
        issueDate: 'Feb 2025',
        expiryDate: null,
        tags: ['Excel', 'Microsoft', 'Spreadsheets'],
        url: 'https://ude.my/UC-31b32d96-5b1d-4553-8ddd-781c7fc7cd37'
      },
      {
        id: 'cert-cmd-1',
        hidden: true,
        title: 'Windows Command Line - Hands-On (CMD, Batch, MS-DOS)',
        issuer: 'Udemy',
        description: 'Hands-on training in Windows command line, batch scripting, and MS-DOS.',
        certificateId: 'CMD-2025-001',
        issueDate: 'Feb 2025',
        expiryDate: null,
        tags: ['Windows', 'CMD', 'Batch', 'MS-DOS'],
        url: 'https://ude.my/UC-d62888dc-d2fa-48dc-9658-2950800380dc'
      },
      {
        id: 'cert-word-1',
        hidden: true,
        title: 'Microsoft Word: Beginner and Intermediate Training',
        issuer: 'Udemy',
        description: 'Essential skills for using Microsoft Word at beginner and intermediate levels.',
        certificateId: 'WORD-2025-001',
        issueDate: 'Jan 2025',
        expiryDate: null,
        tags: ['Word', 'Microsoft', 'Documentation'],
        url: 'https://ude.my/UC-2146ce4b-1604-4eBB-88ab-1cb59883a588'
      },
      {
        id: 'cert-java-mt-1',
        hidden: true,
        title: 'Java: Multi-threading and Concurrency Simplified',
        issuer: 'Udemy',
        description: 'Understanding and applying multi-threading and concurrency in Java.',
        certificateId: 'JAVA-MT-2024-001',
        issueDate: 'Nov 2024',
        expiryDate: null,
        tags: ['Java', 'Concurrency', 'Multi-threading'],
        url: 'https://ude.my/UC-77e6b62e-fed5-40be-ac08-f3d7371a6cfO'
      },
      {
        id: 'cert-time-1',
        title: 'Practical Time Management - Personal Productivity Tools',
        issuer: 'Udemy',
        description: 'Techniques and tools for effective personal time management.',
        certificateId: 'TIME-2024-001',
        issueDate: 'Nov 2025',
        expiryDate: null,
        tags: ['Productivity', 'Time Management'],
        url: 'https://ude.my/UC-a1bced68-317e-4254-bc0d-3fc05e0a77c2'
      },
      {
        id: 'cert-clean-code-1',
        title: 'Clean Code with Java: Learn Simple Design, Refactoring & TDD',
        issuer: 'Udemy',
        description: 'Learning principles of writing clean, reusable code and able to refactor with test-driven development in Java.',
        certificateId: 'CLEAN-2024-001',
        issueDate: 'Jan 2024',
        expiryDate: null,
        tags: ['Java', 'Clean Code', 'TDD', 'Refactoring'],
        url: 'https://ude.my/UC-310f5414-0e12-4b89-b1bf-704bebde6675'
      },
      {
        id: 'cert-java-fp-1',
        title: 'Learn Java Functional Programming with Lambdas & Streams',
        issuer: 'Udemy',
        description: 'Functional programming in Java using lambdas & streams.',
        certificateId: 'JAVA-FP-2024-001',
        issueDate: 'Jan 2024',
        expiryDate: null,
        tags: ['Java', 'Functional Programming', 'Lambdas', 'Streams'],
        url: 'https://ude.my/UC-b523bf2b-c60b-4dfd-8fe2-8054cb90d072'
      },
      {
        id: 'cert-tdd-1',
        title: 'Practical Test-Driven Development for Java Programmers',
        issuer: 'Udemy',
        description: 'Applying test-driven development practices in Java projects.',
        certificateId: 'TDD-2023-001',
        issueDate: 'Nov 2023',
        expiryDate: null,
        tags: ['Java', 'TDD', 'Testing'],
        url: 'https://ude.my/UC-8f97c233-abd6-420e-ae61-6e71a8697426'
      },
      {
        id: 'cert-rest-1',
        title: 'Build REST API with Spring Boot & Spring Data JPA',
        issuer: 'Udemy',
        description: 'Building RESTful APIs using Spring Boot and Spring Data JPA.',
        certificateId: 'REST-2023-001',
        issueDate: 'Oct 2023',
        expiryDate: null,
        tags: ['Java', 'Spring Boot', 'REST', 'API', 'JPA'],
        url: 'https://ude.my/UC-2cc2912b-dd7d-4f4d-b169-ca79857daa03'
      },
      {
        id: 'cert-js-1',
        title: 'JavaScript Basics for Beginners',
        issuer: 'Udemy',
        description: 'Introduction to JavaScript programming for beginners.',
        certificateId: 'JS-2023-001',
        issueDate: 'Sep 2023',
        expiryDate: null,
        tags: ['JavaScript', 'Programming', 'Web'],
        url: 'https://ude.my/UC-1f8de75c-e11c-471d-a4af-2070c045fa22'
      },
      {
        id: 'cert-mockito-1',
        title: 'Mockito Next Level Java Unit Testing',
        issuer: 'Udemy',
        description: 'Advanced unit testing in Java using Mockito.',
        certificateId: 'MOCKITO-2023-001',
        issueDate: 'Sep 2023',
        expiryDate: null,
        tags: ['Java', 'Mockito', 'Testing', 'Unit Testing'],
        url: 'https://ude.my/UC-ce1efec3-75ff-4241-9cc9-82a15b484530'
      },
      {
        id: 'cert-solid-1',
        title: 'SOLID Principles: Introducing Software Architecture & Design',
        issuer: 'Udemy',
        description: 'Introduction to SOLID principles for software architecture and design.',
        certificateId: 'SOLID-2023-001',
        issueDate: 'Sep 2023  ',
        expiryDate: null,
        tags: ['SOLID', 'Architecture', 'Design', 'Software Engineering'],
        url: 'https://ude.my/UC-7883656a-e57e-4b2a-b2a5-9d41acc006ad'
      },
      {
        id: 'cert-pgsql-1',
        title: 'Intro To PostgreSQL Databases with PgAdmin for Beginners',
        issuer: 'Udemy',
        description: 'Getting started with PostgreSQL databases and PgAdmin.',
        certificateId: 'PGSQL-2023-001',
        issueDate: 'Feb 2023',
        expiryDate: null,
        tags: ['PostgreSQL', 'Databases', 'PgAdmin'],
        url: 'https://ude.my/UC-b5a4a945-fc04-4f94-bdec-e0854630881c'
      },
      {
        id: 'cert-jdbc-1',
        title: 'Java Database Connection: JDBC and MySQL',
        issuer: 'Udemy',
        description: 'Connecting Java applications to MySQL databases using JDBC.',
        certificateId: 'JDBC-2023-001',
        issueDate: 'Feb 2023',
        expiryDate: null,
        tags: ['Java', 'JDBC', 'MySQL', 'Databases'],
        url: 'https://ude.my/UC-8010fb11-64b2-4c69-a489-79e62d6028e0'
      },
      {
        id: 'cert-spring-sec-1',
        title: 'Java Spring security',
        issuer: 'Udemy',
        description: 'Implementing security in Java applications using Spring Security.',
        certificateId: 'SPRINGSEC-2023-001',
        issueDate: 'Feb 2023',
        expiryDate: null,
        tags: ['Java', 'Spring', 'Security'],
        url: 'https://ude.my/UC-7c21f3c7-8be4-44fa-b3f1-4d4be8b6cb68'
      },
      {
        id: 'cert-spring-1',
        title: 'Spring Framework in Easy Steps',
        issuer: 'Udemy',
        description: 'Step-by-step guide to learning the Spring Framework.',
        certificateId: 'SPRING-2023-001',
        issueDate: 'Feb 2023',
        expiryDate: null,
        tags: ['Java', 'Spring', 'Framework'],
        url: 'https://ude.my/UC-ddd976ec-09b0-403e-87a9-eb518662c295'
      },
      {
        id: 'cert-java-beg-1',
        title: 'Java for Absolute Beginners',
        issuer: 'Udemy',
        description: 'Fundamental Java programming concepts for beginners.',
        certificateId: 'JAVA-BEG-2022-001',
        issueDate: 'Aug 2022',
        expiryDate: null,
        tags: ['Java', 'Programming', 'Beginners'],
        url: 'https://ude.my/UC-514bd743-f13d-4390-a7b1-2a80b99777a3'
      },
      {
        id: 'cert-junit-1',
        title: 'Practical Java Unit Testing with JUnit 5',
        issuer: 'Udemy',
        description: 'Unit testing in Java using JUnit 5.',
        certificateId: 'JUNIT-2022-001',
        issueDate: 'Aug 2022',
        expiryDate: null,
        tags: ['Java', 'JUnit', 'Testing', 'Unit Testing'],
        url: 'https://ude.my/UC-f9074a72-460b-401a-8a97-6cebcfb580aa'
      },
      {
        id: 'cert-email-1',
        title: 'Business Skills: Email Etiquette Rules Everyone Should Know',
        issuer: 'Udemy',
        description: 'Best practices and rules for professional email communication.',
        certificateId: 'EMAIL-2022-001',
        issueDate: 'Jun 2022',
        expiryDate: null,
        tags: ['Business', 'Email', 'Etiquette', 'Communication'],
        url: 'https://ude.my/UC-6546fd50-a9e3-443b-aee4-3bd4756972d0'
      }
    ],
    careerEntries: [
      {
        id: 1,
        company: 'UPS',
        role: 'Associate Application Developer',
        duration: 'Sep 2025 - Present',
        location: 'Chennai, Tamil Nadu, India',
        skills: ['Java', 'Spring Boot', 'AngularJS'],
        type: 'Full-time',
      },
      {
        id: 2,
        company: 'Kumaran Systems Pvt Ltd',
        role: 'Programmer',
        duration: 'Feb 2025 - Sep 2025',
        location: 'Chennai, Tamil Nadu, India',
        skills: ['AngularJS', 'Java'],
        type: 'Full-time',
      },
      {
        id: 3,
        company: 'Kumaran Systems Pvt Ltd',
        role: 'Trainee Programmer',
        duration: 'Feb 2023 - Jan 2025',
        location: 'Chennai, Tamil Nadu, India',
        skills: ['Java', 'JavaScript'],
        type: 'Full-time',
      },
      {
        id: 4,
        company: 'Kumaran Systems Pvt Ltd',
        role: 'Intern',
        duration: 'Jul 2022 - Jan 2023',
        location: 'Chennai, Tamil Nadu, India',
        skills: ['Java', 'SQL'],
        type: 'Full-time',
      }
    ]
  };
  return Promise.resolve(response);
}


export default function CertificationShowcase() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    fetchProfileDetails().then((data) => {
      setUserInfo(data);
    });
  }, []);

  if (!userInfo) {
    return <div className="p-8 text-center">Loading LinkedIn details...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F17] text-gray-900 dark:text-gray-100">
      <header className="max-w-6xl mx-auto px-6 py-12 border-gray-300 dark:border-gray-700 border-b">
        {/* Stack vertically on mobile (text then image), show as row on md+ with image on the right */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Text content first so on mobile image appears after description */}
          <div className="flex-1">
            <h1 className="text-4xl font-extrabold">{userInfo.profile.name}</h1>

            <p className="mt-2 text-sm text-blue-800 ml-1 dark:text-blue-400">
              {userInfo.profile.headline}
            </p>

            <p className="mt-8 max-w-xl">{userInfo.profile.mobile} | {userInfo.profile.mail}</p>

            <p className="mt-4 max-w-xl">{userInfo.profile.description}</p>

            <div className="mt-8 flex gap-3">
              <ResumeButton />
              <a
                href={userInfo.profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Image container second so it appears after description on mobile; on md+ it will be on the right */}
          <div
            style={{ borderRadius: '34% 66% 39% 61% / 67% 65% 35% 33%' }}
            className="w-full max-w-[350px] aspect-[4/5] sm:aspect-[5/6] md:aspect-[4/5] lg:aspect-[3/4] bg-gradient-to-br 
              from-[#8E44AD] to-[#0A1F44] rounded-lg shadow-lg overflow-hidden self-center">
            <img
              src={profileImg}
              alt={`${userInfo.profile.name} avatar`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </header>

      <Skills skills={userInfo.skills} />

      <CareerTimeline careerEntries={userInfo.careerEntries} />

      <Certifications certifications={userInfo.certifications} />

      <section className="max-w-6xl mx-auto px-6 py-12 bg-gradient-to-r from-[#0A1F44] to-[#8E44AD] text-white rounded-lg">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Let’s Work Together</h2>
            <p className="mt-2">
              Available for full-time roles and freelance engagements.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="mailto:vetriveldharuman01@gmail.com"
              className="px-4 py-2 bg-white text-[#0A1F44] rounded-lg"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-400">
        <div>x``
          <a href="#">
            Home
          </a>
        </div>
        <div className="flex gap-4 items-center">
          <a href={userInfo.profile.linkedInUrl}>LinkedIn</a>
          <a href={userInfo.profile.githubUrl}>GitHub</a>
        </div>
      </footer>
    </div>
  );
}
