class TicketService{

    constructor(){
        this.URI = "http://localhost:2001/api/tickets";
    }

    async getTicket(){
     const response = await fetch(this.URI);
     const tickets = await response.json();
     return tickets;
     
    }

    async postTicket(ticket){
       const response =  await fetch(this.URI, {
            method:'POST',
            body: ticket
        });
        const data = await response.json();
        console.log(data)

    }

    async deleteTicket(ticketId){
        const response = await fetch(`${this.URI}/${ticketId}`, {
            headers:{
                'Content-Type': 'application/json'
            },
            method: 'DELETE',
            
        });
        const data = await response.json();
        console.log(data)
    }

}

module.exports = TicketService