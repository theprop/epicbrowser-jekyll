# Deploying the site

Every time a commit is made to the `main` branch of this repository, changes are deployed by GitHub Actions workflows to GitHub Pages. A custom domain can be set for the site by going to **Settings > Pages** and setting the domain in the **Custom Domain** section; [detailed instructions on completing the procedure](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages) are available.

# Configuring the site

This site is a customised version of the [Beautiful Jekyll](https://github.com/daattali/beautiful-jekyll) theme. Instructions on configuring the site can be found in the documentation provided in the theme's repository.

In `_config.yml`, the following customisations are made for this site:

* Setting footer navigation links in `footer-links`, which works the same as `navbar-links`
* Addition of multi-language support with the Polyglot plugin

Various `_includes` and `_layouts` have been edited to support the customisations made to the theme.

# Adding a language

This Jekyll site uses the [Polyglot](https://github.com/untra/polyglot) plugin for multi-language support. The following settings are configured in the `_config.yml` root file:

```
languages: ["en"] # ISO 639-1 language codes of languages to be supported on the website
default_lang: "en" # default fallback language in which to display website content
exclude_from_localization: ["assets"] # root-level files and folders to exclude from localisation
parallel_localization: true # whether to run language processing in parallel or serial (when in doubt, just default to "true" as per the plugin's documentation)
```

## Configuration
As an example, scaffolding has been provided for a French version of the site. To enable it, the `fr` code must be added to the `languages` parameter.

```
languages: ["en", "fr"] # ISO 639-1 language codes of languages to be supported on the website
```

In the `_data` root folder, each language must have its own file providing translations for various elements of the site. An `fr.yml` file has been provided as part of the French version scaffolding. In `en.yml`, part of the data provided is labels for the top navigation menu:

```
nav:
    download: "Download Epic"
    key-features: "Key Features"
    blog: "Blog"
    forum: "Forum"
    donate: "Donate"
    faq: "FAQ"
    contact: "Contact"
```

Translations for the French version of the site should be provided in `fr.yml`.

```
nav:
    download: "Télécharger Epic"
    key-features: "Fonctionnalités Clés"
    blog: "Blog"
    forum: "Forum"
    donate: "Faire un don"
    faq: "FAQ"
    contact: "Contact"
```

Note that the parameter keys are the same in both files, and correspond to the keys provided for the navigation menu in `_config.yml`:

```
navbar-links:
    key-features: "key-features"
    blog: "https://blog.epicbrowser.com/"
    forum: "http://forum.epicbrowser.com/"
    donate: "donate"
    faq: "faq"
    contact: "contact-us"
```

## Adding a page
When adding a **Contact Us** page for the default English version of the site, the following parameters are present in the front matter for `contact-us.html`:

```
---
lang: en
layout: page
title: Contact Us
subtitle: Get help, submit ideas, or discuss privacy with us.
permalink: /contact-us
---
```

To add a French version of the same page, the same `permalink` must be provided in `contact-us-fr.html`:

```
---
lang: fr
layout: page
title: Contactez-nous
subtitle: Obtenez de l'aide, soumettez des idées ou discutez la confidentialité avec nous.
permalink: /contact-us
---
```