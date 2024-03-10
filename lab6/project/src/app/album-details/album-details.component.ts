import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from "@angular/router";
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit{
  album!: Album;
  loaded!: boolean;

  constructor(private route: ActivatedRoute,
              private albumService: AlbumsService) {
  }

  ngOnInit() {
    this.getAlbum();
  }

  getAlbum(){
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }
}
