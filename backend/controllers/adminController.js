const asyncHandler = require('express-async-handler');
const User = require('../models/UserModel');
const Employee = require('../models/EmployeeModel');
const Ticket = require('../models/TicketModel');

// @dec    Get all user tickets
// @route  GET /api/admin
//@access  Private
const getAllTickets = asyncHandler(async (req, res) => {
  // Get user using id in jwt
  const user = await User.findById(req.user.id);

  if (!user) {
    res.status(401);
    throw new Error('User not found');
  }

  const tickets = await Ticket.find({});

  res.status(200).json(tickets);
});

module.exports = {
  getAllTickets,
};
