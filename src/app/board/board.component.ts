import { Component, OnInit } from '@angular/core';
import { PWAServiceService } from '../pwaservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  squares: string[];
  xIsNext: boolean;
  winner: string;
  counter: number;
  cSquare: number[];
  human: string;
  mode: string;

  constructor(public pwa: PWAServiceService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe( (route: any) => {
      this.human = route.params.player;
      this.mode = route.params.mode;
      if (this.human === 'X') {
        this.newGame();
        console.log('Comp');
      } else if (this.human === 'O') {
        this.newGame();
      } else {
        this.router.navigate(['/home']);
      }
    });
    this.newGame();
  }

  home() {
    this.router.navigate(['/home']);
  }

  newGame( ) {
    this.squares = Array(9).fill(null);
    this.winner = null;
    this.xIsNext = true ;
    this.counter = 0;
    this.cSquare = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    if (this.human === 'X') {
      this.compMove();
    }
  }

  get player() {
    return this.xIsNext ? 'O' : 'X';
  }

  makeMove(idx: number) {
    if (!this.squares[idx] && !this.winner) {
      this.squares.splice(idx, 1, this.player);
      this.xIsNext = !this.xIsNext;
      this.counter += 1;

    }

    this.winner = this.calculateWinner();
    if (this.human !== 'O') {
      if (this.counter <= 8 && (this.xIsNext) && !this.winner) {
        // this.counter += 1;
        this.compMove(idx);
      }
    } else {
      if (this.counter <= 8 && (!this.xIsNext) && !this.winner) {
        // this.counter += 1;
        this.compMove(idx);
      }
    }
  }

  compMove(idx: number = null) {
    if (this.mode === '2P') {
      return;
    }
    if (idx) {
    idx = this.cSquare.indexOf(idx);
    this.cSquare.splice(idx, 1);
    }
    const index = Math.floor(Math.random() * this.cSquare.length);
    this.makeMove(this.cSquare[index]);
  }



  installPwa(): void {
    this.pwa.promptEvent.prompt();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    // console.log("i: "+this.i);
    return null;
  }
}

