import React from "react";
import {createRoot} from "react-dom/client";
import {Github, Linkedin, Mail, Download, ArrowUpRight, Code2, UserRound, BriefcaseBusiness, Layers3, FileText, Menu, X, ChevronUp, ExternalLink} from "lucide-react";
import "./styles.css";

const profile = {
  name:"Shubhankar Saxena",
  role:"Python Backend Engineer",
  email:"shubhankarsaxena10@gmail.com",
  github:"https://github.com/shubhankarsaxena1997",
  linkedin:"https://www.linkedin.com/in/shubhankar-saxena-553735156/",
  resume:"public/resume.pdf"
};

const skills = {
  Backend:["Python","Django","FastAPI","REST APIs","Flask","Pydantic","AsyncIO"],
  Cloud:["AWS","Lambda","API Gateway","S3","DynamoDB"],
  DevOps:["Docker","OpenShift","GitHub Actions","CI/CD","Linux"],
  Data:["MySQL","MongoDB","PostgreSQL","Redis","SQL/NoSQL"],
  Messaging:["Kafka","Event-driven systems","Async processing"],
  Tools:["Git","GitHub","VS Code","Postman","Agile"]
};

const projects = [
 {title:"High-Throughput Python API",desc:"A production-style FastAPI service designed around high request volume, asynchronous processing, caching and database optimization.",tags:["Python","FastAPI","PostgreSQL","Redis","Docker"],github:"#",demo:"#"},
 {title:"Event-Driven Microservices",desc:"An event-driven backend architecture using Kafka for asynchronous communication, worker processing and scalable service boundaries.",tags:["Python","FastAPI","Kafka","Docker","PostgreSQL"],github:"#",demo:"#"},
 {title:"AWS Serverless Backend",desc:"A serverless application using API Gateway, Lambda, DynamoDB and S3 with a focus on scalability and cost-efficient infrastructure.",tags:["AWS Lambda","API Gateway","DynamoDB","S3","Python"],github:"#",demo:"#"},
 {title:"CI/CD with Docker & OpenShift",desc:"Automated testing, container builds and deployment workflows using GitHub Actions, Docker and OpenShift.",tags:["GitHub Actions","Docker","OpenShift","Python"],github:"#",demo:"#"}
];

const articles = [
 ["Scaling FastAPI","Practical patterns for building and scaling high-performance Python APIs."],
 ["Kafka Architecture","Understanding event-driven systems, consumers, partitions and reliability."],
 ["Concurrency vs Parallelism","When to use async I/O, threads and processes in Python."],
 ["Microservices Communication","Patterns and trade-offs for reliable service-to-service communication."]
];

function App(){
 const [menu,setMenu]=React.useState(false);
 const [tab,setTab]=React.useState("Backend");
 const nav=[["home","Home",Code2],["about","About",UserRound],["skills","Skills",Code2],["projects","Projects",Layers3],["experience","Experience",BriefcaseBusiness],["architecture","Architecture",Layers3],["resume","Resume",FileText],["contact","Contact",Mail]];
 return <div>
  <header className="mobileHeader"><a href="#home" className="brand">{"</>"} <span>{profile.name}</span></a><button onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></header>
  <aside className={menu?"sidebar open":"sidebar"}>
    <a className="brandSide" href="#home"><span>{"</>"}</span><b>Shubhankar<br/>Saxena</b></a>
    <nav>{nav.map(([id,label,Icon])=><a key={id} href={"#"+id} onClick={()=>setMenu(false)}><Icon size={17}/>{label}</a>)}</nav>
    <div className="sideBottom"><div><a href={profile.github} target="_blank"><Github/></a><a href={profile.linkedin} target="_blank"><Linkedin/></a><a href={"mailto:"+profile.email}><Mail/></a></div><small>© 2026 Shubhankar Saxena</small></div>
  </aside>

  <main>
   <section id="home" className="hero section">
    <div className="heroCopy"><span className="eyebrow">Python Backend Engineer</span>
      <h1>I build scalable,<br/>reliable & efficient<br/><em>backend systems.</em></h1>
      <p>5+ years of experience building backend applications with Python, Django, FastAPI, AWS, Kafka, Docker and OpenShift.</p>
      <div className="actions"><a className="btn primary" href="#projects">View My Projects <ArrowUpRight size={17}/></a><a className="btn" href={profile.resume}><Download size={17}/> Download Resume</a><a className="btn" href="#contact"><Mail size={17}/> Contact Me</a></div>
    </div>
    <div className="heroVisual"><div className="orb"><div className="avatar">SS</div></div><div className="availability"><span/> Available for opportunities</div></div>
   </section>

   <section id="about" className="section"><SectionTitle icon={<UserRound/>} title="About Me"/>
    <div className="aboutGrid"><div><p>I'm a Python Backend Engineer with 5+ years of experience designing and building scalable, secure and high-performance applications.</p><p>I specialize in APIs, microservices, event-driven architectures and cloud-native systems. I enjoy solving real-world engineering problems with clean code and robust engineering practices.</p></div>
    <div className="stats">{[["5+","Years Experience"],["20+","Projects / Features"],["100K+","Requests / Min"],["100%","Commitment"]].map(x=><div className="stat"><b>{x[0]}</b><span>{x[1]}</span></div>)}</div></div>
   </section>

   <section id="skills" className="section"><SectionTitle icon={<Code2/>} title="Skills"/>
    <div className="skillBox"><div className="tabs">{Object.keys(skills).map(k=><button className={tab===k?"active":""} onClick={()=>setTab(k)}>{k}</button>)}</div><div className="chips">{skills[tab].map(s=><span>{s}</span>)}</div></div>
   </section>

   <section id="projects" className="section"><SectionTitle icon={<Layers3/>} title="Featured Projects"/><div className="projectGrid">{projects.map(p=><article className="card project"><div className="projectIcon"><Code2/></div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tags.map(t=><span>{t}</span>)}</div><div className="links"><a href={p.github}><Github size={15}/> GitHub</a><a href={p.demo}>Live Demo <ExternalLink size={14}/></a></div></article>)}</div></section>

   <section id="experience" className="section"><SectionTitle icon={<BriefcaseBusiness/>} title="Experience"/><article className="experience card"><div className="company">IBM</div><div><h3>Application Developer</h3><small>Oct 2024 — Present</small><p>Building enterprise-grade backend applications using Python, Django, FastAPI, Kafka and AWS. Working with cross-functional teams to deliver reliable, high-quality solutions.</p></div><ul><li>Developed and maintained scalable REST APIs</li><li>Integrated Kafka for event-driven architectures</li><li>Worked with OpenShift and AWS deployments</li><li>Improved system performance and observability</li></ul></article></section>

   <section id="architecture" className="section"><SectionTitle icon={<Layers3/>} title="Architecture & Learnings"/><div className="articleGrid">{articles.map(a=><article className="card article"><div className="diagram"><Code2/></div><h3>{a[0]}</h3><p>{a[1]}</p><a href="#">Read article <ArrowUpRight size={14}/></a></article>)}</div></section>

   <section className="cta"><div><h2>Let's build something amazing together!</h2><p>I'm currently open to exciting opportunities.</p></div><a className="btn light" href="#contact"><Mail size={17}/> Get In Touch</a></section>

   <section id="contact" className="section contact"><SectionTitle icon={<Mail/>} title="Get In Touch"/><div className="contactGrid"><div><p>Have a project in mind or want to discuss opportunities?</p><p>Feel free to reach out.</p><a href={"mailto:"+profile.email}><Mail size={16}/> {profile.email}</a><span>📍 India</span></div><form onSubmit={e=>{e.preventDefault();alert("Connect this form to your email provider or backend.")}}><div className="formRow"><input required placeholder="Your Name"/><input required type="email" placeholder="Your Email"/></div><textarea required placeholder="Your Message"/><button className="btn primary" type="submit">Send Message <ArrowUpRight size={17}/></button></form></div></section>

   <footer>© 2026 Shubhankar Saxena. Built with React.</footer>
  </main><a className="top" href="#home"><ChevronUp/></a>
 </div>
}

function SectionTitle({icon,title}){return <div className="sectionTitle">{icon}<h2>{title}</h2></div>}
createRoot(document.getElementById("root")).render(<App/>);