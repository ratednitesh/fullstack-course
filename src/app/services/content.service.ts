import { Injectable } from '@angular/core';

export class ContentType {
  type: String;
  content: String;
}

export class MainContent {
  topic: String;
  subHeading: String;
  paragraph: Array<ContentType>;

}
export class List {
  displayValue: String;
  topicLink: String;
}
export class Menu {
  isList: boolean;
  contentType: String;
  topicLink: String;
  displayValue: String;
  id: String;
  subList: Array<List>;
}
export class ContentList {
  displayValue: String;
  topicLink: String;
  paragraph: Array<ContentType>;
}
@Injectable({
  providedIn: 'root'
})
export class ContentService {
  menuArray: Array<Menu>;
  constructor() {
    this.menuArray = [
      {
        id: 'corejava', displayValue: 'Core Java', topicLink: '', contentType: 'Back-end', isList: true,
        subList: [
          { displayValue: 'Classes & Objects', topicLink: 'java/classes' },
          { displayValue: 'Datatypes', topicLink: 'java/datatypes' },
          { displayValue: 'Arrays', topicLink: 'java/arrays' },
          { displayValue: 'OOP\'s Concept', topicLink: 'java/oops' },
          { displayValue: 'Object Class', topicLink: 'java/object' },
          { displayValue: 'Constructors', topicLink: 'java/constructor' },
          { displayValue: 'Access Modifiers', topicLink: 'java/access' },
          { displayValue: 'Inheritance', topicLink: 'java/inheritance' },
          { displayValue: 'static Keyword', topicLink: 'java/static' },
          { displayValue: 'final Keyword', topicLink: 'java/final' },
          { displayValue: 'this Keyword', topicLink: 'java/this' },
          { displayValue: 'super Keyword', topicLink: 'java/super' },
          { displayValue: 'Instance Initializer Block', topicLink: 'java/initialiser' },
          { displayValue: 'Types of Associations', topicLink: 'java/association' },
          { displayValue: 'Method Overloading', topicLink: 'java/overload' },
          { displayValue: 'Method Overriding', topicLink: 'java/override' },
          { displayValue: 'Abstract Class', topicLink: 'java/abstract' },
          { displayValue: 'Interfaces', topicLink: 'java/interface' },
          { displayValue: 'Nested Class', topicLink: 'java/nested' },
          { displayValue: 'Wrapper Class', topicLink: 'java/wrapper' },
          { displayValue: 'String Class', topicLink: 'java/strings' },
          { displayValue: 'StringBuffer/ StringBuilder', topicLink: 'java/stringbuff' },
          { displayValue: 'Exception Handling', topicLink: 'java/exception' },
          { displayValue: 'Singleton Class', topicLink: 'java/singleton' },
          { displayValue: 'Immutable Class', topicLink: 'java/immutable' },
          { displayValue: 'clone() Method', topicLink: 'java/clone' }
        ]
      }, {
        id: 'java', displayValue: 'Java Internals', topicLink: '', contentType: 'Back-end', isList: true,
        subList: [
          { displayValue: 'JVM Basics', topicLink: 'java/jvm' },
          { displayValue: 'JVM Architecture', topicLink: 'java/jvm_arch' },
          { displayValue: 'Class Loaders', topicLink: 'java/classloader' },
          { displayValue: 'Custom ClassLoaders', topicLink: 'java/customclassloader' },
          { displayValue: 'Garbage Collection', topicLink: 'java/gc' }
        ]
      },
      {
        id: 'angular', displayValue: 'Angular', topicLink: '', contentType: 'Front-end', isList: true,
        subList: [
          { displayValue: 'Components', topicLink: 'underConstruction' },
          { displayValue: 'Services', topicLink: 'underConstruction' }
        ]
      },
      {
        id: 'classloader', displayValue: 'Javascript', topicLink: 'underConstruction', contentType: 'Front-end', isList: false,
        subList: []
      },
      {
        id: 'ds', displayValue: 'Data Structure', topicLink: '', contentType: 'Back-end', isList: true,
        subList: [
          { displayValue: 'Tree', topicLink: 'underConstruction' },
          { displayValue: 'LinkedList', topicLink: 'underConstruction' },
          { displayValue: 'ArrayList', topicLink: 'underConstruction' }
        ]
      }

    ];
  }

  getMenuArray(){
    return this.menuArray;
  }
}
