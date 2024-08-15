import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { MovieCollection } from "./@types/movie";

const URL: string = "http://localhost:3000/movies";

export function App() {
  const [collection, setCollection] = useState<MovieCollection>();

  useEffect(() => {
    const fetchData = async (url: string) => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("Erro while fetching data");
        const json = await res.json();
        setCollection(json);
      } catch (error) {
        console.error("Fetch failed:", error);
      }
    };

    fetchData(URL);
  }, [])

  return (
    <div className="flex flex-col items-center 
">
      <Header />
      <main className="flex flex-col p-10 h-full w-full gap-10 text-zinc-100 font-bold text-2xl shadow-inset-left">
        <Section label={"Watch it again"} movies={collection?.watch_again} />
        <Section label={"Trending Now"} movies={collection?.trending} />
        <Section label={"Continue Watching"} movies={collection?.continue} />
        <Section label={"Pupular on Netflix"} movies={collection?.popular} />
      </main>
      <Footer />
    </div>
  )
}