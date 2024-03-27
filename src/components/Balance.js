import "./Balance.css"
import data from "./../data"

const Balance = () => {
    
    const jmena = data.map( (zakaznik) =>{
        return zakaznik.name
        })

    return(<div>
        <p>{jmena}</p>
    </div>)
}
export default Balance