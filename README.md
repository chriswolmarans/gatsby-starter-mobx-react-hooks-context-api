# Gatsby MobX starter using React Context & Hooks

Gatsby + MobX + TypeScript starter + (React Context & Hooks).

Why? Because Gatsby is excellent [also for React apps (not just static sites)](https://www.gatsbyjs.org/blog/2018-10-15-beyond-static-intro/) and I wanted to have a quick alternative to `create-react-app --typescript` with a couple of things configured.

## Features

- Gatsby v2 + TypeScript + MobX setup forked from [@borekb/gatsby-starter-mobx](https://github.com/borekb/gatsby-starter-mobx)
- MobX & React Context with a single Root store to attach every other store onto it, so we have multiple global stores in order to better separate our different concerns. Or have multiple contexts, each for own segment of the app. Example stores: CityStore, TemperatureStore, CounterStore. With the use of React Context and Hooks, this is simple and scalable. (e.g Make a custom hook called useStores that you can use to destructure the store or stores that you need within a given application components) - See [Mobx React's recipes context](https://mobx-react.js.org/recipes-context).
- Search example based on mselee's post      
    - [Using Mobx with React hooks + TypeScript](https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/)
- Two examples based on [@mweststrate's Egghead course](https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx):
    - "Counter" and "Temperature" as a basic store and an observer
- Responsive Layout using Theme UI, with useColorMode hook for easy dark mode [toggle](https://mitchgavan.com/styleguide-driven-development/)   
- `.editorconfig` & Prettier
- TSLint
- Jest setup

## Usage

1. Make sure you're in a Linux-y shell (on Windows, use e.g. Git Bash or MSYS2; `rm -rf` and similar might be called from npm scripts).
2. `yarn`
3. `yarn start`

Other notable scripts (see [`package.json`](package.json)):

- `yarn build`
    - (You can verify the statically generated site with e.g. `npx local-web-server -d public`.)
- `yarn tsc`
- `yarn lint`
- `yarn prettier`
- `yarn test` or `yarn test --watch`
