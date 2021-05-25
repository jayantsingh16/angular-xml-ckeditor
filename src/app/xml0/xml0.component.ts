import { Component } from '@angular/core';
import { saveAs } from 'file-saver';
import ClassicEditorWithAutosave from '@ckeditor/ckeditor5-build-classic';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-xml0',
  templateUrl: './xml0.component.html',
  styleUrls: ['./xml0.component.css']
})
export class Xml0Component {
  public Editor = ClassicEditorWithAutosave;
  public editorData: any
  public config = {
		autosave: {
			waitingTime: 5000,
			save: Editor => this.saveData( Editor.getData() )
		},
	}
  saveFile(data) {
    const blob = 
        new Blob([
                 data], 
                 {type: "text/xml;charset=utf-8"});
    saveAs(blob, "/assets/users.xml");
  }
	public saveData(data) {
    this.saveFile(data);
	}
}