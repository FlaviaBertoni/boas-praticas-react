import styled from 'styled-components';
import Box from '../../components/atoms/Box';

export const Container = styled(Box)`
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled(Box)`
  max-width: 500px;
`;

export const GithubButton = styled.button`
  background-image: url('icons/github.svg');
  background-repeat: no-repeat;
  background-size: 2rem;
  background-color: #2a2a2a;
  background-position: 1rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  height: 4rem;
  text-decoration: none;
  transition: all 0.5s;
  margin: 1rem 6px 6px;
  padding: 0 2rem 0 4rem;

  &:hover {
    background-color: #444444;
  }

  &:active {
    background-color: #101010;
  }
`;
