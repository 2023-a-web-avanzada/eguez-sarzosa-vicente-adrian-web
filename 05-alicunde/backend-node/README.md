# Test

To run the app follow these steps:

```bash
$ npm i
$ npm run start:dev
```

The app will be available on: [http://localhost:3001](http://localhost:3001)


## Endpoints

- (Nuevo Libro) POST http://localhost:3001/book
```json
{
  "title": "a",
  "chapters": 2,
  "pages": 10,
  "names": ["adrian", "vicente"]
} 
```
- (Obtener todos los Libros) GET http://localhost:3001/book
- (Crear un autor) POST http://localhost:3001/author
```json
{
"name": "adrian"
}
```
- (Obtener todos los autores) GET http://localhost:3001/author
- (Obtener Promedio De Paginas Por Capitulo) GET http://localhost:3001/book/promedio/:id