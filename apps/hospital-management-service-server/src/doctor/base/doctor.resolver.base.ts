/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Doctor } from "./Doctor";
import { DoctorCountArgs } from "./DoctorCountArgs";
import { DoctorFindManyArgs } from "./DoctorFindManyArgs";
import { DoctorFindUniqueArgs } from "./DoctorFindUniqueArgs";
import { CreateDoctorArgs } from "./CreateDoctorArgs";
import { UpdateDoctorArgs } from "./UpdateDoctorArgs";
import { DeleteDoctorArgs } from "./DeleteDoctorArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { DepartmentFindManyArgs } from "../../department/base/DepartmentFindManyArgs";
import { Department } from "../../department/base/Department";
import { DoctorService } from "../doctor.service";
@graphql.Resolver(() => Doctor)
export class DoctorResolverBase {
  constructor(protected readonly service: DoctorService) {}

  async _doctorsMeta(
    @graphql.Args() args: DoctorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Doctor])
  async doctors(@graphql.Args() args: DoctorFindManyArgs): Promise<Doctor[]> {
    return this.service.doctors(args);
  }

  @graphql.Query(() => Doctor, { nullable: true })
  async doctor(
    @graphql.Args() args: DoctorFindUniqueArgs
  ): Promise<Doctor | null> {
    const result = await this.service.doctor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Doctor)
  async createDoctor(@graphql.Args() args: CreateDoctorArgs): Promise<Doctor> {
    return await this.service.createDoctor({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Doctor)
  async updateDoctor(
    @graphql.Args() args: UpdateDoctorArgs
  ): Promise<Doctor | null> {
    try {
      return await this.service.updateDoctor({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Doctor)
  async deleteDoctor(
    @graphql.Args() args: DeleteDoctorArgs
  ): Promise<Doctor | null> {
    try {
      return await this.service.deleteDoctor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Appointment], { name: "appointments" })
  async findAppointments(
    @graphql.Parent() parent: Doctor,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Department], { name: "departments" })
  async findDepartments(
    @graphql.Parent() parent: Doctor,
    @graphql.Args() args: DepartmentFindManyArgs
  ): Promise<Department[]> {
    const results = await this.service.findDepartments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
