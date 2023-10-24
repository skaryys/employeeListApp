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
    border: 5px solid ${(props) => props.color}};
  }

  .name {
    font-size: 22px;
    font-weight: 700;
    margin: 10px 0;
  }
`;

export const EmployeeCard = ({ name, imageUrl, color, position }) => {
  return (
    <StyledEmployeeCard color={color}>
      <img src={imageUrl} alt={name} />
      <div className="name">{name}</div>
      <div>{position}</div>
    </StyledEmployeeCard>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  color: PropTypes.isRequired,
  position: PropTypes.string.isRequired
};
