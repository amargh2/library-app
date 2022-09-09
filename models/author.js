const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema(
  {
    first_name: {type: String, required: true, maxlength: 100},
    family_name: {type: String, required: true, maxlength: 100},
    date_of_birth:{type:Date},
    date_of_death:{type:Date},
  }
)

AuthorSchema
.virtual('name')
.get(function(){
  let fullname = '';
  if (this.first_name && this.family_name) {
    fullname = `${this.first_name}, ${this.family_name}`;
  };
  if (!this.first_name || !this.family_name) {
    fullname = '';
  };
  return fullname
})

AuthorSchema
.virtual('dob_formatted')
.get(function() {
  let dob
  if (this.date_of_birth){
    dob = this.date_of_birth.toLocaleDateString()
  } else {
    dob = 'Unknown.'
  }
  return dob
})

AuthorSchema
.virtual('dod_formatted')
.get(function() {
  let dod
  if (this.date_of_death) {
    dod = this.date_of_death.toLocaleDateString()
  } else {
    dod = ''
  }
  return dod
})

AuthorSchema
.virtual('url')
.get(function(){
  return `/catalog/author/${this._id}`
})

module.exports = mongoose.model('Author', AuthorSchema)