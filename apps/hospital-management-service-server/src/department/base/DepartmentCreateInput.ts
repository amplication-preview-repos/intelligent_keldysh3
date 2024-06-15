/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentCreateNestedManyWithoutDepartmentsInput } from "./AppointmentCreateNestedManyWithoutDepartmentsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DoctorWhereUniqueInput } from "../../doctor/base/DoctorWhereUniqueInput";

@InputType()
class DepartmentCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutDepartmentsInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutDepartmentsInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutDepartmentsInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutDepartmentsInput;

  @ApiProperty({
    required: false,
    type: () => DoctorWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DoctorWhereUniqueInput)
  @IsOptional()
  @Field(() => DoctorWhereUniqueInput, {
    nullable: true,
  })
  doctor?: DoctorWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { DepartmentCreateInput as DepartmentCreateInput };