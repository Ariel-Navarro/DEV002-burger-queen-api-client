import decrease from "../img/decrease.png"
import increase from "../img/increase.png"
import cancel from "../img/cancel.png"


const OrderTaked = ({ selectedProducts }) => {
    return (
        <>
            {/* Estructura de las cartas que se van eligiendo para tomar la orden */}
            {selectedProducts.map((product) => (
                <div className="orderTaked">
                    <div className="descriptionProduct">

                        <div className="orderTaked" key={product.id}>
                            <p className="nameProductOrder">{product.name}</p>
                            <p className="price">S/ {product.price}</p>
                        </div>

                    </div>

                    <div>
                        <p className="nameProductOrder">Taco</p>
                        <p className="price">S/ 8</p>
                    </div>
                    <div>
                        <img className="iconOrderTaked" width={'25px'} src={decrease}></img>
                        <p>2</p>
                        <img className="iconOrderTaked" width={'25px'} src={increase}></img>
                    </div>
                    <div>
                        <img className="iconOrderTaked" width={'25px'} src={cancel}></img>
                    </div>
                </div>
            ))}
            
        </>
    )
};

export default OrderTaked;