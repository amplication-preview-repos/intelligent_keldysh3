import { AppointmentUpdateManyWithoutDoctorsInput } from "./AppointmentUpdateManyWithoutDoctorsInput";
import { DepartmentUpdateManyWithoutDoctorsInput } from "./DepartmentUpdateManyWithoutDoctorsInput";

export type DoctorUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutDoctorsInput;
  departments?: DepartmentUpdateManyWithoutDoctorsInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  specialization?: string | null;
};
