## freeCodeCamp JAMstack examples

# 5 - Generating and serving localized content pages

This repo holds one of a series of examples of JAMstack sites from a freeCodeCamp video. The video, "Introduction to JAMstack" is available to view for free on freeCodeCamp.

## About this example

The 5th of our 6 code examples, this example builds on [example 4](https://findthat.at/jamstack/ex4) to generate more content in the site with the use of a [static site generator](https://staticgen.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) first pulling content from a content API at build time. Now building out distinct content pages for each locale supported by the News API content source.

Here in the video, we build the logic to source news content from the [News API](https://newsapi.org/) feed, and generate each localised page on its own URL. Then we also use the static site generator to create a [redirects configuration](https://docs.netlify.com/routing/redirects/redirect-options/?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex#redirect-by-country-or-language) file which can route visitors at the [Edge CDN](https://www.netlify.com/products/edge/?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) to the site to the correct localized content page for them.

## Local development

To work on this example locally, you can clone the repository and start editing, although there are a few pre-requisites:

- [NodeJS and NPM](https://nodejs.org/)
- A free [Netlify account](https://www.netlify.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex)
- A free [newsapi.org/](https://newsapi.org/) API key

```bash

# clone the repo
git clone https://github.com/philhawksworth/fcc-5-localized-news

# move into the working directory and install dependencies
cd fcc-5-localized-news
npm install

# build and start the local development server
npm start

# just run the build
npm run build

```

## Clone and deploy

If you wanted to quickly clone this repository and deploy it as a new site on [Netlify](https://www.netlify.com?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) you can click the button below for a rapid start. This will give you a ready-made CI/CD pipeline linked to your git commits.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/philhawksworth/fcc-5-localized-news)



## Watch the video

For a better understanding of what this example is and why it exists, you can jump directly into the video at the point we are discussing this example

[[ insert published video with entry point ]]


## Other code examples in this series

- [Example 1 - All simply static](https://findthat.at/jamstack/ex1)
- [Example 2 - Changing the DOM with JavaScript](https://findthat.at/jamstack/ex2)
- [Example 3 - Introducing a static site generator](https://findthat.at/jamstack/ex3)
- [Example 4 - Generating pages from a content API](https://findthat.at/jamstack/ex4)
- [Example 5 - Generating localized pages, with geo-IP routing at the CDN](https://findthat.at/jamstack/ex5) (👈 you are here)
- [Example 6 - Client-side rendering targeted API content](https://findthat.at/jamstack/ex6)


## More JAMstack resources to explore

- [jamstack.org](https://jamstack.org?utm_source=github&utm_medium=fcc-examples-pnh&utm_campaign=devex) - More info and resources
- [Official JAMstack slack](https://jamstack.org/slack) - conversation about JAMstack and web development (come on in!)
- [Modern Web Development on the JAMstack, O'reilly, 2019](https://findthat.at/jamstack/book) - Book on building websites with the JAMstack. Available as a free e-book.
