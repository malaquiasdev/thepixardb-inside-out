# Movies (domain)

## movies (endpoint)

Retrieve a list of movies ordered by newest.

### <span style="color:green"><strong>GET</strong></span> `https://thepixardb.malaquias.dev/api/v0/movies`

### Query String

| Name     |  Type  | Required |                                                                                  Description |
| -------- | :----: | -------: | -------------------------------------------------------------------------------------------: |
| language | string |    false | Pass a ISO 639-1 value to display translated data for the fields that support. default: "en" |

### cURL

::: details
curl --location --request GET 'https://thepixardb.malaquias.dev/api/v0/movies?language=en'
:::

```json
[
  {
    "id": "MV508947",
    "title": "Turning Red",
    "description": "A 13-year-old girl named Mei Lee turns into a giant red panda whenever she gets too excited.",
    "runtime": 107,
    "posterUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/2_3/en_w2000_h3000.jpeg",
    "bannerUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/16_9/en_w1920_h1080.jpeg"
  },
  {
    "id": "MV508943",
    "title": "Luca",
    "description": "On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.",
    "runtime": 101,
    "posterUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508943/images/2_3/en_w2000_h3000.jpeg",
    "bannerUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508943/images/16_9/en_w1920_h1080.jpeg"
  },
  {
    "id": "MV508442",
    "title": "Soul",
    "description": "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
    "runtime": 100,
    "posterUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508442/images/2_3/en_w2000_h3000.jpeg",
    "bannerUrl": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508442/images/16_9/en_w3840_h2160.jpeg"
  }
]
```

::: tip
To understand the object schema better, please visit [the page.](../../../ecosystem/walle/movie.md)
:::

## movies/{id} (endpoint)

Get the primary information about a movie.

### <span style="color:green"><strong>GET</strong></span> `https://thepixardb.malaquias.dev/api/v0/movies/{id}`

### Query String

| Name     |  Type  | Required |                                                                                  Description |
| -------- | :----: | -------: | -------------------------------------------------------------------------------------------: |
| language | string |    false | Pass a ISO 639-1 value to display translated data for the fields that support. default: "en" |

### cURL

::: details
curl --location --request GET 'https://thepixardb.malaquias.dev/api/v0/movies/MV508947?language=en'
:::

```json
{
  "id": "MV508947",
  "title": "Turning Red",
  "description": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
  "descriptionShort": "A 13-year-old girl named Mei Lee turns into a giant red panda whenever she gets too excited.",
  "genres": ["Animation", "Family", "Comedy", "Fantasy"],
  "runtime": 107,
  "budget": 190000000,
  "releaseDate": "2022-03-10",
  "revenue": 0,
  "rating": {
    "organ": "Motion Picture Association of America",
    "value": "PG"
  },
  "images": [
    {
      "path": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/2_3/en_w2000_h3000.jpeg",
      "key": "en",
      "primary": true
    },
    {
      "path": "https://raw.githubusercontent.com/malaquiasdev/thepixardb-wall-e/main/data/movies/MV508947/images/16_9/en_w1920_h1080.jpeg",
      "key": "en",
      "primary": true
    }
  ]
}
```

::: warning
We are still a beta version
:::
