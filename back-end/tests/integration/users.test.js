const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const chai = require("chai");

// This sets the mock adapter on the default instance
const axiosMock = new MockAdapter(axios);
const { expect } = chai;

const getUsers = async () => {
  return await axios.get("/users")
    .then((res) => res.data);
};

const createUser = async () => {
  return await axios.post("/users")
    .then((res) => res.data);
};

describe("GET /users", () => {
  const dataMock = [
    {
      id: "1",
      email: "captain@example.com",
      fullName: "Steve Rogers",
    },
    {
      id: "2",
      email: "doctor@example.com",
      fullName: "Stephen Strange",
    }
  ]

  axiosMock.onGet("/users").reply(200, dataMock);

  it("Ao acessar corretamente traz uma lista de usuarios", async () => {
    const data = await getUsers();
    expect(data).to.be.a('array');
  });

  it("O objeto deve possuir as propeidades e valores corretos", async () => {
    const data = await getUsers();
    const email = "captain@example.com";
    const name = "Steve Rogers";
    const id = "1"

    expect(data[0].id).to.be.equal(id);
    expect(data[0].email).to.be.equal(email);
    expect(data[0].fullName).to.be.equal(name);
  });

  it("Se nada for passado retorna um erro", async () => {
    const error = axiosMock
      .onGet("/users")
      .replyOnce(404)

    expect(error);
  });
});

describe("POST /users", () => {
  const dataMock =
  {
    email: "captain@example.com",
    fullName: "Steve Rogers",
  }

  axiosMock
    .onPost("/users")
    .reply(201, dataMock)

  it("Cria um novo usuario com sucesso", async () => {
    const data = await createUser();
    expect(data).to.be.a('object');
  });

  it("O objeto criado deve possuir as propeidades e valores corretos", async () => {
    const data = await createUser();
    const email = "captain@example.com";
    const name = "Steve Rogers";

    expect(data.email).to.be.equal(email);
    expect(data.fullName).to.be.equal(name);
  });

  it("Se nada for passado retorna um erro", async () => {
    const error = axiosMock
      .onPost("/users")
      .replyOnce(400)

    expect(error);
  });
});

describe("UPDATE /users", () => {
  const dataMock =
  {
    id: "1",
    email: "genius@example.com",
    fullName: "Tony Stark",
  };

  axiosMock.onPut("/users", { params: { id: "1" } }).reply(200, dataMock);

  it("Ao acessar corretamente traz uma lista de usuarios", async () => {
    expect(
      axiosMock
        .onPut("/users", { params: { id: "1" } })
        .reply(200, dataMock)
    ).to.be.a('object');
  });

  it("O objeto deve possuir as propeidades e valores novas corretos", async () => {
    const id = "1";
    const email = "genius@example.com";
    const fullName = "Tony Stark";

    const { handlers } = axiosMock
      .onPut("/users", { params: { id: "1" } })
      .reply(200, dataMock);

    expect(handlers.put[0][4].id).to.deep.include(id);
    expect(handlers.put[0][4].fullName).to.deep.include(fullName);
    expect(handlers.put[0][4].email).to.deep.include(email);
  });

  it("Se nada for passado retorna um erro", async () => {
    const error = axiosMock
      .onPut("/users")
      .replyOnce(404)

    expect(error);
  });

  describe("DELETE /users", () => {
    axiosMock.onDelete("/users", { params: { id: "1" } })
    .reply(200);
  
    it("Verifica se excluiu usuario corretamente", async () => {
      expect(
        axiosMock
          .onDelete("/users", { params: { id: "1" } })
          .reply(200, dataMock)
      ).to.be.a('object');
    });
  });

  it("O objeto deve possuir as propeidades e valores novas corretos", async () => {
    const status = 200;

    const { handlers } = axiosMock
      .onDelete("/users", { params: { id: "1" } })
      .reply(200);

    expect(handlers.put[0][3]).to.equal(status);
  });

  it("Se não for passado um parametro valido retorna um erro", async () => {
    const error = axiosMock
      .onDelete("/users")
      .replyOnce(404)

    expect(error);
  });
});
