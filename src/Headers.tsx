import styled from "styled-components";

const StyledHeader = styled.div`
  height: 70px;
  background-color: #f199a9;
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: Roboto, Helvetica, Arial, sans-serif;
`;
const Header = () => {
  return <StyledHeader>Curt 內心小世界</StyledHeader>;
};

export default Header;
