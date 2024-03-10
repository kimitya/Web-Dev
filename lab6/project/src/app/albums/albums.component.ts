import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit, OnDestroy {
  albums!: Album[];

  constructor(private albumService: AlbumsService) {
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


  ngOnDestroy() {
  }
}
