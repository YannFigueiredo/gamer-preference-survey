import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import Records from './pages/Records';
import Graphics from './pages/Graphics';
import Registration from './pages/Registration';
import NotFound from './pages/NotFound';

import Header from './components/Header';

export function RoutesApp(){
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/records' element={<Records/>}/>
                <Route path='/graphics' element={<Graphics/>}/>
                <Route path='/registration' element={<Registration/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );  
}