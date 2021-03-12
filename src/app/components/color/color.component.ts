import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  constructor(private colorService: ColorService) { }

  ngOnInit(): void {
    this.GetAllColors();
  }

  GetAllColors() {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

}
