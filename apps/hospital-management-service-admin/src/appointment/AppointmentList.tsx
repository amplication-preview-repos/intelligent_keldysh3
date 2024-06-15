import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DEPARTMENT_TITLE_FIELD } from "../department/DepartmentTitle";
import { DOCTOR_TITLE_FIELD } from "../doctor/DoctorTitle";
import { PATIENT_TITLE_FIELD } from "../patient/PatientTitle";

export const AppointmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Appointments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <ReferenceField
          label="Department"
          source="department.id"
          reference="Department"
        >
          <TextField source={DEPARTMENT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Doctor" source="doctor.id" reference="Doctor">
          <TextField source={DOCTOR_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="notes" source="notes" />
        <ReferenceField label="Patient" source="patient.id" reference="Patient">
          <TextField source={PATIENT_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
