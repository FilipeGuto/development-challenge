import React from 'react';
import { Container } from '@mui/material';
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
      <h2>Quem somos?</h2>
      <Home />
      <h2>Avaliações</h2>
      <Notes />
      <h2>Parceiros</h2>
      <Container>
      <Hospital />
      </Container>
      <Team />
      <Container>
      <h2>Faça parte voce também</h2>
      <Plans />
      </Container>
      <h2>Contato</h2>
      <Contact />
      </div>
    </div>
  );
};
