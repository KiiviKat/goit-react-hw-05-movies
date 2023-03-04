import styled from 'styled-components';

export const SearchForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 4px;
  margin-bottom: 16px;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 400px;
  height: 24px;
  font: inherit;
  font-size: 16px;
  padding: 4px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 60px;
  cursor: pointer;
  background-color: white;
  border-color: #fc0373;
  border-radius: 4px;

  &:hover,
  &:focus {
    background-color: #fc0373;
    color: white;
  }
`;
