import { Component, Input } from '@angular/core';

export interface Code {
  html?: string;
  typescript?: string;
  scss?: string;
  module?: string;
}

export interface ExtFile {
  path: string;
  content: string;
}

export interface RouteFile extends ExtFile {
  name: string;
}

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent {
  @Input() code!: Code;

  preview = true;
}
