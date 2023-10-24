import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const StyledEmployeeCard = styled.div`
  display: flex;
  color: #60646d;
  flex-direction: column;
  align-items: center;
  width: 260px;
  padding: 20px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  & > ::selection {
    background-color: ${(props) => props.color}};
  }

  @media (min-width: 768px) {
    width: 400px;
  }
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid ${(props) => props.color}};
`;

const StyledName = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin: 10px 0;
`;

const StyledPosition = styled.div`
  font-size: 16px;
`;

const StyledQuote = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 14px;
  font-style: italic;
  width: calc(100% + 60px);
  padding: 20px 10px;
  background-color: #dce0e8;
  margin-left: -20px;
  margin-right: -20px;
`;

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  font-weight: 700;
  padding: 15px 30px;
  text-transform: uppercase;
  color: #fff;
  background-color: ${(props) => props.color}};    
`;

export const EmployeeCard = ({ name, imageUrl, favoriteColor, position, quote, email }) => {
  const contactMe = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <StyledEmployeeCard color={favoriteColor}>
      <StyledImage src={imageUrl} alt={name} color={favoriteColor} />
      <StyledName>{name}</StyledName>
      <StyledPosition>{position}</StyledPosition>
      <StyledQuote>{`"${quote}"`}</StyledQuote>
      <StyledButton onClick={contactMe} title={email} color={favoriteColor}>
        Contact me
      </StyledButton>
    </StyledEmployeeCard>
  );
};

EmployeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  favoriteColor: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};
