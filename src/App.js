import './App.css'
import './Spinner.css'
import React,{useState} from 'react'
import Navbar from './component/Navbar'
import News from './component/News'

import {BrowserRouter,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = ()=> {
const apikey="76cb4686a15d478fb5df46a0f9c9d30f";
  const [progress, setprogress] = useState(0);
 

  const pageSize="15";
 
    return (
      <div>
        <BrowserRouter>
        <LoadingBar
        color='#f11946'
        progress={progress}
       
      />
        <Navbar/>
        <Routes>
        <Route index element={<News  apikey={apikey} setprogress={setprogress}   pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/News-App/' element={<News  apikey={apikey} setprogress={setprogress}   pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/News-App/news' element={<News  apikey={apikey} setprogress={setprogress}   pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/News-App/business' element={<News  apikey={apikey} setprogress={setprogress}   key={"business"} pageSize={pageSize} country="in" category="business" />} />
        <Route exact path='/News-App/entertainment' element={<News  apikey={apikey} setprogress={setprogress}   key={"entertainment"} pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path='/News-App/general' element={<News  apikey={apikey} setprogress={setprogress}   key={"general"} pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/News-App/health' element={<News  apikey={apikey} setprogress={setprogress}   key={"health"} pageSize={pageSize} country="in" category="health" />} />
        <Route exact path='/News-App/science' element={<News  apikey={apikey} setprogress={setprogress}   key={"science"} pageSize={pageSize} country="in" category="science" />} />
        <Route exact path='/News-App/sports' element={<News  apikey={apikey} setprogress={setprogress}   key={"sports"} pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path='/News-App/technology' element={<News  apikey={apikey} setprogress={setprogress}   key={"technology"} pageSize={pageSize} country="in" category="technology" />} />
       
        </Routes>
        </BrowserRouter>
      </div>
    )

}

export default App;