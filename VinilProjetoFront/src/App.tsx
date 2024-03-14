import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { VisualizarVinils } from './Pages/UsuarioPadrao/PageVisualizarVinils/PageVisualizarVinils'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/VisualizarVinils' element={<VisualizarVinils/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
