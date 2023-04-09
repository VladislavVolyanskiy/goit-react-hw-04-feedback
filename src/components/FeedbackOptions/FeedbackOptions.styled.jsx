import styled from '@emotion/styled';

export const FeedbackOptsWrap = styled.div`
  padding: 0;
  display: flex;
  column-gap: 18px;
`;

export const FeedbackBtn = styled.button`
  text-transform: capitalize;
  padding: 3px 5px;
  cursor: pointer;

  border: #e3e2dc 1px solid;
  border-radius: 4px;

  &: hover {
    background-color: #f4fca9;
    border-color: #e8e5c8;
  }
`;
