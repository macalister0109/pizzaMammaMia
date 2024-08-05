
const Producto = ({title= 'Pizza Napolitana', price='13.400', tipo='Familiar'}) => {
    
    return (
        <>
           <p>
           {title} - Precio:{price} <span>Tipo: {tipo}</span>
           </p>
        </>
        
       
    );
} 

export default Producto;