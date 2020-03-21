import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import React from "react";
import {IUserData} from "./ListView";

const generateMail = (mail:string) => (`mailto:${mail}`);

export default function ListRows({ data }: any) {
  return data.length > 0 ? (
    data.map((row: IUserData) => (
      <TableRow key={row.id}>
        <TableCell scope="row">
          {row.forename} {row.surname}
        </TableCell>
        <TableCell scope="row">
          {row.medicalQualification.qualification} ({row.medicalQualification.lastTimeActive})
        </TableCell>
        <TableCell scope="row">
          {row.mobility.hasCar ? "Auto" : "kein Auto"}
        </TableCell>
        <TableCell scope="row">
          {row.userAddress.zipCode}
        </TableCell>
        <TableCell scope="row">
          {row.contactData.phoneNumber} - <a href={generateMail(row.contactData.mailAddress)}>Mail</a>
        </TableCell>
      </TableRow>
    ))
  ) : (
    <TableRow>
      <TableCell>Loading ...</TableCell>
    </TableRow>
  );
}
