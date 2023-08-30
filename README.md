# 🧠 League Of Memo
A single page application memory game. Click all cards without choosing the same card twice. 

Built for the purpose of completing The Odin Project React course.

Built with:
- Vite
- TypeScript
- Preact
- Tailwind CSS

## Developer notes 🤓
This was the second time I built and deployed a "proper" React app. The whole process went way smoother and faster than last time. The requirements have been met, and I gave up on styling it any further in order to spend my time building more apps rather than focusing on one and trying to perfect it. It is definitely in a better place than the last app, but there are still some things that I'm not entirely happy with *(styling issues and the lack of sounds & difficulty levels)*.

Improvements since my last project, [Seavee](https://github.com/myshkovsky/Seavee):
- The final .js package size is a nice and small 18.49 kB *(gzip: 7.83 kB)*. This is a significant improvement over the previous 750 kB. This is most likely due to me choosing Preact instead of React. **The core functionality did not change**, besides minor syntax things like `className -> class`. I love the 3 kB default bundle size.
- State management is somewhat simple, although I prefer the "kinda funky" approach which I made in [Seavee](https://github.com/myshkovsky/Seavee) for more complex applications. However, since this app is very simple, I felt like there was no need of going beyond `useState()`.
- Not using a component library and instead opting for Tailwind CSS was one of the main reasons why the styling of this app was fast & easy to work with. The bundle size is also kept at a minimum due to the lack of bloat from external libraries.

A few things that could be changed or added:
- Difficulty levels with varying amounts of cards on the board would be a neat addition
- Styling could use some work *(try restarting the game from the win/lose modal and notice its position change)*. I still have a lot to learn in terms of design and styling, but it's definitely going better than it used to.

Areas that need improvement:
- While I love working with the back-end and can solve many problems in a timely manner, my styling abilities leave much to be desired. This is mainly due to the fact that, at the moment, I have a poor understanding of some of the more intricate features of CSS and related tools.

I might tinker with the site some more in the future, but right now any further tinkering is highly unlikely.

## Contributions, """licensing""", blah blah blah 😴
If **you** would like to tinker with the site, feel free! Clone it, fork it, anything goes. I don't care what you do with the source code.

However, if you somehow manage to break something important by interacting with the source code, **I will be impressed, but not liable for the damages**. *(tl;dr: use this at your own risk!)*

If you would like to contribute to the site, feel free to make a pull request. Make sure to add a proper description of what your pull request achieves, so I don't have to spend an entire afternoon guessing what your LeetCode solution does in detail.

Want to add some features? Go ahead. Want to clean up some code or fix my silly mistakes? Be my guest. If it makes you happy, it makes me happy too 😃👍
