import { Component, OnInit } from '@angular/core';
import {FilmsService} from "../../services/films.service";

@Component({
  selector: 'app-film-page',
  templateUrl: './films-page.component.html',
  styleUrls: ['./films-page.component.scss']
})
export class FilmsPageComponent implements OnInit {


  loading = false
  search: string = ''
  page: number = 1
  pageError: boolean

  constructor( public filmService: FilmsService) { }


  ngOnInit(): void {
   this.getAllFilms()
  }

  getAllFilms(reset: boolean = false){
    if(reset) {
      this.page = 1
      this.filmService.clear()
    }
    if(this.search.length) {
      this.loading = true
      this.filmService.getAll(this.page, this.search).subscribe(() => {
        this.loading = false
      })
    }
  }

  onScroll(){
  console.log("NEXT PAGE")
    this.page ++
    this.getAllFilms()
  }

}
