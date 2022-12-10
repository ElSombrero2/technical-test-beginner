import { StatusCodes } from 'http-status-codes'
import { createResponse, DataResponse, message, MessageResponse } from '../../../core/response'
import { CreateEmployeeDto } from '../models/dto/create-employee.dto'
import { FindEmployeeDto } from '../models/dto/find-employee..dto'
import { UpdateEmployeeDto } from '../models/dto/update-employee..dto'
import { Employee } from '../models/employee.entity'

export class EmployeeService{

    constructor(private Model: Employee){}

    public async create(employee: CreateEmployeeDto): Promise<DataResponse<FindEmployeeDto>>{
        try{ return createResponse(StatusCodes.CREATED, await new this.Model(employee).save() as unknown as FindEmployeeDto) }
        catch(data){  throw createResponse(StatusCodes.INTERNAL_SERVER_ERROR, {data, ...message('Creation Failed')}) }
    }

    public async update(_id: string, employee: UpdateEmployeeDto): Promise<DataResponse<MessageResponse>>{
        try{  
            await this.Model.updateOne({_id}, {...employee})
            return createResponse(StatusCodes.OK, message('Employee Updated!')) 
        }
        catch(data){ throw createResponse(StatusCodes.INTERNAL_SERVER_ERROR, {data, ...message('Updating Failed')}) }
    }

    public async findByDepartment(department: string): Promise<DataResponse<FindEmployeeDto[]>>{
        try{  return createResponse(StatusCodes.OK, (await this.Model.find({department})) as FindEmployeeDto[]) }
        catch(e){  throw createResponse(StatusCodes.NOT_FOUND, e) }
    }

    public async findAll(): Promise<DataResponse<FindEmployeeDto[]>>{
        try{ return createResponse(StatusCodes.OK, await this.Model.find()) }
        catch(data){  throw createResponse(StatusCodes.INTERNAL_SERVER_ERROR, {data, ...message('Data Fetching Error')}) }
    }

}