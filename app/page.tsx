"use client";

import { ArrowRight, Mail, ExternalLink, Coffee, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#d0f4fb] relative overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 grid-rows-4 md:grid-rows-6 lg:grid-rows-8">
        {Array.from({ length: 64 }).map((_, i) => (
          <div key={i} className="border border-[#a8e8f2]/20"></div>
        ))}
      </div>

      <main className="relative container mx-auto px-6 py-16 max-w-5xl">
        {/* Intro Section */}
        <section
          id="intro"
          className="min-h-[90vh] flex flex-col justify-center py-16"
        >
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2d5a68]">
              arif rudianto.
            </h1>

            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a68] leading-tight">
                a <span className="text-[#0891b2]">results-driven</span>{" "}
                frontend engineer who optimizes web applications for performance
                and user experience
              </h2>

              <div className="h-2 w-32 bg-[#0891b2] mt-8"></div>
            </div>

            <div className="mt-16 space-y-8 text-lg text-[#2d5a68]">
              <p className="text-xl md:text-2xl">
                5+ years of experience in developing and optimizing scalable web
                applications
                <span className="text-[#0891b2] block mt-2 text-base md:text-lg italic">
                  with ReactJS, TypeScript, and modern frontend frameworks
                  <ArrowRight className="inline ml-2 h-4 w-4" />
                </span>
              </p>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8">
                <div className="flex items-center gap-2 text-[#2d5a68]">
                  <Linkedin className="h-5 w-5 text-[#0891b2]" />
                  <a
                    href="https://linkedin.com/in/arifrudianto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-[#0891b2] hover:underline flex items-center gap-2"
                  >
                    linkedin.com/in/arifrudianto
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#2d5a68]">
                  <Mail className="h-5 w-5 text-[#0891b2]" />
                  <a
                    href="mailto:arifrdianto@gmail.com"
                    className="hover:text-[#0891b2] transition-colors"
                  >
                    arifrdianto@gmail.com
                  </a>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href="#experience"
                  className="text-xl md:text-2xl font-medium text-[#0891b2] hover:underline underline-offset-4"
                >
                  View my work experience
                  <ArrowRight className="inline ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        {/* <section id="skills" className="py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d5a68] mb-16">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0891b2]">
                  Frontend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "ReactJS",
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "React Native",
                    "Next.js",
                    "Redux",
                    "TanStack Query",
                    "React Testing Library",
                    "HTML5",
                    "CSS3",
                    "Tailwind CSS",
                    "Vite",
                  ].map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0891b2]">
                  Backend Development
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Node.js",
                    "GraphQL",
                    "REST APIs",
                    "PostgreSQL",
                    "Express.js",
                  ].map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0891b2]">
                  DevOps & Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "CI/CD Pipelines",
                    "GitHub Actions",
                    "GitLab CI/CD",
                    "Sentry",
                    "JIRA",
                    "Grafana",
                    "Docker",
                    "Webpack",
                  ].map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-[#0891b2]">
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    "Performance Optimization",
                    "Scalable UI Architecture",
                    "Unit & Integration Testing",
                    "Accessibility (WCAG)",
                    "Cross-Browser Compatibility",
                  ].map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* Experience Section */}
        <section id="experience" className="py-24 md:py-32">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2d5a68] mb-16">
            Work Experience
          </h2>

          <div className="space-y-12">
            {/* eFishery Experience */}
            <div className="bg-[#e0f7fa] rounded-2xl p-8 md:p-10 border border-[#a8e8f2] transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm w-24 h-24 flex items-center justify-center">
                    <Image
                      src="/efishery.png?height=80&width=80"
                      alt="eFishery Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2d5a68]">
                      Frontend Engineer
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                      <span className="text-xl text-[#0891b2]">eFishery</span>
                      <span className="hidden md:inline text-[#2d5a68] opacity-60">
                        •
                      </span>
                      <span className="text-[#2d5a68] opacity-80">
                        Bandung, West Java, Indonesia (Remote)
                      </span>
                    </div>
                    <p className="text-[#2d5a68] opacity-80 mt-2">
                      April 2022 - February 2025
                    </p>
                  </div>

                  <div className="h-0.5 w-16 bg-[#0891b2]/50"></div>

                  <ul className="space-y-4">
                    {[
                      "Increased platform performance by 20% by developing and maintaining scalable user interfaces using ReactJS, TypeScript, and modern frontend frameworks.",
                      "Led the architecture and optimization of the Operational Transaction System, streamlining transaction workflows and enhancing system integration for improved business efficiency.",
                      "Designed and launched a mobile application for employees, enhancing sales tracking, customer visits, and overall team productivity.",
                      "Implemented Sentry for real-time application monitoring, achieving a 99% error-free rate and reducing issue resolution time by 30% through proactive debugging.",
                      "Collaborated cross-functionally with product managers, designers, and backend engineers to build responsive, accessible, and scalable UI solutions aligned with business goals.",
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#0891b2] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#2d5a68]">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-[#0891b2] font-medium hover:underline cursor-pointer">
                      View project details
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nutech Integrasi Experience */}
            <div className="bg-[#e3f2fd] rounded-2xl p-8 md:p-10 border border-[#bbdefb] transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm w-24 h-24 flex items-center justify-center">
                    <Image
                      src="/nutech.png?height=80&width=80"
                      alt="Nutech Integrasi Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2d5a68]">
                      Frontend Developer
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                      <span className="text-xl text-[#1976d2]">
                        Nutech Integrasi
                      </span>
                      <span className="hidden md:inline text-[#2d5a68] opacity-60">
                        •
                      </span>
                      <span className="text-[#2d5a68] opacity-80">
                        Jakarta, Indonesia
                      </span>
                    </div>
                    <p className="text-[#2d5a68] opacity-80 mt-2">
                      January 2019 - April 2022
                    </p>
                  </div>

                  <div className="h-0.5 w-16 bg-[#1976d2]/50"></div>

                  <ul className="space-y-4">
                    {[
                      "Developed a high-traffic e-ticketing system for ferry bookings, achieving a 95% customer satisfaction score and seamless user experience during peak usage.",
                      "Optimized frontend performance, reducing page load times by 40% through code improvements, lazy loading, and efficient state management.",
                      "Scaled system architecture to support 1,000+ daily active users, ensuring stability and high performance under heavy traffic conditions.",
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#1976d2] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#2d5a68]">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-[#1976d2] font-medium hover:underline cursor-pointer">
                      View project details
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PT Rejeki Jaya Experience */}
            <div className="bg-[#f3e5f5] rounded-2xl p-8 md:p-10 border border-[#e1bee7] transition-all hover:shadow-lg">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
                  <div className="bg-white p-4 rounded-xl shadow-sm w-24 h-24 flex items-center justify-center">
                    <Image
                      src="/rejeki.jpg?height=80&width=80"
                      alt="PT Rejeki Jaya Logo"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="space-y-6 flex-grow">
                  <div>
                    <h3 className="text-2xl font-bold text-[#2d5a68]">
                      IT Programmer
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                      <span className="text-xl text-[#8e24aa]">
                        PT Rejeki Jaya Makmur Sentosa
                      </span>
                      <span className="hidden md:inline text-[#2d5a68] opacity-60">
                        •
                      </span>
                      <span className="text-[#2d5a68] opacity-80">
                        Cirebon, West Java
                      </span>
                    </div>
                    <p className="text-[#2d5a68] opacity-80 mt-2">
                      April 2017 - October 2018
                    </p>
                  </div>

                  <div className="h-0.5 w-16 bg-[#8e24aa]/50"></div>

                  <ul className="space-y-4">
                    {[
                      "Developed a vehicle service retention system, increasing workshop revenue by 25% through automated customer notifications and service reminders.",
                      "Optimized database queries, reducing response times by 15% to support strategic business decision-making.",
                      "Resolved network issues proactively, ensuring seamless IT operations and uninterrupted workflows.",
                    ].map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-[#8e24aa] rounded-full mt-2 mr-3"></span>
                        <span className="text-[#2d5a68]">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-[#8e24aa] font-medium hover:underline cursor-pointer">
                      View project details
                      <ExternalLink className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="mt-20">
            <h3 className="text-2xl md:text-3xl font-bold text-[#2d5a68] mb-8">
              Education
            </h3>

            <div className="space-y-12">
              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-white/40">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#2d5a68]">
                    STMIK IKMI Cirebon
                  </h4>
                  <p className="text-[#0891b2] text-lg">
                    Bachelor's Degree in Informatics Engineering
                  </p>
                  <p className="text-[#2d5a68] opacity-80">
                    September 2012 – October 2016
                  </p>
                  <p className="text-[#2d5a68]">GPA: 3.46</p>
                  <p className="text-[#2d5a68]">
                    Focused on software development, networking, and database
                    management.
                  </p>
                </div>
              </div>

              <div className="bg-white/40 backdrop-blur-sm rounded-xl p-8 border border-white/40">
                <div className="space-y-4">
                  <h4 className="text-xl font-bold text-[#2d5a68]">
                    SMK Negeri 1 Jamblang
                  </h4>
                  <p className="text-[#0891b2] text-lg">
                    Diploma in Computer and Network Engineering
                  </p>
                  <p className="text-[#2d5a68] opacity-80">
                    July 2009 – May 2012
                  </p>
                  <p className="text-[#2d5a68]">
                    Specialized in network infrastructure, system admin, and IT
                    support.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        {/* Contact Section - Redesigned with casual copy */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2d5a68]">
                Let&apos;s collaborate over coffee ☕<br />
                Got a cool project in mind?
                <br />
                I&apos;m all ears—ask away!
              </h2>

              <div className="h-1 w-24 bg-[#0891b2] my-8"></div>

              <div className="flex items-center gap-3 text-[#0891b2]">
                <Coffee className="h-6 w-6" />
                <span className="text-lg font-medium">
                  Let&apos;s connect and chat!
                </span>
              </div>
            </div>

            <div className="mt-12 space-y-8">
              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                <div className="w-32 text-lg font-medium text-[#2d5a68]">
                  Email
                </div>
                <a
                  href="mailto:arifrdianto@gmail.com"
                  className="text-lg text-[#0891b2] hover:underline"
                >
                  arifrdianto@gmail.com
                </a>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
                <div className="w-32 text-lg font-medium text-[#2d5a68]">
                  LinkedIn
                </div>
                <a
                  href="https://linkedin.com/in/arifrudianto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[#0891b2] hover:underline flex items-center gap-2"
                >
                  linkedin.com/in/arifrudianto
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-[#a8e8f2]/30 bg-[#d0f4fb]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#2d5a68] mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Arif Rudianto. All rights
            reserved.
          </p>
          <div className="flex gap-8">
            <Link
              href="#intro"
              className="text-sm text-[#2d5a68] hover:text-[#0891b2] transition-colors"
            >
              Back to top
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
