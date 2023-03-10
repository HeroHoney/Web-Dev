import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/photos.service';
import { Photo } from '../../product';

@Component({
  selector: 'app-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css']
})
export class PhotosComponent implements OnInit{
  photos: Photo[]
  loaded1: boolean
  constructor(private photoService: PhotoService , private route: ActivatedRoute){
    this.photos = []
    this.loaded1 = true
  }

  ngOnInit(): void{
    this.getPhotos()
  }

  returnBack(){
    window.history.back()
  }

  getPhotos(){
    this.loaded1 = false
    this.route.paramMap.subscribe((params) => {
      let _id = params.get('id');
      if (_id) {
        let id = +_id;
        this.photoService.getPhotos(id).subscribe((photos) => {
          this.photos = photos
          this.loaded1 = true
        })
      }
    })
  }


}