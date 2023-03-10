import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from './models';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client:HttpClient) { 
  }

  getAlbums():Observable<Album[]>{
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums')
  }

  getAlbum(id:number):Observable<Album>{
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  addAlbum(album:Album):Observable<Album>{
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums',album);
  }

  deleteAlbum(id: number){
    return this.client.delete('https://jsonplaceholder.typicode.com/albums/${id}');
  }

  updateAlbum(updatedAlbum: Album){
    return this.client.put('https://jsonplaceholder.typicode.com/albums/${updatedAlbum.id}',updatedAlbum)
  }
}
