import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components/page/home/Home";
import PokemonList from "./components/page/pokemon/PokemonList";
import RegisterPokemon from "./components/page/pokemon/RegisterPokemon";
import SignIn from "./components/page/auth/SignIn";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/mng" element={<Layout />}>
          <Route path="pokemon" element={<PokemonList />} />
          <Route path="pokemon/regist" element={<RegisterPokemon />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
