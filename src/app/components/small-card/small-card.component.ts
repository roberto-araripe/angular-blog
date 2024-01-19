import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover:string="https://www.crunchyroll.com/imgsrv/display/thumbnail/1200x675/catalog/crunchyroll/21907feaa299ecdc23d6e64e59b45002.jpe"
  @Input()
  cardTitle:string="Shin Godzilla causou polêmica com seus poderes, poderá ter sido vencido por Minus One?"
  constructor() { }

  ngOnInit(): void {
  }

}
