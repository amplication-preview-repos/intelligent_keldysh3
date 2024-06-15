import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { DepartmentListRelationFilter } from "../department/DepartmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type DoctorWhereInput = {
  appointments?: AppointmentListRelationFilter;
  departments?: DepartmentListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  specialization?: StringNullableFilter;
};
