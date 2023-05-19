import Item from "./Item";

const ItemList = ({productos}) => {
    return (
        <>
            {productos.map(producto => <Item key={producto.idx} producto={producto} />)}
        </>
    )
}

export default ItemList;