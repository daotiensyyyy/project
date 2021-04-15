import { ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';
import { FormFeedback } from 'reactstrap';

SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

SelectField.defaults = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

function SelectField(props) {
    const {
        field, form,
        options, label, placeholder, disabled
    } = props;


    const { name, value } = field;
    // console.log("FIELD SELECT", value);
    const { errors, touched } = form;
    const showErrors = errors[name] && touched[name];

    const selectedOption = options.find(option => option.value === value);
    const handleSelectedOptionsChange = (selectedOption) => {
        const selectedValue = selectedOption ? selectedOption.value : selectedOption;
        // console.log("select value", selectedValue);
        const changeEvent = {
            target: {
                name: name,
                value: selectedValue
            }
        };
        field.onChange(changeEvent);
    }
    return (
        <>
            <Select
                id={name}
                {...field} //name, value, onChange, onBlur
                value={selectedOption}
                //overwrite onchange
                onChange={handleSelectedOptionsChange}
                disabled={disabled}
                placeholder={placeholder}
                options={options}
            />
            <ErrorMessage name={name} component={FormFeedback} />
        </>
    );
}

export default SelectField;