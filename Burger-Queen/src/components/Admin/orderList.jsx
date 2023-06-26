import iconReady from "../img/cena.png"
import cenaSinColor from "../img/cenaSinColor.png"
import { getOrder } from "../../request";
import { useState, useEffect, React } from "react";
// import { editOrder } from "../../request";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  const fetchOrders = async () => {
    const fetchedOrders = await getOrder();
    setOrders(fetchedOrders);
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  // Creamos un objeto para almacenar el estado de cada orden
  const [orderDetails, setOrderDetails] = useState({});

  // Función para actualizar el estado de una orden en particular
  const toggleOrderDetails = (orderId) => {
    setOrderDetails((prevDetails) => ({
      ...prevDetails,
      [orderId]: !prevDetails[orderId],
    }));
  };

  // Función para actualizar el estado de una orden a 'delivered'
  const markOrderAsDelivered = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: "delivered" } : order
      )
    );
  };

  return (
    <>
      {orders.map((order) => (
        <div className="bodyList" key={order.id}>
          <div className="TopBodyListoOrder">
            <p>Pedido: {order.id}</p>
            <p>{order.dateEntry}</p>
          </div>
          <p className="toClient">Para: {order.client}</p>
          <div className="BodyOrder">
            <button onClick={() => toggleOrderDetails(order.id)}>
              Mostrar productos
            </button>
            {orderDetails[order.id] && (
              <div>
                {order.products.map((product) => (
                  <div className="dataOfOrder" key={product.product.id}>
                    <p>{product.product.name}</p>
                    <img
                      src={product.product.image}
                      width={"20px"}
                      alt={product.product.name}
                    />
                    <p>Cantidad: {product.qty}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {order.status === "pending" ? (
            <img
              width="40px"
              src={cenaSinColor}
              alt="icono-listo-sin-color"
              onClick={() => markOrderAsDelivered(order.id)}
            />
          ) : (
            <img
              width="40px"
              src={iconReady}
              alt="icono-listo-a-color"
            />
          )}
        </div>
      ))}
    </>
  );
};


export default OrderList;