import React, {forwardRef, useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MaterialTable, {Icons} from "material-table";
import axios from 'axios';
import {apiUrl, basePath} from '../config';
import {
  AddBox, ArrowUpward,
  Check, ChevronLeft,
  ChevronRight,
  Clear,
  DeleteOutline,
  Edit,
  FilterList,
  FirstPage, LastPage,
  Remove, SaveAlt, Search,
  ViewColumn, Email, Flag
} from "@material-ui/icons";

const tableIcons: Icons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const generateMail = (mail: string) => (`mailto:${mail}`);

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

  const [data, setData] = useState<IUserData[]>([]);

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
        <MaterialTable
            title="Suche nach Helfern:"
            icons={tableIcons}
            columns={[
              {title: 'Nachname', field: 'surname'},
              {title: 'Vorname', field: 'forename'},
              {title: 'Qualifikation', field: 'medicalQualification.qualification'},
              {title: 'PLZ', field: 'userAddress.zipCode'},
              {title: 'Mobilität', field: 'mobility.hasCar', lookup: {true: 'Auto', false: 'kein Auto'}},
            ]}
            data={data}
            options={{
              search: true,
              filtering: true,
              sorting: true,
              pageSize: 10,
              pageSizeOptions: [10, 20, 50, 100],
              actionsColumnIndex: -1,
              headerStyle: {
                fontWeight: "bold",
                fontSize: "medium"
              }
            }}
            actions={[
              {
                icon: () => <Email/>,
                tooltip: 'Dem Helfer eine Mail senden',
                onClick: (event, rowData) => generateMail('test'),
              },
              rowData => ({
                icon: () => <Flag/>,
                tooltip: 'Den Helfer melden',
                onClick: (event, rowData) => alert("Helfer gemeldet!")
              })
            ]}
        />
      </div>
  );
}
