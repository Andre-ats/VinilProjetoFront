import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { VisualizarVinis } from './Pages/UsuarioPadrao/PageVisualizarVinils/PageVisualizarVinils'
import { PageVisualizarVinilEspecifico } from './Pages/UsuarioPadrao/PageVisualizarVinilEspecifico/PageVisualizarVinilEspecifico'


function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/VisualizarVinis' element={<VisualizarVinis/>}/>
        <Route path='/VisualizarVinisEspecifico/:vinil' element={<PageVisualizarVinilEspecifico/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
