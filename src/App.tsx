import { useState } from 'react'
import styles from './App.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import patternDividerMobile from './assets/pattern-divider-mobile.svg'
import diceBtn from './assets/icon-dice.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>Advice # 101</h1>

      <div className={styles.quoteWrapper}>
        <FontAwesomeIcon icon={faQuoteLeft} className={styles.quoteIcon} />

        <span className={styles.quote}>
          It is easy to sit up and take notice, what's difficult is getting up and taking action.
        </span>

        <FontAwesomeIcon icon={faQuoteRight} className={styles.quoteIcon} />
      </div>

      <div className={styles.divider}>
        <img src={patternDividerMobile} alt="Pattern Divider" />
      </div>

      <button type="button" className={styles.diceBtn}>
        <img src={diceBtn} alt="Button" />
      </button>
    </main>
  )
}

export default App
