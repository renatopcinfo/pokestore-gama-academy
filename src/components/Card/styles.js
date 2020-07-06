import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: gray;
  border-radius: 15px;
  max-width: 250px;
  max-height:300px;
  margin: 15px;
  text-align: center; 
`;

export const CardImg = styled.img`
  max-width: 90px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const CardName = styled.div`
  color: black;
`;

export const CardPrice = styled.div`
  color: black;
  font-weight: bolder;
`;

export const CardButton = styled.button`
  padding: 14px 55px;
  margin: 0px;
  background-color: brown;
  border-radius: 0 0 15px 15px;
  border: none;
  font-weight: bold;
  color: white;
  cursor: pointer;
`;

