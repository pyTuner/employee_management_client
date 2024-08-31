import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './styles.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Button, Card, CardContent, CardHeader, Divider, FormControl, InputLabel, TextField, Select, MenuItem } from '@mui/material';
import * as Yup from 'yup';


const EmpAddComponent = ({ setIsAddinged }) => {
  // console.log(setIsAddinged)
  // validations
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Required")
      .trim()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .matches(/^[a-zA-Z ]+$/, "Name should contain only characters"),
    email: Yup.string()
      .trim()
      .lowercase()
      .email("Please enter a valid email address")
      .transform((value) => value.trim())
      .required("Email is required!"),
    mobile: Yup.string()
      .trim()
      .required("Required"),
    address: Yup.string()
      .trim()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"),
    hire_date: Yup.string()
      .required("Required"),
    designation: Yup.string()
      .trim()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"),
    department: Yup.string()
      .trim()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required("Required"),
    salary: Yup.number()
      .required()
      .positive()
      .integer()
  });

  // designation list for dropdown
  const designationsList = [
    { id: 1, name: "Software Engineer" },
    { id: 2, name: "Associate Software Engineer" },
    { id: 3, name: "Data Scientist" },
    { id: 4, name: "Tech Lead" },
    { id: 5, name: "Product Manager" },
    { id: 6, name: "UI/UX Designer" },
    { id: 7, name: "Tester" },
    { id: 8, name: "Project Manager" },
    { id: 9, name: "Team Lead" },
    { id: 10, name: "CEO" },
    { id: 11, name: "CTO" },
    { id: 12, name: "HR Manager" },
    { id: 13, name: "Finance Manager" },
    { id: 14, name: "Marketing Manager" },
    { id: 15, name: "Sales Manager" },
    { id: 16, name: "Admin" },
    { id: 17, name: "Finance" },
    { id: 18, name: "Human Resources" },
    { id: 19, name: "Marketing" },
    { id: 20, name: "Sales" },
    { id: 21, name: "Finance" },
    { id: 22, name: "Customer Service" },
  ]

  const departmentList = [
    { id: 1, name: "Business" },
    { id: 2, name: 'Marketing' },
    { id: 3, name: 'Finance' },
    { id: 4, name: 'Human Resources' },
    { id: 5, name: 'Engineering' },
    { id: 6, name: 'Product Management' },
    { id: 7, name: 'Operations' },
    { id: 8, name: 'Customer Service' },
    { id: 9, name: 'Research & Development' },
    { id: 10, name: 'Supply Chain' },
    { id: 11, name: 'Legal' },
    { id: 12, name: 'IT & Networking' },
    { id: 13, name: 'Finance & Administration' },
    { id: 14, name: 'Public Relations' },

  ]
  // states
  const [initialValues, setInitialValues] = useState({
    "name": "",
    "email": "",
    "mobile": "",
    "address": "",
    "hire_date": new Date().getTime(),
    "designation": "",
    "department": "",
    "salary": 0
  });




  // handle methods
  const handleSubmit = (values) => {
    console.log("Submit", values);
  };

  const handleClose = () => {
    setIsAddinged(false);
  };

  const handleDate = (value, setFieldValue) => {
    setFieldValue('hire_date', value.getTime());
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      enableReinitialize={true}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        /* and other goodies */
      }) => (
        <Card sx={{ m: 3, p: 2 }}>
          <CardHeader title="Add Employee" />
          <Divider sx={{ m: 1 }} />
          <CardContent>
            <Form>

              <div className='input-field-text'>
                <TextField
                  fullWidth

                  type="text"
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  helperText={
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  }
                  error={touched['name'] && Boolean(errors['name'])}
                />
              </div>

              <div className='input-field-text'>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  helperText={
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  }
                  error={touched['email'] && Boolean(errors['email'])}
                />
              </div>

              <div className='input-field-text'>
                <TextField
                  fullWidth
                  type="text"
                  name="mobile"
                  label="Mobile No"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.mobile}
                  helperText={
                    <ErrorMessage
                      name="mobile"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  }
                  error={touched['mobile'] && Boolean(errors['mobile'])}
                />
              </div>

              <div className='input-field-text'>
                <TextField
                  fullWidth
                  type="text"
                  name="address"
                  label="Address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  helperText={
                    <ErrorMessage
                      name="address"
                      component="span"
                      className="text-red-500 text-sm"
                    />
                  }
                  error={touched['address'] && Boolean(errors['address'])}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>

                <div className="input-field-text">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="designationId-label">Designation</InputLabel>
                    <Field
                      as={Select}
                      labelId="designationId-label"
                      // id="designationId"
                      sx={{ maxWidth: '5cm', width: '5cm' }}
                      name="designation"
                      label="Designation"
                      onChange={(e) => {
                        setFieldValue('designation', e.target.value);
                      }}
                      onBlur={handleBlur}
                      error={touched.designation && Boolean(errors.designation)}
                    >
                      {designationsList?.map((role) => (
                        <MenuItem key={role?.id} value={role?.name}>
                          {role?.name}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="designation"
                      component="span"
                      className="text-red-500 text-sm"
                      style={{ color: '#d32f2f', fontSize: '0.85rem', margin: '5px' }}
                    />
                  </FormControl>
                </div>

                <div className="input-field-text">
                  <FormControl fullWidth variant="outlined">
                    <InputLabel id="departmentId-label">Department</InputLabel>
                    <Field
                      sx={{ maxWidth: '4.7cm', width: '4.7cm' }}
                      as={Select}
                      labelId="departmentId-label"
                      id="designationId"
                      name="department"
                      label="Department"
                      onChange={(e) => {
                        setFieldValue('department', e.target.value);
                      }}
                      onBlur={handleBlur}
                      error={touched['department'] && Boolean(errors['department'])}
                    >
                      {departmentList?.map((field) => (
                        <MenuItem key={field?.id} value={field?.name}>
                          {field?.name}
                        </MenuItem>
                      ))}
                    </Field>
                    <ErrorMessage
                      name="department"
                      component="span"
                      className="text-red-500 text-sm"
                      style={{ color: '#d32f2f', fontSize: '0.85rem', margin: '5px' }}
                    />

                  </FormControl>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div className='input-field-text'>
                  <DatePicker
                    fullWidth
                    style={{ backgroundColor: '#d32f2f' }}
                    dateFormat="dd-MMM-yyyy"
                    showIcon
                    selected={new Date(values.hire_date)}
                    onChange={(date) => handleDate(date, setFieldValue)}
                    startDate={initialValues.hire_date}
                    maxDate={new Date()}
                    form="datePicker"
                    helperText={
                      <ErrorMessage
                        name="hire_date"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    }
                  />
                </div>

                <div className='input-field-text'>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    id='salary'
                    name="salary"
                    label="Annual Salary"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.salary}
                    helperText={
                      <ErrorMessage
                        name="salary"
                        component="span"
                        className="text-red-500 text-sm"
                      />
                    }
                    error={touched['salary'] && Boolean(errors['salary'])}
                  // autoFocus={autoFocus}
                  />
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
                <Button type="submit" sx={{ color: 'gray', margin: '5px', boxShadow: '2px 2px gray' }} disabled={isSubmitting}>
                  Submit
                </Button>
                <Button type="button" variant="contained" sx={{ bgcolor: 'gray', margin: '5px' }} onClick={handleClose}>
                  Close
                </Button>
              </div>

            </Form>
          </CardContent>
        </Card>
      )}
    </Formik>
  );
};

export default EmpAddComponent;