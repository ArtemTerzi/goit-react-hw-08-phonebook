import styled from '@emotion/styled';
import bg from 'images/bg.jpg';

export const Hero = styled.section`
  display: block;
  width: 100%;
  height: 800px;
  background-size: cover;
  background-position: center;
  background-image: url('${bg}');
`;

export const HeroTitle = styled.h1`
  padding: 160px 0;
  font-family: 'Shrikhand';
  color: white;
  font-size: 48px;
  font-style: Italic;
  text-align: center;
`;
