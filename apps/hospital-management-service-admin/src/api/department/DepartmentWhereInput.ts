import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DepartmentWhereInput = {
  appointments?: AppointmentListRelationFilter;
  doctor?: DoctorWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
