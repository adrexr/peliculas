import './barra.css'
import logo from '../../assets/Logo.png'

export default function Barra (){
return (
    <div className="barra">
        <img src={logo} alt=""/>
        <input type="text" placeholder='Buscar pelicula'/>
    </div>

        
)
}