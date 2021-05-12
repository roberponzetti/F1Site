import React, {Fragment} from 'react';
import MainMenuNav from './Organisms/MainMenuNav'
import Home from './Pages/Home'
import Noticias from './Pages/Noticias'
import Posiciones from './Pages/Posiciones'
import Pilotos from './Pages/Pilotos'
import Equipos from './Pages/Equipos'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

const App = () => (
  <Router>
    <MainMenuNav/>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/noticias" component={Noticias} />
      <Route path="/posiciones" component={Posiciones} />
      <Route path="/pilotos" component={Pilotos} />
      <Route path="/equipos" component={Equipos} />
      {/* 
      <Route path="/cursos" component={Courses} />
      <Route path="/historial/:valor" component={Historial} />
      <Route path="/historial" component={Historial} />
      <Route path="/usuarios" component={Users} />
      <Route path="/formulario" component={() => <Form name="Pagina de contacto" />} /> */}
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Pagina no encontrada</span>
        </div>
      )} />
    </Switch>
  </Router>
);

export default App;