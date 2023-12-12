import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const TableArray = () => {
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Age</TableCell>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Raveena</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Sinto</TableCell>
                        <TableCell>22</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Anita</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default TableArray