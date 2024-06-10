describe("Pruebas en <DemoComponent/> ", () => {
  test("Esta prueba no debe de fallar", () => {
    // 1. INICIALIZACION
    const message1 = "Hola mundo";

    // 2. ESTIMULO
    const message2 = message1.trim();

    // 3. OBSERVAR EL COMPORTAMIENTO...
    expect(message1).toBe(message2);
  });
});
