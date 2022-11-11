import { useState, useEffect } from 'react';
import { Employees } from './components/employees';
import { Header } from './components/header';
import { Search } from './components/search';
import './global.css'
import axios from 'axios';

function App():any {
  const [list, setList] = useState([]);
  const [initial, setInitial] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3000/employees").then((response) => {
      setList(response.data);
      setInitial(response.data);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Search list={list} setList={setList} initial={initial} />
        <Employees list={list} />
      </main>
    </>
  );
};

export default App;