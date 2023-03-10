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
    this.albumsService.addAlbum(this.newAlbum).subscribe((album) => {
      // this.posts.push(post);
      // album.id += 1
      album.id = this.albums.length + 1
      this.albums.unshift(album);
      this.newAlbum = {} as Album;
    });
  }
  deleteAlbum(id:number){
    this.albums = this.albums.filter((x)=> x.id != id );
    this.albumsService.deleteAlbum(id)
  }
}
