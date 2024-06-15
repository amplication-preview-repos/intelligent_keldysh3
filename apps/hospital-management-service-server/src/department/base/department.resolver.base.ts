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
import { Department } from "./Department";
import { DepartmentCountArgs } from "./DepartmentCountArgs";
import { DepartmentFindManyArgs } from "./DepartmentFindManyArgs";
import { DepartmentFindUniqueArgs } from "./DepartmentFindUniqueArgs";
import { CreateDepartmentArgs } from "./CreateDepartmentArgs";
import { UpdateDepartmentArgs } from "./UpdateDepartmentArgs";
import { DeleteDepartmentArgs } from "./DeleteDepartmentArgs";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { Doctor } from "../../doctor/base/Doctor";
import { DepartmentService } from "../department.service";
@graphql.Resolver(() => Department)
export class DepartmentResolverBase {
  constructor(protected readonly service: DepartmentService) {}

  async _departmentsMeta(
    @graphql.Args() args: DepartmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Department])
  async departments(
    @graphql.Args() args: DepartmentFindManyArgs
  ): Promise<Department[]> {
    return this.service.departments(args);
  }

  @graphql.Query(() => Department, { nullable: true })
  async department(
    @graphql.Args() args: DepartmentFindUniqueArgs
  ): Promise<Department | null> {
    const result = await this.service.department(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Department)
  async createDepartment(
    @graphql.Args() args: CreateDepartmentArgs
  ): Promise<Department> {
    return await this.service.createDepartment({
      ...args,
      data: {
        ...args.data,

        doctor: args.data.doctor
          ? {
              connect: args.data.doctor,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Department)
  async updateDepartment(
    @graphql.Args() args: UpdateDepartmentArgs
  ): Promise<Department | null> {
    try {
      return await this.service.updateDepartment({
        ...args,
        data: {
          ...args.data,

          doctor: args.data.doctor
            ? {
                connect: args.data.doctor,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Department)
  async deleteDepartment(
    @graphql.Args() args: DeleteDepartmentArgs
  ): Promise<Department | null> {
    try {
      return await this.service.deleteDepartment(args);
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
    @graphql.Parent() parent: Department,
    @graphql.Args() args: AppointmentFindManyArgs
  ): Promise<Appointment[]> {
    const results = await this.service.findAppointments(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => Doctor, {
    nullable: true,
    name: "doctor",
  })
  async getDoctor(
    @graphql.Parent() parent: Department
  ): Promise<Doctor | null> {
    const result = await this.service.getDoctor(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
