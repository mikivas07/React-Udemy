import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("Pruebas en 09-promesas", () => {
  test("getHeroeByIdAsync debe retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((hero) => {
      expect(hero.name).toBe("Batman");

      done();
    });
  });

  test("getHeroeByIdAsync debe retornar un error", (done) => {
    const id = 100;
    getHeroeByIdAsync(id).catch((error) => {
      console.log(error);

      done();
    });
  });
});
