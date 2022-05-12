# Koajs API Movies

This api contains logic to list and modify movie data

## Endpoints

1. List all movie (Paginated)
```sh
http://localhost:3000/
```
```js
// headers
page: Number
pagesize: Number
```
2. Find one movie
```sh
http://localhost:3000/search?title=Guardians of the Galaxy Vol. 2
```
3. Find one movie and update "plot" field
```sh
http://localhost:3000/update-plot
```
```js
// body example
{
    "movie": "Guardians of the Galaxy Vol. 2",
    "find": "Guardians",
    "replace": "CLM Dev"
}
```
## Quick start
1. Clone repository 
```sh
https://github.com/Jesces2904/koa-movie-api.git
```
2. Deploy docker container 
```sh
docker-compose up
```
## Tech
- [Node v11.8.0+](http://nodejs.org/)
- [KoaJS](https://npmjs.com/package/koa)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bristol](https://www.npmjs.com/package/bristol)
- [Nodemon](https://www.npmjs.com/package/nodemon)
