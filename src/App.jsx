import React from 'react'
// import Home from './Home'
// import Functional from './component/Functional'
// import Classcom from './component/Classcom'
// import Usestate from './Hooks/Usestate'
// import UseEffect from './Hooks/UseEffect'
// import Usememo from './Hooks/Usememo'
// import Usecallback from './Hooks/Usecallback'
import List from './list/List'
// import Form from './forms/Form'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Navbar from './header/Navbar'
import Footer from './header/Footer'
import HomePage from './pages/HomePage'
// import Menu from './pages/Menu'
// import Uncontrol from './forms/Uncontrol'
// import Crud from './Crud/Crud'

const App = () => {
  return (
    <div>
      {/* <h1 className='App'>Hello world</h1>
      <h2>{name}</h2>
      <Home/>

      
      <Functional name="Naresh"></Functional>
      <Classcom/>

      <Usestate/>
      <UseEffect/>
      <Usememo/>
      <Usecallback/>
      <List/> */}
      {/* <Form/> */}
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path='/menu' element={<List/>}/>
      </Routes>

      <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}

export default App


