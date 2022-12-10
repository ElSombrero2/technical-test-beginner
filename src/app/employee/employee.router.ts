import { Application, Request, Response } from 'express'
import { call } from '../../core/response';
import { EmployeeController } from './controller/employee.controller';
import { EmployeeModel } from './models/employee.entity';
import { EmployeeService } from './service/employee.service';

export const RegisterEmployee = (base: string, app: Application) => {

    const service = new EmployeeService(EmployeeModel)
    const controller = new EmployeeController(service)

    app.post(`${base}`, async (req: Request, res: Response) => call(res, controller, 'create', req.body))
    app.get(`${base}`, async (req: Request, res: Response) => call(res, controller, 'findAll'))
    app.get(`${base}/:department`, async (req: Request, res: Response) => call(res, controller, 'findByDepartment', req.params.department))
    app.put(`${base}/:id`, async (req: Request, res: Response) => call(res, controller, 'update', req.params.id, req.body))

}