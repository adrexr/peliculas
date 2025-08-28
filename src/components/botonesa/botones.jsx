import './botones.css'

export default function Botones({clickAnterior, clickSiguiente}) {
return (
    <div className="botones">
        <button onClick={clickAnterior} className="butonn">anterior</button>
        <button onClick={clickSiguiente} className="butonnn">siguiente</button>
    </div>
)
}