interface Props {
  current: number,
  best: number
}

export default function Score({current, best}: Props) {
  return (
    <div class={`flex flex-col place-content-center h-full w-max text-center text-xl float-right`}>
      <p class={``}>
        CURRENT SCORE: <p class={``}>{current}</p>
      </p>
      <p class={``}>
        BEST SCORE: <p class={`font-bold ${best >= 10 ? 'bg-gradient-to-r bg-clip-text text-transparent from-indigo-500 via-pink-600 to-yellow-300 animate-text' : ''}`}>{best}</p>
      </p>
    </div>
  )
}