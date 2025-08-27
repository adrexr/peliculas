import './barra.css'
import logo from '../../assets/Logo.png'

export default function Barra ({busqueda}){
return (
    <div className="barra">
        <img src={logo} alt=""/>
        <input onChange={(e) => busqueda(e.target.value)} type="text" placeholder='Buscar pelicula'/>
    </div>

        
)
}