import { Movie, Music, Book, Section } from "./components";
import type { IMovie, IMusic, IBook } from "./interfaces/media";
import data from "./data.json";
import { useState } from "react";
const movies: IMovie[] = data.movies;
const albums: IMusic[] = data.albums;
const books: IBook[] = data.books;
//Sotowanie
let moviesSotedByTitle = movies.toSorted((a, b) =>
  a.title.localeCompare(b.title),
);
let booksSotedByTitle = books.toSorted((a, b) =>
  a.title.localeCompare(b.title),
);
let albumsSotedByTitle = albums.toSorted((a, b) =>
  a.title.localeCompare(b.title),
);

let moviesAfter2010 = movies.filter((movie) => movie.yearRelease > 2010);
let booksSortedByYear = books.toSorted((a, b) => a.yearRelease - b.yearRelease);
let albumWithMostSongs = albums[0];

albums.forEach((album) => {
  if (album.songs.length > albumWithMostSongs.songs.length) {
    albumWithMostSongs = album;
  }
});

function App() {
  const [currentTextMovie, changeTextMovie] = useState("");
  const [currentTextBook, changeTextBook] = useState("");
  const [currentTextAlbum, changeTextAlbum] = useState("");
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(currentTextMovie.toLowerCase()),
  );
  return (
    <div className="container">
      <input
        type="text"
        className="form-control"
        placeholder="Wpisz tytuł"
        id="movie-search"
        onChange={(event) => {
          console.log(event.target.value);
          changeTextMovie(event.target.value);
        }}
      />
      <Section title="Movies">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => <Movie key={movie.title} {...movie} />)
        ) : (
          <p className="w-100 fs-3 fw-bold text-center">
            Nie znaleziono filmów
          </p>
        )}
      </Section>
      <input
        type="text"
        className="form-control"
        placeholder="Wpisz tytuł"
        id="book-search"
        onChange={(event) => {
          console.log(event.target.value);
          changeTextBook(event.target.value);
        }}
      />
      <Section title="Books">
        {books.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </Section>
      <input
        type="text"
        className="form-control"
        placeholder="Wpisz tytuł"
        id="album-search"
        onChange={(event) => {
          console.log(event.target.value);
          changeTextAlbum(event.target.value);
        }}
      />
      <Section title="Music">
        {albums.map((album) => (
          <Music key={album.title} {...album} />
        ))}
      </Section>

      <Section title="Movies after 2010">
        {moviesAfter2010.map((movie) => (
          <Movie key={movie.title} {...movie} />
        ))}
      </Section>

      <Section title="Books sorted by year">
        {booksSortedByYear.map((book) => (
          <Book key={book.title} {...book} />
        ))}
      </Section>

      <Section title="The album with the most songs">
        <Music {...albumWithMostSongs} />
      </Section>
    </div>
  );
}
export default App;
