import { useEffect } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCharacters = async ({ pageParam = "1" }) => {
  const response = await axios.get(
    `https://rickandmortyapi.com/api/character?page=${pageParam}`
  );
  return response.data;
};

const App = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["characters"],
      initialData: null,
      initialPageParam: "0",
      queryFn: ({ pageParam }) => fetchCharacters({ pageParam }),
      getNextPageParam: (lastPage) => {
        // Si hay más páginas, devuelve el número de la siguiente
        return lastPage.info.next
          ? lastPage.info.next.split("page=")[1]
          : undefined;
      },
    });

  // Scroll infinito al final de la página
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50 &&
        hasNextPage &&
        !isFetchingNextPage
      ) {
        fetchNextPage();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (status === "error") return <p>Error al cargar personajes</p>;
  if (!data || !data.pages) return <p>No hay resultados</p>

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <ul>
        {data.pages.map((page, i) => (
          <div key={i}>
            {page.results.map((character) => (
              <li key={character.id} style={{ marginBottom: "10px" }}>
                <img
                  src={character.image}
                  alt={character.name}
                  style={{ width: "50px", borderRadius: "50%" }}
                />
                <span style={{ marginLeft: "10px" }}>{character.name}</span>
              </li>
            ))}
          </div>
        ))}
      </ul>
      {isFetchingNextPage && <p>Cargando más personajes...</p>}
      {!hasNextPage && <p>No hay más personajes.</p>}
    </div>
  );
};

export default App;
