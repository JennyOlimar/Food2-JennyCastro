// import RoutesConfig from "./app/RoutesConfig";

import ItemDetailContainer from "./pages/ItemDetailContainer";
import ItemListContainer from "./pages/ItemListContainer";
import Navbar from "./components/Navbar";

// const App = () =>  <RoutesConfig />

function App() {
  return <>
  <Navbar />
    <ItemListContainer saludo="Bienvenido!" />
    <ItemDetailContainer />
  </>
}

export default App;
