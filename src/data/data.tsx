import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header.jpg';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Hayk Simonyan',
  description: "Softarware Engineer's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Hayk Simonyan.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m a <strong className="text-stone-100">Full Stack Software Engineer</strong> from Armenia , currently working
        at <strong className="text-stone-100">EPAM</strong> to build modern, mobile-first solutions for clients around the world.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me <strong className="text-stone-100"> snowboarding</strong>,
        going <strong className="text-stone-100">horseback riding</strong>, or <strong className="text-stone-100">embarking
        on solo travels across Europe</strong>,
        or exploring beautiful{' '}
        <strong className="text-stone-100">Armenian mountains</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/CV-Hayk Simonyan.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
      download: true,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I’m a Full Stack Software Engineer with over 10 years of experience in both front-end and back-end development. My favorite technologies include JavaScript, React, Next.js, Nest.js, React Native, PostgreSQL, MongoDB, and Material UI. Beyond coding, I love exploring new ideas, solving complex problems, and staying up-to-date with industry best practices. `,
  aboutItems: [
    {label: 'Location', text: 'Yerevan, Armenia', Icon: MapIcon},
    {label: 'Age', text: '31', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Armenian', Icon: FlagIcon},
    {label: 'Interests', text: 'Snowboarding, Horse riding, Traveling', Icon: SparklesIcon},
    {label: 'Study', text: 'PhD in Chemical Engineering', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'EPAM', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 7,
      },
      {
        name: 'Russian',
        level: 9,
      },
      {
        name: 'Armenian',
        level: 10,
      },
    ],
  },
  {
    name: 'Coding Languages',
    skills: [
      {
        name: 'JavaScript',
        level: 10,
      },
      {
        name: 'Php',
        level: 6,
      },
      {
        name: 'Python',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 8,
      },
      {
        name: 'Next.js',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Nest.js',
        level: 8,
      },
      {
        name: 'PostgreSQL and MongoDB',
        level: 7,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2018',
    location: 'Yerevan, Armenia',
    title: 'PHD in State Engineering University of Armenia',
    content: <p>Chemical Engineerinh</p>,
  },
  {
    date: 'July 2016',
    location: 'Yerevan, Armenia',
    title: 'Master in NASRA',
    content: <p>Radio Engineering and Communication</p>,
  },
  {
    date: 'May 2014',
    location: 'Yerevan, Armenia',
    title: 'BACHELOR in State Engineering University of Armenia',
    content: <p>Radio Engineering and Communication</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Aug 2022 - Present',
    location: 'Epam Anywhere',
    title: 'Team Lead/Senior Software Engineer',
    content: (
      <p>
        <ul>
          <li>
            Creating UI library for company use
          </li>
          <li>
            Work with builder tools
          </li>
          <li>
            Create html editor from zero
          </li>
          <li>
            Next.js development and optimization
          </li>
        </ul>
      </p>
    ),
  },
  {
    date: 'December 2018 - August 2022',
    location: 'Betconstruct',
    title: 'Team Lead/Senior Software Engineer',
    content: (
        <p>
          <ul>
            <li>
              Creating UI library for company use
            </li>
            <li>
              Work on Gambling
            </li>
            <li>
              React sportsbook app performance optimization
            </li>
            <li>
              Work with builder tools
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'January 2017 - December 2018',
    location: 'ApolloBytes',
    title: 'Team Lead/Scrum Master',
    content: (
        <p>
          <ul>
            <li>
              Work on cloud fleet manager soft
            </li>
            <li>
              Work on Crypto Wallet
            </li>
            <li>
              Scrum methodology
            </li>
            <li>
              Legacy code refactoring
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'October 2013 - September 2016',
    location: 'Ucraft.com',
    title: 'Senior Software Developer',
    content: (
        <p>
          <ul>
            <li>
              Work on ucraft.com
            </li>
            <li>
              Work on drag and drop cms
            </li>
            <li>
              Work on betconstruct Single Sign On System
            </li>
            <li>
              Experience with React, Ember
            </li>
          </ul>
        </p>
    ),
  },
  {
    date: 'March 2012 - September 2013',
    location: 'Crossnet',
    title: 'Software Developer',
    content: (
        <p>
          <ul>
            <li>
              Work on IP PBX
            </li>
            <li>
              Local CRM
            </li>
            <li>
              User call cost calculation functional
            </li>
            <li>
              Experience with C# and Php
            </li>
          </ul>
        </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Grigor Avagyan',
      text: `I know Hayk for very long time and we did lots of projects together, his speed and professionalism always wondered me and not even talking about his work quality. Strongly recommend him!`,
      image: 'https://media.licdn.com/dms/image/v2/D4D03AQHLl-bPjSxoAA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1669643474476?e=1740614400&v=beta&t=HTPAOWxK_8gi-W_vAUNY9yUhFs8vOsJyWmaYatMNJu8',
    },
    {
      name: 'Levon Azizyan',
      text: `Hayk was one of key members and top level professionals in ApolloBytes FrontEnd team. I know him as a self-motivated, goal oriented and very hard-working employee. Personally, he is easy going and positive. I enjoyed the time working with him.`,
      image: 'https://media.licdn.com/dms/image/v2/C5603AQE26XpTJMMNWA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1548766765636?e=1740614400&v=beta&t=5liD7LTXWZHUllqvoSIOz5rrL90Tri5vvFTaZKx5FW0',
    },
    {
      name: 'Arthur Hakobyan',
      text: `Hayk is a strong professional, able to tackle on any task quickly, build a team and close colleagues to pursue ultimate goal. He was always ready to learn new techniques and use his own insight to improve the product.`,
      image: 'https://media.licdn.com/dms/image/v2/C4D03AQFQ13nXYObp3g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1573812049879?e=1740614400&v=beta&t=3SZP7sNmqrMS1nQP_yB-aS4qVEMKYPjgSalZbGJIK1c',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/hayksim1'},
  {label: 'Telegram', Icon: StackOverflowIcon, href: 'https://t.me/hayksim1'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/hayksim1'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/simonyanhayk'},
  {label: 'X', Icon: TwitterIcon, href: 'https://x.com/hayksim1'},
];
