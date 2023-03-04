import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const GoBackBtn = styled.button`
  display: inline-block;
  margin-bottom: 16px;
  cursor: pointer;
  background-color: white;
  border-color: #fc0373;
  border-radius: 4px;
  font-size: 16px;
  padding: 8px 16px;

  &:hover,
  &:focus {
    background-color: #fc0373;
    color: white;
  }
`;

export const Details = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const DetailsText = styled.p`
  font-size: 20px;
  font-weight: 400;
  line-height: 1.25;
  margin-bottom: 16px;
`;

export const Highlight = styled.span`
  font-weight: 500;
`;

export const Rating = styled.span`
  background-color: #fc0373;
  color: white;
  height: 18px;
  padding: 3px 6px;
  border-radius: 10px;
`;

export const DetailsButtons = styled.div`
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  border: 2px solid #fc0373;

  &:hover,
  &:focus,
  &.active {
    color: white;
    background-color: #fc0373;
  }
`;
