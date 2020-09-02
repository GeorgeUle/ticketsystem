const {Schema, model } = require ('mongoose');

const TicketSchema = new Schema({
    title : {type: String , required:true},
    client  : {type: String , required:true},
    ticketId  : {type: String , required:true},
    imagePath  : {type: String , required:false},
    created_at  : {type: Date , default: Date.now },
})

module.exports = model('Ticket', TicketSchema);