
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

const BookForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbn: '',
      publicationDate: '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Required'),
      author: Yup.string().required('Required'),
      isbn: Yup.string().required('Required'),
      publicationDate: Yup.date().required('Required'),
    }),
    onSubmit: values => {
      onSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="title">Title:</Label>
      <Input
        type="text"
        id="title"
        name="title"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.title}
      />
      {formik.touched.title && formik.errors.title && (
        <Error>{formik.errors.title}</Error>
      )}

      <Label htmlFor="author">Author:</Label>
      <Input
        type="text"
        id="author"
        name="author"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.author}
      />
      {formik.touched.author && formik.errors.author && (
        <Error>{formik.errors.author}</Error>
      )}

      <Label htmlFor="isbn">ISBN:</Label>
      <Input
        type="text"
        id="isbn"
        name="isbn"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.isbn}
      />
      {formik.touched.isbn && formik.errors.isbn && (
        <Error>{formik.errors.isbn}</Error>
      )}

      <Label htmlFor="publicationDate">Publication Date:</Label>
      <Input
        type="date"
        id="publicationDate"
        name="publicationDate"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.publicationDate}
      />
      {formik.touched.publicationDate && formik.errors.publicationDate && (
        <Error>{formik.errors.publicationDate}</Error>
      )}

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default BookForm;
