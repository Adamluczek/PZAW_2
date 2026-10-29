import { useState, type ReactNode } from "react";
import type { IMovie, IBook, IMusic } from "./interfaces/media";
import "bootstrap/dist/css/bootstrap.min.css";

function handleSongClick(title: string, album: string) {
  console.log("Wybrano utwór: " + title + " z " + album);
}

export function Section(props: { title: string; children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div>
      <h2 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {isOpen ? "▼" : "▶"} {props.title}
      </h2>
      {isOpen && (
        <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {props.children}
        </section>
      )}
    </div>
  );
}

export function Movie(props: IMovie) {
  return (
    <div
      className="col"
      onClick={() => {
        console.log("Wybrano film: " + props.title);
      }}
    >
      <div className="card h-100">
        <img
          src={props.cover}
          height="75%"
          className="card-img-top"
          alt={props.title}
        />
        <div className="card-body">
          <p className="card-title">{props.title}</p>
          <p className="card-text">{props.yearRelease}</p>
          <button
            onClick={(event) => {
              console.log("Pokaż szczegóły dla: " + props.title);
              event.stopPropagation();
            }}
          >
            Pokaż szczegóły
          </button>
          {props.rating >= 8 && <p className="card-text">Świetna ocena!</p>}
        </div>
      </div>
    </div>
  );
}
export function Book(props: IBook) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.cover} height="75%" className="card-img-top" />
        <div className="card-body">
          <p className="card-title"> {props.title}</p>
          <p className="card-text">Year: {props.yearRelease}</p>
          <p className="card-text">Pages: {props.pages}</p>
          {props.yearRelease < 2000 && <p className="card-text">Klasyka</p>}
        </div>
      </div>
    </div>
  );
}
export function Music(props: IMusic) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={props.cover} className="card-img-top" alt={props.title} />
        <div className="card-body">
          <p className="card-title">{props.title}</p>
          <p className="card-text">{props.yearRelease}</p>
          <p className="card-text">{props.author}</p>
          <p className="card-text">{props.genre}</p>

          {props.songs.length > 0 ? (
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Song Title</th>
                  <th className="text-end">Duration</th>
                </tr>
              </thead>
              <tbody>
                {props.songs.map((song, index) => (
                  <tr
                    key={index}
                    onClick={() => handleSongClick(song.songTitle, props.title)}
                  >
                    <td>{index + 1}</td>
                    <td>{song.songTitle}</td>
                    <td className="text-end">{song.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="alert alert-warning" role="alert">
              Brak utworów
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
