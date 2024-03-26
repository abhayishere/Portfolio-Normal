'use client'

import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone,faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h1 className={styles.titlemain}>Abhay Yadav</h1>
                <div className={styles.profileCard}>
                <div className={styles.avatarWrapper}>
                    <img className={styles.pfp} src={"/profile.jpg"}></img>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>Full Stack Developer</p>
                    <p className={styles.company}>@HDFC Bank</p>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.emailLink}>
                            <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
                        </a>
                        <a href="https://www.linkedin.com/in/abhay-yadav-754899135/" className={styles.linkedinLink}>
                            <FontAwesomeIcon className={styles.icon} icon={faLinkedinIn} />
                        </a>
                        <a href="#" className={styles.twitterLink}>
                            <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
                        </a>
                    </div>
                </div>
                </div>
                <p className={styles.bio}>
                    I&apos; m Abhay Yadav, an alumnus of the prestigious Indian Institute of Technology Jammu, where I honed my skills in Electrical Engineering and explored my passion for Computer Science. My academic journey, underscored by a blend of rigorous education and commendable achievements, laid the foundation for my career in technology. At HDFC Bank, I played a key role in enhancing the fund transfer module of the mobile banking app, leveraging my expertise in Golang and data analysis with GCP BigQuery. Beyond professional pursuits, I contributed to a meaningful project on Indian Sign Language at IIT Jammu, showcasing my commitment to leveraging technology for social good. My journey has been about continuously learning, innovating, and applying my knowledge to solve real-world problems, always striving to make a significant impact through technology.
                </p>
                <div className={styles.contact}>
                    <p>+91 7521803472 | <a href="mailto:abhyadav1@gmail.com">abhyadav1@gmail.com</a> | <a href="https://www.linkedin.com/in/abhay-yadav-754899135/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
                </div>
                <ul className={styles.links}>
                    <li className={styles.lili}><a href="#experience">💼 Experience</a></li>
                    <li className={styles.lili}><a href="#education">🎓 Education</a></li>
                    <li className={styles.lili}><a href="#skills">🤹🏼‍♂️ Skills</a></li>
                    <li className={styles.lili}><a href="#achievements">🏐 Achievements</a></li>
                </ul>
                <div className={styles.section} id="education">
                    <h2>Education</h2>
                    <h3>Indian Institute of Technology Jammu</h3>
                    <code>2019 - 2023</code>
                    <p> B.Tech in Electrical Engineering(Major), Computer Science Engineering(Minor)</p>
                </div>
                <div className={styles.section} id="experience">
                    <h2>Experience</h2>
                    <p className={styles.h3}>Backend Developer @HDFC Bank</p>
                    <code>June 2023 - Present</code>
                    <ul className={styles.details}>
                        <li className={styles.lili}>Contributed to the backend development for the mobile banking app&lsquo;s fund transfer module.</li>
                        <li className={styles.lili}>Developed a Proof of Concept (POC) using gofpdf to automate the filling of third-party funds transfer application forms.</li>
                        <li className={styles.lili}>Leveraged GCP BigQuery for in-depth data analysis and log examination.</li>
                    </ul>
                </div>
                <div className={styles.section} id="skills">
                    <h2>Technical Skills</h2>
                    <ul className={styles.details}>
                        <li className={styles.lili}><strong>Programming Languages</strong> : Golang, C++, Java, Python, VHDL, JavaScript, HTML/CSS</li>
                        <li className={styles.lili}><strong>Web Development</strong> : React.js, Next.js, Bootstrap, Node.js, Express, SpringBoot</li>
                        <li className={styles.lili}><strong>Tools and Platforms</strong> : Git, VS Code, Eclipse, Matlab, Docker, podman, GCP, BigQuery</li>
                    </ul>
                </div>
                <div className={styles.section} id="achievements">
                    <h2>Achievements</h2>
                    <ul className={styles.details}>
                        <li className={styles.lili}>Ranked 528th in ICPC Amritapuri 2020 Regionals.</li>
                        <li className={styles.lili}>Ranked 1st in CodeRush organized by Algo University for IIT Jammu.</li>
                        <li className={styles.lili}>Under top 4.72 percentage on leetcode, with maximum rating of 1868.</li>
                        <li className={styles.lili}>Qualified Gate 2023 with Score of 442.</li>
                        <li className={styles.lili}>Specialist at Codeforces, and rated 1600+ at Codechef.</li>
                        <li className={styles.lili}>Guided the Electrical Engineering team as a captain in Pravaah, an intra-college sports event of IIT Jammu.</li>
                    </ul>
                </div>
          </div>
          <div className={styles.scrollPrompt}>
                <span className={styles.scrollText}>Scroll</span>
                <FontAwesomeIcon icon={faArrowDown} className={styles.scrollArrow} />
            </div>
        </section>
      );
  };
  
  export default About;
  