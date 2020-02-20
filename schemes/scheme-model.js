const db = require('../data/db-config.js');
module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
};
function find() {
    return db('schemes');
};
function findById(id){
    return db('schemes')
        .where({ id })
        .first();
};
function findSteps(id){
// SELECT steps.id
//     , schemes.scheme_name
//     , steps.step_number
//     , steps.instructions
// FROM [steps]
// INNER JOIN schemes ON steps.scheme_id = schemes.id
// WHERE steps.scheme_id = 5
// ORDER BY schemes.scheme_name, steps.step_number;
    return db('steps')
        .join('schemes', 'steps.scheme_id', 'schemes.id')
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .where({'steps.scheme_id': id})
        .orderBy('steps.step_number')
};
function addStep(step, scheme_id){
    return db('steps')
        .insert({ ...step, scheme_id: scheme_id})
};
function add(scheme){
    return db('schemes')
        .insert(scheme, 'id')
};
function update(changes, id){
    return db('schemes')
        .where({ id })
        .update(changes)
};
function remove(id){
    return db('schemes')
        .where({ id })
        .del();
};


    