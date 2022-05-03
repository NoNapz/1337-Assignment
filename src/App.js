import React from 'react';
import Employees from "./components/pages/Employees";
import Header from "./components/layout/Header";
import Wrapper from "./components/UI/Wrapper";
import Footer from './components/layout/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Wrapper>
          <Employees />
        </Wrapper>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
