import styles from '../styles/Main.module.css'

export default function Page() {

  function Head() {
    let introtext = "/Portfolio"
    return (<header style={{marginBottom: "7rem"}}>
      <div id={styles.header}>
        <span id={styles.location}>{introtext}</span>
      </div>
    </header>)
  }


  function Project({ projectname, description, link }) {
    return (<div className={styles.project}>
      <h2>
        <a href={link}>
        {projectname}
        </a>
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


  return (
    <>
      <Head></Head>


      <div>
      <h1 className="center">privacyy.ch</h1>
      <h3 className="center" style={{marginBottom: "3rem"}}>→ programming as the greatest hobby</h3>
      </div>

      <CodeBlock command="./projects" />
      <Project 
      projectname="brainTrain" 
      description="A vocabulary trainer made with NextJS, Docker and NGINX." 
      link="https://privacyy.ch/"></Project>
      <Project 
      projectname="brainTrain (old)" 
      description="A vocabulary trainer made with Flask, Javascript and NGINX."
      link="https://braintrain.privacyy.ch/"></Project>

      <Project
      projectname="MCAltChecker (stale)"
      description="AI written in Tensorflow (Python) to check if a Minecraft Account is cheating or not. The frontend developer lost interest, however the AI guessed 75% correct on a small dataset of 100 players."
      ></Project>

      <Project
      projectname="CLI PythonVocabularyTrainer (old)"
      description="My first attempt of writing a vocabulary trainer. Only worked in the Linux command-line-interface, but with colors to improve experience."
      ></Project>

      <Project
      projectname="Nextcloud"
      description="administration of public self-hosted Nextcloud (discontinued)"
      ></Project>
    </>
  )


}