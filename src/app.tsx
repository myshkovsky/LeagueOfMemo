import { useEffect, useState } from 'preact/hooks'
import Card from './components/Card'
import fetchRandomChampions from './data/fetchRandomChampions'
import Score from './components/Score'
import Logo from './components/Logo'
import shuffle from './utils/shuffle'
import emptyStringArray from './utils/emptyStringArray'

export function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [cards, setCards] = useState(new Array<Champion>(10))
  const [clickedCards, setClickedCards] = useState(emptyStringArray())
  const [isGameRunning, setIsGameRunning] = useState(false)
  const [wins, setWins] = useState(0)

  useEffect(() => {
    async function generateCards() {
      console.info('Reloading cards...')
      const arr = await fetchRandomChampions(10)
      setCards(arr)
    }
    if (!isGameRunning) {
      console.log('Starting new game in 1 second...')
      setTimeout(() => {
        setIsGameRunning(true)
        generateCards()
      }, 1000);
    }
  }, [isGameRunning])

  function addScore() {
    const newScore = score + 1
    setScore(newScore)
    if (newScore > bestScore) {
      setBestScore(newScore)
    }
  }

  function handleFinish() {
    setIsGameRunning(false)
    setScore(0)
    setClickedCards([])
  }

  function handleCards(currentHits: number) {
    if (currentHits == cards.length) {
      console.log('You won!')
      // handle win
      setWins(wins + 1)
      console.log(`You won ${wins + 1} times!`)
      handleFinish()
    } else {
      setCards((cards) => shuffle(cards))
    }
  }

  function handleGameOver() {
    console.log('You lost!')
    // handle game over
    handleFinish()
  }

  function handleClickCard(key: string) {
    if (clickedCards.includes(key)) {
      handleGameOver()
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
      <header class={`absolute grid grid-flow-col top-0 left-0 z-10 bg-black w-screen grid-cols-2 grid-rows-1 h-20 text-slate-200 font-poppins antialiased place-items-center`}>
        <Logo />
        <Score current={score} best={bestScore} />
      </header>
      <section class={`text-center align-middle max-w-6xl`}>
        {cards.map((champ: Champion) => {
          return (
            <Card c_key={champ.c_key} name={champ.name} image={champ.image} handleClick={handleClickCard} />
          )
        })}
      </section>
    </>
  )
}
