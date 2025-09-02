import './botones.css'

export default function Botones({clickAnterior, clickSiguiente, pagina}) {
return (
    <div className="botones">
        {
            pagina > 1 ?
            (
                <button onClick={clickAnterior} className="butonn">anterior</button>
            )
            :
            (
                null
            )
        }   
        
        <button onClick={clickSiguiente} className="butonnn">siguiente</button>
    </div>
)
}