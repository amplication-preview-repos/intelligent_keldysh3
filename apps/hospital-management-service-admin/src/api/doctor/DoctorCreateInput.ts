import { AppointmentCreateNestedManyWithoutDoctorsInput } from "./AppointmentCreateNestedManyWithoutDoctorsInput";
import { DepartmentCreateNestedManyWithoutDoctorsInput } from "./DepartmentCreateNestedManyWithoutDoctorsInput";

export type DoctorCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutDoctorsInput;
  departments?: DepartmentCreateNestedManyWithoutDoctorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  specialization?: string | null;
};
