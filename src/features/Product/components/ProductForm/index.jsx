import { FastField, Form, Formik } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import * as Yup from 'yup';
import { SIZE_OPTIONS } from '../../../../constants/size';
import { TOPPING_OPTIONS } from '../../../../constants/topping';
import CheckField from '../../../../custom-fields/CheckField';
import InputField from '../../../../custom-fields/InputField';
import SelectField from '../../../../custom-fields/SelectField';
ProductForm.propTypes = {
    onSubmit: PropTypes.func,
};

ProductForm.defaultValue = {
    onSubmit: null,
}

function ProductForm(props) {
    const { initialValues } = props;
    const validationSchema = Yup.object().shape({
        quantity: Yup.number().required('This field is required'),
        size: Yup.string().required('This field is required'),
    });
    const toppings = TOPPING_OPTIONS;

    return (
        <Formik initialValues={initialValues}
            onSubmit={props.onSubmit}
            validationSchema={validationSchema}
        >
            {formilkProps => {
                const { values, errors, touched, isSubmitting } = formilkProps;
                // console.log({ values, errors, touched });
                return (
                    <Form className="form-order">
                        <div className="row">
                            <div className="product col-xl-10 col-lg-10 col-md-10 col-sm-10">
                                <div className="row">
                                    <div className="product-image col-xl-2 col-lg-2 col-md-2 col-sm-12">
                                        <img src="https://picsum.photos/id/294/100/100" alt="" />
                                    </div>
                                    <div className="product-detail col-xl-10 col-lg-10 col-md-10 col-sm-12">
                                        <div className="product-detail__name">
                                            <h5>{values.name}</h5>
                                        </div>
                                        <div className="product-detail__category">
                                            {values.categoryId}
                                        </div>
                                        <div className="product-detail__option">
                                            <div className="product-detail__option__quantity">Quantity:
                                                <FastField name="quantity"
                                                    component={InputField}
                                                    type="number"
                                                    disabled={false}

                                                />
                                            </div>
                                            <div className="product-detail__option__size">&nbsp; Size:
                                                <FastField name="size"
                                                    component={SelectField}
                                                    placeholder="Size"
                                                    options={SIZE_OPTIONS}
                                                />
                                            </div>
                                        </div>
                                        <div className="product-detail__topping">Toppings:
                                        {toppings.map(topping => (
                                            <FastField key={topping.value} name="toppings"
                                                component={CheckField}
                                                type="checkbox"
                                                value={topping.label}
                                                disabled={false}
                                                className="form-check-input"
                                            />
                                        ))}
                                        </div>
                                        <div className="product-detail__note">
                                            Note for store:
                                            <div className="product-detail__note__input">

                                                <FastField name="note"
                                                    component={InputField}
                                                    type="text"
                                                    placeholder="Ex: Less sugar  "
                                                    disabled={false}
                                                />
                                            </div>
                                        </div>
                                        <button type="submit">Add</button>
                                    </div>
                                </div>
                            </div>
                            <div className="price col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                {values.price}
                            </div>
                        </div>
                        <hr />
                    </Form>
                );
            }}
        </Formik>
    );
}

export default ProductForm;