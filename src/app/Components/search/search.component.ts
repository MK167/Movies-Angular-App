import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { DataService } from 'src/app/Services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  target: any = ""
  allData: any[] = [];
  found: boolean = true;
constructor(
  private _DataService: DataService,
  private _ActivatedRoute: ActivatedRoute,
  private Spinner: NgxSpinnerService)
  {
  this._ActivatedRoute.params.subscribe(()=>{

    this.target=_ActivatedRoute.snapshot.paramMap.get("target")
    this.Spinner.show()
    this._DataService.search(this.target).subscribe((response)=>
    {
      this.allData=response.results.filter((item:any)=>
      {
        return item.poster_path!=null
      })
      this.allData=this.allData.filter((item:any)=>{
        this.Spinner.hide()
        return item.media_type!=null
      })
      if(this.allData[0]){
        this.found=true
      }
      else{
        this.found=false
      }
     this.Spinner.hide()
    })
  })
}
  ngOnInit(): void {
  }

}
