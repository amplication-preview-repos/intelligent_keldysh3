import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentWhereInput = {
  date?: DateTimeNullableFilter;
  department?: DepartmentWhereUniqueInput;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  notes?: StringNullableFilter;
  patient?: PatientWhereUniqueInput;
};
