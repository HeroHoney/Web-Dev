import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ALBUMS } from '../data';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit{
  albums: Album[];
   
  constructor(private albumService: AlbumsService){
    this.albums=[];
  }


  ngOnInit(): void{
    this.albumService.getAlbum().subscribe((albums)=>
    {
      this.albums=albums;
    }
    )
  }
}
