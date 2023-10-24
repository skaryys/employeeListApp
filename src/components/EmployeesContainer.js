import styled from 'styled-components';

export const EmployeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;
