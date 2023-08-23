import Button from "./Button"

interface Props {
  visible: boolean,
  win: boolean,
  onRestart: () => void,
  onContinue?: () => void
}

export default function GameOver({visible, win, onRestart, onContinue}: Props) {
  return (
    <div class={(visible ? 'visible' : 'collapse') + ` flex place-content-center before:fixed before:left-0 before:top-0 before:z-[1000] before:h-screen before:w-screen before:bg-slate-600 before:opacity-40`}>
      <div class={'fixed flex flex-col gap-2 max-w-sm z-[1001] p-6 rounded-lg bg-slate-700 text-slate-100 transition duration-150 ease-in-out opacity-100 shadow-black shadow-md'}>
        <div>
          <h3 class={'text-center text-3xl'}>
            {win ? '✨ You won! ✨' : '❌ You lost! ❌'}
          </h3>
          <hr/>
          <p class={'text-justify text-lg'}>
            {win ?
              `If you'd like, you can continue playing and further contribute to your best score.` :
              `Better luck next time!`
            }
          </p>
        </div>
        <hr/>
        <span>
          <Button text={'Restart'} fn={onRestart} danger/>
          {win ? (
            <Button text={'Continue'} fn={onContinue != undefined ? onContinue : () => { console.error('Unexpected exception: onContinue is undefined') }} />
          ) : null}
        </span>
      </div>
    </div>
  )
}