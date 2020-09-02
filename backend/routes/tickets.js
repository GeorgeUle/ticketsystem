const { Router, text } = require('express');
const router = Router();
const Ticket = require('../models/Ticket')

router.get('/', async (req,res) => {
    const tickets = await Ticket.find();
    res.json(tickets);
});
router.post('/', async(req,res) => {
    const {title, client, ticketId } = req.body;
    const imagePath = '/upload/'+ req.file.filename;
    const newTicket = new Ticket({title, client, ticketId, imagePath })
    await newTicket.save();
    res.json({message: 'Ticket saved'})

})
router.delete('/:id', async(req,res) => {
    await Ticket.findByIdAndDelete(req.params.id);
    res.json({message: 'Ticket Deleted'})
}) 

module.exports = router;