# This repository is my React-typescript study note.

- All components made by styled-component
- You can find this course on nomadcoder.co [Nomad coder](https://nomadcoder.co).
- This repository has three main topics

## 1. crypto currency diagram

- stack : Coinpaprika API, React-Query, Apexcharts.js
- published url : [https://funco247.github.io/React_master_class/]
- You can check data history of each coin here

### `Coinpaprika Api`

This API gives crypto coins price information

If you want to know about coinpaprika, check this [https://coinpaprika.com/]. Or just want to check API call URL, check [src/api.ts]

### `Apexcharts.js library`

This is javascript chart library. I get coin data from `coin paprika` and visualize by using this library
It is very easy to use becaaue it offer detail useage on their webside. I recomend check official DOCS and examples.

IF you want to know about Apexcharts library, check this [https://apexcharts.com/].

### `React-Query`

React-query gives us many benefit like auto-cashing and lodaing state, error, data in useQuery hook and fancy dev-tool and so on.
All those things made my code short and game me great development experience

All API calling code in this project used React query. Check DOCS[https://tanstack.com/query/v4/docs/overview] or [src/api.ts] and [arc/routes/coin]

## 2. to-do-list

- stack : Recoil
- published url : [https://funco247.github.io/React_master_todolist/]
- You can add your to-do and give them a category and also can set custom category

### `Recoil`

Recoil is state management tool that having same concept as Redux or context-api.
The core of Recoil is an `Atom`. Check atoms I made in [src/stoms.tsx].
I made 3 atoms and 1 selector. Atom is data group sharing same key value. And selector custom our data output (like filter function)
Recoil have many hooks `{ useRecoilState, useRecoilValue, useSetRecoilState }` and so on

- useRecoilState hook can get and set state
- useRecoilValue hook can get state
- useSetRecoilState hook can set state
  So you should choose right one in your situation

## 2. Animation

- stack : Framer-motion
- published url : [not yet]
- You can see many beautiful animation here (comming soon)

### `Framer-motion`

By using Framer-motion, animate element become uper easy. I made 10 examples in [src/components].

- basic animation
- slider
- hide and show toggle
- dragger
- moving component when button clicked
- hover gesture
- Svg animation
- pop up and focused component
- tracking motion value
- animating step by step

Each component file has more comment about animation, but you can find more detail in official web-site [https://www.framer.com/motion/].
It has kind example and you can use imediately. More easier than normal CSS and have React frendly functions.

## Enjoy your code

### contact

- email : [crispy.alc@gmail.com]
- linked In : [https://www.linkedin.com/in/%EC%A7%84%EC%9A%B1-%EC%9D%B4-a4b135236/]
