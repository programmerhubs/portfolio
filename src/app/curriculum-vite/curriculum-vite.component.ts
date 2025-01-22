import { Component, OnInit } from '@angular/core';
import {experiencesEn} from '../../api/expe'
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-curriculum-vite',
  imports: [CommonModule],
  templateUrl: './curriculum-vite.component.html',
  styleUrl: './curriculum-vite.component.css'
})
export class CurriculumViteComponent implements OnInit {
  experiences:any=experiencesEn;
   planeIcon: any ;
   gameIcon:any;
    volleyBallIcon:any;
 
    
  constructor() { }

  ngOnInit(): void {
    // this.planeIcon=awesom.faPlane;
    // this.gameIcon=awesom.faGamepad;
    // this.volleyBallIcon=awesom.faVolleyballBall;
    console.log(this.experiences);
  }
  toggleDetails(item: any) {
    item.showDetails = !item.showDetails;
  }

}
