import {Component, Input, OnInit} from '@angular/core';
import {IFilms} from "../../models/films";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  @Input() film: IFilms;

  constructor() { }

  ngOnInit(): void {
  }

}
