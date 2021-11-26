import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 60px;
  background: #61626d; 
  position: relative;
  bottom: 0;
  /* right:0; */
  width: 100%;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
    /* background: red; */
    letter-spacing: 1px;
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 30px;
  font-weight: bold;
`;

export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 10px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #2c2c2c;
      transition: 200ms ease-in;
  }
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px auto;
  align-items: center;
  margin-bottom: -5px;
  &:hover {
      color: #2c2c2c;
      transition: 200ms ease-in;
  }
`;

export const Icon = styled.a`
    width:40px;
    height: 40px;
    border-radius:50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px;
    transition: all 0.25s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }`;
  