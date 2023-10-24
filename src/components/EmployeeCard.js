import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledEmployeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  color: #60646d;

  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 5px solid black;
  }
`;

export const EmployeeCard = ({ imageUrl }) => {
  return (
    <StyledEmployeeCard>
      <img src={imageUrl} alt="" />
    </StyledEmployeeCard>
  );
};

EmployeeCard.propTypes = {
  imageUrl: PropTypes.string.isRequired
};
