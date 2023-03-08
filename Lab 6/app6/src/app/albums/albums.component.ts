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
  newAlbum:Album;
   
  constructor(private albumsService: AlbumsService){
    this.albums=[];
    this.newAlbum={} as Album;
  }


  ngOnInit(): void{
    this.getAlbums();
  }

  getAlbums(){
    this.albumsService.getAlbums().subscribe((albums)=>{
      this.albums=albums;
    })
  }

  addAlbum(){
    this.albumsService.addAlbum(this.newAlbum);
  }
}
