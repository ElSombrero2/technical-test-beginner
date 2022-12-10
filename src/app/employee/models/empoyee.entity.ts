import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
    name: {
        type: mongoose.Schema.Types.String,
        required: true,
    },
    firstname: {
        type: mongoose.Schema.Types.String,
        required: true
    },
    department: {
        type: mongoose.Schema.Types.String,
        required: true
    }
}, {timestamps: true})

const EmployeeModel = mongoose.model('user', EmployeeSchema)
declare type Employee = typeof EmployeeModel

export { Employee, EmployeeModel, EmployeeSchema }