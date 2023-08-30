interface Props {
  text: string,
  fn: () => void,
  danger?: true
}

export default function Button({text, fn, danger}: Props) {
  return (
    <button onClick={fn} class={"font-semibold py-2 px-4 rounded text-slate-100 hover:cursor-league-pointer shadow-lg shadow-[rgb(0,0,0,.4)]" + (danger ? 'hover:bg-red-600 bg-red-700' : 'hover:bg-green-500 bg-green-600')}>
      {danger ? '↪' : '➡'} {text}
    </button>
  )
}