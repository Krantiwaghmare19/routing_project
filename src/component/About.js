import React, { useEffect, useState } from "react";
import TableBody from '@mui/material/TableBody';
import { Paper, TableContainer, Table, TableHead, TableRow, TableCell } from "@mui/material";

const About = () => {
  const columns = [
    { id: 'id', name: 'ID' },
    { id: 'firstName', name: 'First Name' },
    { id: 'lastName',name:'Last Name'},
    { id: 'email', name: 'Email' },
    { id: 'contactNumber', name: 'Contact Number' },
    
  ];

  const [rows, setRows] = useState([]);  

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
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell style={{backgroundColor:'black', color: 'white'}} key={column.id}>{column.name}</TableCell>
                  ))}
                
                 
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, i) => (  
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
        </Paper>
      </div>
    </>
  );
};

export default About;
