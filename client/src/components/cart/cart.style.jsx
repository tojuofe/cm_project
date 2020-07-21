import styled from 'styled-components';

const mainColor = '#08bb7a';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  margin-top: 2rem;
`;

export const Table = styled.table`
  border-spacing: 0 4px;
  color: #333;
  padding: 10px;
  width: 100%;

  th,
  td {
    padding: 15px;
    text-align: left;
  }

  tbody tr {
    background-color: #909090;
    color: #f4f4f4;
  }

  tbody tr:hover {
    background-color: ${mainColor};
    color: #f4f4f4;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  }

  tbody tr td:first-of-type {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  tbody tr td:last-of-type {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    text-align: center;
  }

  tbody tr.priority-200 td:first-of-type {
    border-left: 5px solid #fff;
  }

  .edit {
    background-color: ${mainColor};
    border: 0;
    border-radius: 2px;
    color: #f4f4f4;
    cursor: pointer;
    font-size: 16px;
    padding: 5px 10px;
    opacity: 0;
  }

  tbody tr:hover .edit {
    opacity: 1;
  }
  img {
    width: 60px;
    height: 60px;
  }
`;

export const Card = styled.div`
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 5px 10px rgba(12, 16, 31, 0.4);
  padding: 50px;
  width: 1000px;

  @media screen and (max-width: 768px) {
    width: auto;
  }
`;
