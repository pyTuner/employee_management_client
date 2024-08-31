import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import EmpTableComponent from '../../components/EmpCRUD/EmpTableComponent';
import EmpAddComponent from '../../components/EmpCRUD/EmpAddComponent';
import EmpEditComponent from '../../components/EmpCRUD/EmpEditComponent';
import { Card, CardContent, Fab, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';



// base urls
const localhost = 'http://localhost:8000/employeeRegistory/get';
const server = 'https://employee-management-server-xa9m.onrender.com/employeeRegistory/'

// Read employee details
const get_employeeData = async (set_EmpList) => {
  try {
    const result = await axios.get(`${server}/get`)
    // console.log(result.data);
    set_EmpList(result.data);
  } catch (error) {
    console.error(error.message);
  }

};

// Insert a new employee
const inser_employeeData = async (empDetails) => {
  try {
    const result = await axios.post(`${server}/insert`, empDetails);
    console.log(result.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Update employee Details
const update_employeeData = async (empId, updatedEmpDetails) => {
  try {
    const result = await axios.put(`${server}/post/${empId}`, updatedEmpDetails);
    console.log(result.data);
  } catch (error) {
    console.error(error.message);
  }
}

// Remove the employee  
const delete_employeeData = async (empId) => {
  try {
    const result = await axios.put(`${server}/post/${empId}`)
  } catch (error) {
    console.error(error.message);
  }
}


const EmpDirectory = () => {

  // state variables
  const [employeeList, set_EmployeeList] = useState(null);
  const [employeeDetails, setEmployeeDetails] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAddEmployee, setIsAddEmployee] = useState(false);
  const [isEditEmployee, set_IsEditEmployee] = useState(false);


  // effects
  useEffect(() => {
    get_employeeData(set_EmployeeList);
  }, []);

  // handle functions

  const handle_AddEmployee = (value) => {
    // handle add employee fn
    setIsAddEmployee(value);
  }
  const handle_EditEmployee = (value) => {
    // handle edit employee fn
    set_IsEditEmployee(value);
  }

  const handle_DeleteEmployee = () => {
    // handle delete employee fn
  }

  return (
    <>
      {/* title */}
      {!isAddEmployee && !isEditEmployee &&
        (
          <Card sx={{ m: 3, p: 2, }}>
            <Typography gutterBottom variant="h5" component="div"> Employee Directory</Typography>
            {/* diplay table */}
            <CardContent sx={{ overflow: 'auto' }}>
              <EmpTableComponent
                empList={employeeList}
                handleAddEmp={handle_AddEmployee}
                handleEditEmp={handle_EditEmployee}
                handleDeleteEmp={handle_DeleteEmployee}
              />
              <Fab variant="extended" onClick={() => handle_AddEmployee(true)}>
                <AddIcon sx={{ mr: 1 }} />
                Add Employee
              </Fab>
            </CardContent>
          </Card>
        )
      }
      <div
        style={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, 0%)',
          padding: '20px',
          zIndex: 2,
          width: '90%',
          maxWidth: '500px',
          maxHeight: '90vh',
          overflowY: 'auto',
        }}>
        {isAddEmployee &&
          (
            <EmpAddComponent
              empList={employeeList}

              setIsAddinged={setIsAddEmployee}
            />
          )
        }
        {isEditEmployee &&
          (
            <EmpEditComponent
              empList={employeeList}
              setEmpList={set_EmployeeList}
              setIsEditing={set_IsEditEmployee}
            />
          )
        }
      </div>

    </>
  )
}

export default EmpDirectory;
