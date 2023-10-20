import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { MdLightMode } from 'react-icons/md';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import deved from '../../public/dev-ed-wave.png';
import htmlLogo from '../../public/html.png';
import cssLogo from '../../public/css.png';
import jsLogo from '../../public/javascript.png';
import reactLogo from '../../public/react.png';
import nextLogo from '../../public/next.png';
import revit from '../../public/revit.png';
import autocad from '../../public/autocad.png';
import entreprise from '../../public/entrep.png';
import arcGIS from '../../public/arcgis.png';
import github from '../../public/github.png';

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState('english');
  const [active, setActive] = useState();
  const [sections, setSections] = useState([]);
  const [navLinks, setNavLinks] = useState([]);

  const toggleLanguage = () => {
    setLanguage((prevLanguage) =>
      prevLanguage === 'english' ? 'french' : 'english'
    );
  };

  const getTranslation = (englishText, frenchText) => {
    return language === 'english' ? englishText : frenchText;
  };

  const imgSource = [
    { imgSrc: htmlLogo, id: 1 },
    { imgSrc: cssLogo, id: 2 },
    { imgSrc: jsLogo, id: 3 },
    { imgSrc: reactLogo, id: 4 },
    { imgSrc: nextLogo, id: 5 },
    { imgSrc: revit, id: 6 },
    { imgSrc: autocad, id: 7 },
    { imgSrc: entreprise, id: 8 },
    { imgSrc: arcGIS, id: 9 },
    { imgSrc: github, id: 10 },
  ];

  useEffect(() => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    const handleScroll = () => {
      const offset = 150;
      const top = window.scrollY;

      sections.forEach((sec) => {
        const secTop = sec.offsetTop - offset;
        const secHeight = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= secTop && top < secTop + secHeight) {
          setActive(id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Welcome to my portfolio' />
        <meta name='keywords' content='portfolio, web development' />
        <meta name='author' content='Your Name' />
        <title>
          {getTranslation(
            'Welcome to my portfolio',
            'Bienvenue sur mon portfolio'
          )}
        </title>
      </Head>
      <header className='fixed w-full p-8 px-28 flex justify-between align-middle items-center bg-gray-100 dark:bg-gray-800 z-50'>
        <nav className=' w-full flex justify-between align-middle '>
          <h1 className='text-xl font-burtons dark:text-white'>
            {getTranslation(
              "Themer Saanouni's Portfolio",
              'Portfolio de Themer Saanouni'
            )}
          </h1>
          <nav className='w-1/3 flex justify-around'>
            <a
              onClick={() => {
                setActive('about');
              }}
              href='#about'
              className={
                active === 'about'
                  ? 'active text-teal-600 text-lg font-burtons dark:text-teal-600 duration-300'
                  : 'text-lg font-burtons dark:text-white'
              }
            >
              About
            </a>
            <a
              onClick={() => {
                setActive('skills');
              }}
              href='#skills'
              className={
                active === 'skills'
                  ? 'active text-teal-600 text-lg font-burtons dark:text-teal-600 duration-300'
                  : 'text-lg font-burtons dark:text-white'
              }
            >
              Skills
            </a>
            <a
              onClick={() => {
                setActive('projects');
              }}
              href='#projects'
              className={
                active === 'projects'
                  ? 'active text-teal-600 text-lg font-burtons dark:text-teal-600 duration-300'
                  : 'text-lg font-burtons dark:text-white'
              }
            >
              Projects
            </a>
          </nav>
          <ul className='flex items-center'>
            <li className='mr-3'>
              {darkMode ? (
                <MdLightMode
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className='hover:cursor-pointer dark:text-white text-2xl'
                />
              ) : (
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                  }}
                  className='hover:cursor-pointer dark:text-white text-2xl'
                />
              )}
            </li>
            <li className='cursor-pointer text-xl ml-4'>
              <span
                onClick={toggleLanguage}
                className='bg-gradient-to-r from-orange-500 to-orange-700 text-white p-1  rounded-md hover:cursor-pointer'
              >
                {language === 'english' ? 'FR' : 'EN'}
              </span>
            </li>

            <li className='cursor-pointer text-2xl '>
              <a
                href='#'
                className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8'
              >
                {getTranslation('Resume', 'Mon CV')}
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className='bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section id='about' className='min-h-screen pt-24'>
          <div className='text-center p-10'>
            <h2 className='text-7xl py-2 text-teal-600 font-medium '>
              {getTranslation(
                'Front-end developer, landsurveying and geomatics engineer',
                'Développeur Front-end, Ingénieur en topographie et géomatique'
              )}
              🚀🌐
            </h2>
            <p className='text-4xl py-10  dark:text-white'>
              {getTranslation(
                'As a Front-end Developer with a background in Land Surveying and Geomatics Engineering, I bring a unique blend of technical expertise and spatial awareness to the digital realm.',
                "En tant que développeur Front-end avec une formation en topographie et en génie géomatique, j'apporte une combinaison unique d'expertise technique et de sensibilité spatiale au domaine numérique."
              )}
            </p>
            <h3 className='text-2xl py-2 dark:text-white'>
              🚀
              {getTranslation(
                'Front-end Developer:',
                'Développeur Front-end :'
              )}
            </h3>
            <p className='text-lg py-5 leading-8 text-gray-800 dark:text-white'>
              {getTranslation(
                'With a passion for creating seamless and visually stunning web experiences, I specialize in translating design concepts into interactive and responsive user interfaces. Proficient in the latest web technologies, my goal is to elevate the user experience by combining creativity with functionality.',
                "                Avec une passion pour créer des expériences web fluides et visuellement impressionnantes, je me spécialise dans la traduction de concepts de design en interfaces utilisateur interactives et réactives. Maîtrisant les dernières technologies web, mon objectif est d'améliorer l'expérience utilisateur en associant créativité et fonctionnalité."
              )}
            </p>
            <h3 className='text-2xl py-2 dark:text-white'>
              🌐
              {getTranslation(
                'Geospatial Enthusiast:',
                'Passionné de géospatial:'
              )}
            </h3>
            <p className='text-lg py-5 leading-8 text-gray-800 dark:text-white'>
              {getTranslation(
                "As a trained Land Surveying and Geomatics Engineer, I have a deep understanding of spatial data and the power it holds. Whether it's integrating maps into web applications, leveraging geospatial technologies, or developing location-based solutions, I thrive on the intersection of technology and geography.",
                "En tant qu'ingénieur en topographie et géomatique formé, je possède une compréhension approfondie des données spatiales et de la puissance qu'elles renferment. Que ce soit en intégrant des cartes dans des applications web, en exploitant les technologies géospatiales, ou en développant des solutions basées sur la localisation, je prospère à l'intersection de la technologie et de la géographie."
              )}
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 h-70 text-gray-600'>
            <a
              href='https://tn.linkedin.com/in/themer-saanouni-2590a619a'
              target='_blank'
              rel='noopener noreferrer'
              className={`hover:cursor-pointer ${
                darkMode
                  ? 'text-white hover:text-teal-500 hover:text-[50px]'
                  : 'text-gray-600 hover:text-teal-500 hover:text-[50px]'
              }`}
            >
              <AiFillLinkedin />
            </a>
            <a
              href='https://github.com/Themer97'
              target='_blank'
              rel='noopener noreferrer'
              className={`hover:cursor-pointer ${
                darkMode
                  ? 'text-white hover:text-teal-500 hover:text-[50px]'
                  : 'text-gray-600 hover:text-teal-500 hover:text-[50px]'
              }`}
            >
              <AiFillGithub />
            </a>
          </div>
        </section>
        <section id='skills' className='min-h-screen pt-24'>
          <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden'>
            <Image
              alt='developer'
              src={deved}
              layout='fill'
              objectFit='cover'
            />
          </div>
          <div>
            <h3 className='text-3xl py-5 text-center dark:text-white'>
              {getTranslation(
                'Skills and knowledge:',
                'Compétences et connaissances:'
              )}
            </h3>
            <div className='grid grid-cols-5 gap-4 md:grid-cols-5 '>
              {imgSource.map((image) => (
                <div
                  className='relative mx-auto  rounded-full w-32 h-32 mt-10 overflow-hidden'
                  key={image.id}
                >
                  <Image
                    alt='developer'
                    src={image.imgSrc}
                    layout='fill'
                    objectFit='cover'
                  />
                </div>
              ))}
            </div>
            <p></p>
          </div>
          <div></div>
        </section>
      </main>
    </div>
  );
};

export default Index;
