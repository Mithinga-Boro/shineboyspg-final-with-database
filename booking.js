const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');
const { uploadBookingFiles } = require('../middleware/upload');

router.post('/bookings', uploadBookingFiles, async (req, res) => {
  try {
    const { name, phone, room, fullData } = req.body;
    if (!req.files || !req.files.photo || !req.files.document) {
      return res.status(400).json({ error: 'Photo and document are required' });
    }
    const photoPath = '/uploads/photos/' + req.files.photo[0].filename;
    const documentPath = '/uploads/documents/' + req.files.document[0].filename;
    
    const booking = new Booking({
      name, phone, room,
      photo: photoPath,
      document: documentPath,
      fullData: fullData ? JSON.parse(fullData) : {}
    });
    await booking.save();
    res.status(201).json({ message: 'Booking saved', bookingId: booking._id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;