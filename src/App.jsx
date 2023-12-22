// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import RegisterData from './component/RegisterData'
import BookData from './component/BookData'
import { Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <>
    <div>
    <Routes>
      <Route path='/' element={<BookData/>}></Route>
      <Route path='/register' element={<RegisterData/>}></Route>
    </Routes>    
    {/* <BookData/>
    <RegisterData/> */}
    </div>
   </>
  )
}

export default App
