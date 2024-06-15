import { SortOrder } from "../../util/SortOrder";

export type DoctorOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  specialization?: SortOrder;
  updatedAt?: SortOrder;
};
