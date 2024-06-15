import { AppointmentUpdateManyWithoutDepartmentsInput } from "./AppointmentUpdateManyWithoutDepartmentsInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";

export type DepartmentUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDepartmentsInput;
  doctor?: DoctorWhereUniqueInput | null;
  name?: string | null;
};
