 export default function Carta (){
 return (
  <div className="card" >
                  <img src={`${IMAGE_URL}${peli.poster_path}`} alt="" />
                  <h3>{peli.title ? peli.title : peli.name}</h3>
                </div>
 )
 }