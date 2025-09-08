import styled from "styled-components";

const Button = styled.button`
  background-color: var(--orange);
  color: var(--cream);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: bold;
  min-width: 30px;
  margin: 0.5rem;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    background-color: var(--soft-orange);
  }
`;

const StyledButton = ({ btnText }) => {
  return <Button>{btnText}</Button>;
};
export default StyledButton;
