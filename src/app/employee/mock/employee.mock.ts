// Manual Mock Only for Tests

const DATASET = [
    {
        "_id": "63943429fae7bd017f0a2e89",
        "name": "John",
        "firstname": "Doe",
        "department": "Math",
        "createdAt": "2022-12-10T07:24:25.694Z",
        "updatedAt": "2022-12-10T07:25:11.581Z",
        "__v": 0
      }
]

const Employee = jest.fn(() => ({
    save: jest.fn(() => DATASET[0])
}));

(Employee as any).updateOne = jest.fn();
(Employee as any).find = jest.fn(() => DATASET);

export {DATASET, Employee }