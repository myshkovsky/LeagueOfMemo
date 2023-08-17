import { useEffect, useState } from 'preact/hooks'
import Card from './components/Card'
import fetchRandomChampions from './data/fetchRandomChampions'
import Score from './components/Score'
import Logo from './components/Logo'

export function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(11)
  const [cards, setCards] = useState(new Array<Champion>(10))

  useEffect(() => {
    async function generateCards() {
      const arr = await fetchRandomChampions(10)
      setCards(arr)
    }
    generateCards()
  }, [])
  
  function handleClickCard(key: string) {
    console.log(key)
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
