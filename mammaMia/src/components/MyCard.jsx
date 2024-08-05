import Card from 'react-bootstrap/Card'
import Boton from './Boton'


const MyCard = ({image, title, colorButton, textButton}) => {
    return (
        <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Boton colorButton={colorButton} textButton={textButton} />
        </Card.Body>
        </Card>
    )
}

export default MyCard