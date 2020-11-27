import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}
	
	@Output() newItemEvent = new EventEmitter<string>();

	onclick() {
		this.newItemEvent.emit("clicked...!");
	}
}


