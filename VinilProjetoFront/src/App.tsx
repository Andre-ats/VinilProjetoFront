import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from 'react-router-dom'
import { VisualizarVinis } from './Pages/UsuarioPadrao/PageVisualizarVinils/PageVisualizarVinils'
import { PageVisualizarVinilEspecifico } from './Pages/UsuarioPadrao/PageVisualizarVinilEspecifico/PageVisualizarVinilEspecifico'
import { PageLogin } from './Pages/UsuarioPadrao/PageLogin/PageLogin'
import { PagePerfil } from './Pages/UsuarioComprador/PagePerfil/PagePerfil'
import { PageAtendimento } from './Pages/UsuarioComprador/PageAtendimento/PageAtendimento'
import { useEffect, useState } from 'react'
import { RecuperarToken } from './API/Requests/Token/RecuperarToken'
import { decodeToken } from './Bibliotecas/DecodeToken'
import { PageCriarVinis } from './Pages/Admin/PageCriarVinis/PageCriarVinis'


function App() {

  const [role, setRole] = useState<string[]>([])

  useEffect(() => {
    const token = RecuperarToken()
    if(token){
      setRole(decodeToken(token))
    }
  },[RecuperarToken()])

  return (
    <Fragment>
      <Routes>
        <Route path='/VisualizarVinis' element={<VisualizarVinis/>}/>
        <Route path='/VisualizarVinisEspecifico/:vinil' element={<PageVisualizarVinilEspecifico/>}/>
        <Route path='/Perfil' element={<PagePerfil/>}/>
        <Route path='/Atendimento' element={<PageAtendimento/>}/>
        <Route path='/Login' element={<PageLogin/>}/>
        {role.includes('Admin') &&(
          <Route path='/CriacaoVinil' element={<PageCriarVinis/>}/>
        )}
      </Routes>
    </Fragment>
  )
}

export default App
