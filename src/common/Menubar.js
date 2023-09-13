import React, { Children } from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import './App.css';
import { BrowserRouter,Routes,Route, Link } from 'react-router-dom';


import { Nav,Navbar } from 'react-bootstrap';


const Menubar=()=>{
    return(
        <>
            <div className="row bg-info bg-opacity-75">
                <div className="col-12">
                {/* <Navbar> */}
                    <Link to='/Parent' className='link btn btn-outline-success'>Parent</Link>
                    <Link to='/HOC_Countries' className='link btn btn-outline-success'>HOC_Countries</Link>
                    <Link to='/HOC_stats'  className='link btn btn-outline-success'>HOC_stats</Link>
                        <Link to='/HOC_City'  className='link btn btn-outline-success'>HOC_City</Link>
                         {/* <Link to='/Modal' >Modal</Link>  */}
                        <Link to='/OnclickChangecolour'  className='link btn btn-outline-success'>OnclickChangecolour</Link>
                        <Link to='/FormFnValidation'  className='link btn btn-outline-success'>FormFnValidation</Link>
                        <Link to='/Formfn'  className='link btn btn-outline-success'>Formfn</Link>
                        <Link to='/cricket'  className='link btn btn-outline-success'>Cricket</Link>
                        <Link to='/test'  className='link btn btn-outline-success'>Test</Link>
                        <Link to='/bollywood'  className='link btn btn-outline-success'>Bollywood</Link>
                        <Link to='/van'  className='link btn btn-outline-success'>Van</Link>
                        <Link to='/lifted'  className='link btn btn-outline-success'>Lifted</Link>
                        <Link to='/Modalcomp'  className='link btn btn-outline-success'>Modal</Link>
                        <Link to='/VanR'  className='link btn btn-outline-success'>VanR</Link>
                        <Link to='/Todo'  className='link btn btn-outline-success'>Todo</Link>
                        <Link to='/Vani'  className='link btn btn-outline-success'>Vani</Link>
                        <Link to='/EMI'  className='link btn btn-outline-success'>EMI</Link>
                        <Link to='/UseLayoutEffect' className='link btn btn-outline-success'>UseLayoutEffect</Link>
                        <Link to='/Mise' className='link btn btn-outline-success'>Mise</Link>
                        <Link to='/UseMemo' className='link btn btn-outline-success'>UseMemo</Link>
                        <Link to='/UseNavigate' className='link btn btn-outline-success'>UseNavigate</Link>
                        <Link to='/UseCallback' className='link btn btn-outline-success'>UseCallback</Link>
                        <Link to='/Ups'  className='link btn btn-outline-success'>Ups</Link>
                        <Link to='/PropDrillingA'  className='link btn btn-outline-success'>PropDrillingA</Link>
                        <Link to='/Colourpick'  className='link btn btn-outline-success'>Colourpick</Link>
                        <Link to='/UseReducer' className='link btn btn-outline-success'>UseReducer</Link>
                        <Link to='/TabSwitch' className='link btn btn-outline-success'>TabSwitch</Link>
                        <Link to='/AxiosApi' className='link btn btn-outline-success'>AxiosApi</Link>
                        <Link to='/CheckDelete' className='link btn btn-outline-success'>CheckDelete</Link>
                        <Link to='/InterviewTask' className='link btn btn-outline-success'>InterviewTask</Link>
                        <Link to='/InteviewTask2' className='link btn btn-outline-success'>InteviewTask2</Link>

                        

                        

                        

                        

                        

                        
            
                        

                        {/* </Navbar> */}

                </div>
            </div>
        </>
    )
}
export default Menubar;