import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  @ViewChild('btnChachi') botonChachi: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(formValue) {
    console.log(formValue);
    this.botonChachi.nativeElement.className = 'btn btn-primary';
  }

}
