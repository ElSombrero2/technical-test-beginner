import { StatusCodes } from "http-status-codes"
import { createResponse, message } from "../../../core/response"
import { DATASET, Employee } from "../mock/employee.mock"
import { EmployeeService } from "../service/employee.service"
import { EmployeeController } from "./employee.controller"

describe('Employee Controller', () => {

    let service!: EmployeeService
    let controller!: EmployeeController

    beforeEach(() => {
        service = new EmployeeService(Employee as any)
        controller = new EmployeeController(service)
    })

    test('Should create an Employee', async () => {
        const body = {name: 'John', firstname: 'Doe', department: 'Math'}
        const response = await controller.create(body)
        expect(response).toEqual(createResponse(StatusCodes.CREATED, DATASET[0]))
    })

    test('Should update Employee', async () => {
        const body = {name: 'John', firstname: 'Doe', department: 'Math'}
        const response = await controller.update('639191382e81433cb3537197', body)
        expect(response).toEqual(createResponse(StatusCodes.OK, message('Employee Updated!')))
    })

    test('Should find All Employees', async () => {
        const response = await controller.findAll()
        expect(response).toEqual(createResponse(StatusCodes.OK, DATASET))
    })

    test('Should find an Employee', async () => {
        const response = await controller.findByDepartment('Math')
        expect(response).toEqual(createResponse(StatusCodes.OK, DATASET))
    })

})