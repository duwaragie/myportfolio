import { link } from "fs";
import { FaJs, FaDatabase, FaCloud, FaTools, FaCogs } from "react-icons/fa";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Work", link: "#work" },
  { name: "Strength", link: "#abilities" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[80vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
     title: "GoSync – Online Bus Ticket Booking System",
    des: "Built a full-stack MERN-based bus ticketing platform with real-time seat booking, admin dashboards, and QR-based ticketing. Integrated 10+ modules including authentication, scheduling, and notifications. Dockerized and CI/CD-enabled.",
    img: "/p2.jpg",
    iconLists: ["/re.svg","/node.svg", "/mongo.svg", "/tail.svg", "/dock.svg", "/git.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
    projectType: "web",
  },
  {
    id: 2,
     title: "Workbrew – Coworking & Café Finder App",
    des: "Android app to discover nearby coworking spaces and cafés. Features location-based search, Jetpack Compose UI, and Room database for favorites.",
    img: "/P3 (2).png",
    iconLists: ["/kotlin.svg", "/android.svg", "/leaflet.svg", "/room.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
    projectType: "mobile",
  },
  {
    id: 3,
    title: "Employee Management System",
    des: "Designed a secure, role-based Employee Management System, ensuring efficient admin and employee functionality.",
    img: "/p1.png",
    iconLists: [ "/java.svg", "/mysql.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
    projectType: "web",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
    projectType: "web",
  },
];

export const Skills = [
  {
    quote:
      "Highly skilled in JavaScript, TypeScript, and a range of modern frameworks, enabling the development of dynamic, responsive, and high-performance applications.",
    name: "Programming & Frameworks",
    title: "React, Node.js, Next.js, .NET, Python, Java, C/C++",
    icon: <FaJs size={40} color="white" />, // Use the actual component
  },
  {
    quote:
      "Experienced in designing, managing, and optimizing both relational and NoSQL databases to ensure efficient data storage, retrieval, and scalability.",
    name: "Database Technologies",
    title: "PostgreSQL, MySQL, Firebase, MongoDB",
    icon: <FaDatabase size={40} color="white" />, // Use the actual component
  },
  {
    quote:
      "Proficient in deploying, securing, and managing cloud-based applications using industry-leading services to enhance performance, reliability, and scalability.",
    name: "Cloud Services",
    title: "AWS (Amplify, EC2, RDS, S3)",
    icon: <FaCloud size={40} color="white" />, // Use the actual component
  },
  {
    quote:
      "Adept at utilizing modern development tools for version control, collaborative coding, debugging, and workflow automation to streamline the software development lifecycle.",
    name: "Development Tools",
    title: "Git, GitHub, VS Code, Jupyter Notebooks",
    icon: <FaTools size={40} color="white" />, // Use the actual component
  },
  {
    quote:
      "Comprehensive knowledge of full-stack development, API integration, and designing scalable, efficient, and maintainable software solutions.",
    name: "Additional Skills",
    title: "RESTful APIs, MERN Stack, Frontend & Backend Development",
    icon: <FaCogs size={40} color="white" />, // Use the actual component
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/duwaragie",
  },

  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/duwaragie-kugaraj/",
  },
];
