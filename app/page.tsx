"use client"

import React, { useEffect, useRef, useState } from "react"

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const toggleTheme = () => {
    setIsDark(!isDark)
  }

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["intro", "work", "education", "projects", "connect"].map((section) => (
            <button
              key={section}
              onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })}
              className={`w-2 h-8 rounded-full transition-all duration-500 ${
                activeSection === section
                  ? "bg-foreground"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
              }`}
              aria-label={`Maps to ${section}`}
            />
          ))}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section 1: Intro */}
        <header
          id="intro"
          ref={(el) => {
            sectionsRef.current[0] = el
          }}
          className="min-h-screen flex items-start sm:items-center pt-32 pb-16 sm:py-0 opacity-0"
        >
          <div className="grid lg:grid-cols-5 gap-12 sm:gap-16 w-full items-center">            {/* LEFT COLUMN */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">             <div className="space-y-3 sm:space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight">
                  Shreyas
                  <br />
                  <span className="text-muted-foreground">Thakur</span>
                </h1>
              </div>
              <div className="space-y-6 max-w-md">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Full-Stack & Blockchain Developer bridging the gap between scalable web platforms
                  and blockchain technology. Skilled
                  in{" "}
                  <span className="text-foreground">Ethereum, Smart Contracts</span>,{" "}
                  <span className="text-foreground">TypeScript</span>,{" "}
                  <span className="text-foreground">Next.js</span>, and{" "}
                  <span className="text-foreground"></span> with
                  a focus on clean architecture and developer experience.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for opportunities
                  </div>
                  <div>Mumbai, India</div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-2 flex flex-col space-y-6 sm:space-y-8 mt-8 lg:mt-0">
              <div className="space-y-4">
                {/* Languages */}
                <div className="text-sm text-muted-foreground font-mono">Languages</div>
                <div className="flex flex-wrap gap-2">
                  {["JavaScript", "TypeScript", "Solidity", "SQL"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Blockchain */}
                <div className="text-sm text-muted-foreground font-mono">Blockchain</div>
                <div className="flex flex-wrap gap-2">
                  {[
                    
                    "Ethereum",
                    "Arbitrum",
                    "Avalanche",
                    "Smart Contracts",
                    "Web3.js",
                    "Ethers.js",
                    "Wallet Adapter",
                    "Solidity",
                    "Hardhat",
                    "Foundry",
                    "Near Protocol",
                    "Polkadot",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Frontend */}
                <div className="text-sm text-muted-foreground font-mono">Frontend</div>
                <div className="flex flex-wrap gap-2">
                  {["Next.js", "React", "Tailwind CSS"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Backend */}
                <div className="text-sm text-muted-foreground font-mono">Backend</div>
                <div className="flex flex-wrap gap-2">
                  {["Node.js", "Express", "Prisma", "MongoDB", "PostgreSQL", "JWT", "REST APIs"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* DevOps */}
                <div className="text-sm text-muted-foreground font-mono">DevOps & Tools</div>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Docker", "Vercel", "Linux", "CI/CD"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs border border-border rounded-full hover:border-muted-foreground/50 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Section 2: Experience */}
<section
  id="work"
  ref={(el) => {
    sectionsRef.current[1] = el
  }}
  className="py-20 sm:py-32 opacity-0 bg-background text-foreground"
>
  <div className="space-y-12 sm:space-y-16">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <h2 className="text-3xl sm:text-4xl font-light text-foreground">Experience</h2>
    </div>

    <div className="space-y-8 sm:space-y-12">
      {[
        {
          year: "Sep 2025 – Present",
          role: "Arbitrum Ambassador",
          company: "Arbitrum Foundation",
          description: [
            "Selected as an official Arbitrum Ambassador to represent the ecosystem, deliver developer workshops, and engage community builders.",
            "Spoke at Namaste Arbitrum Mumbai Edition on Arbitrum’s DAO, tech stack, and governance innovations.",
          ],
          tech: ["Arbitrum Stylus", "EVM", "Ethereum L2", "DAO Governance"],
        },
  
        {
          year: "Dec 2024 – Jan 2025",
          role: "Web3 Developer Intern",
          company: "Cubane (Enterprise L1 Blockchain)",
          "description": [
          "Developed cubane.space and authored the complete user-facing documentation (FAQs) to simplify the platform for new users.",
          "Conducted in-depth research on competing L1 protocols to inform product strategy and created technical presentations for the core team."
  ],
          tech: ["Frontend", "Developer-Docs", "Research", "Planning"],
        },

      ].map((job, index) => (
        <div
          key={index}
          className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/40 hover:border-border transition-colors duration-500"
        >
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-light text-muted-foreground group-hover:text-foreground transition-colors duration-500">
              {job.year}
            </div>
          </div>
          <div className="lg:col-span-6 space-y-3">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-foreground">{job.role}</h3>
              <div className="text-muted-foreground">{job.company}</div>
            </div>
            <div className="space-y-2">
              {job.description.map((line, i) => (
                <p key={i} className="text-muted-foreground/90 leading-relaxed max-w-lg">
                  {line}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end mt-2 lg:mt-0">
            {job.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-xs bg-muted/10 text-muted-foreground border border-border/30 rounded-md group-hover:border-border/60 transition-colors duration-500"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Section 3: Education */}
<section
  id="education"
  ref={(el) => {
    sectionsRef.current[2] = el
  }}
  className="py-20 sm:py-32 opacity-0"
>
  <div className="space-y-12 sm:space-y-16">
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <h2 className="text-3xl sm:text-4xl font-light">Education</h2>
    </div>

    <div className="space-y-8 sm:space-y-12">
      {[
        {
          degree: "Bachelor of Engineering in Computer Engineering",
          college: "Terna Engineering College – University of Mumbai",
          duration: "Aug 2021 – Jun 2025",
          location: "Mumbai, India",
          highlights: [
            {
              text: "Research Paper: Machine Learning Techniques for Credit Card Fraud Detection (2025)",
              link: "https://drive.google.com/file/d/1lW0LHinVv4KIV31A5TqfkxQoC5GWiUpB"
            },
            {
              text: "Specialized in Blockchain and AI Applications with courses on Smart Contracts, Decentralized Systems"
            },
          ],
        },
        {
          degree: "Blockchain Development Courses",
          college: "100xDevs by Harkirat Singh & Updraft by Cyfrin",
          duration: "Jun 2025 – Aug 2025",
          location: "Online (Remote)",
          highlights: [
            {
              text: "Intensive curriculum covering full-stack development for EVM (Ethereum, Solidity, Foundry) ecosystems."
            },
            {
              text: "Gained practical experience building wallets, token launchpads, and DEXs, progressing from fundamentals to advanced topics like cross contracts invocation, and CPIs."
            },
            {
              text: "Learned end-to-end Web3 DevOps, testing frameworks, and auditing best practices used by top protocols."
            },
          ],
        },
      ].map((edu, index) => (
        <div
          key={index}
          className="group grid lg:grid-cols-12 gap-4 sm:gap-8 py-6 sm:py-8 border-b border-border/50"
        >
          <div className="lg:col-span-2">
            <div className="text-xl sm:text-2xl font-light text-muted-foreground">
              {edu.duration}
            </div>
          </div>
          <div className="lg:col-span-10 space-y-2">
            <div>
              <h3 className="text-lg sm:text-xl font-medium">{edu.degree}</h3>
              
              {/* --- UPDATED BLOCK WITH BOTH LINKS --- */}
              <div className="text-muted-foreground">
                {edu.college.includes("100xDevs") ? (
                  <>
                    <a 
                      href="https://www.notion.so/Web-3-Cohort-23197948835480e98046c78d5b2b1d43?source=copy_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      100xDevs by Harkirat Singh
                    </a>
                    {" & "}
                    <a 
                      href="https://updraft.cyfrin.io/courses/solidity"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      Updraft by Cyfrin
                    </a>
                  </>
                ) : (
                  edu.college
                )}
              </div>
              <div className="text-sm text-muted-foreground">{edu.location}</div>
            </div>
            <ul className="list-disc list-inside text-muted-foreground text-sm space-y-1">
              {edu.highlights.map((line, i) => (
                <li key={i}>
                  {line.text}
                  {line.link && (
                    <a 
                      href={line.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline ml-2 font-medium"
                    >
                      [View Paper]
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

{/* Section 4: Projects */}
<section
  id="projects"
  ref={(el) => {
    if (sectionsRef.current) sectionsRef.current[3] = el
  }}
  className="min-h-screen py-20 sm:py-32 opacity-0"
>
  <div className="space-y-12 sm:space-y-16">
    <h2 className="text-3xl sm:text-4xl font-light">Projects</h2>
    <div className="grid gap-8 sm:gap-10">
      {[
         {
            title: "AvaxPay — Deep Link Payment Protocol on Avalanche",
            description: [
              "Developed a Stripe-like payment link protocol for Avalanche enabling instant crypto payments via shareable links and QR codes.",
              "Features include no-code link generation, merchant dashboard, and subscription support; processed fast real-time transactions on the Avalanche network.",
            ],
            tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "Avalanche", "TailwindCSS"],
            liveUrl: "https://avaxpay.vercel.app/",
            githubUrl: "https://github.com/ShreyasThakur0809/AvaxPay",
          },
        {
          title: "Nexa — DeFi Yield Aggregator",
          description: [
            "Nexa is a full-stack decentralized application that aggregates yield across multiple blockchains.",
            "Built a scalable backend using Node.js and Express.js, integrated financial APIs (DefiLlama, 1Click Intents), and designed a responsive frontend with Next.js and TailwindCSS.",
            "The platform dynamically ranks yield strategies and supports real-time cross-chain transactions via the NEAR Wallet Selector.",
          ],
          tech: ["Next.js", "TypeScript", "Node.js", "Express.js", "NEAR Protocol", "TailwindCSS"],
          liveUrl: "https://nexa-three-eta.vercel.app/",
          githubUrl: "https://github.com/ShreyasThakur0809/Nexa-DefI-Yeilds",
        },
        {
          title: "Vibe — Decentralized Social Networking & Events Platform",
          description: [
            "Vibe is a Web3 social networking and events platform enabling curated connections and monetized meetups.",
            "Includes Vibe Matching App for curated user connections, Web3 Profile Services for on-chain identity and scoring, and Vibe Meetups for event monetization.",
            "Designed modular architecture for scalability and integrated wallet-based authentication using Ethereum smart contracts.",
          ],
          tech: ["Solidity", "Next.js", "TypeScript", "Ethers.js", "TailwindCSS", "Web3.js"],
          liveUrl: "https://vibe-three-rust.vercel.app",
          githubUrl: "https://github.com/ShreyasThakur0809/Vibe-Social-DApp",
        },
  
      ].map((project, index) => (
        <article
          key={index}
          className="group grid lg:grid-cols-12 gap-6 sm:gap-8 p-6 sm:p-8 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-500 hover:shadow-lg"
        >
          <div className="lg:col-span-12 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <h3 className="text-lg sm:text-xl font-medium text-foreground">{project.title}</h3>
              <div className="flex items-center gap-4 mt-2 sm:mt-0 flex-shrink-0">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="Live Website"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span className="hidden sm:inline">Live</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    aria-label="GitHub Repository"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                )}
              </div>
            </div>
            <div className="space-y-3">
              {project.description.map((line, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tech.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-xs border border-border rounded-full bg-muted/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>

        {/* Section 5: Connect */}
        <section
          id="connect"
          ref={(el) => {
            sectionsRef.current[4] = el
          }}
          className="py-20 sm:py-32 opacity-0"
        >
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-6 sm:space-y-8">
              <h2 className="text-3xl sm:text-4xl font-light">Let&apos;s Connect</h2>
              <div className="space-y-6">
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Interested in new opportunities, collaborations, and conversations about technology and Web3.
                </p>
                <div className="space-y-4">
                  <a
                    href="mailto:sharmasatyam1603@gmail.com"
                    className="group flex items-center gap-3 text-foreground hover:text-muted-foreground transition-colors duration-300"
                  >
                    <span className="text-base sm:text-lg">shreyast2003@gmail.com</span>
                    <svg
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="space-y-6 sm:space-y-8">
              <div className="text-sm text-muted-foreground font-mono">ELSEWHERE</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: "GitHub", handle: "@ShreyasThakur0809", url: "https://github.com/ShreyasThakur0809" },
                  { name: "LinkedIn", handle: "Shreyas Thakur", url: "https://www.linkedin.com/in/shreyas-thakur" },
                  { name: "Twitter", handle: "@Shreyas Thakur", url: "https://x.com/Shreyas__Thakur" },
                  { name: "Telegram", handle: "@Shreyas Thakur", url: "https://t.me/artist_tyler"},
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-4 border border-border rounded-lg hover:border-muted-foreground/50 transition-all duration-300 hover:shadow-sm"
                  >
                    <div className="space-y-2">
                      <div className="text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                        {social.name}
                      </div>
                      <div className="text-sm text-muted-foreground">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 sm:py-16 border-t border-border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">© 2025 Shreyas Thakur. All rights reserved.</div>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="group p-3 rounded-lg border border-border hover:border-muted-foreground/50 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {isDark ? (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </footer>
      </main>

      <div className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none"></div>
    </div>
  )
}

