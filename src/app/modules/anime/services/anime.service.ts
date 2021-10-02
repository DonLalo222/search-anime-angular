import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {
  URL_BASE: string = 'https://kitsu.io/api/edge';
  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/vnd.api+json' })
  };
  response: any;
  constructor(private httpClient: HttpClient){}

  async search(inputUser: string): Promise<Object>{

    return await this.httpClient.get(this.URL_BASE + '/anime?filter[text]=' + inputUser + '&page[limit]=12', this.httpOptions).toPromise();
  }

  async linkToPage(link: string): Promise<Object>{
    return await this.httpClient.get(link, this.httpOptions).toPromise();
  }
}
