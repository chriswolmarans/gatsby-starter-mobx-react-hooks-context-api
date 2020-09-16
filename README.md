# Gatsby MobX starter using React Context & Hooks

Gatsby + MobX (mobx-state-tree) + TypeScript starter + (React Context & Hooks).

Why? Because Gatsby is excellent [also for React apps (not just static sites)](https://www.gatsbyjs.org/blog/2018-10-15-beyond-static-intro/). 

This starter was inspired by [ueno-gatsby-starter](https://github.com/ueno-llc/ueno-gatsby-starter) and [luke-gatsby-starter](https://github.com/lukethacoder/luke-gatsby-starter) with the initial Gatsby v2 + TypeScript + MobX setup from [@borekb/gatsby-starter-mobx](https://github.com/borekb/gatsby-starter-mobx)

## Features
MobX (mobx-state-tree) & React Context with a single Root model to attach every other model onto it, so we have multiple global models in order to better separate our different concerns (or you can have multiple contexts, each for own segment of the app). 

See: `src/models/Root.ts`

With the use of React Context and Hooks, this is simple and scalable. (e.g Made a custom hook called useMst that you can use to destructure the store or stores that you need within a given application components) - See [Mobx React's recipes context](https://mobx-react.js.org/recipes-context) and [Impulse's react-hooks-mobx-state-tree](https://github.com/impulse/react-hooks-mobx-state-tree).

- Uses mobx-react-lite and mobx-state-tree
- Gatsby v2 + TypeScript + MobX setup forked from [@borekb/gatsby-starter-mobx](https://github.com/borekb/gatsby-starter-mobx)
- Search example based on mselee's post      
    - [Using Mobx with React hooks + TypeScript](https://blog.mselee.com/posts/2019/06/08/using-mobx-with-react-hooks-typescript/)
- Two examples based on [@mweststrate's Egghead course](https://egghead.io/courses/manage-complex-state-in-react-apps-with-mobx):
    - "Counter" and "Temperature" as a basic store and an observer
- Responsive Layout using Theme UI, with useColorMode hook for easy dark mode [toggle](https://mitchgavan.com/styleguide-driven-development/)   
- `.editorconfig` & Prettier
- TSLint
- Jest setup (temporarily removed tests when adding mobx-state-tree todo: add test back) 

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
