/**
  * @param { import("knex").Knex } knex
  * @returns { Promise<void> }
  */

exports.up = function (knex) {
  // DO YOUR MAGIC
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();
    tbl.text("vin")
      .unique()
      .notNullable();
    tbl.text("make")
      .notNullable();
    tbl.text("model")
      .notNullable();
    tbl.integer("mileage")
      .notNullable()
    tbl.text("title");
    tbl.text("transmission")
  });
};

 /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */


exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
