import Form from './Form';
import { useState } from 'react';
import './App.css';
import Logo from './Logo';
import PackingList from './PackingList';
import Stats from './Stats';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Chargers", quantity: 11, packed: false },
];

function App() {

  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);

  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }

  function handleClearList() {
    const confirmed = window.confirm("Are you sure you want to delete all items?")


    if (confirmed) setItems([]);


  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} onClearList={handleClearList} />
      <Stats items={items} />

    </div>
  );
}




export default App;
