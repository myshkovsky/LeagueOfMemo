interface Props {
  current: number,
  best: number
}

export default function Score({current, best}: Props) {
  return (
    <div class={`flex flex-col place-content-center text-center text-xl m-8`}>
      <span class={`flex flex-row place-content-center`}>
        <p>Current score:&nbsp;</p>
        <p class={`font-bold ${current >= 10 ? 'bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-pink-600 to-yellow-300 animate-text' : ''}`}>{current}</p>
      </span>
      <span class={`flex flex-row place-content-center`}>
        <p class={``}>Best score:&nbsp;</p>
        <p class={`font-bold ${best >= 10 ? 'bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-pink-600 to-yellow-300 animate-text' : ''}`}>{best}</p>
      </span>
    </div>
  )
}