import styled from 'styled-components';

export const CartContainer = styled.div`
  background-color: beige; 
  position: relative; 
  bottom: -16px;
  right: 0;
  min-height: 100vh;
  width: 50vh;
`;

export const CartPhoto = styled.img`
  width: 60px;
  background-color: whitesmoke;
  justify-self: start;  
`;

export const H1 = styled.h1`
  color: white;
  background-color: grey;
  font-weight: bolder;
  text-align: center;
`;

export const Items = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px 
`;

export const ItemName = styled.p`
  padding-left: 5px;
  font-weight: 500;
  font-size: 18px;
  color: black
`;

export const ItemPrice = styled.p`
  font-weight: 500;
  font-size: 18px;
  color: black
`;

export const BtnContent = styled.div`
  position: relative;
  vertical-align: bottom;
  bottom: 0px;
  background-color: gray;
  margin-top: 20px;
  height: 40px;
`;

export const H2 = styled.h2`
  color: white;
  text-align: start;
  font-weight: 700;
  margin-left: 5px
`;

export const BtnShop = styled.button`
  background-color: white;
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  color: black;
  border-color: white;
  cursor: pointer;
`;




