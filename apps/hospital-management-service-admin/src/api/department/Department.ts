import { Appointment } from "../appointment/Appointment";
import { Doctor } from "../doctor/Doctor";

export type Department = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  doctor?: Doctor | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
