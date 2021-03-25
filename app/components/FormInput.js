import React from 'react';
import PropTypes from 'prop-types';
import { useController, useFormContext } from 'react-hook-form';

import CustomInput from './CustomInput';

const ControlledInput = props => {
  const { name, index, rules, defaultValue = '', ...inputProps } = props;  

  const Inputs = React.useRef([]);
  
  const formContext = useFormContext();
  const { control, errors } = formContext;  
  
  const { field } = useController({ name, control, rules, defaultValue });  

  return (
    <CustomInput
      {...inputProps}
      autoCapitalize="none"
      error={errors[name]?.message}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      blurOnSubmit={false}
      value={field.value}
      ref={(e) => {
        Inputs.current[index] = e
      }}
      onSubmitEditing={ () =>
        {
        Inputs.current[index + 1]
          ? Inputs.current[index + 1].focus()
          : Inputs.current[index].blur()
      }}
    />
  )
}

const FormInput = (props) => {
  const { name, ...inputProps } = props
  const formContext = useFormContext()

  if (!formContext || !name) {
    const errorMessage = !name
      ? 'Form field must have a "name" prop!'
      : 'Form field must be a descendant of `FormProvider` as it uses `useFormContext`!'
    return <CustomInput {...inputProps} error={errorMessage} editable={false} />
  }

  return <ControlledInput {...props} />
}

export default FormInput

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  rules: PropTypes.object,
  defaultValue: PropTypes.any,
}

ControlledInput.propTypes = FormInput.propTypes