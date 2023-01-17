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
  resume: 'https://drive.google.com/file/d/1pFrE8epen6tZnOXLKST5f8BrD5l6WPkU/view?usp=share_link',
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
      'It helps increase productivity, remember important things to do and prioritize tasks effectively.',
    stack: ['Flutter', 'Firebase', 'BLoC'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-todo-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'News Application',
    description:
      'It displays the latest news by category or by search. The user can also check the current weather condition by searching the city. ',
    stack: ['Flutter', 'Firebase', 'BLoC'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-news-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'Employee Mgmt. System Application',
    description:
      'It allows employee to perform variety of tasks such as clocking in and clocking out, check the attendance and number of hours work per day.',
    stack: ['Flutter', 'MongoDB', 'NodeJS', 'ExpressJS', 'BLoC'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-ems-w-mongoDB',
    livePreview: 'https://github.com',
  },
  {
    name: 'First Automated Online Shopping Application using Cypress.io',
    description:
      'Used Cypress.io framework to automate the test scripts. It refreshed my knowledge on using the tool.',
    stack: ['Cypress', 'TypeScript'],
    sourceCode: 'https://github.com/cjp-engr/cj-cypress-swag-labs',
    livePreview: 'https://github.com',
  },
  {
    name: 'Second Automated Online Shopping Application using Cypress.io',
    description:
      'Used Cypress.io framework and TypeScript as a programming language to automate the test scripts.',
    stack: ['Cypress', 'TypeScript'],
    sourceCode: 'https://github.com/cjp-engr/cj-cypress-askomdch',
    livePreview: 'https://github.com',
  },
  {
    name: 'Todo Application with Clean Architecture',
    description:
      'Coming soon. To be implemented with clean architecture. Clean architecture has several advantages including separation of concerns and modularity.',
    stack: ['Flutter', 'Firebase', 'Dependency Injection', 'BLoC'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-todo-clean-architecture',
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
