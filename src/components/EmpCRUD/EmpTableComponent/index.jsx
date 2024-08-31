import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from 'moment/moment';



// main component
const EmpTableComponent = ({ empList, handleAddEmp, handleEditEmp, handleDeleteEmp }) => {
  // console.log(empList);
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
    <div sx={{ width: '100%', overflow: 'hidden' }}>
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
        count={empList?.length > 0 ? empList?.length : 0}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
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