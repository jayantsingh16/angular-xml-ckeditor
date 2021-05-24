import { Component, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import xml2js from 'xml2js';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-xml0',
  templateUrl: './xml0.component.html',
  styleUrls: ['./xml0.component.css']
})
export class Xml0Component {
[x: string]: any;
  public Editor = ClassicEditor;
  public editorData = '<p>Hello, world!</p>';
  @ViewChild( 'editor' ) editorComponent: Xml0Component;

    public getEditor() {
        return this.editorComponent.editorInstance;
    }
}