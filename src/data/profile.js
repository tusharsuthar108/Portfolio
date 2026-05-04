import EcomImg from "../images/novawear home.png";
import AgricultureImg from "../images/taskm.png";
import MovieImg from "../images/dreambikes.png";
import CollegeImg from "../images/scmhub.png";
import SchoolLogo from "../images/jnvlogo.png";
import ParulLogo from "../images/parullogo.jpg";

export const bio = {
  name: "Tushar Suthar",
  github: "https://github.com/tusharsuthar108",
  resume:
    "https://drive.google.com/file/d/1AYvYQItcWkdJCcDG-i5Tszzz0rpRb4Hj/view?usp=sharing",
  roles: ["Programer", "Full Stack Developer", "Data Enggineer"],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
};

export const skills = {
  description:
    "Over the past few years, I’ve honed a diverse set of skills that allow me to tackle complex challenges and deliver innovative solutions. Below are the key areas I’ve been specializing in and continuously growing",
  categories: [
    {
      title: "Frontend",
      skills: [
        {
          name: "HTML",
          image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
        },
        {
          name: "JavaScript",
          // Direct link to the official JS logo from Wikipedia/Wikimedia
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
        },
        {
          name: "CSS",
          // Cleaned up Wikipedia link for better stability
          image:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        },
        {
          name: "React JS",
          image:
            "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
        },
        {
          name: "Bootstrap",
          image:
            "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png",
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },

        {
          name: "MySql",
          image: "https://www.mysql.com/common/logos/logo-mysql-170x115.png",
        },
      ],
    },
    {
      title: "Machine Learing",
      skills: [
        {
          name: "Python",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        },
        {
          name: "Jupyter",
          // Cleaned up direct link to the official logo
          image:
            "https://upload.wikimedia.org/wikipedia/commons/3/38/Jupyter_logo.svg",
        },

        {
          name: "Google Colab",
          image:
            "https://colab.research.google.com/img/colab_favicon_256px.png",
        },
        {
          name: "Numpy",
          image: "https://numpy.org/images/logo.svg",
        },
        {
          name: "Sklearn",
          // Official direct SVG link for clarity and performance
          image:
            "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
        },

        // {
        //     name: "Tensorflow",
        //     image: "https://static-00.iconduck.com/assets.00/tensorflow-icon-1911x2048-1m2s54vn.png",

        // },
      ],
    },
    {
      title: "Other",
      skills: [
        {
          name: "Git",
          image:
            "https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png",
        },
        {
          name: "GitHub",
          image:
            "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
        },
        {
          name: "C",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png",
        },

        {
          name: "Java",
          image:
            "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        },
        {
          name: "VS Code",
          // Direct, stable SVG link
          image:
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg",
        },

        // {
        //     name: "Leetcode",
        //     image: "image.jpg",
        // },
      ],
    },
  ],
};

export const projectData = {
  discription:
    "Here are some hands-on projects where I applied my skills in both frontend and backend development, showcasing my experience across various domains.",
  project: [
    {
      id: 1,
      title: "Novawear Ecommerce Website",
      discription:
        "Developed a full-featured e-commerce platform using React.js, featuring product browsing, user authentication, cart management, and a product recommendation.",
      image: EcomImg,
      category: "Web App",
      date: "Des 2025 - Apr 2026",
      tages: [
        "React",
        "Bootstrap",
        "Javascript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
      ],
      webapp: "https://69d939d9296e892e544e2053--novawear-a.netlify.app/",
    },
    {
      id: 2,
      title: "Dream Bikes",
      discription:
        "Search, Compare & Find the best Bikes and Scooters with detailed specifications and pricing.",
      image: MovieImg,
      category: "Web App",
      date: "Nov 2025",
      tages: ["HTML", "CSS", "JavaScript", "PostgreSQL"],
      webapp: "https://github.com/tusharsuthar108/dreambikes",
    },
    {
      id: 3,
      title: " Task Manager -Role Based",
      discription:
        "🚀 Key Features : Authentication (Signup/Login) Project & team management Task creation, assignment & status tracking Dashboard (tasks, status, overdue) || ⚙️ Requirements : REST APIs + Database (SQL/NoSQL) Proper validations & relationships Role-based access control",
      image: AgricultureImg,
      category: "Web App",
      date: "May - June 2025",
      tages: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
      webapp: "https://taskmanagerrolebase.netlify.app/",
    },
    {
      id: 4,
      title: "Social Media Hub",
      discription:
        "SocialLink is a modern web app that lets users explore and connect to popular social media platforms from one place. It features a clean interface, a contact section, and a survey form that saves user name and email to MongoDB Atlas via a Node.js/Express backend. Built with HTML, CSS, JavaScript, and MongoDB, SocialLink is fully deployable onrender.",
      image: CollegeImg,
      date: "Nov - Dec 2024",
      tages: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
      webapp: "https://socialmediahub.onrender.com/",
    },
  ],
};

export const education = [
  {
    id: 0,
    img: ParulLogo,
    institute: "Parul University",
    date: "Aug 2024 - May 2026",
    grade: "7.61 CGPA",
    description:
      "I have Complited my B.tech in Information Technology from Parul University, Ana During Acadamics I maintain a strong CGPA of 7.61. My coursework covers essential subjects including Data Structures, Algorithms, OOPS, Database Management Systems, Operating Systems, and Computer Networks.",
    degree: "B.tech in Information Technology",
  },
  {
    id: 1,
    img: SchoolLogo,
    institute: "Jawahar Navodaya Vidyalaya, Dahod",
    date: "Jun 2020 - May 2022",
    grade: "72 %",
    description:
      "I have complited my Higher Education from JNV Dahod with Stream PCM",
    degree: "",
  },
];

export const items = [
  {
    title: "May 1940",
    cardTitle: "Dunkirk",
    url: "http://www.history.com",
    cardSubtitle:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer...",
    cardDetailedText:
      "Men of the British Expeditionary Force (BEF) wade out to a destroyer during the evacuation from Dunkirk.",
    media: {
      type: "IMAGE",
      source: {
        url: "http://someurl/image.jpg",
      },
    },
  },
  // ... more items
];

// 1. Movie Recommendation System (Django)

// Built a movie recommendation web app using Django that suggests films based on user preferences and viewing history. Integrated collaborative filtering algorithms to enhance personalized recommendations and used a clean, responsive UI for better user engagement.

// 2. E-commerce Website with Product Recommendation (Django)

// Developed a full-featured e-commerce platform using Django, featuring product browsing, user authentication, cart management, and a product recommendation engine. Implemented intelligent suggestion logic to increase user engagement and sales potential.

// 3. Mini Agriculture Website

// Designed and developed a mini agriculture website to provide information on farming techniques, crop management, and seasonal recommendations. Focused on accessibility, rural usability, and resource sharing for farmers and agricultural enthusiasts.

// 4. Clothing Website (Laravel)

// Created a modern and responsive clothing e-commerce website using Laravel. Included features like product catalog, filter options, user authentication, and secure checkout. Focused on smooth user experience and clean UI tailored for fashion retail.

// 5. College Website

// Built a dynamic college website to showcase academic programs, departments, events, and announcements. Included an admin panel for easy content management and a mobile-friendly design to improve access for students and faculty.

// Let me know if you want these in a more creative, casual, or minimalist tone instead.
