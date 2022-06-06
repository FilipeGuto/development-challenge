// const { fetchFindUsers }  = require('../../src/fetch/users.fetch');
// const axios = require('axios');
// const BASE_URL = "https://mgcbq4vjte.execute-api.us-east-1.amazonaws.com/v1"

// jest.mock("axios");

// describe("GET /users", () => {
//   describe("Caso API esteja correta", () => {
//     it("retorna uma lista com todos usuarios", async () => {
//       const users = [
//         { id: 1, fullName: "John", email: "john@example.com" },
//         { id: 1, fullName: "Jana", email: "jana@example.com" },
//       ];

//       axios.get.mockResolvedValue(users);
//       const response = await fetchFindUsers.get(`${BASE_URL}/users`);

//       expect(response.body).toEqual(users);
//     });
//   });

//   describe("Caso API esteja incorreta", () => {
//     it("retorna uma lista vazia", async () => {
//       // given
//       const message = "Network Error";
//       axios.get.mockRejectedValueOnce(new Error(message));

//       // when
//       const result = await fetchFindUsers();

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
//       expect(result).toEqual([]);
//     });
//   });
// });
