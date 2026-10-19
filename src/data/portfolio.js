// EDIT THIS FILE to update the whole site. Empty arrays hide their sections.
// Items marked TODO are placeholders: replace or delete them.
export const profile = {
  name: 'Ahmed Farooqui',
  title: 'Java Fullstack Developer | Java | React | SQL',
  intro: "I'm a final-year B.Tech student who enjoys turning ideas into working applications. I'm looking for an entry-level software role where I can keep learning and contribute from day one.",
  about: [
    "I'm a final-year B.Tech student interested in software development, databases and problem-solving. I like building practical applications end to end, from the database schema to the user interface.",
    "My projects have taught me to break big problems into small steps, read documentation, and keep going when something breaks. I'm eager to learn from an engineering team and build software people actually use.",
  ],
  email: 'farooquiahmed933@gmail.com', // TODO
  github: 'https://github.com/AhmedFarooqui0', // TODO
  linkedin: 'https://www.linkedin.com/in/profile1254/', // TODO
  photo: '/profile.jpg', // file in /public
  resume: '/Ahmed_Farooqui_Resume.pdf', // put your PDF in /public/resume.pdf
}
export const skills = {
  'Programming Languages': ['Java', 'JavaScript', 'SQL'],
  'Frontend Development': ['React.js', 'HTML5', 'CSS3'],
  'Backend Development': ['Node.js', 'Express.js'],
  Databases: ['Oracle Database', 'MongoDB','Mysql','Postgresql'],
  'Developer Tools': ['Git', 'GitHub','ecllipse','VS Code','Antigravity'], // TODO confirm
  'Core CS Concepts': ['Data structure','Software engineering','OOP'], // TODO e.g. Data Structures, DBMS, OOP, OS
}
export const projects = [
  { id: 'inventorypro', name: 'InventoryPro',
    problem: 'Small businesses lose track of stock across products, suppliers and warehouses.',
    description: 'An inventory management application for products, categories, stock tracking, suppliers and warehouses, backed by Oracle Database.',
    features: ['Product and category management', 'Stock tracking', 'Supplier and warehouse records', 'Database integration'],
    tech: ['React', 'JavaScript', 'Node.js', 'Express.js', 'Oracle Database'],
    github: 'https://github.com/AhmedFarooqui0/InventoryPro', live: '', image: '/inventory.png' }, // TODO add URLs + screenshot (e.g. /projects/inventorypro.png)
  { id: 'result-portal', name: 'Result Portal',
    problem: 'Businesses need one place to manage bookings, schedules and billing.',
    description: 'A web application covering booking management, calendar scheduling, session tracking, role-based access, subscription payments and business dashboards.',
    features: ['Booking management', 'Calendar scheduling', 'Session tracking', 'Role-based access', 'Subscription payments', 'Dashboards'], // TODO confirm each is complete
    tech: [], // TODO confirm
    github: '', live: 'https://result-portal-eta.vercel.app/', image: '/result.png' },
  { id: 'quiz-app', name: 'Software Quiz Application',
    problem: 'Learners need a simple way to test their software knowledge by topic.',
    description: 'A quiz application with a web frontend, Express.js backend and MongoDB. Categories, questions and score management are planned features.',
    features: ['Categories (planned)', 'Questions (planned)', 'Score management (planned)'], // TODO update as completed
    tech: ['Express.js', 'MongoDB'], github: 'https://github.com/AhmedFarooqui0/Quiz-Application-', live: 'https://quiz-application-topaz-seven.vercel.app/', image: '/quize.png' },
]
export const education = [
  { degree: 'B.Tech in Computer Science & Engineering', school: 'DR.Baba Saheb Ambedkar Technological University Lonere', year: '2026', // TODO
    coursework: [], highlights: [] },
]
// Internships, certifications, achievements. Leave empty to hide the section.
export const achievements = []
