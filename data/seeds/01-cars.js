/**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
exports.seed = async function(knex) {
  //Deletes ALL existing entries
  await knex('cars').truncate()
  await knex('cars').insert([
    { vin: "1560hdfy15ahy651", make: "Ford", model: "f-150", mileage: 123_123},
    { vin: "htgakhta35195aka", make: "Lexis", model: "i3", mileage: 51531},
    { vin: "5hj15kaih85h8ai5", make: "Ford", model: "Transit", mileage: 999_531},
    { vin: "ajg83ajta3jtajt8", make: "Toyota", model: "Camery", mileage: 489_142, title: "title_01", transmission: "Midnight Proformance"},
  ]);
};

