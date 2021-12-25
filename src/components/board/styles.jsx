import styled from "styled-components";

export const MiddleDiv = styled.div`
  display: flex;
  overflow: auto; 
  width:100%;
`;

export const AddListButton = styled.div`
  min-width: 300px;
  height: 39px;
  display: flex;
  flex-direction: row;

  align-items: center;
  background-color: rgb(43, 52, 59);
  opacity: 0.6;
  padding: 10px;
  text-overflow: ellipsis;
  line-height: 1.3;
  border-radius: 4px;

  box-shadow: 0 15px 15px -15px rgba(0,0,0,0.3);
    &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;