import React from 'react';
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { COLORS } from '../consts/colors';

const Wrapper = styled.View`
  margin-bottom: 15px;
  padding: 0 10px;
`

const StyledInput = styled.TextInput`
  border-color: ${props => (props.isError ? COLORS.red : COLORS.gray)};
  border-width: 1px;
  padding: 5px;  
`

const Label = styled.Text`
  color: ${COLORS.gray};
  font-size: 10px;
  letter-spacing: 2px;
`

const Error = styled.Text`
  color: ${COLORS.red};
`

export default React.forwardRef(
  (props, ref) => {
    const { label, error, ...textInputProps } = props;
      const isError = Boolean(error)      
    
    return (
      <Wrapper>
        {Boolean(label) && <Label>{label}</Label>}
        <StyledInput
          {...textInputProps}
          ref={ref}
          isError={isError}          
        />
        {isError && <Error>{error}</Error>}
      </Wrapper>
    )
  }  
);

// CustomInput.propTypes = {
//   label: PropTypes.string,
//   error: PropTypes.string,
// }