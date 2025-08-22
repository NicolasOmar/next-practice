# <img src="https://cdn.simpleicons.org/nextdotjs" title="NextJs Practice Repo" alt="NextJs Practice Repo" width="30"> NextJs Practice
Repository created to record my practice learning React with exercises based on the [Udemy Course](https://www.udemy.com/course/nextjs-react-the-complete-guide) of [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/).

## Table of contents
- [Status](#status)
- [Requirements](#requirements)
- [Setup](#setup)
- [How to run it](#how-to-run-it)
- [Repo structure & what i learned in each exercise](#repo-structure--what-i-learned-in-each-exercise)
- [Other practice repos](#other-practice-repos)

## Status
- Current repo's version is ![Nextjs practice version](https://img.shields.io/github/package-json/v/nicolasomar/next-practice?color=success&label=%20&style=flat-square)

### What does that version number mean?
| Number | Meaning |
| ------ | ------ |
| `X.0.0` | How many exercises I have completed |
| `0.X.0` | How many times I made progress on my next exercise |
| `0.0.X` | Dependencies version updates and specific patches while the course is not completed |

## Requirements
 - [Node](https://nodejs.org/en/download/) `v20` or above

## Setup
After cloning the repo, go to the created folder and install the node packages.
```sh
git clone https://github.com/NicolasOmar/next-practice.git
cd next-practice
npm run setup-all
```
`setup-all` is the command to install all the projects, but if you want to do it one by one, you can change that last line for one of the following:
| App Setup | Command |
| ------ | ------ |
| All | `npm run setup-all` |
| React Basics | `npm run setup-react-basics` |
| Next Essentials | `npm run setup-next-essentials` |
| Routing and page rendering | `npm run setup-routing-and-rendering` |
| Work with APIs | `npm run setup-work-with-apis` |

## How to run it
To run any specific exercise, execute the following command in the project´s folder (can be a simplified way in `/concepts` or a more elaborated implementation in `/project`):
```sh
npm start
```

## Repo structure & what i learned in each exercise
 - React Basics (`1-react-basics` folder)
   - Create a new project based on `Vite`.
   - Understanding and usage of `CSS modules`.
   - Learn about React concepts such as `components`, `props passage`, `input change methods`, `function passing though components` and `conditional rendering`.
   - Understanding of its core hooks such as `useState` and `useEffect`.
   - Understand how to handle REST API calls.
   - Understanding and usage of routing engine implementation by `react-router-dom`, as well as data loading and posting techniques based on `loader` and `action` features.
- Next Essentials (`2-next-essentials` folder)
   - Create a new project using [Next provided command](https://nextjs.org/).
   - Understanding of `file-based routing` and several reserved file names.
   - Understand the difference between `server-side` and `client-side components` and how to implement them efficiently.
   - Understand how to make API calls asynchronously on a server-side component.
   - Basic database script handling using `better-sqlite3`.
   - Understanding and usage of several reserved components such as `page`, `loading`, `error` and `not-found`.
   - Usage of granular loading using `Suspense`.
   - Understanding and usage of form-related handler methods such as `useFormStatus` and `useActionState`.
   - Understanding and basic usage of metadata injection in static and dynamic ways.
- Routing and page rendering (`3-routing-and-rendering` folder)
   - Understanding and usage of routing features such as:
      - `parallel routes`
      - `catch-all routes`
      - `intercepting routes`
      - `content routes`
- Working with apis (`4-work-with-apis` folder)
   - How to handle REST queries with async functions at component level
   - How to handle loading states with `loading page` or `Suspense`
   - How to handle form data and errors with `server actions`
   - How to renew cache on need with `revalidatePath`
   - How to handle optimistically value changes with `useOptimistic`
- Caching (`5-caching` folder)
   - How to handle cache strategy by adjusting next fetch configuration
   - How to revalidate cache based on paths with `revalidatePath` or API with `revalidateTag`

## Other practice repos
| Node | Angular | GraphQL | React | HTML & CSS | Styling | Typescript | Docker |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| [<img src="https://cdn.simpleicons.org/node.js" title="Node Practice Repo" alt="Node Practice Repo" width="48px">](https://github.com/NicolasOmar/node-practice) | [<img src="https://cdn.simpleicons.org/angular" title="Angular Practice Repo" alt="Angular Practice Repo" width="48px">](https://github.com/NicolasOmar/angular-practice) | [<img src="https://cdn.simpleicons.org/graphql" title="GraphQL Practice Repo" alt="GraphQL Practice Repo" width="48px">](https://github.com/NicolasOmar/graphql-practice) | [<img src="https://cdn.simpleicons.org/react" title="React Practice Repo" alt="React Practice Repo" width="48px">](https://github.com/NicolasOmar/react-practice) | [<img src="https://cdn.simpleicons.org/html5" title="HTML and CSS Practice Repo" alt="HTML and CSS Practice Repo" width="48px">](https://github.com/NicolasOmar/html-css-practice) | [<img src="https://cdn.simpleicons.org/sass" title="Styling Practice Repo" alt="Styling Practice Repo" width="48px">](https://github.com/NicolasOmar/styling-practice) | [<img src="https://cdn.simpleicons.org/typescript" title="Typescript Practice Repo" alt="Typescript Practice Repo" width="48px">](https://github.com/NicolasOmar/typescript-practice) | [<img src="https://cdn.simpleicons.org/docker" title="Docker Practice Repo" alt="Docker Practice Repo" width="48px">](https://github.com/NicolasOmar/docker-practice) |