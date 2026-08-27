export const projects = [
  /*Planora Information */
  {
    slug: "planora",
    title: "Planora",
    category: "Full-Stack . Vibe-Coding.Saas",
    description:
      "A modern study planning platform vibe-coded and designed to help students organize their tasks, timetable, events and note in one place",
    coverImage: "/images/planora.png",
    technologies: ["React.js", "CSS", "Supabase"],
    stack: {
      frontend: "React.js, CSS, Javascript",
      backend: "Supabase, Postgressql",
      animation: "Framer-Motion",
    },
    challenges: [
      "One of the main challenges was communicating the exact UI and functionality I wanted through prompts. Initial outputs often needed several rounds of refinement before they matched the intended design.",
      "As the project grew, maintaining consistency across components required careful prompting around spacing, typography, responsiveness, and overall design.",
      "AI-generated code sometimes introduced incorrect assumptions or implementation details, so I had to understand, test, and debug the generated code rather than relying on it blindly.",
      "I also learned that breaking complex requirements into smaller and more specific prompts produced much better results than trying to describe the entire application at once.",
    ],

    learned: [
      "I learned how to write clearer and more structured prompts by providing context, constraints, examples, and expected behavior.",
      "I learned to treat AI as a development assistant rather than a replacement for understanding the code I was building.",
      "I learned that iteration is an important part of AI-assisted development. Testing, refining prompts, and reviewing the output repeatedly led to much better results.",
      "I learned how important it is to clearly define responsive behavior, component structure, and visual consistency when working with AI-generated interfaces.",
      "Most importantly, I learned that effective prompting is a technical skill that requires clear thinking, problem breakdown, and the ability to evaluate and improve generated solutions.",
    ],
    github: "https://github.com/EmmDevX/Planora-Website",
    live: "https://planora2026.vercel.app/",
  },
  /* MediVault Informaiton */
  {
    slug: "halaga",
    title: "Halaga Catering Website",
    category: "Front-End . Website Design",
    description:
      " A website designed for a prominent company that offers catering and events service",
    coverImage: "/images/halaga.png",
    technologies: [
      "Next.js",
      "Tailwind CSS"
    ],
    stack: {
      frontend: "Next.js, Tailwind CSS",
      animation: "Framer-Motion",
    },
    challenges: [],
    learned: [],
    github: "",
    live: "https://halaga-site.vercel.app/",
  },

  /*Velvet Cofee */

  {
    slug: "velvet",
    title: "Velvet Cofee",
    category: "front-end.Personal Project. Website",
    description:
      "A website designed for a coffee shop in order to improve their audience and bring productivity to them in the marketplace",
    coverImage: "/images/velvet.png",
    technologies: [
     "HTML",
     "CSS",
     "Javascript"
    ],
    stack: {
      frontend: "HTML, CSS, Javascript",
     
    },
    challenges: [],
    learned: [],
    github: "https://github.com/EmmDevX/La-Caret-Coffee",
    live: "https://la-caretcoffee.vercel.app/",
  },
];
