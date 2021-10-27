import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flashcard } from '../flashcard';
import { AuthService } from '../flashcard-service/auth.service';

@Component({
  selector: 'app-flashcard',
  templateUrl: './flashcard.component.html',
  styleUrls: ['./flashcard.component.css'],
})
export class FlashcardComponent implements OnInit {
  allflashcards = [
    new Flashcard(
      1,
      'Lakes',
      'We have then returned the days left if the goal date has not been passed',
      'Geography',
      new Date(2021, 9, 27),
      new Date(2021, 9, 27)
    ),
    new Flashcard(
      2,
      'Prepositions',
      'We have then returned the days left if the goal date has not been passed',
      'English',
      new Date(2021, 9, 26),
      new Date(2021, 9, 27)
    ),
    new Flashcard(
      3,
      'Matrices',
      'We have then returned the days left if the goal date has not been passed',
      'Mathematics',
      new Date(2021, 9, 25),
      new Date(2021, 9, 26)
    ),
    new Flashcard(
      4,
      'Pollination',
      'We have then returned the days left if the goal date has not been passed',
      'Biology',
      new Date(2021, 9, 24),
      new Date(2021, 9, 25)
    ),
  ];
  flashcards = [
    new Flashcard(
      1,
      'Lakes',
      'We have then returned the days left if the goal date has not been passed',
      'Geography',
      new Date(2021, 9, 27),
      new Date(2021, 9, 27)
    ),
    new Flashcard(
      2,
      'Prepositions',
      'We have then returned the days left if the goal date has not been passed',
      'English',
      new Date(2021, 9, 26),
      new Date(2021, 9, 27)
    ),
    new Flashcard(
      3,
      'Matrices',
      'We have then returned the days left if the goal date has not been passed',
      'Mathematics',
      new Date(2021, 9, 25),
      new Date(2021, 9, 26)
    ),
    new Flashcard(
      4,
      'Pollination',
      'We have then returned the days left if the goal date has not been passed',
      'Biology',
      new Date(2021, 9, 24),
      new Date(2021, 9, 25)
    ),
  ];
  constructor(private authService: AuthService, private route: Router) {}

  ngOnInit(): void {}

  filterCards(subject: string) {
    this.flashcards = this.allflashcards;
    this.flashcards = this.allflashcards.filter(
      (card) => card.subject == subject
    );
  }

  async deleteFlashCard(flashcard_id: number) {
    await this.authService.deleteFlashCard(flashcard_id)
    this.route.navigate(['/home'])
  }

  async updateFlashCard(flashcard_id: number) {
    await this.authService.updateFlashCard(flashcard_id)
    this.route.navigate(['/home'])
  }
}
