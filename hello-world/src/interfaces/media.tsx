interface IMedia {
  title: string;
  yearRelease: number;
  cover: string;
}
export interface IMovie extends IMedia {
  rating:number;
}
export interface IBook extends IMedia {
  pages: number;
}
export interface IMusic extends IMedia {
  genre:string;

  author: string;
  songs: ISong[];
}
interface ISong {
  songTitle: string;
  duration: string;
}


