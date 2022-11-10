import { Employees } from './components/employees';
import { Header } from './components/header';
import { Search } from './components/search';
import './global.css'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <Search />
        <Employees />
      </main>
    </>
  );
}
