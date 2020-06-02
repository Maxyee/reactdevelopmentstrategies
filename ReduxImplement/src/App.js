import React from "react";
import AddTodo from "./containers/AddTodo"
import VisibleTodoList from "./containers/VisibleTodoList"
import Footer from './components/Footer'

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
