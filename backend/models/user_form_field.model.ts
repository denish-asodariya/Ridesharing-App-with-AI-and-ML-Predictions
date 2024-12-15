import {model, Schema} from 'mongoose'
import paginate from "mongoose-paginate-v2";
import aggregatePaginate from 'mongoose-aggregate-paginate-v2'

// schema design
const schema = new Schema({
  service_vehicle: {
    type: Schema.Types.ObjectId,
    ref: 'service_vehicle',
    required: true,
  },
  step_one: [
    {
      _id: Schema.Types.ObjectId,
      field_name: {
        type: String,
        trim: true,
      },
      input_name: {
        type: String,
        trim: true,
        minlength: 0,
        maxlength: 300,
        lowercase: true,
        required: [true, 'Form field name required']
      },
      input_type: {
        type: String,
        enum: ['file', 'boolean', 'text', 'number', 'textarea', 'image', 'date', 'time', 'select', 'radio_button', 'switch', 'digital_signature', 'checkbox'],
        trim: true,
        minlength: 0,
        maxlength: 300,
        lowercase: true,
        required: [true, 'Form field type required']
      },
      select_options: [
        {
          type: String,
        }
      ],
      link: {
        type: String,
        trim: true,
      },
      placeholder: {
        type: String,
        trim: true,
        minlength: 0,
        maxlength: 200,
      },
      field_required: {
        type: Boolean,
        default: false
      },
      status: {
        type: Boolean,
        required: [true, 'Form field status required']
      },
      step_name: {
        type: String,
        trim: true,
      },
      createdAt: Date,
      updatedAt: Date,
      __v: Number
    }
  ],
  step_two: [
    {
      _id: Schema.Types.ObjectId,
      field_name: {
        type: String,
        trim: true,
      },
      input_name: {
        type: String,
        trim: true,
        minlength: 0,
        maxlength: 300,
        lowercase: true,
        required: [true, 'Form field name required']
      },
      input_type: {
        type: String,
        enum: ['file', 'boolean', 'text', 'number', 'textarea', 'image', 'date', 'time', 'select', 'radio_button', 'switch', 'digital_signature', 'checkbox'],
        trim: true,
        minlength: 0,
        maxlength: 300,
        lowercase: true,
        required: [true, 'Form field type required']
      },
      select_options: [
        {
          type: String,
        }
      ],
      link: {
        type: String,
        trim: true,
      },
      placeholder: {
        type: String,
        trim: true,
        minlength: 0,
        maxlength: 200,
      },
      field_required: {
        type: Boolean,
        default: false
      },
      status: {
        type: Boolean,
        required: [true, 'Form field status required']
      },
      step_name: {
        type: String,
        trim: true,
      },
      createdAt: Date,
      updatedAt: Date,
      __v: Number
    }
  ],
  step_three: []

}, {
  timestamps: true
});


schema.plugin(paginate)
schema.plugin(aggregatePaginate)
const UserFormField = model("user_form_field", schema);

export default UserFormField;
