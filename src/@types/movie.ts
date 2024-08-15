export type Movie = {
  id: string;
  title: string;
  bg: string;
}

export type MovieCollection = {
  watch_again: Movie[];
  trending: Movie[];
  continue: Movie[];
  popular: Movie[];
}