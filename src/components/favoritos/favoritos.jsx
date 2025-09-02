import './favoritos.css'

export default function Favoritos({ generos, selecccionarGenero, generoo }) {
  return (
    <div className="favoritos">
      {
        generos && generos.map((genero) => (
          <button key={genero.id} className={generoo == genero.id? 'nara' : 'ne'} onClick={() => selecccionarGenero(genero.id)}
          >
            {genero.name}
          </button>
        ))
      }
    </div>
  )
}