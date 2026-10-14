interface IMedia {
  title: string;
  yearRelease: number;
  cover: string;
}
interface IMovie extends IMedia {

}
interface IBook extends IMedia{
  author: string;
}
interface IMusic extends IMedia{
  author?: string;
  songs?: ISong[];
}
interface ISong {
  songTitle: string;
  duration: string;
}

function Movie(props: IMovie) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={props.cover} height={400} width={300} />
      <p>{props.title}</p>
      <p>{props.yearRelease}</p>
    </div>
  );
}
function Book(props: IBook) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={props.cover} height={400} width={300} />
      <p>{props.title}</p>
      <p>{props.yearRelease}</p>
      <p>{props.author}</p>
    </div>
  );
}
function Music(props: IMusic) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={props.cover} height={400} width={300} />
      <p>{props.title}</p>
      <p>{props.yearRelease}</p>
      <p>{props.author}</p>

      <table>
        <tr>
          <th>#</th>
          <th>Song Title</th>
          <th>Duration</th>
        </tr>
        {props.songs?.map((song, index) => (
          <tr>
            <td>{index + 1}</td>
            <td>{song.songTitle}</td>
            <td>{song.duration}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
function App() {
  return (
    <div>
      <h2>Movies</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Movie
          title="The Matrix"
          yearRelease={1999}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBiXhAF9CKFZb-AhFH3HF7nivkRhUTFbQXRB7VUlFtJLwGI_apHxgDp_F1RnYI3k0dfCYQCEDZkpwdRtLbuT4vVyCaSXQo0V4xHgk0i5c&s=10"
        />
        <Movie
          title="Cars"
          yearRelease={2006}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyj2Dsw1ETDZT2gYpEP7YIwgRn5w96HXQ_Xg25TyihUPgt3fNBzcj46xGCcaAtz2Nu2bt6JPCKRHPUFBFDWL70tcJ-hNJ-Syo_2lKxVIbQ&s=10"
        />
        <Movie
          title="Harry Potter and the Prisoner of Azkaban"
          yearRelease={2004}
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xCyG_BBPuYioiLHhegv57Mj2EbYjdZPD9TwI3FkIdDgezcJici_25pxxZLScyD8foo-ccy7Xlshw8F2NTwKMDfeYvYYVWNpP-vdGgyVdeg&s=10"
        />
      </section>
      <h2>Books</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px" }}>
        <Book
          title="The Hobbit"
          yearRelease={1937}
          author="J.R.R. Tolkien"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwJUwn-QPZQX9CiCOhzv0LOhO3q77frc-A9q58TU6tQ&s=10"
        />
        <Book
          title="Crime and Punishment"
          yearRelease={1866}
          author="Fiodor Dostojewski"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7naitelD_J_N78B_h1CSTdwT4KeYEd8WyiP3eSXVMRA&s=10"
        />
        <Book
          title="1984"
          yearRelease={1949}
          author="George Orwell"
          cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj89yAs1mZbuLqWY-y9Lq9e6Mo9bhlDkEwBBT0_kIZhg&s=10"
        />
      </section>
      <h2>Music</h2>
      <section>
      <Music title="The Documentary" yearRelease={2005} author="The Game" cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmRsqYHNNTwNKckXkskCjouylYEB4jcKKKadXKwQG4kQ&s" songs={[{"songTitle":"Intro to the Documentary", "duration":"0:32"}]}/>
      </section>
    </div>
  );
}
export default App;
