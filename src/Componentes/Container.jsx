import React, { useState } from "react";
import FormTodo from "./FormTodo";
import Tasklist from "./Tasklist";

const Container = () => {
  const [list, setList] = useState([]);

  const handleAddItem = (addItem) => {
    setList([...list, addItem]);
  };
  return (
    <div>
      Lista de Tareas Pendientes!
      <FormTodo handleAddItem={handleAddItem} />
      <Tasklist list={list} setList={setList} />
    </div>
  );
};

export default Container;
