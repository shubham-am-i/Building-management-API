import { describe, it } from 'node:test';
import assert from 'node:assert';

import { createBuilding } from '../controllers/buildingsController.js';

describe('createBuilding', () => {
  it('should have a createBuilding function', () => {
    assert.strictEqual(
      typeof createBuilding,
      'function',
      'createBuilding should be a function',
    );
  });
});

// Mock request object
// const mockRequest = {
//   body: {
//     name: 'The Park',
//     floors: 190,
//     location: 'Worli, Mumbai',
//   },
// };

// const mockResponse = {
//   status: function (statusCode) {
//     this.statusCode = statusCode;
//     return this;
//   },
//   json: function (data) {
//     this.data = data;
//   },
// };

// describe('createBuilding', () => {
//   it('should create a new building and return status 201 with a success message', async () => {
//     const req = mockRequest;
//     const res = mockResponse;

//     // await createBuilding(req, res);

//     assert.strictEqual(res.statusCode, 201);
//     assert.strictEqual(res.data.status, 'Success');
//     assert.strictEqual(res.data.building.name, mockRequest.body.name);
//   });

//   it('should handle missing required fields and return status 400 with an error message', async () => {
//     const req = {
//       body: {
//         // Missing required fields: name, floors, and location
//       },
//     };
//     const res = mockResponse;

//     // await createBuilding(req, res);

//     assert.strictEqual(res.statusCode, 400);
//     assert.strictEqual(res.data.status, 'Error');
//   });
// });
