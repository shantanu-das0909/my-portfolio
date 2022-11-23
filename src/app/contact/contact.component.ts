import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

interface Message {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  sendMessage: boolean = false;
  message: Message | undefined;

  constructor() {}

  ngOnInit(): void {}

  // sent message after submit
  onSubmit(form: NgForm): void {
    this.sendMessage = true;
    this.message = form.value;
    console.log(this.message);
    form.reset();
  }

  // remove the confirmation messsage
  removeSentMessage() {
    this.sendMessage = false;
  }
}
