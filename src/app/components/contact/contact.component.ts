import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public contact: User;
  constructor(private flashMessges: FlashMessagesService) {}

  ngOnInit() {
    this.contact = new User();
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      this.flashMessges.show('Please fill in all the blanks', {
        cssClass: 'alert-danger',
        timeout: 4000
      });
    } else {
      this.flashMessges.show('New client added', {
        cssClass: 'alert-success',
        timeout: 4000
      });
    }
  }
}
