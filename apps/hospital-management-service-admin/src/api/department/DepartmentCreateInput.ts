import { AppointmentCreateNestedManyWithoutDepartmentsInput } from "./AppointmentCreateNestedManyWithoutDepartmentsInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type DepartmentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDepartmentsInput;
  doctor?: DoctorWhereUniqueInput | null;
  name?: string | null;
};
