const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://cjp-engr.github.io/portfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Carmen Joy Palsario',
  role: 'Aspiring Software Developer | Software QA Engineer',
  description:
    'Hi! I am currently working as a Software QA Engineer and looking forward' +
    ' on becoming part of the Software Development team. ' + 
    'Building applications and fixing bugs thrills me a lot. ' +
    'I am knowledgeable in Flutter and BloC as my state management solution.'+
    '\n\n'+
    'I am the type of person who wants to explore and learn anything about technologies. ',
  resume: 'https://drive.google.com/file/d/14Eka0Myg5b_n5mRhbZK3ASTpoIrm9AoI/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/carmenjoy/',
    github: 'https://github.com/cjp-engr',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Todo Application',
    description:
      'The app can help increase productivity, remember important things to do and prioritize tasks effectively.',
    stack: ['Flutter', 'Firebase'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-todo-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'News Application',
    description:
      'The app can display the latest news by category and search. The user can also check the current weather condition by searching the city. ',
    stack: ['Flutter', 'Firebase'],
    sourceCode: 'https://github.com/cjp-engr/cj-flutter-news-app-w-firebase',
    livePreview: 'https://github.com',
  },
  {
    name: 'Employee Management System Application',
    description:
      'Still in progress',
    stack: ['Flutter', 'MongoDB', 'NodeJS', 'ExpressJS'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'Java',
  'Flutter',
  'Python',
  'MongoDB',
  'Firebase',
  'Git',
  'CI/CD',
  'Rest API',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'engr.carmenjoy14@gmail.com',
}

export { header, about, projects, skills, contact }
