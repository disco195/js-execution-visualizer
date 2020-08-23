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
  public code;
  public allExamples = [];
  public codeLines = [];
  public rowKeys = Object.keys(ROW_TITLES);
  constructor(private readonly route: ActivatedRoute) {
    this.route.params.subscribe(param => {
      if (param['example-id']) {
        this.exampleId = param['example-id'];
      } else {
        this.exampleId = 'promise-exec';
      }
    });
  }

  ngOnInit(): void {
    this.allExamples = VISUALISATION_EXAMPLES[this.exampleId].examples;
    this.example = this.allExamples[this.displayBlockNumber];
    this.code = VISUALISATION_EXAMPLES[this.exampleId].code;
    this.codeLines = VISUALISATION_EXAMPLES[this.exampleId].codeLines;
    // this.codeLines = this.code.split('\n').map((c, i) => i + '. ' + c);
    // this.codeLines.shift();
    // this.codeLines.pop();
    this.imageSrc = VISUALISATION_EXAMPLES[this.exampleId].imageSrc;
  }

  shouldShowSpinner(x: string): boolean {
    return x.toLowerCase().includes('pending');
  }

  shouldShowSpinnerDone(x: string): boolean {
    return x.toLowerCase().includes('resolved');
  }

  shouldHighlightRow(row: string): boolean {
    return row.startsWith(this.example.highlightKey + '.');
  }

  incrementDisplayBlockNumber(): void {
    this.displayBlockNumber++;
    this.example = this.allExamples[this.displayBlockNumber];
    this.codeLines = VISUALISATION_EXAMPLES[this.exampleId].codeLines;
  }

  decrementDisplayBlockNumber(): void {
    this.displayBlockNumber--;
    this.example = this.allExamples[this.displayBlockNumber];
    this.codeLines = VISUALISATION_EXAMPLES[this.exampleId].codeLines;
  }

  getChipClassToApply(index, key, ix): string {
    return `chip-${index}`;
  }

}
