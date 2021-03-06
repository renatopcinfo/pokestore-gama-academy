import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: blue;
  align-items: center;
  width: 100%;
`;

export const Img = styled.img`
  max-width: 200px;
  max-height: 250px;
  padding: 7px 100px 15px 10px;
`;

export const SearchBar = styled.div`
  display: flex;
  width: 50%;
  height: 50px;
  margin-top: 15px;
  background-color: whitesmoke;
  border-radius: 10px;
  align-items: center;
`;

export const Input = styled.input`
  background-color: #d6d6c2;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  border-radius: 5px;
`;

export const SearchIcon = styled.div`
  cursor: pointer;
`;