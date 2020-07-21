import styled from 'styled-components';

const mainColor = '#08bb7a';

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-gap: 20px;
  width: 940px;
  max-width: 100%;
  margin-top: 1rem;
`;

export const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  width: 600px;
  max-width: 100%;
  margin-top: 1rem;
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
`;
export const CardHeader = styled.img`
  object-fit: cover;
  height: 200px;
  width: 100%;
`;

export const ProductName = styled.div`
  position: absolute;
  top: 150px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 3px 20px;

  & > :nth-child(2) {
    padding: 0.3rem 0 0 5rem;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  min-height: 150px;

  h4 {
    margin: 10px 0;
    font-size: 1.3rem;
  }

  p {
    font-size: 13px;
    font-weight: bold;
    margin: 1.5px 0;
  }
`;

export const NotifyTag = styled.div`
  background: ${mainColor};
  border-radius: 50px;
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  margin: 0;
  padding: 2px 10px;
  text-transform: uppercase;
`;

export const CheckOutContainer = styled.div`
  position: relative;
  background: #6bcdfd;
  color: #333;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
`;

export const CheckOut = styled.div`
  margin: 20px 10px 20px;

  h4 {
    margin-top: 10px;

    input[type='number'] {
      border: 2px solid #ecf2ff;
      border-radius: 3px;
      font-family: inherit;
      font-size: 14px;
      padding: 10px;
      width: 100%;
    }
  }
`;
