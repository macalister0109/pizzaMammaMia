
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MyCard from './components/MyCard'


function App() {
  
  return (
    <>
      <h1>Bienvenido a Mamma Mia</h1>
      <MyCard 
        image="https://cdn.papajohns.cl/pictures/pizzas/napolitana_1691158448.jpg" 
        title="Pizza Napolitana" 
        colorButton="success" 
        textButton="Comprar"
      />

      
    </>
  )
}

export default App
