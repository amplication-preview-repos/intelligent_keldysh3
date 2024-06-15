import { Department } from "../department/Department";
import { Doctor } from "../doctor/Doctor";
import { Patient } from "../patient/Patient";

export type Appointment = {
  createdAt: Date;
  date: Date | null;
  department?: Department | null;
  doctor?: Doctor | null;
  id: string;
  notes: string | null;
  patient?: Patient | null;
  updatedAt: Date;
};
