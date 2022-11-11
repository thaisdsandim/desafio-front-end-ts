import { phoneFormatter } from '../../constants/phoneFormatter';
import { dateFormatter } from '../../constants/dateFormatter';
import { EmployeesTable } from './style';

export const Employees = ({ list = [] }) => {
  return (
    <EmployeesTable>
      <table>
        <thead>
          <tr>
            <th className="column-photo">FOTO</th>
            <th>NOME</th>
            <th>CARGO</th>
            <th>DATA DE ADMISSÃO</th>
            <th className="column-phone">TELEFONE</th>
          </tr>
        </thead>
        <tbody>
          {list.map(({ photo, name, role, admission, phone }) => {
            return (
              <tr key={name}>
                <td>
                  <img src={photo} />
                </td>
                <td>{name}</td>
                <td>{role}</td>
                <td>{dateFormatter(admission)}</td>
                <td>{phoneFormatter(phone)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </EmployeesTable>
  );
}
