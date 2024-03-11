import { Component, OnInit } from '@angular/core';
import { Photo } from '../models';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos!: Photo[];

  constructor(private route: ActivatedRoute, private albumService: AlbumsService){}

  ngOnInit(){
      this.getPhotos();
  }

  getPhotos(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.albumService.getAlbumPhoto(id).subscribe((photos) => {
        this.photos=photos;
      });
    });
  }
}
