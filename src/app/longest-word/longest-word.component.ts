import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-longest-word',
  templateUrl: './longest-word.component.html',
  styleUrls: ['./longest-word.component.scss']
})
export class LongestWordComponent implements OnInit {
  public form: FormGroup;
  private word: string;

  constructor() {
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  /**
   * Find the longest word in the given text and saves it in the word property.
   * It removes all non alphanumeric characters from the text (expect the underscore _)
   * NOTE: It does not take into consideration word with accents.
   */
  findLongestWord(): void {
    let text = this.form.controls.text.value;
    let word = '';

    // replaces all non alphanumeric characters (including line breakers) with blank spaces
    text = text.replace(/\W/g, ' ');

    text.split(' ').forEach((it: string) => {
      console.log(it);
      if (it.trim().length > word.length) {
        word = it.trim();
      }
    });

    this.word = word;
  }

  get longestWord(): String {
    return this.word ? this.word : '-';
  }

}
