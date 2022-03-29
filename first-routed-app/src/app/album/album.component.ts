import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  routeObs: Observable<ParamMap>;
  spotifyServiceObs: Observable<Object>;

  album: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService, public location: Location) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let albumId = params.get('id');
    this.spotifyServiceObs = this.service.getAlbum(albumId);
    this.spotifyServiceObs.subscribe((data) => { this.album = data })
  }

  back(): void {
    this.location.back();
  }

}