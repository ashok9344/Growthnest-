// src/data/coursesData.js
// Centralized course repository for GrowthNest Tech Solution Learning Platform
// Synchronizes with localStorage so admin changes immediately reflect across the platform.

const STORAGE_KEY = "gnt_courses_data_v2";

export const INITIAL_COURSES = [
  {
    id: "html",
    title: "HTML5 Mastery: Complete A to Z Certification Course",
    shortTitle: "HTML5",
    symbol: "HTML5",
    colorScheme: "orange",
    gradient: "linear-gradient(135deg, #ff9541, #f3562d)",
    badgeColor: "#f3562d",
    description: "Master modern HTML5 from absolute scratch to advanced production websites with hands-on projects, semantic architecture, forms, and technical SEO.",
    fullDescription:
      "An exhaustive, industry-grade A to Z HTML5 curriculum. Learn document anatomy, text formatting, modern semantic tags, lists, tables, media embeds, complete forms & validation constraints, technical SEO meta tags, Canvas 2D graphics, SVG, and HTML5 Web APIs.",
    level: "Beginner to Advanced (A to Z)",
    lessonsCount: "22 Lessons (A to Z)",
    totalLessons: 22,
    duration: "6 Weeks",
    category: "Web Development",
    className: "gnt-html-course",
    rating: 4.95,
    studentsCount: 2480,
    introYoutubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
    progress: 15,
    completedLessons: 3,
    isEnrolled: true,
    modules: [
      {
        id: "m1",
        title: "Module 1: HTML5 Core Basics & Anatomy (A to Z Foundation)",
        lessonsCount: 4,
        lessons: [
          {
            id: "l1",
            title: "1. Web Architecture, How Browsers Work & What is HTML",
            duration: "14:15",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: true,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l2",
            title: "2. Document Anatomy: <!DOCTYPE html>, <html>, <head>, <body> & UTF-8",
            duration: "16:30",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: true,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l3",
            title: "3. Complete Text Typography: Headings h1-h6, Paragraphs, Bold, Italic, Mark, Del, Ins, Sub, Sup",
            duration: "18:45",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: true,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l4",
            title: "4. HTML Entities, Special Symbols, Emojis & Commenting Best Practices",
            duration: "12:20",
            youtubeUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
            completed: false,
            notesPdf: "HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesUrl: "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesSize: "3.4 KB",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Links, Media, Assets & Embeds",
        lessonsCount: 4,
        lessons: [
          {
            id: "l5",
            title: "5. Hyperlinks: Absolute vs Relative URLs, target='_blank', mailto: & tel:",
            duration: "15:40",
            youtubeUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l6",
            title: "6. Images, Picture Element, Responsive Art Direction, Favicon & Lazy Loading",
            duration: "17:10",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l7",
            title: "7. Native HTML5 Video & Audio Players with Controls, Posters & Subtitles",
            duration: "14:50",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: false,
            notesPdf: "HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesUrl: "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesSize: "3.4 KB",
          },
          {
            id: "l8",
            title: "8. Iframes & Secure Embedding (YouTube Videos, Google Maps, Sandbox)",
            duration: "13:25",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: false,
            notesPdf: "HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesUrl: "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesSize: "3.4 KB",
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: Lists, Tables & Structured Content",
        lessonsCount: 3,
        lessons: [
          {
            id: "l9",
            title: "9. Lists: Unordered <ul>, Ordered <ol> with Types & Description Lists <dl><dt><dd>",
            duration: "13:15",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: false,
            notesPdf: "HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesUrl: "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesSize: "3.4 KB",
          },
          {
            id: "l10",
            title: "10. Advanced HTML Tables: thead, tbody, tfoot, colgroup, rowspan & colspan",
            duration: "21:30",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l11",
            title: "11. Block vs Inline Elements, <div> vs <span> & Class vs Id Attributes",
            duration: "15:00",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: false,
            notesPdf: "HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesUrl: "/notes/HTML5_Cheatsheet_and_Tag_Reference.pdf",
            notesSize: "3.4 KB",
          },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Semantic HTML5 Architecture & Modern Web Layouts",
        lessonsCount: 3,
        lessons: [
          {
            id: "l12",
            title: "12. Semantic Tags: header, nav, main, article, section, aside & footer Explained",
            duration: "19:20",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: false,
            notesPdf: "HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesUrl: "/notes/HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesSize: "3.4 KB",
          },
          {
            id: "l13",
            title: "13. Building Real-World Website Layouts from Scratch with Semantic Containers",
            duration: "26:45",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: false,
            notesPdf: "HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesUrl: "/notes/HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesSize: "3.4 KB",
          },
          {
            id: "l14",
            title: "14. Accessibility (a11y), WAI-ARIA Landmark Roles & Screen Reader Testing",
            duration: "18:10",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: false,
            notesPdf: "HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesUrl: "/notes/HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesSize: "3.4 KB",
          },
        ],
      },
      {
        id: "m5",
        title: "Module 5: Complete Forms, Validations & User Inputs (A to Z)",
        lessonsCount: 4,
        lessons: [
          {
            id: "l15",
            title: "15. Form Architecture: Action, Methods (GET vs POST), Enctype & Labels",
            duration: "16:40",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: false,
            notesPdf: "HTML5_Forms_and_Validations_Handbook.pdf",
            notesUrl: "/notes/HTML5_Forms_and_Validations_Handbook.pdf",
            notesSize: "3.6 KB",
          },
          {
            id: "l16",
            title: "16. All 15+ Input Types: text, email, password, tel, date, color, range, file, checkbox, radio",
            duration: "24:15",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: false,
            notesPdf: "HTML5_Forms_and_Validations_Handbook.pdf",
            notesUrl: "/notes/HTML5_Forms_and_Validations_Handbook.pdf",
            notesSize: "3.6 KB",
          },
          {
            id: "l17",
            title: "17. Dropdowns, Datalist Autocomplete, Textarea, Fieldset & Legend",
            duration: "17:30",
            youtubeUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
            completed: false,
            notesPdf: "HTML5_Forms_and_Validations_Handbook.pdf",
            notesUrl: "/notes/HTML5_Forms_and_Validations_Handbook.pdf",
            notesSize: "3.6 KB",
          },
          {
            id: "l18",
            title: "18. HTML5 Native Validation: required, pattern regex, min/max, step & :user-valid",
            duration: "22:50",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: false,
            notesPdf: "HTML5_Forms_and_Validations_Handbook.pdf",
            notesUrl: "/notes/HTML5_Forms_and_Validations_Handbook.pdf",
            notesSize: "3.6 KB",
          },
        ],
      },
      {
        id: "m6",
        title: "Module 6: Modern HTML5 Web APIs, Technical SEO & Capstone Project",
        lessonsCount: 4,
        lessons: [
          {
            id: "l19",
            title: "19. Technical SEO: Viewport, Meta Descriptions, OpenGraph & Social Sharing Cards",
            duration: "16:20",
            youtubeUrl: "https://www.youtube.com/embed/MDLn5-zSQQI",
            completed: false,
            notesPdf: "HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesUrl: "/notes/HTML5_Semantic_Web_and_SEO_Guide.pdf",
            notesSize: "3.4 KB",
          },
          {
            id: "l20",
            title: "20. HTML5 Canvas 2D Graphics & Scalable Vector Graphics (SVG) Essentials",
            duration: "25:10",
            youtubeUrl: "https://www.youtube.com/embed/kUMe1FH4CHE",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l21",
            title: "21. HTML5 Web Storage (LocalStorage vs SessionStorage) & Geolocation API",
            duration: "20:30",
            youtubeUrl: "https://www.youtube.com/embed/qz0aGYrrlhU",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
          {
            id: "l22",
            title: "22. Capstone Project: Building & Deploying a Production Responsive Website",
            duration: "35:00",
            youtubeUrl: "https://www.youtube.com/embed/pQN-pnXPaVg",
            completed: false,
            notesPdf: "HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesUrl: "/notes/HTML5_Complete_Mastery_Guide_A_to_Z.pdf",
            notesSize: "7.7 KB",
          },
        ],
      },
    ],
  },
  {
    id: "css",
    title: "CSS3 & Modern Responsive Design",
    shortTitle: "CSS",
    symbol: "CSS3",
    colorScheme: "blue",
    gradient: "linear-gradient(135deg, #318dd0, #087bd2)",
    badgeColor: "#087bd2",
    description: "Master styling and responsive web design with modern CSS.",
    fullDescription:
      "Transform flat HTML wireframes into beautiful, responsive, and animated user interfaces. Learn modern CSS Flexbox, Grid, custom properties, animations, and mobile-first responsive design.",
    level: "Beginner Friendly",
    lessonsCount: "18+ Lessons",
    totalLessons: 18,
    duration: "4 Weeks",
    category: "Web Development",
    className: "gnt-css-course",
    rating: 4.9,
    studentsCount: 1680,
    introYoutubeUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
    progress: 100,
    completedLessons: 18,
    isEnrolled: true,
    modules: [
      {
        id: "m1",
        title: "Module 1: CSS Basics & Box Model",
        lessonsCount: 4,
        lessons: [
          {
            id: "l1",
            title: "1. Introduction to CSS Selectors & Specificity",
            duration: "12:15",
            youtubeUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
            completed: true,
            notesPdf: "CSS_Selectors_Reference.pdf",
            notesSize: "1.9 MB",
          },
          {
            id: "l2",
            title: "2. The Box Model: Margin, Border, Padding & Content",
            duration: "14:40",
            youtubeUrl: "https://www.youtube.com/embed/wRNinF7YQqQ",
            completed: true,
            notesPdf: "CSS_Box_Model_Guide.pdf",
            notesSize: "2.2 MB",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Flexbox Mastery",
        lessonsCount: 5,
        lessons: [
          {
            id: "l3",
            title: "3. Flexbox Container & Item Properties Explained",
            duration: "19:30",
            youtubeUrl: "https://www.youtube.com/embed/fYq5PXgSsbE",
            completed: true,
            notesPdf: "Flexbox_Complete_Cheatsheet.pdf",
            notesSize: "3.5 MB",
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: CSS Grid & Responsive Layouts",
        lessonsCount: 5,
        lessons: [
          {
            id: "l4",
            title: "4. Two-Dimensional Grid Systems & Media Queries",
            duration: "22:10",
            youtubeUrl: "https://www.youtube.com/embed/rg7Fvvl3taU",
            completed: true,
            notesPdf: "CSS_Grid_Handbook.pdf",
            notesSize: "2.8 MB",
          },
        ],
      },
      {
        id: "m4",
        title: "Module 4: Modern Animations & Transitions",
        lessonsCount: 4,
        lessons: [
          {
            id: "l5",
            title: "5. Keyframes, Smooth Transitions & Micro-Interactions",
            duration: "16:05",
            youtubeUrl: "https://www.youtube.com/embed/1Rs2ND1ryYc",
            completed: true,
            notesPdf: "CSS_Animations_Guide.pdf",
            notesSize: "1.7 MB",
          },
        ],
      },
    ],
  },
  {
    id: "react",
    title: "React - Complete Guide",
    shortTitle: "React",
    symbol: "⚛",
    colorScheme: "cyan",
    gradient: "linear-gradient(135deg, #48c7f5, #0791d0)",
    badgeColor: "#0791d0",
    description: "Build modern web applications with React.",
    fullDescription:
      "Become a professional frontend engineer. Master component architecture, JSX, hooks (useState, useEffect, useMemo), state management, routing, API integrations, and practical real-world applications.",
    level: "Intermediate",
    lessonsCount: "25+ Lessons",
    totalLessons: 24,
    duration: "8 Weeks",
    category: "Frontend Development",
    className: "gnt-react-course",
    rating: 4.95,
    studentsCount: 2350,
    introYoutubeUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
    progress: 45,
    completedLessons: 11,
    isEnrolled: true,
    modules: [
      {
        id: "m1",
        title: "1. Introduction to React",
        lessonsCount: 4,
        lessons: [
          {
            id: "l1",
            title: "Introduction to React",
            duration: "04:15",
            youtubeUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
            completed: true,
            notesPdf: "React Notes - Chapter 1.pdf",
            notesSize: "2.4 MB",
          },
          {
            id: "l2",
            title: "What is React?",
            duration: "12:30",
            youtubeUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
            completed: true,
            notesPdf: "JSX Cheatsheet.pdf",
            notesSize: "1.1 MB",
          },
          {
            id: "l3",
            title: "Setting up the Environment",
            duration: "10:20",
            youtubeUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            completed: true,
            notesPdf: "React_Vite_Setup_Notes.pdf",
            notesSize: "850 KB",
          },
          {
            id: "l4",
            title: "Your First React App",
            duration: "15:40",
            youtubeUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
            completed: true,
            notesPdf: "First_App_Source_Notes.pdf",
            notesSize: "1.4 MB",
          },
        ],
      },
      {
        id: "m2",
        title: "2. JSX and Components",
        lessonsCount: 5,
        lessons: [
          {
            id: "l5",
            title: "Components Architecture & Pure Functions",
            duration: "14:15",
            youtubeUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
            completed: true,
            notesPdf: "React_Components_Guide.pdf",
            notesSize: "2.1 MB",
          },
          {
            id: "l6",
            title: "Passing Data via Props & Children",
            duration: "16:45",
            youtubeUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
            completed: true,
            notesPdf: "React_Props_Drilling_Notes.pdf",
            notesSize: "1.9 MB",
          },
        ],
      },
      {
        id: "m3",
        title: "3. Props and State",
        lessonsCount: 6,
        lessons: [
          {
            id: "l7",
            title: "useState Hook Deep Dive & Immutability",
            duration: "21:10",
            youtubeUrl: "https://www.youtube.com/embed/dGcsHMXbSOA",
            completed: true,
            notesPdf: "State_Management_Basics.pdf",
            notesSize: "3.2 MB",
          },
        ],
      },
      {
        id: "m4",
        title: "4. React Hooks",
        lessonsCount: 5,
        lessons: [
          {
            id: "l8",
            title: "useEffect, Dependency Arrays & Cleanups",
            duration: "18:25",
            youtubeUrl: "https://www.youtube.com/embed/w7ejDZ8SWv8",
            completed: false,
            notesPdf: "React_Hooks_Cheatsheet.pdf",
            notesSize: "2.7 MB",
          },
          {
            id: "l9",
            title: "Custom Hooks & Reusable Logic",
            duration: "17:50",
            youtubeUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
            completed: false,
            notesPdf: "Custom_Hooks_Patterns.pdf",
            notesSize: "1.6 MB",
          },
        ],
      },
      {
        id: "m5",
        title: "5. Project: Build a Todo App",
        lessonsCount: 5,
        lessons: [
          {
            id: "l10",
            title: "Todo App Setup & State Architecture",
            duration: "25:30",
            youtubeUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
            completed: false,
            notesPdf: "TodoApp_Project_Spec.pdf",
            notesSize: "4.1 MB",
          },
        ],
      },
    ],
  },
  {
    id: "flutter",
    title: "Flutter & Dart Mobile App Development",
    shortTitle: "Flutter",
    symbol: "F",
    colorScheme: "purple",
    gradient: "linear-gradient(135deg, #ad6aff, #704be5)",
    badgeColor: "#704be5",
    description: "Develop beautiful cross-platform mobile apps with Flutter.",
    fullDescription:
      "Craft native iOS and Android apps with a single modern codebase. Learn Dart programming, Flutter widgets, state management (Provider/Bloc), REST APIs, native device features, and app store deployment.",
    level: "Intermediate",
    lessonsCount: "30+ Lessons",
    totalLessons: 30,
    duration: "10 Weeks",
    category: "Mobile Development",
    className: "gnt-flutter-course",
    rating: 4.88,
    studentsCount: 1910,
    introYoutubeUrl: "https://www.youtube.com/embed/1ukSR1SXdB8",
    progress: 20,
    completedLessons: 6,
    isEnrolled: true,
    modules: [
      {
        id: "m1",
        title: "Module 1: Introduction to Dart & Flutter",
        lessonsCount: 5,
        lessons: [
          {
            id: "l1",
            title: "1. Dart Syntax, Variables & Object-Oriented Principles",
            duration: "15:20",
            youtubeUrl: "https://www.youtube.com/embed/1ukSR1SXdB8",
            completed: true,
            notesPdf: "Dart_Programming_Basics.pdf",
            notesSize: "2.3 MB",
          },
          {
            id: "l2",
            title: "2. Installing Flutter SDK & Android Studio Setup",
            duration: "18:45",
            youtubeUrl: "https://www.youtube.com/embed/x0uinJvhNxI",
            completed: true,
            notesPdf: "Flutter_Environment_Setup.pdf",
            notesSize: "1.7 MB",
          },
        ],
      },
      {
        id: "m2",
        title: "Module 2: Flutter Widgets & UI Layouts",
        lessonsCount: 7,
        lessons: [
          {
            id: "l3",
            title: "3. Stateless vs Stateful Widgets Explained",
            duration: "20:10",
            youtubeUrl: "https://www.youtube.com/embed/1ukSR1SXdB8",
            completed: true,
            notesPdf: "Flutter_Widget_Tree_Guide.pdf",
            notesSize: "3.1 MB",
          },
          {
            id: "l4",
            title: "4. Building Complex Responsive Mobile Layouts",
            duration: "24:30",
            youtubeUrl: "https://www.youtube.com/embed/x0uinJvhNxI",
            completed: true,
            notesPdf: "Responsive_Mobile_UI_Notes.pdf",
            notesSize: "2.9 MB",
          },
        ],
      },
      {
        id: "m3",
        title: "Module 3: State Management & APIs",
        lessonsCount: 8,
        lessons: [
          {
            id: "l5",
            title: "5. Connecting REST APIs with HTTP Package",
            duration: "22:15",
            youtubeUrl: "https://www.youtube.com/embed/1ukSR1SXdB8",
            completed: false,
            notesPdf: "Flutter_REST_API_Integration.pdf",
            notesSize: "3.4 MB",
          },
        ],
      },
    ],
  },
];

// Helper: Get all courses with fallback to initial data
export const getCourses = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (e) {
    console.error("Error reading courses from storage:", e);
  }
  saveCourses(INITIAL_COURSES);
  return INITIAL_COURSES;
};

// Helper: Save courses
export const saveCourses = (courses) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(courses));
  } catch (e) {
    console.error("Error saving courses to storage:", e);
  }
};

// Helper: Get single course by ID
export const getCourseById = (id) => {
  const courses = getCourses();
  return (
    courses.find(
      (c) =>
        String(c.id).toLowerCase() === String(id).toLowerCase() ||
        c.shortTitle.toLowerCase() === String(id).toLowerCase()
    ) || null
  );
};

// Helper: Add new course
export const addCourse = (newCourse) => {
  const courses = getCourses();
  const id =
    newCourse.id ||
    newCourse.title.toLowerCase().replace(/[^a-z0-9]/g, "-") +
      "-" +
      Date.now().toString().slice(-4);

  const formattedCourse = {
    ...newCourse,
    id,
    shortTitle: newCourse.shortTitle || newCourse.title.split(" ")[0],
    symbol: newCourse.symbol || "📚",
    gradient:
      newCourse.gradient || "linear-gradient(135deg, #179a37, #28a745)",
    badgeColor: newCourse.badgeColor || "#179a37",
    modules: newCourse.modules || [],
    lessonsCount: `${newCourse.modules?.reduce((acc, m) => acc + (m.lessons?.length || 0), 0) || 0} Lessons`,
    progress: 0,
    completedLessons: 0,
    isEnrolled: false,
    rating: 5.0,
    studentsCount: 1,
  };

  const updated = [formattedCourse, ...courses];
  saveCourses(updated);
  return formattedCourse;
};

// Helper: Update course
export const updateCourse = (id, updatedFields) => {
  const courses = getCourses();
  const index = courses.findIndex(
    (c) => String(c.id).toLowerCase() === String(id).toLowerCase()
  );
  if (index !== -1) {
    courses[index] = { ...courses[index], ...updatedFields };
    saveCourses(courses);
    return courses[index];
  }
  return null;
};

// Helper: Delete course
export const deleteCourse = (id) => {
  const courses = getCourses();
  const filtered = courses.filter(
    (c) => String(c.id).toLowerCase() !== String(id).toLowerCase()
  );
  saveCourses(filtered);
  return filtered;
};

// Helper: Toggle lesson completion
export const toggleLessonCompletion = (courseId, lessonId) => {
  const courses = getCourses();
  const course = courses.find(
    (c) => String(c.id).toLowerCase() === String(courseId).toLowerCase()
  );
  if (!course) return null;

  let totalCompleted = 0;
  let totalLessons = 0;

  course.modules?.forEach((module) => {
    module.lessons?.forEach((lesson) => {
      totalLessons++;
      if (lesson.id === lessonId) {
        lesson.completed = !lesson.completed;
      }
      if (lesson.completed) {
        totalCompleted++;
      }
    });
  });

  course.completedLessons = totalCompleted;
  course.progress =
    totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  saveCourses(courses);
  return course;
};

// Convert standard YouTube watch/share URLs to embed URLs
export const formatYouTubeEmbedUrl = (url) => {
  if (!url) return "https://www.youtube.com/embed/pQN-pnXPaVg";
  if (url.includes("youtube.com/embed/")) return url;

  const watchMatch = url.match(/[?&]v=([^&#]+)/);
  if (watchMatch && watchMatch[1]) {
    return `https://www.youtube.com/embed/${watchMatch[1]}`;
  }

  const shortMatch = url.match(/youtu\.be\/([^?&#]+)/);
  if (shortMatch && shortMatch[1]) {
    return `https://www.youtube.com/embed/${shortMatch[1]}`;
  }

  const liveMatch = url.match(/youtube\.com\/(?:live|shorts)\/([^?&#]+)/);
  if (liveMatch && liveMatch[1]) {
    return `https://www.youtube.com/embed/${liveMatch[1]}`;
  }

  return url;
};
