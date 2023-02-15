import styles from '../styles/Main.module.css'
import Link from 'next/link'

export default function Page() {

  function Head() {
    let introtext = "$ Portfolio"
    return (<header style={{marginBottom: "7rem"}}>
      <div id={styles.header}>
        <span id={styles.location}>{introtext}</span>
      </div>
    </header>)
  }


  function Project({ projectname, description, link, status }) {

    let statusicon
    if (status === "in development") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusDevelopment}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "stopped") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusStopped}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "running") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusRunning}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "collaborating") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusCollaborating}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    }

    
    else {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusNone}`}></div></div>)
    }

    return (<div className={styles.project}>
      <h2 className={styles.projectTitle}>
        {link ? (<Link target="_blank" rel="noopener" href={link}>
        {projectname}
        </Link>) : (<a>{projectname}</a>)}
        <div>
        {statusicon}
        </div>
      </h2>

      <span>{description}</span>
    </div>)
  }


  function CodeBlock({ command }) {
    return (
      <div className='codeBackground'>
        <span style={{color: "#00ff95"}}>{"➜  ~"}&nbsp;</span><span>{command}</span><div className='pointer'></div>
      </div>
    )
  }

  function LinkGithub() {
    return (<a href="https://github.com/arch-user-france1" target="_blank" rel="noopener" title="Github"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>)
  }
  function LinkTelegram() {
    return (<a href="https://t.me/Caramello5839" target="_blank" rel="noopener" title="Telegram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>)
  }

  function Socials() {
    return (
      <div className={styles.socials}>
        <LinkGithub />
        <LinkTelegram />
      </div>
    )
  }


  return (
    <>
      <Head></Head>


      <div>
      <h1 className="center">privacyy.ch</h1>
      <h3 className="center" style={{marginBottom: "3rem"}}>→ programming as the greatest hobby</h3>
      </div>
      <CodeBlock command="cat social.txt" />
      <Socials />
      <span></span>

      <CodeBlock command="./projects" />
      <div className={styles.elevation}>
      <Project
      projectname="Portfolio"
      description="Here I introduce myself. Scroll down to see more projects."
      ></Project>
      <Project
      projectname="brainTrain" 
      description="A vocabulary trainer made with NextJS, Docker and NGINX." 
      status="running"
      link="https://privacyy.ch/"></Project>
      
      <Project
      projectname="Minecraft Server Scanner"
      description="Scans every IP for the port 25565 and checks if a Minecraft server is running there. Parses the Motd and stores it in a JSON file. Made for my friend, with finest python multiprocessing and multithreading."
      link="https://github.com/obvtiger"
      status="collaborating"
      ></Project>

      <Project
      projectname="Wildlife Camera"
      description="Made with a Raspberry Pi, a night-vision camera and even a motion sensor. Captured images are sent to my server (WIP) and then displayed on a NextJS website."
      status="in development"
      ></Project>

      <Project 
      projectname="brainTrain (old)" 
      description="A vocabulary trainer made with Flask, Javascript and NGINX."
      status="stopped"
      link="https://braintrain.privacyy.ch/"
      ></Project>


      <Project
      projectname="MCAltChecker (stale)"
      description="AI written in Tensorflow (Python) to check if a Minecraft Account is cheating or not. The frontend developer lost interest, however the AI guessed 75% correct on a small dataset of 100 players."
      status="collaborating"
      ></Project>

      <Project
      projectname="CLI pythonVocabularyTrainer (old)"
      description="My first attempt of writing a vocabulary trainer. Only worked in the Linux command-line-interface, but with colors to improve experience."
      status="stopped"
      ></Project>

      <Project
      projectname="Nextcloud"
      description="administration of a public self-hosted Nextcloud (discontinued)"
      status="stopped"
      ></Project>
      </div>
    </>
  )


}