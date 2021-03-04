import styled from 'styled-components';
import Box from '../../components/atoms/Box';

export const VideoContainer = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`;

export const ContentContainer = styled(Box)`
  position: relative;
  text-align: center;
`;

export const OverlayTextBox = styled(Box)`
  background-color: rgba(0, 0, 0, 0.66);
`;
