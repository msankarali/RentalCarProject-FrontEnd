import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Color } from 'src/app/models/entities/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: Color[] = [];
  currentColor: Color;
  filterColorText = '';
  constructor(
    private colorService: ColorService,
    public router: Router,
    public activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.GetAllColors();
  }

  GetAllColors() {
    this.colorService.getAll().subscribe(response => {
      this.colors = response.data;
    });
  }

  setCurrentColor(color: Color) {
    // if (color == null) {
    //   this.router.navigate(
    //     [],
    //     {
    //       relativeTo: this.activatedRoute,
    //       queryParams: { colorId: '' },
    //       queryParamsHandling: 'merge', // remove to replace all query params by provided
    //     });
    //   const params = { ...this.activatedRoute.snapshot.queryParams }
    //   delete params.colorId;
    //   this.activatedRoute.params.subscribe(parameters => parameters = params);
    // }
    this.currentColor = color;
  }
  getCurrentColorClass(color: Color) {
    if (color == this.currentColor) {
      return "list-group-item bg-danger active"
    } else {
      return "list-group-item"
    }
  }

}
