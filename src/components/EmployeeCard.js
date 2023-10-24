import styled from 'styled-components';

const StyledEmployeeCard = styled.div`
  background-color: #fff;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const EmployeeCard = () => {
  return <StyledEmployeeCard />;
};
