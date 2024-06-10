import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";

describe("Pruebas en 08-imp-exp", () => {
  test("getHeroeById debe retornar un heroe por su ID ", () => {
    const id = 1;
    const hero = getHeroeById(id);

    expect(hero.name).toBe("Batman");
    expect(hero).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });

  test("getHeroeById debe retornar Undefined si el ID del heroe no existe", () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect(hero).toBe(undefined);
    expect(hero).toBeFalsy();
  });

  test("getHeroesByOwner debe retornar un arreglo con los heroes de DC", () => {
    const owner = "DC";
    const hero = getHeroesByOwner(owner);

    console.log(hero);

    expect(hero.length).toBe(3);
    expect(hero).toEqual(hero.filter((heroe) => heroe.owner === owner));
    expect(hero).toEqual([
      { id: 1, name: "Batman", owner: "DC" },
      { id: 3, name: "Superman", owner: "DC" },
      { id: 4, name: "Flash", owner: "DC" },
    ]);
  });

  test("getHeroeByOwner debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const hero = getHeroesByOwner(owner);

    console.log(hero);

    expect(hero.length).toBe(2);
    expect(hero).toEqual(hero.filter((heroe) => heroe.owner === owner));
    expect(hero).toEqual([
      { id: 2, name: "Spiderman", owner: "Marvel" },
      { id: 5, name: "Wolverine", owner: "Marvel" },
    ]);
  });
});
