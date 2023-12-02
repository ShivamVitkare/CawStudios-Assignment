import { configureStore } from "@reduxjs/toolkit";
import "./App.css";
import TableContainer from "./Components/Table/TableContainer";
import ProductReducer from "./Components/Data/ProductReducer";
import { Provider } from "react-redux";
import TopBar from "./Components/TopBar/TopBar";
import TitleBar from "./Components/TitleBar/TitleBar";
import MenuBar from "./Components/MenuBar/MenuBar";
function App() {
  const store = configureStore({
    reducer: {
      products: ProductReducer,
    },
  });
  return (
    <>
      <Provider store={store}>
        <MenuBar />
        <TitleBar />
        <TopBar />
        <TableContainer />
      </Provider>
    </>
  );
}

export default App;
