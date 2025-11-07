# Dualistic Website

## Project description

This website is build with Astro, Tailwind and is based on the Astro template [web3Templates](https://web3templates.com/templates/astroship-starter-website-template-for-astro).

All the code is inside `src` folder:

- `assets` contains standard images for the website
- `components` contains all the principal components of the website. Each `.astro` file here is an ELEMENT of the webpages, like the Footer or the Container.
- `content` contains the `blog` folder in which are collected the `.md` with the articles and the `team` folder in which are collected the `.md` with the Team description
- `layouts` contains the `.astro` files for the style of all the pages and the blog, which is a little bit different because it dynamically loop over the articles in `blog` folder
- `pages` contains all the websites pages. Adding a new file here means adding a new page to the website
- `utils` contains random js code.

### Relevant files

To add new blog articles, just add a new `.md` in the [blog](./src/data/blog/) folder following using the same header you can find in the first article.


## Development

```bash
~$ npm install
~$ npm run dev
```

### Enable the contact form

Create an `.env` file in the root folder and the variable:
```
PUBLIC_WEB3FORM_KEY="your-web3form-key-to-test-the-contact-form"
```

### Automatic spell check on commit
Automatic spellcheck on all the `.md` files (i.e. all the blog posts) is done via [Husky](https://typicode.github.io/husky/how-to.html) and [Cspell](https://cspell.org/docs/getting-started#1-create-a-configuration-file).  

To manually spellcheck run the same script used by Husky:  
```
  npm run spellcheck
```  
If you have a false positive, the word may not be known by Cspell. Add the word to the [project-words.txt](./project-words.txt) file to make the spellchecker ignore it.  

To check also `.astro` files, update the script in the [package.json](./package.json) with `cspell \"**/*.{md,astro}\"`.

### Astro Icon

The project uses Astro Icon. Follow the [instructions](https://www.astroicon.dev/guides/customization/) and use your own svg or the icons from [Iconify - Unicons](https://icon-sets.iconify.design/uil/). You can also easily install new icon sets.

## Deployment

Deployment is handled by GitHub Actions through [.github/workflows/deploy.yaml](.github/workflows/deploy.yaml).