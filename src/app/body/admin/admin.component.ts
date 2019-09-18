import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

class Inputs {
  id: String;
  type: String;
  displayName: String;
  addFlag: Boolean;
}

class ContentType {
  type: String;
  content: String;
  constructor(type: String, content: String) {
    this.content = content;
    this.type = type;
  }
}

class MainContent {
  topic: String;
  subHeading: String;
  paragraph: Array<ContentType>;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  mainContentArray: Array<MainContent> = [];

  inputItems: Array<Inputs> = [{ id: 'topic', type: 'text', displayName: 'Topic', addFlag: false },
  { id: 'subHeading', type: 'text', displayName: 'Sub Heading', addFlag: false },
  { id: 'para', type: 'text', displayName: 'Paragraph', addFlag: true }
  ];

  @ViewChild('newForm', { static: false }) signUpForm: NgForm;

  onSubmit() {
    let object = this.signUpForm.value;
    let mainContent = new MainContent();
    let contentTypeArray: Array<ContentType> = [];
    for (var key in object) {
      if (key.indexOf('topic') >= 0) {
        mainContent.topic = object[key];
      } else if (key.indexOf('subHeading') >= 0) {
        mainContent.subHeading = object[key];
      } else if (key.indexOf('addElement') >= 0) {
        continue;
      } else {
        contentTypeArray.push(new ContentType(key.substr(0, key.indexOf('_')),
          key.substr(0, key.indexOf('_')) == 'image' ? './assets/java/images/' + object[key] : object[key]));
      }
    }
    mainContent.paragraph = contentTypeArray;
    this.mainContentArray.push(mainContent);
    console.log(JSON.stringify(this.mainContentArray));
    alert('Copy the json file generated in the console.');

  }

  constructor() { }

  ngOnInit() { }

  addItem(inputElement: any) {
    if (inputElement.value.indexOf('image') >= 0) {
      this.inputItems.push({ id: 'image', type: 'text', displayName: 'Image', addFlag: true });
    } else if (inputElement.value.indexOf('bullet') >= 0) {
      this.inputItems.push({ id: 'bullet', type: 'text', displayName: 'Bullet', addFlag: true });
    } else if (inputElement.value.indexOf('code') >= 0) {
      this.inputItems.push({ id: 'code', type: 'text', displayName: 'Code Snippet', addFlag: true });
    } else if (inputElement.value.indexOf('bold-para-head') >= 0) {
      this.inputItems.push({ id: 'bold-para-head', type: 'text', displayName: 'Bold Heading', addFlag: true });
    } else if (inputElement.value.indexOf('bold-para') >= 0) {
      this.inputItems.push({ id: 'bold-para', type: 'text', displayName: 'Bold Paragraph', addFlag: true });
    } else {
      this.inputItems.push({ id: 'para', type: 'text', displayName: 'Paragraph', addFlag: true });
    }
  }

  addAnItem(value: String) {
    if (value.indexOf('image') >= 0) {
      this.inputItems.push({ id: 'image', type: 'text', displayName: 'Image', addFlag: true });
    } else if (value.indexOf('bullet') >= 0) {
      this.inputItems.push({ id: 'bullet', type: 'text', displayName: 'Bullet', addFlag: true });
    } else if (value.indexOf('code') >= 0) {
      this.inputItems.push({ id: 'code', type: 'text', displayName: 'Code Snippet', addFlag: true });
    } else if (value.indexOf('bold-para-head') >= 0) {
      this.inputItems.push({ id: 'bold-para-head', type: 'text', displayName: 'Bold Heading', addFlag: true });
    } else if (value.indexOf('bold-para') >= 0) {
      this.inputItems.push({ id: 'bold-para', type: 'text', displayName: 'Bold Paragraph', addFlag: true });
    } else {
      this.inputItems.push({ id: 'para', type: 'text', displayName: 'Paragraph', addFlag: true });
    }
  }

  removeItem(inputElement: any) {
    let newItem = inputElement.children[2].id;
    newItem = newItem.substr(0, newItem.indexOf('_'));
    let index = this.inputItems.length - 1;
    while (index >= 0) {
      if (newItem == this.inputItems[index].id) {
        this.inputItems.splice(index, 1);
        break;
      }
      index -= 1;
    }
  }
}
