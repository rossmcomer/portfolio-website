import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Link, IconButton, Collapse, Box } from '@mui/material'
import { tableCellClasses } from '@mui/material/TableCell'
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { styled } from '@mui/material/styles'
import uwlogo from '../images/uw-logo.png'
import { useState } from 'react'

const Education = () => {
    const certificates = [
      {
        description: 'Certificate in Full Stack Development from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/bedb273f338f97b121acd556d4226672',
        date: 'May 18, 2023'
      },
      {
        description: 'Certificate in Javascript & Data Algorithms from freeCodeCamp.org',
        link: 'https://www.freecodecamp.org/certification/yankee3313/javascript-algorithms-and-data-structures',
        date: 'January 5, 2023'
      },
      {
        description: 'Certificate in CI/CD from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-cicd/en/24f7afa096583524d8b53699c5647a4c',
        date: 'January 3, 2024'
      },
      {
        description: 'Certificate in Relational Database Development from freeCodeCamp.org',
        link: 'https://www.freecodecamp.org/certification/yankee3313/relational-database-v8',
        date: 'March 4, 2024'
      },
      {
        description: 'Certificate in Containers from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-containers/en/e77cfbf4ae8ff356bf1f8502f9cc50cd',
        date: 'February 14, 2024'
      },
      {
        description: 'Certificate in GraphQL from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-graphql/en/657ed451abba01d34fb854cb1c8c4d86',
        date: 'May 31, 2023'
      },
      {
        description: 'Certificate in React Native from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-react-native-2020/en/873b2b5a6762d78e7a827ef81f7acea6',
        date: 'November 22, 2023'
      },
      {
        description: 'Certificate in Typescript from University of Helsinki',
        link: 'https://studies.cs.helsinki.fi/stats/api/certificate/fs-typescript/en/bfa498640bd90ac05aaca22f82df0aa5',
        date: 'September 13, 2023'
      }
    ];
  
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));
  
    const DropDownRow = ({row}) => {
      const [open, setOpen] = useState(false);
    
      return (
        <>
          <StyledTableRow>
            <StyledTableCell style={{ width: '10%', padding: '0'}}>
              <IconButton size="small" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUp/> : <KeyboardArrowDown />}
              </IconButton>
            </StyledTableCell>
            <StyledTableCell component="th" scope="row" id="certRow">
              {row.description}
            </StyledTableCell>
          </StyledTableRow>
          <StyledTableRow>
            <StyledTableCell style={{ paddingBottom: 0, paddingTop: 0, border: 'none' }} colSpan={6}>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <Box>
                  <Table size="small" aria-label="details" >
                    <TableBody>
                      <TableRow sx={{ borderBottom: "none" }}>
                        <TableCell>{row.link ? <Link href={row.link} underline="none" id="certLink">View Certificate</Link> : 'N/A'}</TableCell>
                        <TableCell align="right" id="certDate">{row.date}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Collapse>
            </StyledTableCell>
          </StyledTableRow>
        </>
      );
    }
  
    return (
    <div id="educationContainer">
      <div id="universities">
        <div className="educationItem">
          <div className="education">
            <img src={uwlogo} alt="UW Logo" className="uniLogo"></img>
          </div>
        </div>
        <div className="educationItem">
          <div className="education">
            <div style={{marginBottom: '10px'}}>Master's Degree in Biomedical Engineering // May 2013</div>
            <div>Bachelor's Degree in Biomedical Engineering // May 2012</div>
          </div>
        </div>
      </div>
      <div>
      <TableContainer component={Paper}>
        <Table sx={{ width: 600}}>
          <TableHead>
            <TableRow >
              <StyledTableCell align="center" colSpan={5} id="certTitle">Certificates & Achievements</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {certificates.map((certificate, index) => (
              <DropDownRow key={index} row={certificate} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </div>
    </div>
  )}

export default Education