import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import { apiUrl, basePath } from '../config';
import Typography from "@material-ui/core/Typography";
import ListRows from "./ListRows";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export interface IUserData {
  id: number;
  forename: string;
  surname: string;
  medicalQualification: {
    description: string;
    lastTimeActive: string;
    qualification: string;
  };
  contactData: {
    mailAddress: string;
    phoneNumber: string;
  };
  userAddress: {
    zipCode: number;
  },
  mobility: {
    hasCar: boolean;
  }
}

export default function ListView() {
  const classes = useStyles();

  const [data, setData] = useState<IUserData[] >([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `${apiUrl}${basePath}/volunteers`,
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h5" component="h1" paragraph={true} gutterBottom>
        Suche nach Helfern:
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Qualifikation (letzte Aktivität)</TableCell>
              <TableCell>Mobilität</TableCell>
              <TableCell>PLZ</TableCell>
              <TableCell>Kontakt</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <ListRows data={data}/>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
