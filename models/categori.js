const { count } = require('console');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timestamps = require('mongoose-timestamp');
const mongoosePafinate = require('mongoose-paginate');


const CategorySchema = new Schema({
    title: { type: String, required: true },
    father: { type: Boolean, required: true },
    chiled: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
})
CategorySchema.plugin(timestamps);
CategorySchema.plugin(mongoosePafinate)



module.exports = mongoose.model('Category', CategorySchema)