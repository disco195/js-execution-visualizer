import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ROW_TITLES, VISUALISATION_EXAMPLES } from './visualizer.constants';

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {
  public displayBlockNumber = 0;
  public rowTitles = ROW_TITLES;
  public exampleId = 'promise-exec';
  public imageSrc = '../../assets/code-snippets/promises.png';
  public example;
  public allExamples = [];
  public rowKeys = Object.keys(ROW_TITLES);
  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param['example-id']) {
        this.exampleId = param['example-id'];
      } else {
        this.exampleId = 'promise-exec';
      }
      this.allExamples = VISUALISATION_EXAMPLES[this.exampleId].examples;
      this.example = this.allExamples[this.displayBlockNumber];
      this.imageSrc = VISUALISATION_EXAMPLES[this.exampleId].imageSrc;
    });
  }

  ngOnInit(): void {
    this.allExamples = VISUALISATION_EXAMPLES[this.exampleId].examples;
    this.example = this.allExamples[this.displayBlockNumber];
    this.imageSrc = VISUALISATION_EXAMPLES[this.exampleId].imageSrc;
  }

  incrementDisplayBlockNumber(): void {
    this.displayBlockNumber++;
    this.example = this.allExamples[this.displayBlockNumber];
  }

  decrementDisplayBlockNumber(): void {
    this.displayBlockNumber--;
    this.example = this.allExamples[this.displayBlockNumber];
  }

}
