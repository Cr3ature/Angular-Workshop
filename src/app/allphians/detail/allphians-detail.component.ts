import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllPhianService } from "../allphians.service";
import { AllPhian } from "../../models/allphians.model";

@Component({
  selector: 'app-allphians-detail',
  templateUrl: './allphians-detail.component.html',
  styleUrls: ['./allphians-detail.component.css'],
  providers: [AllPhianService]
})
export class AllphiansDetailComponent implements OnInit {
  public allphian: AllPhian;
  public error: string;

  constructor(private _allphianService: AllPhianService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    let allphianID = this._route.snapshot.params['id'];
    this._allphianService.getAllPhian(allphianID).subscribe(
      allphian => this.allphian = allphian,
      error => {
        this.error = "Something went wrong fetching the AllPhians";
        console.log(error);
      }
    )
  }

}