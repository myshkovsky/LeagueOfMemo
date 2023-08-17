const champList = fetch('https://ddragon.leagueoflegends.com/cdn/13.6.1/data/en_US/champion.json')
                  .then(res => res.json())
                  .then(out => {
                    return [...Object.values(out.data)]
                  })

const GET_SPLASH_URL = (championKey: string) => {
  return `https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/v1/champion-splashes/${championKey}/${championKey}000.jpg`
}

function shuffle(array: Array<any>): Array<any> {
  let m = array.length, t, i;
  while(m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

export default async function fetchRandomChampions(amount: number): Promise<Champion[]> {
  let arr = new Array<Champion>(amount)
  const champListShuffled = shuffle(await champList)

  for (let i = 0; i < amount; i++) {
    arr[i] = {
      key: champListShuffled[i].key,
      id: champListShuffled[i].id,
      name: champListShuffled[i].name,
      image: GET_SPLASH_URL(champListShuffled[i].key)
    }
  }
  return arr
}