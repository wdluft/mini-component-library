/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const sizes = {
  small: {
    width: 100,
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    width: 100,
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    width: 100,
    height: 24,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  return (
    <ProgressBarWrapper
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin='0'
      aria-valuemax='100'
      size={size}
    >
      <ProgressFill width={value} size={size}></ProgressFill>
    </ProgressBarWrapper>
  );
};
export default ProgressBar;

const ProgressBarWrapper = styled.div`
  position: relative;
  width: ${(props) => sizes[props.size].width}%;
  height: ${(props) => sizes[props.size].height}px;
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: ${(props) => sizes[props.size].borderRadius}px;
  padding: ${(props) => sizes[props.size].padding}px;
`;

const ProgressFill = styled.span`
  background-color: ${COLORS.primary};
  width: ${(props) => props.width}%;
  height: 100%;
  display: block;
  border-radius: 4px
    ${(props) => (props.size === 'large' && props.width > 99 ? 4 : 0)}px
    ${(props) => (props.size === 'large' && props.width > 99 ? 4 : 0)}px 4px;
`;
