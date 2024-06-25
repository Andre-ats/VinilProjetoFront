import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { VisualizarVinis } from './Pages/UsuarioPadrao/PageVisualizarVinils/PageVisualizarVinils'
import { PageVisualizarVinilEspecifico } from './Pages/UsuarioPadrao/PageVisualizarVinilEspecifico/PageVisualizarVinilEspecifico'
import { PageLogin } from './Pages/UsuarioPadrao/PageLogin/PageLogin'


function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/VisualizarVinis' element={<VisualizarVinis/>}/>
        <Route path='/VisualizarVinisEspecifico/:vinil' element={<PageVisualizarVinilEspecifico/>}/>
        <Route path='/Login' element={<PageLogin/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
