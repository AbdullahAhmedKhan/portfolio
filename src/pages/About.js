import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/abdullah_formal.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Abdullah Ahammed Khan</span>
              </p>
              <h2 className="about__heading">
                A
                <Typical
                  steps={[
                    'Frontend Developer',
                    2000,
                    'MERN Stack Developer',
                    2000,
                    'Full Stact Developer',
                    2000,
                  ]}
                  loop={Infinity}
                  wrapper="p"
                />
              </h2>

              <div className="about__info">
                <PText>
                  I am from Dhaka, Bangladesh. Since my childhood, I love game
                  and design. I always try to design stuff with my unique point
                  of view. I also love to create things that can be usefull to
                  others.
                  <br /> <br />
                  I started coding since I was in high school. Coding is also an
                  art for me. I love it and now I have the opportunity to design
                  along with the coding. I find it really interesting and I
                  enjoyed the process a lot.
                  <br />
                  <br />
                  My vision is to play a role in technology which can make a
                  better world. Now almost everything is becoming better than
                  ever. It is time for us to create more good stuff that helps
                  the world to become a better place.
                </PText>
              </div>
              <Button btnText="Download CV" btnLink="#" />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>
              <AboutInfoItem
                title="B.Sc in CSE"
                items={[
                  'Green University of Bangladesh(2018-2021)',
                  'International Islamic University Chittagong(2017-2018)',
                ]}
              />
              <AboutInfoItem
                title="HSC"
                items={['Bijoy Smarani University College(2014-2015)']}
              />
              <AboutInfoItem
                title="SSC"
                items={['Madam Bibir Hat Shahjahan High School']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="Expertise"
                items={[
                  'HTML,CSS',
                  'JavaScript(ES6)',
                  'REACT',
                  'React Query',
                  'REST API',
                ]}
              />
              <AboutInfoItem
                title="Comfortable"
                items={['Mongodb', 'Express', 'C']}
              />
              <AboutInfoItem
                title="Familiar"
                items={['Node', 'TypeScript', 'Next Js']}
              />
              <AboutInfoItem
                title="CSS Libraries"
                items={['Bootstrap', 'Tailwind CSS', 'DaisyUI']}
              />
              <AboutInfoItem
                title="Tools"
                items={['Firebase', 'Figma', 'Github', 'Netlify', 'Heroku']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Professional Training</h1>

              <AboutInfoItem
                title="2022"
                items={['Complete Web Developing(Programming hero)']}
              />
              <AboutInfoItem
                title="2021"
                items={['Responsive Web Design(Coderstrust Bangladesh)']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
