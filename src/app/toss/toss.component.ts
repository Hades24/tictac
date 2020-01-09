import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-toss',
  templateUrl: './toss.component.html',
  styleUrls: ['./toss.component.css']
})
export class TossComponent implements OnInit {

  @ViewChild('outcome', {static: false}) coin: ElementRef;
  player: string;
  mode: string;
  message: string;

  constructor(private route: Router, private active: ActivatedRoute) { }

  ngOnInit() {
    this.active.paramMap.subscribe( (route: any) => {
      this.mode = route.params.mode;
    });

    if (this.mode === '1P') {
      this.message = 'You are player ';
    } else if(this.mode === '2P'){
      this.message = 'Player 1 is ';
    } else {
      this.route.navigate(['/home']);
    }
  }

  getRandomNumber() {
    return Math.floor(Math.random() * (2 - 1 + 1)) + 1;
  }

  begin() {
    this.route.navigate([`/game/${this.mode}/${this.player}`]);
  }

  coinfFlip() {
    this.player = '';
    const random = this.getRandomNumber();
    this.coin.nativeElement.innerHTML = '';
    this.coin.nativeElement.classList.toggle('flip');
    this.coin.nativeElement.classList.add('toss');
    setTimeout(() => {
      if (random === 1) {
        this.coin.nativeElement.innerHTML = 'O';
        this.player = 'O';
      } else if (random === 2) {
        this.coin.nativeElement.innerHTML = 'X';
        this.player = 'X';
      }
      this.coin.nativeElement.classList.remove('toss');
    }, 800);

  }

}
