import './App.css';
import Menu from './Menu';
import Categories from './Categories';
import items from './db.json';
import { useState } from 'react';

const allCategories = ['all', ...new Set(items.map((item)=> item.category))];

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const categoryBasedItems = items.filter((item) => item.category === category);
    setMenuItems(categoryBasedItems);
  }
  return (
    <div className="App">
      <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="nav">
          <Categories categories={categories} filterItems={filterItems}/>
        </div>
        <Menu items={menuItems}/>
      </section>
    </main>
    </div>
  );
}

export default App;
