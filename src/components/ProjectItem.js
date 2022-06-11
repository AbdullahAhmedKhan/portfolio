/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ProjectImg from '../assets/images/projectImg.png';
import ProjectDetails from './ProjectDetails';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 3rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .text-link {
    color: #80c6f1;
    margin-right: 15px;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  id = '1',
  img = ProjectImg,
  title = 'Project Name',
  github = 'Github link',
  liveSite = 'Live Link',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
  function handleDetails() {
    console.log({ title });
    const name = { title };
    if ({ title } === 'Airtony') {
      console.log('equal');
      <ProjectDetails
        title={title}
        desc={desc}
        img={img}
        github={github}
        liveSite={liveSite}
      />;
      <ProjectDetails />;
    } else {
      console.log('false');
    }
  }
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <p className="projectItem__desc">
          <a className="text-link" href={github} target="_blank">
            GITHUB
          </a>
          <a className="text-link" href={liveSite} target="_blank">
            Live Preview
          </a>
          <Link className="text-link" onClick={handleDetails}>
            Details
          </Link>
        </p>
      </div>
    </ProjectItemStyles>
  );
}
