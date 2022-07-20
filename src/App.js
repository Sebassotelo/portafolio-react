import './App.css';
import Lista from './componentes/listaDeTareas/lista';

function App() {
  return (
    <div className='App'>
      <div className='contenedor'>
        <h1>Mis Tareas</h1>
        <div className='contenedor-tareas'>

          <Lista/>

        </div>
      </div>
    </div>
  );
}

export default App;
