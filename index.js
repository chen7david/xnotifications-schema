const Schema = require('./classes/Schema')
const DefaultSchema = require('./schema/default')
const JoiSchema = require('./schema/joi')
const SchemaBundle = new Schema()
    .merge({
        DefaultSchema,
        JoiSchema
    }).export()

module.exports = {
    Schema,
    DefaultSchema,
    JoiSchema,
    SchemaBundle
}