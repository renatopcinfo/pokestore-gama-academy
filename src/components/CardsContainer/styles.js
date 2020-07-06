import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: min-content;
  width: 100%;  

  @media (max-width: 1055px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media(max-width:870px) {  
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width:690px) {   
    grid-template-columns: 1fr;
  }

  
`;