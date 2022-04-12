import styled from "styled-components";

export const ExpenseContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 900px;
`;

export const ExpenseNav = styled.div`
  width: 100%;
`;

export const ExpenseMain = styled.div`
  background-color: #fff;
  height: 740px;
  width: 1780px;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
    rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
  border-radius: 5px;
`;

export const ExpenseHeader = styled.div`
  height: 60px;
  font-size: 30px;
  display: flex;
  align-items: center;
  color: #52b788;
`;
