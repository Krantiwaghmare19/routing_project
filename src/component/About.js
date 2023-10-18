import React, { useEffect, useState } from "react";
import TableBody from '@mui/material/TableBody';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TablePagination } from "@mui/material";

const About = () => {
  const columns = [
    { id: 'id', name: 'ID' },
    { id: 'firstName', name: 'First Name' },
    { id: 'lastName', name: 'Last Name' },
    { id: 'email', name: 'Email' },
    { id: 'contactNumber', name: 'Contact Number' },
  ];

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  }

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  const [rows, setRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5); 

  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001")
      .then(resp => resp.json())
      .then(data => {
        setRows(data);
      })
      .catch(e => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        About Page
        <h1>MUI Table</h1>
        <Paper sx={{ width: '98%', marginLeft: '5%' }}>
          <TableContainer sx={{ maxHeight: 450 }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell style={{ backgroundColor: 'black', color: 'white' }} key={column.id}>{column.name}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, i) => (
                    <TableRow key={i}>
                      {columns.map((column, j) => {
                        let value = row[column.id];
                        return (
                          <TableCell key={j}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[0,5, 10]} 
            page={page}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            component="div"
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
          />
        </Paper>
      </div>
    </>
  );
};

export default About;
