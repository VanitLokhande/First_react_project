import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Cricket from './Cricket';
import Test from './Test';
import Bollywood from './Bollywood';
import Van from './Van';
import Lifted from './Lifted';
import Formfn from './Formfn';
import FormFnValidation from './FormFnValidation';
import OnclickChangecolour from './OnclickChangeColour';
// import Modal from './modal';
import HOC_City from './HOC/HOC_City';
import HOC_Countries from './HOC/HOC_Countries';
import HOC_stats from './HOC/HOC_stats';
import Parent from './Context/Parent';
import { Form, Navbar } from 'react-bootstrap';
import DataApp from './DataApp';
import NotFound from './NotFound';
import Modalcomp from './Modalcomp';
import Header from './common/Header';
import Menubar from './common/Menubar';
import Footer from './common/Footer';
import Left from './common/Left';
import Right from './common/Right';
import VanR from './VanR';
import Todo from './Todo';
import Vani from './Vani'
import EMI from './EMI/EMI';
import UseLayoutEffect from './Hooks/UseLayoutEffect';
import UseParam from './Hooks/UseParam';
import Mise from './Mise';
import UseMemo from './Hooks/UseMemo';
import UseNavigate from './Hooks/UseNavigate'
import UseCallback from './Hooks/UseCallback';
import Ups from './Ups';
import PropDrillingA from './PropDrilling/PropDrillingA';
import Colourpick from './Colourpick';
import UseReducer from './Hooks/UseReducer';
import TabSwitch from './TabSwitch';
import AxiosApi from './AxiosApi';
import CheckDelete from './CheckDelete';
import InterviewTask from './InteviewTask';
import InteviewTask2 from './InterviewTask2';















function App() {
 
  return (
    <BrowserRouter>
    <DataApp>
      <Header/>
      <Menubar/>
      <div className='row'>
        <Left/>
        <div className='col-8 text-center bg-danger bg-opacity-25'>
          

          {/* <h1>jjjjjjjjjjjj</h1> */}
          
          <Routes>
          <Route path='/Parent' element={<Parent/>}/>
            <Route path='/HOC_Countries' element={<HOC_Countries/>}/>
            <Route path='/HOC_stats' element={<HOC_stats/>}/>
            <Route path='/HOC_City' element={<HOC_City/>}/>
            {/* <Route path='/Modal' element={<Modal/>}/> */}
            <Route path='/OnclickChangecolour' element={<OnclickChangecolour/>}/>
            <Route path='/FormFnValidation' element={<FormFnValidation/>}/>
            <Route path='/Formfn' element={<Formfn />}/>
            <Route path='/cricket' element={<Cricket />}/>
            <Route path='/test' element={<Test/>}/>
            <Route path='/bollywood' element={<Bollywood/>}/>
            <Route path='/van' element={<Van/>}/>
            <Route path='/lifted' element={<Lifted/>}/>
            <Route path='/*' element={<NotFound/>}/>
            <Route path='/Modalcomp' element={<Modalcomp/>}/>
            <Route path='/VanR' element={<VanR/>}/>
            <Route path='/Todo' element={<Todo/>}/>
            <Route path='/Vani' element={<Vani/>}/>
            <Route path='/EMI' element={<EMI/>}/>
            <Route path='/UseLayoutEffect' element={<UseLayoutEffect/>}/>
            <Route path='/Mise' element={<Mise/>}/>
            <Route path='/UseParam/:id' element={<UseParam/>}/>
            <Route path='/UseMemo' element={<UseMemo/>}/>
            <Route path='/UseNavigate' element={<UseNavigate/>}/>
            <Route path='/UseCallback' element={<UseCallback/>}/>
            <Route path='/Ups' element={<Ups/>}/>
            <Route path='/PropDrillingA' element={<PropDrillingA/>}/>
            <Route path='/Colourpick' element={<Colourpick/>}/>
            <Route path='/UseReducer' element={<UseReducer/>}/>
            <Route path='/TabSwitch' element={<TabSwitch/>}/>
            <Route path='/AxiosApi' element={<AxiosApi/>}/>
            <Route path='/CheckDelete' element={<CheckDelete/>}/>
            <Route path='/InterviewTask' element={<InterviewTask/>}/>
            <Route path='/InteviewTask2' element={<InteviewTask2/>}/>

            

            

            

            

            
      </Routes>
          

        </div>
        <Right/>
      </div>
      <Footer/>
      </DataApp>
    </BrowserRouter>
    


    
    
  );
}

export default App;
