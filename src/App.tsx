import { useEffect, useState } from 'react'
import styles from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import diceBtn from './assets/icon-dice.svg'

function App() {
  const [currentAdvice, setCurrentAdvice] = useState({
    id: 0,
    advice: "Loading..."
  })

  useEffect(() => {
    getNewAdvice()
  }, [])

  const getNewAdvice = async () =>{
    const adviceId = 100 + Math.floor(Math.random() * 100) + 1

    try{
      const res = await fetch(`https://api.adviceslip.com/advice/${adviceId}`)
      const json = await res.json()

      setCurrentAdvice(json.slip)
    }catch(err){
      console.log(err)
    }
  }

  return (
    <>
      <main className={styles.wrapper}>
        <h1 className={styles.title}>{`Advice # ${currentAdvice.id}`}</h1>

        <div className={styles.quoteWrapper}>
          <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />

          <span className={styles.quote}>
            {currentAdvice.advice}
          </span>

          <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
        </div>

        <div className={styles.divider}></div>

        <button type="button" className={styles.diceBtn} onClick={() => getNewAdvice()}>
          <img src={diceBtn} alt="Button" />
        </button>
      </main>
      <div className={styles.attribution}>
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="#">Altan Alaca</a>.
      </div>
    </>
  )
}

export default App
