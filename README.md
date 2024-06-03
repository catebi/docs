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
