import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums!: Album[];
  newAlbum: Album;
  loaded: boolean = false;

  constructor(private albumService: AlbumsService) {
    this.newAlbum = {
      
    } as Album;
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter((album) => album.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() => {
      console.log('deleted');
    });
  }

  addAlbum() {
    this.newAlbum.id=this.albums.length+1;
    this.albumService.createAlbum(this.newAlbum).subscribe((album) => {
      this.albums.push(this.newAlbum);
      alert('Album created');
      this.newAlbum = {} as Album;
    });
  }
  ngOnDestroy() {
  }
}
