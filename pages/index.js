import styles from '../styles/Main.module.css'
import Link from 'next/link'
import Head from 'next/head'

export default function Page() {

  function Header() {
    let introtext = "$ Portfolio"
    return (<header style={{marginBottom: "7rem"}}>
      <div id={styles.header}>
        <span id={styles.location}>{introtext}</span>
      </div>
    </header>)
  }


  function Project({ projectname, description, link, status, visibleLinks, responsibleHostingMsg }) {

    let statusicon
    if (status === "in development") {
      statusicon = (<div className={styles.statusContainer}><div></div><div className={`${styles.status} ${styles.statusDevelopment}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "stopped") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusStopped}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "running") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusRunning}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    } else if (status === "collaborating") {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusCollaborating}`}></div>  <span className={styles.statusHint}>{status}</span></div>)
    }
    else {
      statusicon = (<div className={styles.statusContainer}><div className={`${styles.status} ${styles.statusNone}`}></div>  <span className={styles.statusHint}>unknown</span></div>)
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

      {responsibleHostingMsg && (<div><br></br><span className='warning'>The following links are not hosted by me and I am not responsible for their availability.</span></div>)}
      {visibleLinks && (<div className={styles.projectLinks}>
        {visibleLinks.map((x) => (<Link target="_blank" rel="noopener" className={styles.projectLink} href={x}>{x}</Link>))}
      </div>)}
    </div>)
  }


  function CodeBlock({ command, nomargin }) {
    return (
      <div className={`codeBackground ${nomargin && "codeNoMargin"}`}>
        <span style={{color: "#00ff95"}}>➜&nbsp;</span><span style={{color: "#ff53ff"}}>~&nbsp;</span><span>{command}</span><div className='pointer'></div>
      </div>
    )
  }

  function LinkGithub() {
    return (
    <div style={{display: "grid", justifyContent: "center"}}>
      <a style={{margin: "auto"}} href="https://github.com/arch-user-france1" target="_blank" rel="noopener" title="GitHub"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
      <span>GitHub</span>
    </div>
    )
  }
  function LinkTelegram() {
    return (
    <div style={{display: "grid", justifyContent: "center"}}>
      <a style={{margin: "auto"}} href="https://t.me/Caramello5839" target="_blank" rel="noopener" title="Telegram"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
      <span>Telegram</span>
    </div>
    )
  }

  function Socials() {
    return (
      <div className={styles.socials}>
        <LinkGithub />
        <LinkTelegram />
      </div>
    )
  }

  function LinearGradientText({gr, children}) {
    return (<span className='lgText' style={{background: `linear-gradient(120deg, ${gr[0]},${gr[1]})`}}>{children}</span>)
  }

  return (
    <>
    <Head>
      <title>Portfolio - privacyy.ch</title>
      <meta name="description" content="Portfolio of a programmer that likes Javascript and builds websites with NextJS. Have a look at my projects."/>
    </Head>
      <Header></Header>


      <div>
      <h1 className="center heading">privacyy.ch</h1>
      <h3 className="center" style={{marginBottom: "3rem"}}>
      → <LinearGradientText gr={["#00ef2a", "#afec8a"]}>programming</LinearGradientText> as the <LinearGradientText gr={["#00e3ed", "#e76af1"]}>greatest hobby</LinearGradientText>
      </h3>
      </div>
      <CodeBlock command="contact" />
      <h4 className='center'>My <LinearGradientText gr={["#526af3", "#38a7f1"]}>GitHub</LinearGradientText> and <LinearGradientText gr={["#fe52b8", "#e589f0"]}>Telegram</LinearGradientText> profiles.</h4>
      <Socials />

      <CodeBlock command="projects" nomargin />
      <div className={styles.elevation}>
      <Project
      projectname="brainTrain" 
      description="A vocabulary trainer made with NextJS, Docker, Prisma DB, Mysql and NGINX. I've been working concentrated on it since December 2022." 
      status="running"
      link="https://braintrain.privacyy.ch/"
      visibleLinks={["https://vercel.privacyy.ch", "https://braintrain.privacyy.ch"]}
      ></Project>
      
      <Project
      projectname="Minecraft Server Scanner"
      description="Scans every IP for the port 25565 and checks if a Minecraft server is running there. Parses the Motd and stores it in a JSON file. Made for my friend, with finest python multiprocessing and multithreading."
      link="https://mcmotdsearch.obvtiger.ch"
      status="collaborating"
      visibleLinks={["https://mcmotdsearch.obvtiger.ch"]}
      responsibleHostingMsg={true}
      ></Project>

      <Project
      projectname="Wildlife Camera"
      description="Made with a Raspberry Pi, a night-vision camera and even a motion sensor. Captured images are sent to my server (Python) and then displayed on a NextJS website."
      status="in development"
      ></Project>

      <Project
      projectname="Portfolio"
      description="The source code can be found on my GitHub Repository."
      status="running"
      visibleLinks={["https://github.com/arch-user-france1/arch-user-france1"]}
      ></Project>

      <Project
      projectname="GoReverseProxy"
      description="A reverse proxy written in Go that respects simple Cache-Control max-age headers. Using Redis."
      ></Project>
      
      <Project
      projectname="ML Dog Detection"
      description="Checks an image for my dog. Might eventually build a website 'findMyDog'."
      ></Project>

      <Project 
      projectname="brainTrain (old)" 
      description="A vocabulary trainer made with Flask, Javascript and NGINX."
      status="stopped"
      link="https://theoldbraintrain.privacyy.ch/"
      visibleLinks={["https://theoldbraintrain.privacyy.ch", "https://github.com/arch-user-france1/python-brainTrain"]}
      ></Project>


      <Project
      projectname="MCAltChecker (stale)"
      description="AI written in Tensorflow (Python) to check if a Minecraft Account is cheating or not. The frontend developer lost interest (for the moment), however the AI guessed 75% correct on a small dataset of 100 players."
      status="collaborating"
      ></Project>

      <Project
      projectname="CLI pythonVocabularyTrainer (old)"
      description="My first attempt of writing a vocabulary trainer. Only worked in the Linux command-line-interface, but with colors to improve experience."
      status="stopped"
      link="https://github.com/arch-user-france1/brainTrain"
      visibleLinks={["https://github.com/arch-user-france1/brainTrain"]}
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