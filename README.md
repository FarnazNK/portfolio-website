# Portfolio Website

A modern, responsive portfolio website built with React, featuring interactive particle backgrounds and a clean, professional design.

## Project Structure

```
src/
├── assets/
│   ├── images/
│   │   └── me.jpg
│   └── styles/
│       └── global.css
├── components/
│   ├── layout/
│   │   ├── Footer.js
│   │   ├── Navbar.js
│   │   └── ParticlesBackground.js
│   ├── common/
│   │   ├── ContactCard.js
│   │   ├── ProjectCard.js
│   │   ├── SkillCard.js
│   │   └── TimelineItem.js
│   ├── home/
│   │   ├── Hero.js
│   │   ├── ProjectHighlights.js
│   │   ├── SkillsSnapshot.js
│   │   ├── ExperienceSnapshot.js
│   │   └── CallToAction.js
│   ├── about/
│   │   ├── ProfileSection.js
│   │   └── CoreStrengths.js
│   ├── resume/
│   │   └── Experience.js
│   ├── portfolio/
│   │   ├── PortfolioHeader.js
│   │   └── ToolSection.js
│   └── contact/
│       ├── ContactForm.js
│       └── ContactMethods.js
├── pages/
│   ├── AboutPage.js
│   ├── ContactPage.js
│   ├── HomePage.js
│   ├── PortfolioPage.js
│   ├── ResumePage.js
│   └── SkillsPage.js
├── utils/
│   └── particles-config.js
├── App.js
└── index.js
```

## Features

- **Interactive Particle Background**: Dynamic particle animations for visual appeal
- **Responsive Design**: Optimized for all device sizes
- **Multi-page Navigation**: Dedicated pages for About, Portfolio, Resume, Skills, and Contact
- **Modular Components**: Reusable components organized by functionality
- **Professional Layout**: Clean, modern design with smooth transitions

## Component Architecture

### Layout Components
- **Navbar**: Main navigation with smooth scrolling
- **Footer**: Site footer with contact information
- **ParticlesBackground**: Interactive particle system

### Common Components
- **ContactCard**: Reusable contact information display
- **ProjectCard**: Portfolio project showcase cards
- **SkillCard**: Individual skill presentation
- **TimelineItem**: Experience timeline elements

### Page-Specific Components
- **Home**: Hero section, project highlights, skills snapshot, and call-to-action
- **About**: Profile section and core strengths
- **Portfolio**: Portfolio header and tool sections
- **Resume**: Professional experience display
- **Contact**: Contact form and methods

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Available Scripts

#### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Customization

### Particle Configuration
Modify `src/utils/particles-config.js` to customize the particle background effects.

### Styling
Global styles are located in `src/assets/styles/global.css`. Component-specific styles can be added to individual components.

### Content
Update the content in each page component to reflect your personal information, projects, and experience.

## Deployment

The build folder can be deployed to any static hosting service such as:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

See the Create React App [deployment documentation](https://facebook.github.io/create-react-app/docs/deployment) for detailed instructions.

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)

## Additional Resources

### Code Splitting
[https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing Bundle Size
[https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App
[https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration
[https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Troubleshooting
[https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
