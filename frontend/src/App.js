//eslint-disable-next-line
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Category from './components/Category';
import Footer from './components/Footer';
import Find_me from './components/Find_me';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';
import React from 'react';
import Tree_map from './components/Tree_map';

export default () => {

  const home = () =>{
    return <React.Fragment>
      <Searchbar />
      <Category api='http://localhost:5000' title='Categories'/>
    </React.Fragment>
  }

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/fruit' element={<Category api='http://localhost:5000/fruits' title='Fruits plants/trees'/>}></Route>
          <Route path='/vegetable' element={<Category api='http://localhost:5000/vegetable' title='Vegetable plants/trees'/>}></Route>
          <Route path='/ornamental' element={<Category api='http://localhost:5000/ornamental' title='Ornamental plants/trees'/>}></Route>
          <Route path='/flower' element={<Category api='http://localhost:5000/flower' title='Flowering plants/trees'/>}></Route>
          <Route path='/cactus' element={<Category api='http://localhost:5000/cactus' title='Cactus plants/trees'/>}></Route>
          <Route path='/medicinal' element={<Category api='http://localhost:5000/medicinal' title='Medicinal plants/trees'/>}></Route>
          <Route path='/:category/:id' element={<Find_me />}></Route>
          <Route path='/treemap' element={<Tree_map/>}></Route>
          <Route path='/' element={home()} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

//5vaYF3nE2U9HPXfEw220UTtiHyhauaBIY3MPdWgRf2VfFmo4N0dI0iYI8YU5SRXl