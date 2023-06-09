import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.id} producto={producto} />)}
        </>
    )
}

export default ItemList;