import React from 'react';
import Contact from '../Components/Contact/Contact';
import Home from '../Components/Home/Home';
import Hospital from '../Components/Hospital/Hospital';
import Navbar from '../Components/Navbar/Navbar';
import NavbarLogged from '../Components/NavbarLogged/NavbarLogged';
import Notes from '../Components/Notes/Notes';
import Plans from '../Components/Plans/Plans';
import Team from '../Components/Team/Team';

export default function HomePage() {
  const logged = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      {!logged ? <Navbar /> : <NavbarLogged />}
      <div className="home">
      <Home />
      <Notes />
      <Hospital />
      <Team />
      <Plans />
      <Contact />
      </div>
    </div>
  );
};
