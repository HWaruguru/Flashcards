export class Flashcard {
    id: number;
    title: string;
    notes: string;
    subject: string;
    dateCreated: Date;
    dateUpdated: Date;
   
   
    
    constructor(id: number, title: string, notes: string, subject: string,dateCreated: Date, dateUpdated: Date ) {
        this.id = id;
        this.title = title;
        this.notes = notes;
        this. subject =  subject;
        this.dateCreated = dateCreated;
        this.dateUpdated = dateUpdated;
    }

}
