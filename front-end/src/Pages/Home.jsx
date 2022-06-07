import React from 'react';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';
import NavbarLogged from '../Components/NavbarLogged/NavbarLogged';

export default function HomePage() {
  const logged = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {!logged ? <Navbar /> : <NavbarLogged />}
      <Home />
    </div>
  );
};
