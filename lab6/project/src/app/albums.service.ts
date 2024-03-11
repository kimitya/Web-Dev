import { Injectable } from '@angular/core';
import {Album, Photo} from "./models";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private client: HttpClient) { }

  getAlbums(): Observable<Album[]> {
    return this.client.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id: number): Observable<Album> {
    return this.client.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }

  deleteAlbum(id: number) {
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
  }

  createAlbum(newAlbum: Album): Observable<Album> {
    return this.client.post<Album>('https://jsonplaceholder.typicode.com/albums', newAlbum);
  }

  updateAlbumTitle(id: number, newTitle: string): Observable<Album> {
    const updatedAlbum = {id: id, title: newTitle }; 
    return this.client.put<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`, updatedAlbum);
  }

  getAlbumPhoto(id: number) {
    return this.client.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
}
