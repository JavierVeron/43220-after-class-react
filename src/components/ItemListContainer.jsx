import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "./json/productos.json";
import ItemList from "./ItemList";
//import { getFirestore, doc, getDoc } from "firebase/firestore";
//import { getFirestore, collection, getDocs } from "firebase/firestore";
import { getFirestore, collection, getDocs, where, query } from "firebase/firestore";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {id} = useParams();
 
    // Acceder a los productos desde el archivo .json
    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000);
        });

        promesa.then(data => {
            setItems(data);
        });
    }, [id]); */


    // Acceder a un producto desde firestore
    /* useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", "4QxuGEhTx0rDC1I78SWr");
        getDoc(producto).then(resultado => {
            if (resultado.exists()) {
                setItems({id:resultado.id, ...resultado.data()})
            } else {
                console.error("Error! No se encontró el producto!");
            }
        });
    }, []); */


    // Acceder a una colección de documentos desde firestore
    /* useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        getDocs(itemsCollection).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, []); */

    // Acceder a una colección de documentos desde firestore
    useEffect(() => {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        const q = id ? query(itemsCollection, where("categoria", "==", id)) : itemsCollection;
        getDocs(q).then(resultado => {
            if (resultado.size > 0) {
                setItems(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
            } else {
                console.error("Error! No se encontraron productos en la colección!");
            }
        });
    }, [id]);

    return (
        <div className="container my-5">
            <div className="row">
                <ItemList productos={items} />
                {/* <div className="col-md-4 offset-md-2">
                    <img src={items.imagen} alt={items.nombre} className="img-fluid" />
                </div>
                <div className="col-md-4">
                    <h2>{items.nombre}</h2>
                    <p>${items.precio}</p>
                </div> */}
            </div>
        </div>
    )
}

export default ItemListContainer;