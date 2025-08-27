import { useState } from "react";
import { useEffect } from "react";
import { API_URL, IMAGE_URL, optionsFetch } from "./utils/constants";
import './App.css'
import Carta from "./components/card/card";
import Barra from "./components/barra/barra";
import Favoritos from "./components/favoritos/favoritos";



export default function App() {

  const [trending, setTrending] = useState('all');
  const [results, setResults] = useState(null);


  const obtenerTrending = async () => {
    const response = await fetch(`${API_URL}/trending/${trending}/day`, optionsFetch);
    const data = await response.json();
    console.log(data);
    setResults(data);
  }

  useEffect(
    () => {
      obtenerTrending();
    }, []
  );

  return (
    <div>
      <Barra />
      <Favoritos />
      
      <div>
        {
          results ?
            (
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