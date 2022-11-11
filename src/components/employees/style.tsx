import styled from 'styled-components';

export const EmployeesTable = styled.div` 
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
    margin-top: 35px;
  }
  thead tr th {
    background-color: #5984c0;
    padding-top: 15px;
    padding-bottom: 15px;
    color: #ffffff;
    font-weight: 500;
    font-size: 16px;
  }
  .column-photo {
    border-radius: 4px 0px 0px 0px;
  }
  .column-phone {
    border-radius: 0px 4px 0px 0px;
  }
  tbody td {
    background-color: #ffffff;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    padding-top: 6px;
    padding-bottom: 6px;
  }
  tbody td img {
    border-radius: 15px 15px 15px 15px;
    width: 34px;
    height: 33px;
  }
} `