import styled from 'styled-components';

export const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
