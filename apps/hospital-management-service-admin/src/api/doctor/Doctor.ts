import { Appointment } from "../appointment/Appointment";
import { Department } from "../department/Department";

export type Doctor = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  departments?: Array<Department>;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  specialization: string | null;
  updatedAt: Date;
};
