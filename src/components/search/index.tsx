import { phoneFormatter } from '../../constants/phoneFormatter';
import { dateFormatter } from '../../constants/dateFormatter';
import { EmployeesSearch } from './style';

type DetailsEmployees = {
  name: string
  role: string
  admission: string
  phone: string
}

export const Search = (props:any) => {
  const { list, setList, initial } = props;

  const handleSearch = (e:any) => {
    const searchEmployee = e.target.value;

    const setFilter = list.filter((employee:DetailsEmployees) =>
      employee.name.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      employee.role.toLowerCase().includes(searchEmployee.toLowerCase()) ||
      dateFormatter(employee.admission).toLowerCase().includes(searchEmployee.toLowerCase()) ||
      phoneFormatter(employee.phone).toLowerCase().includes(searchEmployee.toLowerCase())
    );
    
    if (searchEmployee === "") {
      setList(initial);
    } else {
      setList(setFilter);
    }

  };
  
  return (
    <EmployeesSearch>
      <h4>Funcionários</h4>
      <input 
      type="text" 
      placeholder="Pesquisar" 
      className="input"
      onChange={handleSearch}
      />
      <button className="submit-lente" type="submit">
        <i className="fa fa-search"></i>
      </button>
    </EmployeesSearch>
  );
}