import exitIcon from "../img/exitIcon.png"
import { deleteProduct } from "../../request";

const ModalDelete = ({ estado, cambiarEstado }) => {

    return (
        <div>
            {estado && 
            <div className="overlay" >
            <div className="bodyOfModal">
                <img id="exit" onClick={() => cambiarEstado(false)} className="exitIcon" src={exitIcon} />
                <p>¿Estás segura(o) que quieres eliminar este producto?</p>
                <button className="buttonDeleteModal" type="button" onClick={}>Eliminar producto</button>
            </div>
        </div>
            }
        </div>
        
    )
}

export default ModalDelete;
