import { DepartmentWhereUniqueInput } from "../department/DepartmentWhereUniqueInput";
import { DoctorWhereUniqueInput } from "../doctor/DoctorWhereUniqueInput";
import { PatientWhereUniqueInput } from "../patient/PatientWhereUniqueInput";

export type AppointmentCreateInput = {
  date?: Date | null;
  department?: DepartmentWhereUniqueInput | null;
  doctor?: DoctorWhereUniqueInput | null;
  notes?: string | null;
  patient?: PatientWhereUniqueInput | null;
};
