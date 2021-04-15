import React from 'react';
import PropTypes from 'prop-types';

CheckField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    type: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

CheckField.defaults = {
    type: 'text',
    label: '',
    disabled: false,
};

function CheckField(props) {
    const {
        field, form,
        type, disabled, options
    } = props;

    // console.log('Field', field);

    const { name, value } = field;
    // console.log('Field value', value);
    const { errors, touched } = form;

    return (
        <>
            <div className="form-check">
                <input id={name}
                    value={field.value}
                    type={type}
                    disabled={disabled}
                    checked={field.value}
                    {...field}
                />

                <label htmlFor={name}>{value}</label>
            </div>
        </>
    );
}

export default CheckField;