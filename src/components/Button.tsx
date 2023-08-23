interface Props {
  text: string,
  fn: () => void,
  danger?: true
}

export default function Button({text, fn, danger}: Props) {
  return (
    <button onClick={fn} class={"font-semibold py-2 px-4 rounded text-slate-100 hover:cursor-league-pointer " + (danger ? 'hover:bg-red-600 bg-red-700' : 'hover:bg-indigo-400 bg-indigo-500')}>
      {text}
    </button>
  )
}