
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 8px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
`;

const Error = styled.div`
  color: #d9534f;
  font-size: 12px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: #5bc0de;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #31b0d5;
  }
`;

const AuthorForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      birthDate: '',
      biography: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      birthDate: Yup.date().required('Required'),
      biography: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Name:</Label>
      <Input
        type="text"
        id="name"
        name="name"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name && (
        <Error>{formik.errors.name}</Error>
      )}

      <Label htmlFor="birthDate">Birth Date:</Label>
      <Input
        type="date"
        id="birthDate"
        name="birthDate"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.birthDate}
      />
      {formik.touched.birthDate && formik.errors.birthDate && (
        <Error>{formik.errors.birthDate}</Error>
      )}

      <Label htmlFor="biography">Biography:</Label>
      <TextArea
        id="biography"
        name="biography"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.biography}
      />
      {formik.touched.biography && formik.errors.biography && (
        <Error>{formik.errors.biography}</Error>
      )}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AuthorForm;
