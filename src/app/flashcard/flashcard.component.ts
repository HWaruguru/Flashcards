import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards = [
    new Flashcard(1, 'Pipes', 'We have then returned the days left if the goal date has not been passed', 'Computer Science', 'new Date(2021,10, 27)', 'new Date(2021,10, 27)'),
    new Flashcard(2, 'Pipes', 'We have then returned the days left if the goal date has not been passed', 'Computer Science', 'new Date(2021,10, 27)', 'new Date(2021,10, 27)'),
    new Flashcard(3, 'Pipes', 'We have then returned the days left if the goal date has not been passed', 'Computer Science', 'new Date(2021,10, 27)', 'new Date(2021,10, 27)'),
    new Flashcard(4, 'Pipes', 'We have then returned the days left if the goal date has not been passed', 'Computer Science', 'new Date(2021,10, 27)', 'new Date(2021,10, 27)'),
]
 
  constructor() { }

  ngOnInit(): void {
  }

}
