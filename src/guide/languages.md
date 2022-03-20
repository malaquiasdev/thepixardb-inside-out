# Languages

Language support is based on the language query parameter you need send along with your request. You can specify one value with this parameter. Here's a example of how this works.

```
https://thepixardb.malaquias.dev/beta/movies?&language=en
```

We adopt the ISO 639-1 code as standard. However we know that some languages like Portuguese are available in different regions around the world, but our default Portuguese version is from Brazil.

## Available region codes

| Region        | Code |
| ------------- | ---- |
| United States | en   |
| Brazil        | pt   |
