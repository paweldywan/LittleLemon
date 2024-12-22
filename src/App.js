import './App.css';

import Header from './components/Header';

import Main from './components/Main';

import Footer from './components/Footer';

import Logo from './components/Logo';

import Nav from './components/Nav';

function App() {
  return (
    <>
      <Header>
        <Logo />
        <Nav />
      </Header>

      <Main />

      <Footer />
    </>
  );
}

export default App;
