import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    /* useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.idx === parseInt(id)));
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        });
    }, [id]); */

    useEffect(() => {
        const db = getFirestore();
        const producto = doc(db, "items", id);
        getDoc(producto).then(resultado => {
            setItem({id:resultado.id, ...resultado.data()});
            setLoading(false);
        });
    }, [id])

    return (
        <>
            {loading ? <Loading /> : <ItemDetail producto={item} />}
        </>
    )
}

export default ItemDetailContainer;