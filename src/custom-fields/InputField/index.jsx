import React from 'react';
import PropTypes from 'prop-types';
import { FormFeedback } from 'reactstrap';
import { ErrorMessage } from 'formik';
InputField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
};

InputField.defaults = {
    type: 'text',
    label: '',
    placeholder: '',
    disabled: false,
};

function InputField(props) {
    const {
        field, form,
        type, placeholder, disabled, defaultValue
    } = props;

    const { name } = field;
    const { errors, touched } = form;
    const showErrors = errors[name] && touched[name];

    return (
        <>
            <input id={name}
                {...field}
                value={defaultValue}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                invalid={showErrors} />
            {showErrors && <p>{errors[name]}</p>}
        </>
    );
}

export default InputField;