import { SortOrder } from "../../util/SortOrder";

export type AppointmentOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  departmentId?: SortOrder;
  doctorId?: SortOrder;
  id?: SortOrder;
  notes?: SortOrder;
  patientId?: SortOrder;
  updatedAt?: SortOrder;
};
