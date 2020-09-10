
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
                .references('id')//links the id of questions table
                .inTable('questions')//links question table
        })
};

//think of socks in a foot
//you have to do the opposite of how you put them on to take them off
exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('client_questions')
        .dropTableIfExists('questions')
        .dropTableIfExists('clients')
};
