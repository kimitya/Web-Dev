import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, RouterModule } from "@angular/router";
import { Album } from '../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {
  album!: Album;
  loaded!: boolean;
  newTitle: string = '';
  // oldTitle: string = '';

  @Output() update = new EventEmitter<{ id: number, newTitle: string }>();

  constructor(private route: ActivatedRoute,
    private albumService: AlbumsService) {
      
  }

  ngOnInit() {
    this.getAlbum();
    // this.oldTitle=this.album.title;
  }

  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.loaded = false;
      this.albumService.getAlbum(id).subscribe((album) => {
        this.album = album;
        this.loaded = true;
      });
    });
  }

  updateAlbum(event: Event) {
    event.preventDefault();
    this.albumService.updateAlbumTitle(this.album.id, this.newTitle).subscribe(
      (updatedAlbum) => {
        // this.oldTitle=this.album.title;
        this.album.title = updatedAlbum.title;
        this.newTitle = '';
      }
    );
  }

  // returnTitle(){
  //   this.albumService.updateAlbumTitle(this.album.id, this.oldTitle).subscribe(
  //     (updatedAlbum) => {
  //       this.oldTitle=this.album.title;
  //       this.album.title = updatedAlbum.title;
  //       this.newTitle = '';
  //     }
  //   );
  // }
}
