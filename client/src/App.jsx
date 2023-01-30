import React from 'react'
import {BrowserRouter,Route,Routes,Link,Navigate} from 'react-router-dom';
import {Home ,CreatePost} from './pages';
import {logo} from './assets';
const App = () => {
  return (
    <BrowserRouter>
      <header className='d-flex justify-content-between align-items-center bg-white px-5 py-4 px-sm-4' style={{borderBottom:'2px solid #e6ebf4'}}>
        <Link to={'/'}>
          <img src={logo} alt='logo' style={{width:'28%'}}/>
        </Link>
        <Link to={'/create-post'} className='text-white px-4 py-2 fs-medium rounded-4' style={{textDecoration:'none',backgroundColor:'#6469ff'}}>
          Create
        </Link>
      </header>
      <main className='p-5 px-sm-4 py-sm-5' style={{backgroundColor:'#f9fafe',minHeight:'calc(100vh - 90px)'}}>
        <Routes>
          <Route path='/' exact element={<Navigate to={'/Home'} replace='true'/>}/>
          <Route path='/Home' element={<Home />}/>
          <Route path='/create-post' element={<CreatePost />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App