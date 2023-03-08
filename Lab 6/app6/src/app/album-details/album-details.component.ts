import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ALBUMS } from '../data';
import { Album } from '../models';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album: Album;
  constructor(private route: ActivatedRoute){
   this.album={} as Album;
  }

  ngOnInit(): void {
    // const id=Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params: ParamMap)=>
      {
        const id=Number(params.get('id'));
        this.album=ALBUMS.find((album: Album)=> album.id === id) as Album;
      }
    )
  }

}
