interface Props extends Omit<Champion, 'id'> {
  handleClick: (key: string) => void
}

export default function Card({name, image, c_key, handleClick}: Props) {
  return (
    <div
      onClick={() => handleClick(c_key)}
      class={`relative inline-block m-2 p-1 bg-slate-700 hover:bg-slate-600 shadow-slate-950 shadow-lg rounded-xl hover:cursor-league-pointer`}
    >
      <img
        src={image}
        class={`object-cover w-48 h-72 rounded-lg`}
      />
      <h1 class={`absolute font-poppins text-slate-200 text-xl text-center font-bold left-0 right-0 bottom-4 antialiased`}>
        {name}
      </h1>
    </div>
  )
}