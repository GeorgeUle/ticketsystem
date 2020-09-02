import './styles/app.css';

import TicketService from './services/TicketService';

document.getElementById('ticket-form').addEventListener('submit', e=> {
    const title = document.getElementById('title').value;
    const client = document.getElementById('client').value;
    const ticketId = document.getElementById('ticketId').value;
    const image = document.getElementById('image').files;

    const formData = new FormData();

    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('client', client);
    formData.append('ticketId', ticketId);


    const ticketService = new TicketService()
    ticketService.postTicket(formData);

    console.log(title,client,ticketId,image)


    e.preventDefault();
})