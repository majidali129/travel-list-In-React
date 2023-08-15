/* eslint-disable react/prop-types */
import Header from "./components/header/Header";
import Form from "./components/form/Form";
import ItemList from "./components/item-list/ItemList";
import Stats from "./components/stats/Stats";
import { useState } from "react";

export default function App() {
  const [itemList, setItemList] = useState([]);

  function handleAddNewItem(newItem) {
    setItemList((items) => [...items, newItem]);
  }

  function handleDelete(id) {
    setItemList((items) => items.filter((item) => item.id != id));
  }

  function handleToogle(id) {
    setItemList((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    if (itemList) setItemList([]);
  }

  return (
    <>
      <Header />
      <Form addNewItem={handleAddNewItem} />
      <ItemList
        items={itemList}
        onDelete={handleDelete}
        onToogle={handleToogle}
        onClearList={handleClearList}
      />
      <Stats items={itemList} />
    </>
  );
}
