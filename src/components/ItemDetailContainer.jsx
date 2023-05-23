import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "./json/productos.json";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productos.find(item => item.idx === parseInt(id)));
            }, 2000);
        });

        promesa.then(data => {
            setItem(data);
        });
    }, [id]);

    return (
        <>
            <ItemDetail producto={item} />
        </>
    )
}

export default ItemDetailContainer;