<center>
<h1>Rick and Morty API</h1>
</center>

## Guide

- [About the challenge](#About-the-challenge)
- [Requirements](#Requirements)
  - [Points to watch](#Points-to-watch)
  - [Optional](#Optional)
- [Getting Started](#getting-started)
  - [Prerequisites](#Prerequisites)
  - [Forking and initializing](#Forking-and-initializing)
    - [Local](#Local)
  - [Tests](#Tests)
- [Versioning](#Versioning)
  - [Processo de Deploy](#Processo-de-deploy)
- [Deploy](#Deploy)
- [Conclusion](#Conclusion)
  - [Learnings](#Learnings)
  - [Difficulties](#Difficulties)
  - [Points to get better](#Points-to-get-better)
- [Contact](#Contact)
- [References](#references)

## About the challenge

Develop an application to search characters from the Rick and Morty's Universe from the official API

## Requirements

- [x] It must be online
- [x] It must be on Github
- [x] It must follow the [design](https://www.figma.com/file/PTsl4gp2OOoEXuddyEx6GH/Frontend-Test---Rick-and-Morty) 
- [x] It must fetch data from the [API](https://rickandmortyapi.com/graphql)

### Points to watch

- [x] Good development practices
- [x] Coding standards
- [x] Animations. Various animations
- [x] Good use of HTML5, CSS3, React and browser API
- [x] Responsive layout for screen sizes other than those specified in the design
- [x] Keyboard navigation
- [x] Accessibility
- [x] Well structured readme explaining the project at a high level, how to execute,
compile and test

### Optional

- [x] Unit test and integration test
- [ ] End to End tests
- [ ] CI/CD

## Getting Started

For getting a copy in you computer to load the interface and the test, follow the next steps or if just wish to see the result, [click here to get redirect to it](https://rickandmorty-amanda.netlify.app).

### Prerequisites

You must have `node` installed in your computer. In 12 version or higher

To check, open your shell or bash and paste the following command:

```sh
node -v
```

### Forking and initializing

In the superior part of this github repository, there's a button called Fork, that it will make a copy in your account of this project and the you can clone into you computer

:small_red_triangle_down: These commands must be typed in your bash

For clone then, paste this:

```sh
git clone https://github.com/amandabrbz/rick-and-morty.git

cd rick-and-morty
npm install
```

#### Local

Serving locally tge application:

```sh
npm start
```

After starting the application, it will open automatically a window in your default browser, running the project in the `:3000`

http://localhost:3000

:no_entry_sign: Caso a porta já esteja sendo utilizada, a própria aplicação avisa e tenta outra porta.

:no_entry_sign:  In case of the port it's been used, the application will notify and it'll try another port, pay attention to your bash in this step.

### Tests

For this application I made a few smoke and unit tests using `react-testing-library` with `jest`, to run and see them, type in your shell the following command:

```sh
npm test
```

## Versioning

I developed every major of the project over branches, because I didn't see necessary working with pull request knowing that it wasn't anybody to correct me and it would be one more step to do, but I know the importance of the PR method between groups.

In case of needing to come back in a finished branch, I synchronized my branch with the command `git pull origin main` with the main branch.

To organize my development I used some features from Github, such as issues to see the problems that I raised to solved. 

The pattern to commit that I choose, in your majority, it followed a verb and a brief explanation about what I was developing. An example: `add loading component`

### Deploy

I've already have some side projects in platforms such as Netlify, Heroku and Vercel, but I really like the process that Netlify offers, it's simple to set it up and and it's easier to deal with it.

To make it more automated, the deploy occurs every time that has a new commit in the branch main, such as a merge or a regular commit and then the own Netlify run the `npm build`, but it can be done with the Netlify's CLI and running the following commands in the bash:

```bash
npm run build
netlify deploy --prod
```

Obs: To see the the result in production, come back to the section [Deploy](#Deploy)

## Conclusion

### Learnings

I'm still learning React and its universe. This is my first ime with graphql and I had a little difficulty to prepare the request and pass some query dynamic. I guess I didn't make the best use of it, but I could solve the problem with it. I learned how to make a modal accessible with pure javascript and it was nice. 

### Difficulties

I had difficulties to understand how graphql queries and how it worked dynamic, I've tried Apollo and SWR to fetch data more easier and I found myself better with Apollo but I couldn't figure how to do the pagination yet, I saw an example with SWR and I'll try to adapt to Apollo version.

### Points to get better

- [ ] Tests
- [ ] GraphQL

## Deploy

<center>

[![Netlify Status](https://api.netlify.com/api/v1/badges/8b31dc1d-6d49-4e9f-b63a-264b9f623ed4/deploy-status)](https://app.netlify.com/sites/hash-calculator-by-amanda/deploys)<br/>
[Github - Source Code](https://github.com/amandabrbz/rick-and-morty) | [Netlify - Render](https://rickandmorty-amanda.netlify.app)

</center>

## Contact

Amanda Barboza @ [LinkedIn](https://linkedin/in/amandabrbz)

## References

[Passing data between siblings](https://www.youtube.com/watch?v=Qf68sssXPtM) | [Context API](https://medium.com/reactbrasil/entendendo-a-context-api-do-react-criando-um-componente-de-loading-a84f84007dc7) | [Tests](https://medium.com/tableless/você-é-irresponsável-por-não-escrever-testes-de-front-end-70c2858b62df)
