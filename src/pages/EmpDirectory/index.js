import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2';
import EmpTableComponent from '../../components/EmpCRUD/EmpTableComponent';
import EmpAddComponent from '../../components/EmpCRUD/EmpAddComponent';
import EmpEditComponent from '../../components/EmpCRUD/EmpEditComponent';


// base urls
const localhost = 'http://localhost:8000/employeeRegistory/get';
const server = 'https://employee-management-server-xa9m.onrender.com/employeeRegistory/get'

const get_employeeData = async (set_EmpList) => {
  try {
    const result = await axios.get(server)
    // console.log(result.data);
    set_EmpList(result.data);
  } catch (error) {
    console.error(error.message);
  }

};


const EmpDirectory = () => {

  // state variables
  const [employeeList, set_EmployeeList] = useState(null);
  const [selectedEmployee, set_SelectedEmployee] = useState(null);
  const [isAddEmployee, set_IsAddEmployee] = useState(false);
  const [isEditEmployee, set_IsEditEmployee] = useState(false);


  // effects
  useEffect(() => {
    get_employeeData(set_EmployeeList);
  }, []);

  // handle functions
  const handle_EditEmployee = () => {
    // handle edit employee fn
  }

  const handle_DeleteEmployee = () => {
    // handle delete employee fn
  }

  return (
    <div>
      {/* diplay table */}
      {!isAddEmployee && !isEditEmployee &&
        (
          <EmpTableComponent
            empList={employeeList}
            handleEditEmp={handle_EditEmployee}
            handleDeleteEmp={handle_DeleteEmployee}
          />
        )
      }
      {isAddEmployee &&
        (
          <EmpAddComponent
            empList={employeeList}
            setEmpList={set_EmployeeList}
            setIsAdding={set_IsAddEmployee}
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
  )
}

export default EmpDirectory;
