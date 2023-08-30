import { useEffect, useState } from 'preact/hooks'
import Card from './components/Card'
import fetchRandomChampions from './data/fetchRandomChampions'
import Score from './components/header/Score'
import Logo from './components/header/Logo'
import shuffle from './utils/shuffle'
import emptyStringArray from './utils/emptyStringArray'
import GameOver from './components/GameOver'
import Spinner from './components/Spinner'

export function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cards, setCards] = useState(new Array<Champion>(10))
  const [clickedCards, setClickedCards] = useState(emptyStringArray())
  // const [isGameRunning, setIsGameRunning] = useState(false)
  const [playerWon, setPlayerWon] = useState(false)
  const [dialogVisible, setDialogVisible] = useState(false)
  const [wins, setWins] = useState(0)
  const [flushCards, setFlushCards] = useState(true)
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    async function generateCards() {
      console.info('Reloading cards...')
      const arr = await fetchRandomChampions(10)
      setCards(arr)
    }
    if (flushCards) {
      console.log('Starting new game in 1 second...')
      setShowSpinner(true)
      setTimeout(() => {
        setFlushCards(false)
        setPlayerWon(false)
        setDialogVisible(false)
        generateCards()
        setShowSpinner(false)
      }, 1000);
    }
  }, [flushCards])

  function addScore() {
    const newScore = score + 1
    setScore(newScore)
    if (newScore > bestScore) {
      setBestScore(newScore)
    }
  }

  function handleCards(currentHits: number) {
    if (currentHits == cards.length) {
      console.log('You won!')
      // handle win
      handleGameOver(true)
    } else {
      setCards((cards) => shuffle(cards))
    }
  }

  function handleGameOver(win: boolean) {
    if (win) {
      const newWins = wins + 1
      setWins(newWins)
      setPlayerWon(true)
      console.log(`You won ${newWins} times!`)
    } else {
      console.log('You lost!')
      // handle game over
      setPlayerWon(false)
      setScore(0)
    }
    setClickedCards([])
    setDialogVisible(true)
  }

  function handleRestart() {
    console.log('restart clicked')
    setScore(0)
    setFlushCards(true)
  }

  function handleContinue() {
    console.log('continue clicked')
    setFlushCards(true)
  }

  function handleClickCard(key: string) {
    if (clickedCards.includes(key)) {
      handleGameOver(false)
    } else {
      const newClickedCards = [...clickedCards, key]
      setClickedCards(newClickedCards)
      addScore()
      handleCards(newClickedCards.length)
      console.log(`hit: ${newClickedCards.length}, total: ${cards.length}`)
    }
  }

  return (
    <>
      <GameOver win={playerWon} visible={dialogVisible} onRestart={handleRestart} onContinue={handleContinue} />
      <header class={`absolute grid grid-flow-col top-0 left-0 z-10 bg-black w-screen grid-cols-2 grid-rows-1 h-20 text-slate-200 font-poppins antialiased place-items-center`}>
        <Logo />
        <Score current={score} best={bestScore} />
      </header>
      <section class={`text-center align-middle max-w-6xl z-0`}>
        {showSpinner ? (
          <Spinner />
        ) : null}
        {showSpinner ? (<div class={'w-screen h-[500px]'}></div>) : cards.map((champ: Champion) => {
          return (
            <Card c_key={champ.c_key} name={champ.name} image={champ.image} handleClick={handleClickCard} />
          )
        })}
      </section>
    </>
  )
}
