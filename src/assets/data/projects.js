import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';
import airtony from '../images/airtony.png';
import theFruits from '../images/the-fruits.png';
import ictTutor from '../images/ict-tutor.png';
import productAnalysis from '../images/product-analysis.png';
import convention from '../images/convention.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Airtony',
    desc:
      'An Air condition parts website where users can buy any parts. Firebase authentication used for login and signup. There have admin role and users role using CRUD operation & also payment method integration.',
    img: airtony,
    github: 'https://github.com/AbdullahAhmedKhan/airtony',
    githubServer: 'https://github.com/AbdullahAhmedKhan/airtony-server',
    liveSite: 'https://airtony-ef449.web.app/',
  },
  {
    id: uuidv4(),
    name: 'The Fruits',
    desc:
      'Its a website like warehouse of fruits. Here the managing inventories and re-stock, delivered and adding new item implemented. Our services and what our clients say shown in homepage.',
    img: theFruits,
    github: 'https://github.com/AbdullahAhmedKhan/the-fruits',
    githubServer: 'https://github.com/AbdullahAhmedKhan/the-fruits-server',
    liveSite: 'https://the-fruits.web.app/',
  },
  {
    id: uuidv4(),
    name: 'ICT Tutor',
    desc:
      'A project ICT Tutor where student can buy services and will learn about that. Here have four major services.A interesting blog page also included.cd cdLogin and registration authentication implemented.',
    img: ictTutor,
    github: 'https://github.com/AbdullahAhmedKhan/ict-tutor',
    liveSite: 'https://ict-tutor-a1a22.web.app/',
  },
  {
    id: uuidv4(),
    name: 'Product Analysis',
    desc:
      'In this website a product have been reviewed and some peoples reviewed of this product and given ratings.',
    img: productAnalysis,
    github: 'https://github.com/AbdullahAhmedKhan/product-analysis',
    liveSite: 'https://productanalysis.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Convention Center',
    desc:
      'Its a convention center landing webpage where have some sections. Their packages and some customers reviews displayed here.',
    img: convention,
    github: 'https://github.com/AbdullahAhmedKhan/convention-center',
    liveSite: 'https://dhaka-community-center.netlify.app',
  },
];

export default projects;
