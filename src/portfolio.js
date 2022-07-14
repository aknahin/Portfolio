const header = {
    // all the properties are optional - can be left empty or deleted
    homepage: '/',
    title: 'AK.',
  }
  
  const about = {
    // all the properties are optional - can be left empty or deleted
    name: 'AK Nahin',
    role: 'Front End Engineer',
    description:
      'With years of experience in graphic and web design I have mastered the skills of understanding client requirements according to the latest trends. I have worked with businesses from different niches so you can rely on me for yours.\nI’ve spent most of these years working across different areas of design like front-end development, landing pages, email design, and On-page SEO. Having worked on various projects that are already live, I can help you with the best possible suggestions and ideas that we can proceed with. With me, you aren’t forced to accept anything. I give you a variety of options we can work on together.',
    resume: 'https://aknahin.com',
    social: {
      linkedin: 'https://www.linkedin.com/in/aknahin/',
      github: 'https://github.com/aknahin',
    },
  }
  
  const projects = [
    // projects can be added an removed
    // if there are no projects, Projects section won't show up
    {
      name: 'Personal Portfolio',
      description:
        'A front end web developer portfolio for my self. Simple and clean design.',
      stack: ['React'],
      sourceCode: 'https://github.com/aknahin',
      livePreview: 'https://aknahin.github.com',
    },
  ]
  
  const skills = [
    // skills can be added or removed
    // if there are no skills, Skills section won't show up
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'WordPress',
    'Wix',
    'Squarespace',
    'Shopify',
    'Python',
  ]
  
  const contact = {
    // email is optional - if left empty Contact section won't show up
    email: 'nahin@aknahin.com',
  }
  
  export { header, about, projects, skills, contact }
  