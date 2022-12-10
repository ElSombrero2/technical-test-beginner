import { DataResponse } from '../../../core/response'
import { CreateEmployeeDto } from '../models/dto/create-employee.dto'
import { FindEmployeeDto } from '../models/dto/find-employee..dto'
import { UpdateEmployeeDto } from '../models/dto/update-employee..dto'
import { EmployeeService } from '../service/employee.service'

export class EmployeeController {

    public constructor(private service: EmployeeService){}

    public async create(employee: CreateEmployeeDto): Promise<DataResponse<FindEmployeeDto>>{
        try{ return await this.service.create(employee) }
        catch(e){ throw e }
    }

    public async findByDepartment(department: string): Promise<DataResponse<FindEmployeeDto[]>>{
        try{ return await this.service.findByDepartment(department) }
        catch(e){ throw e }
    }

    public async findAll(): Promise<DataResponse<FindEmployeeDto[]>>{
        try{ return await this.service.findAll() }
        catch(e){ throw e }
    }

    public async update(id: string, employee: UpdateEmployeeDto){
        try{  return await this.service.update(id, employee) }
        catch(e){ throw e }
    }

}