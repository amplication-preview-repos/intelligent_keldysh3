import { SortOrder } from "../../util/SortOrder";

export type PatientOrderByInput = {
  createdAt?: SortOrder;
  dob?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  updatedAt?: SortOrder;
};
