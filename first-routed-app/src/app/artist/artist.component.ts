import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { SpotifyService } from '../spotify.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent {
  title = 'first-routed-app';
  routeObs: Observable<ParamMap>;
  spotifyServiceObs: Observable<Object>;

  artist: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private service: SpotifyService, public location: Location) { }

  ngOnInit(): void {
    this.routeObs = this.route.paramMap;
    this.routeObs.subscribe(this.getRouterParam);
  }

  getRouterParam = (params: ParamMap) => {
    let artistId = params.get('id');
    this.spotifyServiceObs = this.service.getArtist(artistId);
    this.spotifyServiceObs.subscribe((data) => { this.artist = data })
  }

  back(): void {
    this.location.back();
  }

}
