import { AppointmentUpdateManyWithoutPatientsInput } from "./AppointmentUpdateManyWithoutPatientsInput";

export type PatientUpdateInput = {
  appointments?: AppointmentUpdateManyWithoutPatientsInput;
  dob?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
};
