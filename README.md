# README

## Directory Structure

```
.
├── eleventy.config.js                # Top-level 11ty configuration file
├── flake.lock
├── flake.nix
├── LICENSE
├── package.json                      # npm packages file
├── package-lock.json                 # npm packages lock file
├── README.md
└── src
    ├── css                           # Directory with CSS to use on website
    │   ├── main-sidebar.css
    │   ├── style.css
    │   └── variables.css
    ├── _data                         # Directory for global 11ty data that is used as base for everything
    │   └── eleventyComputed.js       # Computed 11ty data (highest priority)
    ├── _includes                     # 11ty templates
    │   ├── doc.njk                   # General template
    │   ├── footer.njk                # Page footer
    │   └── navigation.njk            # Navigation menu
    ├── index.md                      # Main page
    ├── js                            # Client-side JS scripts
    │   └── toggle-sidebar.js
    ├── planning                      # "Planning" chapter
    │   ├── database.md
    │   ├── index.md
    │   └── planning.11tydata.json    # 11ty data for this chapter
    ├── projects                      # "Projects" chapter
    │   ├── auto.11ty.js              # JS script that creates pages for this chapter
    │   └── index.md
    └── technical                     # "Technical" chapter
        ├── git.md
        ├── index.md
        ├── projects.md
        └── technical.11tydata.json   # 11ty data for this chapter
```

## CSS Conventions

- For CSS organization, [Reasonable CSS](https://ricostacruz.com/rscss/) is used
- Currently, no CSS pre- or post-processing is done, but it could change
- If CSS pre- or post-processing will be enabled, it will be hooked up into 11ty build process
- No asset bundling is done; instead, CSS includes are part of the HTML template for the page
- CSS is not minified
- CSS is preferably done for each component in a separate file
- CSS styling is taken from [mdbook](https://rust-lang.github.io/mdBook/index.html)

## Caveats

- Computed 11ty data always takes priority. Above global and local data. No matter where the definition for computing data lies. Compute data always takes biggest priority
