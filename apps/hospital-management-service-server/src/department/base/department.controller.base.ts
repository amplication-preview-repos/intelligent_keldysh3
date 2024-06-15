/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DepartmentService } from "../department.service";
import { DepartmentCreateInput } from "./DepartmentCreateInput";
import { Department } from "./Department";
import { DepartmentFindManyArgs } from "./DepartmentFindManyArgs";
import { DepartmentWhereUniqueInput } from "./DepartmentWhereUniqueInput";
import { DepartmentUpdateInput } from "./DepartmentUpdateInput";
import { AppointmentFindManyArgs } from "../../appointment/base/AppointmentFindManyArgs";
import { Appointment } from "../../appointment/base/Appointment";
import { AppointmentWhereUniqueInput } from "../../appointment/base/AppointmentWhereUniqueInput";

export class DepartmentControllerBase {
  constructor(protected readonly service: DepartmentService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Department })
  async createDepartment(
    @common.Body() data: DepartmentCreateInput
  ): Promise<Department> {
    return await this.service.createDepartment({
      data: {
        ...data,

        doctor: data.doctor
          ? {
              connect: data.doctor,
            }
          : undefined,
      },
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Department] })
  @ApiNestedQuery(DepartmentFindManyArgs)
  async departments(@common.Req() request: Request): Promise<Department[]> {
    const args = plainToClass(DepartmentFindManyArgs, request.query);
    return this.service.departments({
      ...args,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async department(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    const result = await this.service.department({
      where: params,
      select: {
        createdAt: true,

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDepartment(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() data: DepartmentUpdateInput
  ): Promise<Department | null> {
    try {
      return await this.service.updateDepartment({
        where: params,
        data: {
          ...data,

          doctor: data.doctor
            ? {
                connect: data.doctor,
              }
            : undefined,
        },
        select: {
          createdAt: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Department })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDepartment(
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Department | null> {
    try {
      return await this.service.deleteDepartment({
        where: params,
        select: {
          createdAt: true,

          doctor: {
            select: {
              id: true,
            },
          },

          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/appointments")
  @ApiNestedQuery(AppointmentFindManyArgs)
  async findAppointments(
    @common.Req() request: Request,
    @common.Param() params: DepartmentWhereUniqueInput
  ): Promise<Appointment[]> {
    const query = plainToClass(AppointmentFindManyArgs, request.query);
    const results = await this.service.findAppointments(params.id, {
      ...query,
      select: {
        createdAt: true,
        date: true,

        department: {
          select: {
            id: true,
          },
        },

        doctor: {
          select: {
            id: true,
          },
        },

        id: true,
        notes: true,

        patient: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/appointments")
  async connectAppointments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        connect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/appointments")
  async updateAppointments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        set: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/appointments")
  async disconnectAppointments(
    @common.Param() params: DepartmentWhereUniqueInput,
    @common.Body() body: AppointmentWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      appointments: {
        disconnect: body,
      },
    };
    await this.service.updateDepartment({
      where: params,
      data,
      select: { id: true },
    });
  }
}