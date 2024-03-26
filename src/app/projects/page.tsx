"use client"
import React from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const projects=[
    {
        id:"1",
        imageUrl:"/ojay.jpg",
        name:"Ojay",
        description:"Online Judge website, similar to codeforces, leetcode.",
        detailUrl:"",
    },
    {
        id:"2",
        imageUrl:"/food_vision.jpg",
        name:"Food Vision Big",
        description:"Food Vision Big beating the original paper.",
        detailUrl:"",
    },
    {
        id:"3",
        imageUrl:"/music_player.jpg",
        name:"Music Player using Tkinter",
        description:"Music Player using Tkinter",
        detailUrl:"",
    },
    {
        id:"4",
        imageUrl:"/sign_language.jpg",
        name:"Sign Language Recognition Model",
        description:"Sign-Language-Recognition-Model.",
        detailUrl:"",
    },
    {
        id:"5",
        imageUrl:"/nnn.jpg",
        name:"NNNote",
        description:"Note making site with CRUD operations.",
        detailUrl:"",
    },
    {
        id:"6",
        imageUrl:"/chrome_extensions.jpg",
        name:"Chrome-Extensions-using-JSON-and-APIs",
        description:"Chrome-Extensions-using-JSON-and-APIs.",
        detailUrl:"",
    },
]

const Projects = () => {
  return (
    <div className={styles.projectss}>
        <p className={styles.heading}>Projects</p>
        <p className={styles.subheading}>A selection of projects I worked on in the past few years.</p>
        <div className={styles.container}>
            {projects.map((project, index) => (
                <div className={styles.card} key={project.id}>
                    <Image
                    src={project.imageUrl}
                    alt={project.name}
                    width={500} 
                    height={300}
                    className={styles.image}
                    />
                    <h3 className={styles.title}>{project.name}</h3>
                    <p className={styles.description}>{project.description}</p>
                    <button className={styles.button} onClick={() => window.location.href = project.detailUrl}>
                        View Details
                    </button>
                </div>
            ))}
    </div>
    <div className={styles.scrollPrompt}>
        <span className={styles.scrollText}>Scroll</span>
        <FontAwesomeIcon icon={faArrowDown} className={styles.scrollArrow} />
    </div>
    </div>
  );
};

export default Projects;
