// import './App.css'
// import index.css file
import './index.css'

import { Routes,Route } from "react-router-dom"
// import register page
import RegisterPage from "./pages/RegisterPage"
function App() {

  return (
    <>
<Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route  path="/register" element={< RegisterPage/>} />
    

</Routes>
{/* <h1 className="text-center bg-slate-400">hello sr</h1> */}
    </>
  )
}

export default App
