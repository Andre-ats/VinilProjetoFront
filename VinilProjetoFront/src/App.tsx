import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { VisualizarVinis } from './Pages/UsuarioPadrao/PageVisualizarVinils/PageVisualizarVinils'

function App() {

  return (
    <Fragment>
      <Routes>
        <Route path='/VisualizarVinis' element={<VisualizarVinis/>}/>
      </Routes>
    </Fragment>
  )
}

export default App
