const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  room: { type: String, required: true },
  photo: { type: String, required: true },
  document: { type: String, required: true },
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' },
  createdAt: { type: Date, default: Date.now },
  // Additional fields from your form (stored but not required by admin table)
  fullData: { type: Object, default: {} }
});

module.exports = mongoose.model('Booking', bookingSchema);