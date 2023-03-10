import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { AlbumsService } from '../albums.service';
import { Album } from '../models';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css']
})
export class AlbumDetailsComponent implements OnInit{
  album: Album;
  newTitle:string;
  constructor(private route: ActivatedRoute, private albumsService: AlbumsService){
   this.album={} as Album;
   this.newTitle = ""
  }

  ngOnInit(): void {
    // const id=Number(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'))
      this.albumsService.getAlbum(id).subscribe((album) => {
        this.album = album
      })
    })
  }

  updateAlbum(id:number,userId:number){
    if(this.newTitle!=""){
      const updatedAlbum:Album = {
      userId : userId,
      id : id,
      title : this.newTitle
    }
    this.albumsService.updateAlbum(updatedAlbum).subscribe((updatedAlbum) => {
      this.album.title = this.newTitle
      this.newTitle = ""
    })
    }else return
  }

  returnBack(){
    window.history.back()
  }
}
