import { StatusCodes } from "http-status-codes"
import { createResponse, message } from "../../../core/response"
import { DATASET, Employee } from "../mock/employee.mock"
import { EmployeeService } from "./employee.service"

describe('Employee Service', () => {
    
    let service!: EmployeeService

    beforeEach(() => service = new EmployeeService(Employee as any))

    afterEach(() => ((Employee as any).find as jest.Mock).mockClear())

    test('Should create an Employee', async () => {
        const body = {name: 'John', firstname: 'Doe', department: 'Math'}

        const response = await service.create(body)
        
        // Verify if Employee is instanced once and if the 
        // parameter is correct
        expect(Employee.mock.instances.length).toBe(1)
        expect(Employee.mock.calls[0].at(0)).toEqual(body)
        
        const save = Employee.mock.results[0].value.save as jest.Mock
        
        // Verify if save method is called once
        // and returns the right value
        expect(save.mock.calls.length).toBe(1)
        expect(save.mock.results[0].value).toBe(DATASET[0])

        // Verify status code and value
        expect(response).toEqual(createResponse(StatusCodes.CREATED, DATASET[0]))
    })

    test('Should find Employees by Department', async () => {
        const department = 'Math'
        const response = await service.findByDepartment(department)

        const find = (Employee as any).find as jest.Mock

        // verify if the method is called once
        expect(find.mock.calls.length).toBe(1)

        // Verify if the method haves the correct parameters
        // and returns the right value
        expect(find.mock.calls[0].at(0).department.$regex).toEqual(new RegExp(`^${department}`, 'i'))
        expect(find.mock.results[0].value).toEqual(DATASET)

         // Verify status code and data
        expect(response).toEqual(createResponse(StatusCodes.OK, DATASET))
    })

    test('Should find All Employees', async () => {
        const response = await service.findAll()
        const find = (Employee as any).find as jest.Mock

        // Verify if the method is called once
        // and returns the right value
        expect(find.mock.calls.length).toBe(1)
        expect(find.mock.results[0].value).toEqual(DATASET)

        // Verify status code and data
        expect(response).toEqual(createResponse(StatusCodes.OK, DATASET))
    })

    test('Should update Employee', async () => {
        const body = {name: 'John', firstname: 'Doe', department: 'Math'}
        const _id = '639191382e81433cb3537197'

        const response = await service.update(_id, body)
        const updateOne = (Employee as any).updateOne as jest.Mock
        
        // verify if the method is called once
        expect(updateOne.mock.calls.length).toBe(1)

        // Verify if the method haves the correct parameters
        // and returns the right value
        expect(updateOne.mock.calls[0].at(0)).toEqual({_id})
        expect(updateOne.mock.calls[0].at(1)).toEqual(body)

        // Verify status code and data
        expect(response).toEqual(createResponse(StatusCodes.OK, message('Employee Updated!')))
    })

})