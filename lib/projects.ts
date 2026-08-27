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
    technologies: ["Next.js", "Tailwind CSS"],
    stack: {
      frontend: "Next.js, Tailwind CSS",
      animation: "Framer-Motion",
    },
    challenges: [
      "One of the main challenges was translating a catering business's services and brand into a website that felt visually appealing while still being clear and easy to navigate.",
      "Creating a responsive layout required careful attention to spacing, image sizing, typography, and section structure across different screen sizes.",
      "Presenting multiple catering services in a way that was easy for visitors to understand without making the interface feel crowded required several design iterations.",
      "Working with large food and event images also required finding the right balance between visual quality, page layout, and overall performance.",
    ],
    learned: [
      "I learned how to approach web design from a user's perspective and think about what information they need first.",
      "I improved my skills in responsive layouts, visual hierarchy, typography, and working with images.",
      "I learned that a good business website is not just about making something visually attractive; it should clearly communicate the brand and guide users toward taking action.",
      "Halaga taught me how to combine design and functionality to create a more complete real-world web experience.",
    ],
    github: "https://github.com/EmmDevX/Halaga-Website",
    live: "#",
  },

  /*Velvet Cofee */

  {
    slug: "velvet",
    title: "Velvet Coffee",
    category: "front-end.Personal Project. Website",
    description:
      "A website designed for a coffee shop in order to improve their audience and bring productivity to them in the marketplace",
    coverImage: "/images/velvet.png",
    technologies: ["HTML", "CSS", "Javascript"],
    stack: {
      frontend: "HTML, CSS, Javascript",
    },
    challenges: [
      "Understanding how HTML structure and CSS styling work together was one of my first challenges, especially when building different sections of the website from scratch.",
      "Getting the layout to look consistent across different screen sizes required a lot of trial and error with CSS properties such as flexbox, spacing, positioning, and sizing.",
      "I initially struggled with positioning elements exactly where I wanted them and understanding why certain CSS rules were affecting other parts of the page.",
      "Making the design match my original idea taught me that small details such as spacing, typography, alignment, and proportions can have a big impact on the final result.",
    ],
    learned: [
      "I learned the fundamentals of structuring web pages with semantic HTML and styling them with CSS.",
      "I developed a better understanding of Flexbox, spacing, positioning, typography, and responsive layouts.",
      "I learned how to break a design into smaller sections and build each part step by step instead of trying to create the entire page at once.",
      "I became more comfortable debugging CSS by testing different properties and understanding how they affect the layout.",
      "Most importantly, Velvet gave me a strong foundation in HTML and CSS and helped build my confidence to move on to more advanced frontend technologies.",
    ],
    github: "https://github.com/EmmDevX/La-Caret-Coffee",
    live: "https://la-caretcoffee.vercel.app/",
  },
];
