import Employees from "./components/pages/Employees";
import Header from "./components/layout/Header";
import Wrapper from "./components/UI/Wrapper";

function App() {
  return (
    <div>
      <Header />
      <Wrapper>
        <Employees />
      </Wrapper>
    </div>
  );
}

export default App;
