import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


  
 
  

const PointsTable = () => {
  return (
    <div>
        <div className="points-table-head cw-font" style={{padding:"6px", fontWeight:"500", }}><span style={{borderBottom:"2px solid blue"}}>ICC T20 Mens World Cup</span></div>
        <TableContainer component={Paper} style={{overflow:"hidden"}}>
      <Table sx={{ minWidth: 300 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className='tb'>No.</TableCell>
            <TableCell className='tb' align="center">Team</TableCell>
            <TableCell className='tb' align="center">M</TableCell>
            <TableCell className='tb' align="center">W</TableCell>
            <TableCell className='tb' align="center">L</TableCell>
            <TableCell className='tb' align="center">NRR</TableCell>
            <TableCell className='tb' align="center">P</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>

            </TableRow>

                     
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>

                                 
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>

                                 
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>

                                 
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>

                                 
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>

                                 
            <TableRow className='tb-row' sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className='tb-c' component="th" scope="row">1</TableCell>
              <TableCell className='tb-c' align="center">IND</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">1</TableCell>
              <TableCell className='tb-c' align="center">0</TableCell>
              <TableCell className='tb-c' align="center">1.555</TableCell>
              <TableCell className='tb-c' align="center">2</TableCell>
              
            </TableRow>
          
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default PointsTable
