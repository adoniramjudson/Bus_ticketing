
// Connecting with DB
var knex = require('knex')({
    client: 'mysql',
    connection: {
      host : process.env.HOST,
      user : 'root',
      password : process.env.PASSWORD,
      database : process.env.DATABASE
    }
  });

// Creating tables
knex.schema.hasTable('users_details').then(function(exists) {
    if (!exists) {
      return knex.schema.createTable('users_details', function(t) {
        t.increments('id').primary();
        t.string('first_name', 100).notNullable();
        t.string('last_name', 100).notNullable();
        t.string("phone_no",10).unique();
        t.string("email").unique();
        t.string("password",12).notNullable()
        t.string("created_at")
        // t.text('bio');
      });
    }
  });

module.exports=knex;


