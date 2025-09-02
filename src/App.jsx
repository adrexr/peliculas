import { use, useState } from "react";
import { useEffect } from "react";
import { API_URL, IMAGE_URL, optionsFetch } from "./utils/constants";
import './App.css'
import Carta from "./components/card/card";
import Barra from "./components/barra/barra";
import Favoritos from "./components/favoritos/favoritos";
import Botones from "./components/botonesa/botones";



export default function App() {

  const [trending, setTrending] = useState('all');
  const [results, setResults] = useState(null);
  const [genero, setGenero] = useState(null);
  const[generos, setGeneros] = useState(null);
  const [originalResults, setOriginalResults] = useState(null);
  const [pagina, setPagina] = useState(1);

  const aumentarPagina = () => {
    setPagina(pagina + 1);
  }
  const disminuirPagina = () => {
      if (pagina > 1) {
        setPagina(pagina - 1);
      }
    }

    const selecccionarGenero = async (id) => {
      setGenero(id);
    }
  
    
      const obtenerGeneros = async () => {
        let type;
        if (trending === 'all') {
          type = 'movie';
        } else {
          type = trending;
        }
        const response = await fetch(`${API_URL}/genre/${type}/list`, optionsFetch);
        const data = await response.json();
        console.log(data);
        setGeneros(data.genres);
      }

      const obtenerResultasos = async (id) => {
        const response = await fetch(`${API_URL}/discover/${trending}?with_genres=${genero}`, optionsFetch);
        const data = await response.json();
        console.log(data);
       
      }
    
    useEffect(
      () => {
        obtenerGeneros();
      }, [trending]
    );


  const obtenerTrending = async () => {
    const response = await fetch(`${API_URL}/trending/${trending}/day?page=${pagina}`, optionsFetch);
    const data = await response.json();
    console.log(data);
    setResults(data);
    setOriginalResults(data);
  }

  const buscarPeliculaLocal = (palabra) => {
    if (!palabra.trim()) {
      setResults(originalResults);
      return;
    }

  const peliculasBuscadas = originalResults.results.filter(
    (pelicula) => {
      const titulo = pelicula.title || pelicula.name || '';
      return titulo.toLowerCase().includes(palabra.toLowerCase());
    }
  );

  console.log(peliculasBuscadas);
  setResults({ ...originalResults, results:
  peliculasBuscadas });
}


  useEffect(
    () => {
      obtenerTrending();
    }, [pagina, trending]
  );

  const buscarPelicula = (palabra) => {
    const peliculasBuscadas = results.results.filter(
      (pelicula) =>  pelicula.title.toLowerCase() || 
      pelicula.name.toLowerCase() == palabra.toLowerCase()
    
    );
    console.log(peliculasBuscadas);
    setResults(peliculasBuscadas);
  }
  const seleccionarTipo = async (tipo) => {
    const response = await fetch(`${API_URL}/trending/${tipo}/day`, optionsFetch);
    const data = await response.json();
    console.log(data);
    setResults(data);
    setTrending(tipo);
  }

  const styleButtoon = (trendingActual) => {
    return trending == trendingActual ?  
    { backgroundColor: 'orange' } 
    : 
    { backgroundColor: 'black', color: 'white'}

  }

  return (
    <div>
      <Barra busqueda={buscarPeliculaLocal} />
      <Favoritos generoo={genero} generos={generos} selecccionarGenero={selecccionarGenero}/>
      <div className="botonesTipo">
        <button className="buton" style={styleButtoon('all')} onClick={() => seleccionarTipo('all')}>Todos</button>
        <button className="buton" style={styleButtoon('tv')} onClick={() => seleccionarTipo('tv')}>Tv</button>
        <button className="buton" style={styleButtoon('movie')} onClick={() => seleccionarTipo('movie')}>Peliculas</button>
      </div>
      <Botones 
        pagina={pagina}
        clickAnterior={disminuirPagina} 
        clickSiguiente={aumentarPagina}
      />
      <div>
        {
          results ?
            (
              results &&
              results.results &&
              results.results.map(
                (peli) => (
                  <Carta props={peli} />
                )
              )
            )
            :
            (
              <h2>No hay resultados.</h2>
            )
        }
      </div>
    </div>
  )
}