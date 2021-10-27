import { Component, OnInit } from '@angular/core';
import { Flashcard } from '../flashcard';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css']
})
export class FlashcardComponent implements OnInit {
  flashcards = [
    new Flashcard(1, 'Lakes', 'We have then returned the days left if the goal date has not been passed', 'Geography', new Date(2021,9, 27), new Date(2021,9, 27)),
    new Flashcard(2, 'Prepositions', 'We have then returned the days left if the goal date has not been passed', 'English', new Date(2021,9, 26), new Date(2021,9, 27)),
    new Flashcard(3, 'Matrices', 'We have then returned the days left if the goal date has not been passed', 'Mathematics', new Date(2021,9, 25), new Date(2021,9, 26)),
    new Flashcard(4, 'Pollination', 'We have then returned the days left if the goal date has not been passed', 'Biology', new Date(2021,9, 24), new Date(2021,9, 25)),
]
 
  constructor() { }

  ngOnInit(): void {
  }

}
