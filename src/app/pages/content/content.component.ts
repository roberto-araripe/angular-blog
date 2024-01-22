import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = ""
  contentTitle:string = ""
  contentDescription:string = ""
  linkImage: string = 'linkImage';
  private id:string | null = "0"

  constructor(
    private rout:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.rout.paramMap.subscribe (value => this.id = value.get("id"))

    this.setValuesToComponente(this.id)
    }

    setValuesToComponente(id:string | null) {
      const result = dataFake.filter(article => article.id == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.photoCover = result.photoCover
      this.linkImage = result.linkImage
    }
  }


