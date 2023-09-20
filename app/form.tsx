// Render Prop
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const Basic = () => (
  <div>
    <h1>Insert your credit card details to buy a pass to heaven:</h1>
    <Formik
      initialValues={{ number: '', cvv: '', expDate: '' }}
      validate={values => {
        const errors = {};
        if (!values.number) {
          errors.number = 'Required';
        } else if (
          !/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/i.test(values.number)
        ) {
          errors.number = 'Invalid credit card number';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="number" name="number" />
          <ErrorMessage name="number" component="div" />
          <Field type="cvv" name="cvv" />
          <ErrorMessage name="cvv" component="div" />
          <Field type="expDate" name="expDate" />
          <ErrorMessage name="expDate" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default Basic;