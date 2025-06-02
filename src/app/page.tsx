'use client';

import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Nathan Drapeza
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8">
          Software Engineer
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-12">
          Passionate about building elegant solutions to complex problems. 
          Experienced in development with a focus on creating scalable and maintainable applications.
        </p>
        <div className="flex gap-4">
          <a href="#contact" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Contact Me
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="space-y-12">
          {/* Nova Medical Testing Inc */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Nova Medical Testing Inc</h3>
                <p className="text-lg font-medium">Software Developer</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                <p>November 2023–Present</p>
                <p>Edmonton, AB</p>
              </div>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Developed and containerized a TypeScript-based internal web application (Next.js/React) using Docker, enabling efficient employee management, project tracking, and client relationship oversight.</li>
              <li>Engineered various Python PySide and Tkinter desktop applications, and developed a comprehensive back-end Flask system.</li>
              <li>Upgraded SaaP application from Python 2 to Python 3, doubling data processing speed on average, and enabling compatibility with modern libraries.</li>
              <li>Designed and implemented a MySQL database update, backup, and change tracking system.</li>
              <li>Developed a software registration and licensing system with local and online authentication for clients and collaborators.</li>
              <li>Built a software distribution and update system, ensuring seamless version upgrades by detecting and applying changes dynamically.</li>
              <li>Leveraged machine learning algorithms to analyze large datasets and generate visualizations that reveal statistically significant insights.</li>
              <li>Developed RESTful API endpoints and backend functionality to optimize data retrieval, storage, and processing.</li>
            </ul>
          </div>

          {/* CSE */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">Government of Canada (National Defence)</h3>
                <p className="text-lg font-medium">Software Developer Co-op</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                <p>January 2023–April 2023</p>
                <p>Ottawa, ON (Remote)</p>
              </div>
            </div>
            <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400">
              <li>Engineered a full-stack web application using TypeScript (Angular) and Java (Spring Boot), optimizing development and deployment processes by integrating automated DevOps workflows.</li>
              <li>Optimized database architecture by migrating from MongoDB to PostgreSQL, improving query efficiency, refining data models, and implementing comprehensive integration and unit tests.</li>
              <li>Designed and deployed a Jenkins automation pipeline for parallelized build and testing of a full-stack application, while generating Docker images for deployment.</li>
              <li>Enhanced Angular front-end UI, improving usability, resolving issues, and refining aesthetics to ensure a cohesive experience across internal applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-8">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">University of Alberta</h3>
                <p className="text-lg font-medium">Bachelor of Science with Specialization in Computing Science</p>
              </div>
              <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                <p>Graduated April 2023</p>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-lg font-medium mb-2 text-gray-700 dark:text-gray-300">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Software Engineering
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Database Systems
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  Data Structures & Algorithms
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                  Web Application Architecture
                </span>
                <span className="px-3 py-1 bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-300 rounded-full text-sm">
                  Human-Computer Interaction
                </span>
                <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm">
                  Intelligent Systems
                </span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900 text-pink-600 dark:text-pink-300 rounded-full text-sm">
                  Ethics
                </span>
                <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm">
                  Game Theory
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Knead Chat Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Knead Chat</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A messaging platform for Knead Tech's web and mobile platforms, enabling seamless communication between volunteers.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Engineered TypeScript (React, React Native) front-end UIs for user-to-user messaging</li>
                <li>Developed and integrated UI components, utilizing prototypes and design principles</li>
                <li>Maintained a cohesive aesthetic and user experience across platforms</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  React Native
                </span>
              </div>
              <a 
                href="https://cmput401.ca/projects/ff4edfa3-f2d1-4898-b14a-8e043d422b2e" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Social Distribution Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Social Distribution</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A full-stack social networking application with customizable profiles, interactive posts, and user follow/friend relationships.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Built a full-stack social networking application using Python (Django) and JavaScript (React)</li>
                <li>Designed and implemented the UI and RESTful API endpoints for the notification page, post creation, and follow/friend user interactions</li>
                <li>Developed backend unit tests</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  React
                </span>
              </div>
              <a 
                href="https://github.com/404-F21/project" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* DailyToDo Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">DailyToDo</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A full-stack daily planner web application enabling users to create, track, and manage daily tasks with account-based data persistence.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Developed a full-stack daily planner using React and Django</li>
                <li>Implemented user authentication and task completion tracking</li>
                <li>Utilized reward signals to promote productivity through positive reinforcement</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  Python
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Django
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  React
                </span>
              </div>
              <a 
                href="https://github.com/nathandrapeza/DailyToDo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Name Location Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Name Location</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                A single-page web application that predicts and displays the likely nationalities of user-inputted names in real time.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Built a JavaScript (React) web application that integrates with the nationalize.io API</li>
                <li>Designed and implemented a responsive UI with dynamic rendering based on API responses</li>
                <li>Handled asynchronous data fetching using React hooks</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 rounded-full text-sm">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  API Integration
                </span>
              </div>
              <a 
                href="https://github.com/nathandrapeza/NameLocation" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Crowd Test Project */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Crowd Test</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                An Android application that enables users to create and contribute to crowdsourced scientific experiments.
              </p>
              <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 dark:text-gray-400 mb-4">
                <li>Engineered an Android application in Java (Android Studio) for crowdsourced scientific experiments</li>
                <li>Designed and implemented experiment-specific QR code generation and scanning</li>
                <li>Contributed to application architecture and design</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-300 rounded-full text-sm">
                  Java
                </span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 rounded-full text-sm">
                  Android Studio
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm">
                  QR Code
                </span>
              </div>
              <a 
                href="https://github.com/CMPUT301W21T26/CrowdTest" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 inline-flex items-center"
              >
                View Project
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
        <div className="max-w-xl mx-auto">
          <div className="flex flex-col items-center space-y-4">
            <a href="mailto:drapeza.nathan@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              drapeza.nathan@gmail.com
            </a>
            <div className="flex space-x-4">
              <a href="https://linkedin.com/in/nathandrapeza" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
