import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value:number
  constructor(private store:Store<{counter:CounterState}>) { }
  options = ['Option 1', 'Option 2', 'Option 3', 'Option 4','Option 1', 'Option 2', 'Option 3', 'Option 4','Option 1', 'Option 2', 'Option 3', 'Option 4'];
  ngOnInit(): void {
    this.filteredOptions = this.options;

  }
  addOn():void{
    this.store.dispatch(customIncrement({value:+this.value}))
  }


  
  selectedOption: string;
  searchTerm = '';
  filteredOptions: string[];

  filterOptions() {
    this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }
}
