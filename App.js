import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import {
 Route,
  Routes
} from "react-router-dom";
import NavBar from './components/navbar.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';
import ExercisesList from './components/exercises-list.component';
import EditExercises from './components/edit-exercises.component';
import "react-datepicker/dist/react-datepicker.css"; 
function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>

     <Route path="/" element={<ExercisesList/>}/>
     <Route path="/edit/:id" element={<EditExercises/>}/>
     <Route path="/create" element={<CreateExercise/>}/>
     <Route path="/user" element={<CreateUser/>}/>
     
    </Routes> 
    </BrowserRouter>
    
  );
}

export default App;
