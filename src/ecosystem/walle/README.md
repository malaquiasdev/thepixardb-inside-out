# Geral

Our data is 100% user contributed and 90% static. We trully encourage you to add missing informations by yourself or edit any incorrect data. Todo that you can go to our Wall-e project on Github, open a issue and working on it.

Please read the guidelines below to understand out which types of content are supported and which ones aren't. The guidelines should also help you choose the right section and settings for your new entry.

## Folder structure

```
├── data
| └── company.json
| └── genres.json
│ ├── movies
│ │ ├── MOVIE_ID
│ │ │ └── content.json
│ │ ├── images
│ │ │ ├── 2_3
│ │ │ └── clean_.jpeg
│ │ │ └── en_.jpeg
│ │ │ └── pt_.jpeg
│ │ │ ├── 16_9
│ │ │ └── clean_.jpeg
│ │ │ └── en_.jpeg
│ │ │ └── pt_.jpeg
│ │
```

Inside of the folder data we have the **company.json** with information about the Pixar and the **genres.json** with description of the genre id for each supported language.

Next to these files we also have the folder **movies**, inside of this folder we have all metadata and image of the movie. Each movie must have your own folder to avoid data mix. Each movie folder must be equal the movie ID.

Deep more in the **MOVIE_ID** folder we have the **content.json** (you can understand better this file if you go to Movie Skeleton section) and the images folder.
