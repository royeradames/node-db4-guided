
exports.up = function (knex) {
    return knex.schema
        .createTable('clients', tbl => {
            tbl.increments()

        })
        .createTable('questions', tbl => {
            tbl.increments()

        })
        .createTable('client_questions', tbl => {
            tbl.increments()

            tbl.integer('client_id').unsigned().notNullable().references('clients.id')
            //foreign key 
            tbl.integer('question_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('questions')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('client_questions')
        .dropTableIfExists('questions')
        .dropTableIfExists('clients')
};
