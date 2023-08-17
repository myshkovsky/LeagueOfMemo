interface Props {
  current: number,
  best: number
}

export default function Score({current, best}: Props) {
  return (
    <div class={`flex flex-col place-content-center h-full w-max text-center text-xl float-right`}>
      <p class={``}>
        CURRENT SCORE: {current}
      </p>
      <p class={``}>
        BEST SCORE: {best}
      </p>
    </div>
  )
}