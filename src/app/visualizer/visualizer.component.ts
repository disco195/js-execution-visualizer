import { Component, OnInit } from '@angular/core';
import { ROW_TITLES } from './visualizer.constants';
@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  public displayBlockNumber = 0;
  public rowTitles = ROW_TITLES;
  constructor() { }

  ngOnInit(): void {
  }

  incrementDisplayBlockNumber(): void {
    this.displayBlockNumber++;
  }

  decrementDisplayBlockNumber(): void {
    this.displayBlockNumber--;
  }

}
