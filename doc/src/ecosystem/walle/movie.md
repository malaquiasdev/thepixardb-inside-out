# Movie Skeleton

## ID

Unique for each movie.

This is a union between the prefix MV and the themoviedb id.

## Titles

An array with the original title for each supported language.

This property is compose by a key/value style, where the **key** is the language and the title is the **value**.

Please avoid capitalization.

## Descriptions

An array with the long and short description for each supported language.

This property is compose by a key, short and long properties, where the **key** is the language.

The **short** value must have a limit of **255** caracteres

The **long** value must have a limit of **500** caracteres

Please avoid capitalization.

## Genres

A simples list with id numbers.

Thoses numbers must match with the value in **genres.json** file.

## Budget and Revenue

The budget and revenue are in American Dollar (USD). For example, a 10 million budget should be entered as 10000000.

Please, don't adjust the value with inflation.

We recommended use the information from the [Box Office Mojo](https://www.boxofficemojo.com/).

## Release Date

Only the original release date since we don't support multiples versions.

The pattern must be american YYY-MM-DD (e.g. 2021-06-17).

## Runtime

Only the original runtime since we don't support multiples versions.

The runtime should be entered in minutes (e.g. one hour is added as "60").

The runtime should always be all the way to the end of the movie, including end credits.

## Age

We don't support adult movies.

Please use the value indacate by the regulatory organ.

In Brazil we have the Departamento de Justiça, Classificação, Títulos e Qualificação and in the US we have Motion Picture Association of America.

Inside the file you must inform the organ name and the value.

## External Id

They are IDs for other databases like TheMovieDB or IMDb. Please make sure you add the right ID.

It is recommended to enter an IMDb ID when creating an entry.

## Images

WORKING IN PROGRESS

## Example

```json
{
  "id": "MV301528",
  "titles": [
    {
      "key": "en",
      "value": "Toy Story 4"
    },
    {
      "key": "pt",
      "value": "Toy Story 4"
    }
  ],
  "descriptions": [
    {
      "key": "en",
      "short": "When a new toy called Forky joins Woody and the gang, a road trip alongside old and new friends reveals how big the world can be for a toy.",
      "long": "Woody has always been confident about his place in the world and that his priority is taking care of his kid, whether that's Andy or Bonnie. But when Bonnie adds a reluctant new toy called Forky to her room, a road trip adventure alongside old and new friends will show Woody how big the world can be for a toy."
    },
    {
      "key": "pt",
      "short": "Quando um novo brinquedo chamado Forky se une a Woody e à turma, uma viagem ao lado de velhos e novos amigos revela o quão grande o mundo pode ser para um brinquedo.",
      "long": "Agora morando na casa da pequena Bonnie, Woody apresenta aos amigos o novo brinquedo construído por ela: Forky, baseado em um garfo de verdade. O novo posto de brinquedo não o agrada nem um pouco, o que faz com que Forky fuja de casa. Decidido a trazer de volta o atual brinquedo favorito de Bonnie, Woody parte em seu encalço e, no caminho, reencontra Bo Peep, que agora vive em um parque de diversões."
    }
  ],
  "genreIds": [1, 2, 3, 4, 5, 6],
  "budget": 175000000,
  "revenue": 1073394593,
  "releaseDate": "2019-06-19",
  "runtime": 100,
  "ages": [
    {
      "key": "en",
      "organ": "Motion Picture Association of America",
      "value": "G"
    },
    {
      "key": "pt",
      "organ": "Departamento de Justiça, Classificação, Títulos e Qualificação",
      "value": "L"
    }
  ],
  "externalId": {
    "themoviedb": 301528,
    "imdb": "tt1979376"
  },
  "images": [
    {
      "path": "data/movies/MV301528/images/2_3/clean_w1360_h2039.jpeg",
      "primary": true,
      "key": null
    },
    {
      "path": "data/movies/MV301528/images/2_3/en_w2000_h3000.jpeg",
      "primary": true,
      "key": "en"
    },
    {
      "path": "data/movies/MV301528/images/2_3/en_w2000_h3000.jpeg",
      "primary": true,
      "key": "pt"
    },
    {
      "path": "data/movies/MV301528/images/16_9/clean_w3840_h2160.jpeg",
      "primary": true,
      "key": null
    },
    {
      "path": "data/movies/MV301528/images/16_9/en_w3840_h2160.jpeg",
      "primary": true,
      "key": "en"
    },
    {
      "path": "data/movies/MV301528/images/16_9/en_w3840_h2160.jpeg",
      "primary": true,
      "key": "pt"
    }
  ]
}
```
