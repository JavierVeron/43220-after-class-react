import { useContext, useState } from "react";
import { CartContext } from "./context/CartContext";
import { addDoc, collection, doc, getFirestore, updateDoc, writeBatch } from "firebase/firestore";

const Checkout = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [orderId, setOrderId] = useState("");
    const {cart, sumTotal} = useContext(CartContext);

    const generarOrden = () => {
        if (nombre.length === 0) {
            return false;
        }

        if (email.length === 0) {
            return false;
        }

        if (telefono.length === 0) {
            return false;
        }

        const buyer = {name:nombre, phone:telefono, email:email}
        const items = cart.map(item => ({id:item.id, title:item.titulo, price:item.precio}));
        const fecha = new Date();
        const date = `${fecha.getFullYear()}-${fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHours()}:${fecha.getMinutes()}`;
        const total = sumTotal();
        const order = {buyer:buyer, items:items, date:date, total:total};
        //console.log(order);

        // Insertar un Documento en Firestore
        const db = getFirestore();
        const OrdersCollection = collection(db, "orders");
        addDoc(OrdersCollection, order).then(resultado => {
            setOrderId(resultado.id);
        })
        .catch(resultado => {
            console.log("Error! No se pudo completar la compra!");
        });

        // Editar un Documento en Firestore
        //const db = getFirestore();
        /* const orderDoc = doc(db, "orders", orderId);
        updateDoc(orderDoc, {total:10000, cant:2}); */

        // Editar varios documentos en batch en Firestore
        /* const batch = writeBatch(db);
        const doc1 = doc(db, "orders", "guPBLl2K1oYLGD91YdfG");
        const doc2 = doc(db, "orders", "hzEug3rxs2sqbvsINviL");
        batch.update(doc1, {date:"2023-05-25 20:23"});
        batch.update(doc2, {total:20000});
        batch.commit(); */
    }

    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-5 offset-md-1">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Nombre</label>
                            <input type="text" className="form-control" onInput={(e) => {setNombre(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="text" className="form-control" onInput={(e) => {setEmail(e.target.value)}} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Teléfono</label>
                            <input type="text" className="form-control" onInput={(e) => {setTelefono(e.target.value)}} />
                        </div>
                        <button type="button" className="btn btn-light" onClick={generarOrden}>Generar Orden</button>
                    </form>
                </div>
                <div className="col-md-5">
                    <table className="table">
                        <tbody>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td className="align-middle">{item.titulo}</td>
                                        <td className="align-middle">{item.cantidad} x ${item.precio}</td>
                                        <td className="align-middle text-center">${item.cantidad * item.precio}</td>
                                    </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={3} className="align-middle text-end">Total a Pagar</td>
                                <td className="align-middle text-center">${sumTotal()}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row my-5">
                <div className="col text-center">
                    {orderId ? <div className="alert alert-warning" role="alert">
                        <h1 className="fs-1 text">Gracias por tu Compra!</h1>
                        <p>Tu Orden de Compra es: <b>{orderId}</b></p>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Checkout;