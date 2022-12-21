const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cjp-engr.github.io/cjp-portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Carmen Joy Palsario',
  role: 'Flutter Developer | Software QA Engineer',
  description:
    'As a Flutter Developer and Software QA Engineer, I have a strong knowledge in software development ' +
    'and a passion for delivering high-quality products. My experience with Flutter has allowed me to ' +
    'create cross-platform mobile applications with a native feel, and my skills in software QA have equipped me ' +
    'with the ability to thoroughly test and debug software to ensure it meets all requirements and performs optimally.',
  resume: 'https://drive.google.com/file/d/1IJ8c0mJgD5Z9O6wPz_yebnYmov7bNmna/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/carmen9696/',
    github: 'https://github.com/cjp-engr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Todo Application',
    description:
      'It can help increase productivity, remember important things to do and prioritize tasks effectively.',
    stack: ['Flutter', 'Firebase'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-todo-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'News Application',
    description:
      'It can display the latest news by category and search. The user can also check the current weather condition by searching the city. ',
    stack: ['Flutter', 'Firebase'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-news-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'Employee Mgmt. System Application',
    description:
      'It allows employees to easily clock in and out of their shifts. They can also view their ' +
      'attendance records and salary information in real-time, helping them to stay organized and informed.',
    stack: ['Flutter', 'MongoDB', 'NodeJS', 'ExpressJS'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-ems-w-mongoDB',
    livePreview: 'https://github.com',
  },
  {
    name: 'Automated Sauce Demo Application using Cypress.io',
    description:
      'The automated shopping application utilizes the Cypress automation framework to streamline ' +
      'the online shopping experience.',
    stack: ['Cypress', 'TypeScript'],
    sourceCode: 'https://github.com/cjp-engr/cj-cypress-swag-labs',
    livePreview: 'https://github.com',
  },
  {
    name: 'Automated Online Shopping Application using Cypress.io',
    description:
      'The Cypress framework allows for fast and reliable testing of the application, ensuring ' +
      'that it is functioning properly and providing a seamless experience for real users.',
    stack: ['Cypress', 'TypeScript'],
    sourceCode: 'https://github.com/cjp-engr/cj-cypress-shopping-app',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Java',
  'Flutter & Dart',
  'Python',
  'MongoDB',
  'Firebase',
  'Git',
  'CI/CD',
  'Rest API',
  'Cypress',
  'JavaScript',
  'TypeScript'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'carmenjoyp96@gmail.com',
}

export { header, about, projects, skills, contact }
