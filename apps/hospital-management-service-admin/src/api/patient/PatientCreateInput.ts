import { AppointmentCreateNestedManyWithoutPatientsInput } from "./AppointmentCreateNestedManyWithoutPatientsInput";

export type PatientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutPatientsInput;
  dob?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
