import fetchRandomChampions from './data/fetchRandomChampions'
import './styles/app.css'

const test = await fetchRandomChampions(10)

export function App() {
  return (
    <section>
      {test.map((champ: Champion) => {
        return (
          <div class="card">
            <h1>{champ.name}</h1>
            <img class='image' src={champ.image}/>
          </div>
        )
      })}
    </section>
  )
}
