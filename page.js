"use client";
import Image from "next/image";
import { AvatarCircles } from "../components/ui/avatar-circles";
import { Safari } from "@/components/ui/safari";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description:
      "Website portofolio yang menampilkan pengalaman dan karya terbaik. Dibangun dengan fokus pada tampilan responsif dan performa cepat.",
    skills: ["Next.js", "React", "Tailwind CSS", "JavaScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Website Checker",
    description:
      "Platform analisis website berbasis AI yang dapat memeriksa performa, SEO, dan keamanan website dengan laporan detail.",
    skills: ["React", "Python", "SQLlite", "Tailwind CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "AI Chat Website",
    description:
      "Aplikasi chatting real-time dengan autentikasi pengguna dan notifikasi. Dilengkapi dengan asisten AI untuk bantuan otomatis.",
    skills: ["Next.js", "Socket.io", "Express", "OpenAI API"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI CV Maker",
    description:
      "Pembuat CV Berbasis AI menggunakan integrasi API dari OpenRouter. Dapat menghasilkan CV profesional dalam hitungan menit.",
    skills: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS", "Javascript"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const avatars = [
  {
    imageUrl: "https://avatars.githubusercontent.com/u/16860528",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/20110627",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/106103625",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59228569",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/59442788",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl: "https://avatars.githubusercontent.com/u/89768406",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

const certificates = [
  { id: 1, image: "/images/no1.jpg", title: "Web Development Fundamentals" },
  { id: 2, image: "/images/no2.jpg", title: "React & Next.js Mastery" },
  { id: 3, image: "/images/no3.jpg", title: "UI/UX Design Principles" },
  { id: 4, image: "/images/no4.jpg", title: "Backend Development with Node.js" },
];

const stats = [
  { number: "4", label: "Projects Completed" },
  { number: "1", label: "Years Experience" },
  { number: "5+", label: "Technologies" },
  { number: "70%", label: "Learning Progrest" },
];

const items = [
  { href: "#home", label: "Home", iconClass: "bx-home" },
  { href: "#about", label: "About Me", iconClass: "bx-book" },
  { separator: true },
  { href: "#projects", label: "Projects", iconClass: "bx-code" },
  { href: "#certificates", label: "Certificates", iconClass: "bx-certification" },
  { separator: true },
  { href: "https://github.com", label: "GitHub", iconClass: "bxl-github" },
  { href: "https://instagram.com", label: "Instagram", iconClass: "bxl-instagram" },
  { href: "https://tiktok.com", label: "TikTok", iconClass: "bxl-tiktok" },
];

const contact = [
  { href: "#", label: "WhatsApp", iconClass: "bxl-whatsapp" },
  { href: "mailto:joan@example.com", label: "Email", iconClass: "bx-envelope" },
  { href: "https://linkedin.com", label: "LinkedIn", iconClass: "bxl-linkedin" },
];



export default function Portfolio() {

  const [showFull, setShowFull] = useState(false);

 


  const shortText = "The reason I can study here is because I was rejected in many public schools...";
  const fullText = `The reason I can study here is because I was rejected in many public schools. 
My dream was to enter SMK Negeri 1 Surabaya, but after three times of registration, I was rejected. 
Finally, because I had no other option, I registered in this school and I chose the Digital Business major. 

At first, I felt lazy and had no spirit, because I was rejected many times by public schools. 
But slowly, I started to be happy again, because the school environment is fun and I have many friends in class. 
There are 24 girls and 12 boys. 

We study many things in our major: how to sell products online, how to open a business safely and correctly, the rules that we must understand, how to use the cashier machine, and more. 

Soon we will graduate. For me, the best memories in my school life are only in SMK. 

On the other side, I also like a girl (I don’t say her name). She is very beautiful and in my opinion she is underrated in school. Her face and body proportion are good. But I like her not only for that. I think about many aspects before I like someone. 

I like her because she is quiet, she does not show bad things, her clothes are polite, and she is tall (but not taller than me). I like her, but I am still thinking if I want to say my feeling. I want to say it, but not for dating now. I want to become the best version of ourselves first.`


  const [showFull2, setShowFull2] = useState(true);

  const shortText2 = "I started learning at Code Politan in 2024.";
  const fullText2 = `I started learning at Code Politan in 2024.
I bought this class for 600 thousand rupiah, but it already has complete features.
I can understand Next.js because the material from Code Politan is easy to understand.

At the beginning, I started with HTML, CSS, JavaScript, and Python.
Then I moved to Figma and Next.js.

I will learn again and again to improve my skills and understanding.
I hope I can create something interesting and helpful for other people.`


  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 text-gray-800">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Joan.dev</div>
          <div className="hidden md:flex space-x-8">
            {items.filter(item => !item.separator && item.href.startsWith('#')).map((item, idx) => (
              <a key={idx} href={item.href} className="text-gray-600 hover:text-black transition-colors">
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="#contact-form" 
            className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>
      </nav>

      <main className="container mx-auto px-4 pt-24 pb-20">
        {/* Home Section */}
        <section id="home" className="flex flex-col md:flex-row items-center justify-between gap-10 py-10">
          <div className="flex-1">
            <p className="text-lg text-gray-600 mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Joan Marcelino</h1>
            <div className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Full-Stack Developer
              </span>
            </div>
            <p className="mt-5 max-w-[600px] text-lg text-gray-600 leading-relaxed">
              Software Engineer turned Entrepreneur. I love building things and
              helping people. Passionate about creating digital solutions that make a difference.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#" 
                className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors flex items-center gap-2"
              >
                <i className="bx bx-download"></i>
                Download CV
              </a>
              <a 
                href="#projects" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                View Projects
              </a>
            </div>

            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Trusted by developers at</p>
              <AvatarCircles
                numPeople={10}
                avatarUrls={avatars}
                className="text-1xl"
              />
            </div>
          </div>

          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-lg opacity-20"></div>
            <Image
              src="/images/profil.jpg"
              alt="Profile"
              fill
              className="rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Hello, my name is Marcelino. I am 17 years old. Before, I liked to
                draw in a sketchbook. Now, I draw using technology. I hope my work
                can be useful for other people. I am learning to be a full-stack web
                developer, a full-stack mobile developer, and also to study machine
                learning. I focus on one thing at a time. Because I am still young,
                I want to explore many things. Thank you.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing my knowledge with the developer community. I believe in continuous learning and 
                always strive to improve my skills.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">My Interests</h3>
              <div className="flex flex-wrap gap-3">
                {["Web Development", "AI/ML", "UI/UX Design", "Open Source", "Mobile Apps", "DevOps"].map(
                  (interest) => (
                    <span 
                      key={interest}
                      className="bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Education</h2>

          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  SK
                </div>
                <div>
                  <h3 className="font-bold text-lg">SMK Ketintang</h3>
                  <p className="text-gray-600">Bussines Digital</p>

                    <p className="text-gray-600 whitespace-pre-line">
                      {showFull ? fullText : shortText}
                      <button 
                        onClick={() => setShowFull(!showFull)}
                        className="text-blue-500 hover:underline ml-2"
                      >
                        {showFull ? " < " : " >"}
                      </button>
                    </p>
                </div>
              </div>
              <div className="text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
                June 2023 - May 2026
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between p-6 bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  CP
                </div>
                <div>
                  <h3 className="font-bold text-lg">Code Politan</h3>
                  <p className="text-gray-600">Full-Stack Development Program</p>

                     <p className="text-gray-600 whitespace-pre-line">
                      {showFull2 ? shortText2: fullText2 }
                      <button 
                        onClick={() => setShowFull2(!showFull2)}
                        className="text-blue-500 hover:underline ml-2"
                      >
                        {showFull2 ? " > " : " < "}
                      </button>
                    </p>
                </div>
              </div>
              <div className="text-gray-500 bg-gray-100 px-4 py-2 rounded-lg">
                June 2024 - May 2026
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "HTML", level: 90 },
              { name: "CSS", level: 85 },
              { name: "JavaScript", level: 80 },
              { name: "Python", level: 75 },
              { name: "Next.js", level: 85 },
              { name: "Tailwind CSS", level: 90 },
              { name: "Figma", level: 70 },
              { name: "SQL", level: 75 },
              { name: "Git", level: 80 },
              { name: "Tensor Flow" , level: 10 },
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-16">
            <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              My Projects
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Check Out My Projects</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              I've worked on a variety of projects, from simple websites to complex
              web applications. Here are a few of my favorites that showcase my skills and creativity.
            </p>
          </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6
">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Bagian Judul */}
          <div className="p-5">
            <h3 className="text-xl font-bold text-black">
              {project.title}
            </h3>
            <p className="mt-2 text-gray-600 text-sm">
              {project.description}
            </p>
          </div>

          {/* Bagian Skill */}
          <div className="px-5 pb-3 flex flex-wrap gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="text-xs font-medium px-3 py-1 bg-blue-100 text-blue-600 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Bagian Link */}
          <div className="px-5 py-4 flex justify-between border-t border-gray-200 dark:border-gray-700">
            <a
              href={project.demoUrl}
              className="text-sm font-medium hover:text-blue-700 bg-black text-white px-3 py-1 rounded-lg"
            >
              Live Demo
            </a>
            <a
              href={project.githubUrl}
             
              className="font-medium text-black hover:text-gray-700 text-2xl"
            >
               <i class='bx bxl-github'></i>
            </a>
          </div>
        </div>
      ))}
    </div>

        </section>

        {/* Certificate Section */}
        <section id="certificates" className="py-20">
          <div className="text-center mb-16">
            <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              Certificates
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">My Certifications</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              "I have earned several certifications from my studies at Codepolitan and other platforms. 
              I made them to learn and practice web development (at the moment I have 4, but it will increase, 
              because I focus more on practice than theory)."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {certificates.map((cert) => (
    <div
      key={cert.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
    >
      
        <Image
          src={cert.image}
          alt={cert.title}
          width={200}
          height={200}
          className="object-cover w-full"
        />
     

      <div className="p-4">
        <h3 className="font-bold">{cert.title}</h3>
        <p className="text-gray-600 text-sm">Issued by Codepolitan</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xs text-gray-500">Completed 2024</span>
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            View Certificate
          </a>
        </div>
      </div>
    </div>
  ))}
</div>
        </section>

        {/* Experience Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              Experience
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Coming Soon</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              "I don't have any professional experience yet, but I'm eager to learn and grow in the field of web development. 
              I'm actively looking for internship opportunities to apply my skills in real-world projects."
            </p>
          </div>
          
          <div className="flex justify-center">
            <Safari 
              className="w-full max-w-4xl"
              url="joan.dev/experience"  
              imageSrc="https://placehold.co/1200x750?text=Coming+Soon"
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="text-center mb-16">
            <span className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium">
              Contact
            </span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold">Get In Touch</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
              "Want to chat? Feel free to reach out through any of the platforms below. 
              I'll respond as soon as possible. Let's create something amazing together!"
            </p>
          </div>

          <div className="flex justify-center gap-8 mb-12">
            {contact.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="flex flex-col items-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl group-hover:scale-110 transition-transform">
                  <i className={`bx ${item.iconClass}`}></i>
                </div>
                <span className="mt-2 text-gray-700 font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-gray-100" id="contact-form">
            <h3 className="text-2xl font-bold mb-6 text-center">Send Me a Message</h3>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="text-2xl font-bold">Joan.dev</div>
              <p className="text-gray-400 mt-2">Building digital experiences with code</p>
            </div>
            <div className="flex space-x-6">
              {items.filter(item => !item.separator && !item.href.startsWith('#')).map((item, idx) => (
                <a 
                  key={idx} 
                  href={item.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <i className={`bx ${item.iconClass} text-2xl`}></i>
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Joan Marcelino. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-gray-200 z-40">
        {items.map((it, idx) =>
          it.separator ? (
            <span key={idx} className="w-px h-6 bg-gray-300" />
          ) : (
            <div key={idx} className="relative group">
              <a
                href={it.href}
                className="flex items-center justify-center w-10 h-10 rounded-full text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <i className={`bx ${it.iconClass} text-xl`} />
              </a>
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
                {it.label}
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
}