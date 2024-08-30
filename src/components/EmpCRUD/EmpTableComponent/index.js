import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from 'moment/moment';



// main component
const EmpTableComponent = ({ empList, handleAddEmp, handleEditEmp, handleDeleteEmp }) => {
  console.log(empList);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {empList
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              ?.map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {
                            // if column value is number, then align it to right and format
                            column.id === 'hire_date' ?
                              moment.unix(value).format('DD/MM/YYYY')
                              : column.id === 'action' ?
                                <span >
                                  <button
                                    onClick={() => handleEditEmp(true)}
                                    style={{ margin: '5px', color: 'green' }}
                                  >
                                    <EditIcon />
                                  </button>
                                  <button
                                    onClick={() => handleDeleteEmp(value)}
                                    style={{ margin: '5px', color: 'red' }}
                                  >
                                    <DeleteIcon />
                                  </button>
                                </span>
                                :
                                column.format && typeof value === 'number'
                                  ? column.format(value)
                                  : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Fab variant="extended" onClick={() => handleAddEmp(true)}>
        <AddIcon sx={{ mr: 1 }} />
        Add Employee
      </Fab>
    </Paper>
  );
}

export default EmpTableComponent;

const columns = [
  {
    id: 'name',
    label: 'Name',
    minWidth: 170
  },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170
  },
  {
    id: 'mobile',
    label: 'Contact No.',
    minWidth: 170
  },
  {
    id: 'address',
    label: 'Address',
    minWidth: 170
  },
  {
    id: 'hire_date',
    label: 'Date Of Joining',
    minWidth: 170
  },
  {
    id: 'designation',
    label: 'Designation',
    minWidth: 100
  },
  {
    id: 'department',
    label: 'Department',
    minWidth: 170,
  },
  {
    id: 'salary',
    label: 'Annual Salary',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-IN')
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'center',
  }
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];

