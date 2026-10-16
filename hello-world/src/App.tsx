

interface IMedia {
  title: string;
  yearRelease: number;
  cover: string;
}
interface IMovie extends IMedia {
  rating:number;
}
interface IBook extends IMedia {
  pages: number;
}
interface IMusic extends IMedia {
  genre:string;

  author: string;
  songs: ISong[];
}
interface ISong {
  songTitle: string;
  duration: string;
}
let movies : IMovie[]= [{
  "title":"The Matrix",
  "yearRelease" : 1999,
  "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnBiXhAF9CKFZb-AhFH3HF7nivkRhUTFbQXRB7VUlFtJLwGI_apHxgDp_F1RnYI3k0dfCYQCEDZkpwdRtLbuT4vVyCaSXQo0V4xHgk0i5c&s=10",
  rating:10
},
{"title":"Cars",
          "yearRelease":2006,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyj2Dsw1ETDZT2gYpEP7YIwgRn5w96HXQ_Xg25TyihUPgt3fNBzcj46xGCcaAtz2Nu2bt6JPCKRHPUFBFDWL70tcJ-hNJ-Syo_2lKxVIbQ&s=10",
    rating:7


},
{"title":"Harry Potter and the Prisoner of Azkaban",
          "yearRelease":2004,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xCyG_BBPuYioiLHhegv57Mj2EbYjdZPD9TwI3FkIdDgezcJici_25pxxZLScyD8foo-ccy7Xlshw8F2NTwKMDfeYvYYVWNpP-vdGgyVdeg&s=10",
          rating:8
        },
        {"title":"F1",
          "yearRelease":2025,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssiNayi8SkxMl_EkuJFbZnx3wc_qA-thjWgHZnNAOXw&s=10",
          rating:9
        },
        {"title":"Oppenheimer",
          "yearRelease":2023,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkAmMiZULmpY1cmxk4iMzthKH3zJxzFckHezXTZRDdSSU3B0K1QyfOjrkWwJqFz_05dECXpD7_JbkIwCardzBaegxNPTmv7mXae_72WSXeZw&s=10",
          rating:10
        },
        
      

]

let albums : IMusic[] = [{
  "title":"The Documentary",
          "genre":"RAP",
          "yearRelease":2005,
          "author":"The Game",
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRukwFIyhKBefhW89drkBUJqMOzodrccdN-daie7bOYTQ&s",
          "songs":[
  { "songTitle": "Intro", "duration": "0:32" },
  { "songTitle": "Westside Story", "duration": "3:43" },
  { "songTitle": "Dreams", "duration": "4:46" },
  { "songTitle": "Hate It Or Love It", "duration": "3:26" },
  { "songTitle": "Higher", "duration": "4:05" },
  { "songTitle": "How We Do", "duration": "3:55" },
  { "songTitle": "Don't Need Your Love", "duration": "4:26" },
  { "songTitle": "Church For Thugs", "duration": "4:00" },
  { "songTitle": "Put You On The Game", "duration": "4:14" },
  { "songTitle": "Start From Scratch", "duration": "4:07" },
  { "songTitle": "The Documentary", "duration": "4:11" },
  { "songTitle": "Runnin'", "duration": "4:26" },
  { "songTitle": "No More Fun And Games", "duration": "2:37" },
  { "songTitle": "We Ain't", "duration": "4:46" },
  { "songTitle": "Where I'm From", "duration": "3:08" },
  { "songTitle": "Special", "duration": "3:57" },
  { "songTitle": "Don't Worry", "duration": "3:34" },
  { "songTitle": "Like Father, Like Son", "duration": "5:27" }
]

}, {
  "title":"Doo-Wops & Hooligans",
  "genre":"POP",
  "yearRelease" : 2010,
  "author" :"Bruno Mars",
  "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZtOmmyyDRk9i1EKQyobj5SXxX_vIGAYhS_5yLyUK3HQ&s=10",
  "songs":[
  { "songTitle": "Grenade", "duration": "3:42" },
  { "songTitle": "Just the Way You Are", "duration": "3:40" },
  { "songTitle": "Our First Time", "duration": "4:03" },
  { "songTitle": "Runaway Baby", "duration": "2:27" },
  { "songTitle": "The Lazy Song", "duration": "3:15" },
  { "songTitle": "Marry You", "duration": "3:50" },
  { "songTitle": "Talking to the Moon", "duration": "3:37" },
  { "songTitle": "Liquor Store Blues", "duration": "3:49" },
  { "songTitle": "Count On Me", "duration": "3:17" },
  { "songTitle": "The Other Side", "duration": "3:47" }
]
}]

let books: IBook[] = [{
  "title":"The Hobbit",
          "yearRelease":1937,
          "pages":750,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfwJUwn-QPZQX9CiCOhzv0LOhO3q77frc-A9q58TU6tQ&s=10"
},
{
  "title":"Crime and Punishment",
          "yearRelease":1866,
          "pages":500,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7naitelD_J_N78B_h1CSTdwT4KeYEd8WyiP3eSXVMRA&s=10"
},
{
  "title":"1984",
          "yearRelease":1949,
          "pages":1000,
          "cover":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj89yAs1mZbuLqWY-y9Lq9e6Mo9bhlDkEwBBT0_kIZhg&s=10"
}]
//Sotowanie 
let moviesSotedByTitle = movies.toSorted((a,b) => a.title.localeCompare(b.title))
let booksSotedByTitle = books.toSorted((a,b) => a.title.localeCompare(b.title))
let albumsSotedByTitle = albums.toSorted((a,b) => a.title.localeCompare(b.title))

let moviesAfter2010 = movies.filter(movie => movie.yearRelease > 2010)
let booksSortedByYear = books.toSorted((a,b) => a.yearRelease - b.yearRelease)
let albumWithMostSongs = albums[0]
albums.forEach(album =>{
  album.songs.length > albumWithMostSongs.songs.length;
})
function Movie(props: IMovie) {
  return (
    <div
      style={{
        width :"27%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        border: "1px solid black",
        padding: "20px",
      }}
    >
      <img src={props.cover} height="75%" width="90%" />
      <p>{props.title}</p>
      <p>{props.yearRelease}</p>
      {props.rating >= 8 && <p>Świetna ocena!</p>}
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
      <p>Year: {props.yearRelease}</p>
      <p>Pages: {props.pages}</p>
      {props.yearRelease <2000 && <p>Klasyka</p>}
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
      <p>{props.genre}</p>
      {props.songs.length > 0 ?
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
:<p>Brak utworów</p>}
    </div>
  );
}
function App() {
  return (
    <div>
      <h2>Movies</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
      {movies.map(movie =>{
        return(
            <Movie
          {...movie}
        />
        )
      })}
        
      </section>
      <h2>Books</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {books.map(book =>{
        return(
            <Book
          {...book}
        />
        )
      })}
        
      </section>
      <h2>Music</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {albums.map(album =>{
        return(
            <Music
          {...album}
        />
        )
      })}
        
      </section>
      <h2>Movies after 2010</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
      {moviesAfter2010.map(movie =>{
        return (<Movie {...movie}/>)
      })
      
      
      }
      </section>
      <h2>Books sorted by year</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {booksSortedByYear.map(movie =>{
        return (<Book {...movie}/>)
      })}
      </section>
      <h2>The album with the most songs</h2>
      <section style={{ display: "flex", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
        {<Music {...albumWithMostSongs}/>}
      </section>
    </div>
  );
}
export default App;
