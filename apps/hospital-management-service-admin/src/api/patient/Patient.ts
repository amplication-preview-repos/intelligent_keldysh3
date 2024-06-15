import { Appointment } from "../appointment/Appointment";

export type Patient = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  dob: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  updatedAt: Date;
};
