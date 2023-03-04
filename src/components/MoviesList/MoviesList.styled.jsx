import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 16px;
`;

export const ListLink = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #000;
  font-weight: 500;

  &:hover,
  &:focus {
    color: #fc0373;
  }
`;

export const Poster = styled.img`
  object-fit: cover;
  object-position: center;
  margin-bottom: 4px;
  height: 441px;
`;

export const Info = styled.p`
  display: flex;
  justify-content: space-between;
`;

export const Rating = styled.span`
  background-color: #fc0373;
  color: white;
  height: 18px;
  padding: 3px 6px;
  border-radius: 10px;
`;
