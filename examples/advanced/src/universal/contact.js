import React, {Component, Timeout} from 'react';
import styled from 'styled-components';

const RootDiv = styled.div`
  margin-top: 30px; 
  margin-left: 30px; 
  color: #fff;
`;
const Heading = styled.h1`
  font-weight: 400;
  color: #fff;
`;
export default props =>
  <RootDiv>
    <Heading>Thanks for checking react-site-nav!</Heading>
    <div>You can reach me via:</div>
    <ul>
      <li>
        <a href="mailto:tingtulee@gmail.com">Email</a>
      </li>
    </ul>
  </RootDiv>;
