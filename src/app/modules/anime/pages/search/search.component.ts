import { Component, OnInit } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  inputUser: string = '';
  result: any | undefined;
  isLoading: boolean = false;
  constructor(private animeService: AnimeService) {}

  ngOnInit() {}

  async getData(inputUser: string) {
    if (inputUser.trim() != '') {
      this.inputUser = inputUser.trim();
      this.result = undefined;
      this.isLoading = true;
      await this.animeService
        .search(this.inputUser)
        .then((response) => (this.result = response));
      this.isLoading = false;
    }
  }

  async getDataLink(linkUser: string) {
    this.result = undefined;
    this.isLoading = true;
    await this.animeService
      .linkToPage(linkUser)
      .then((response) => (this.result = response));
    this.isLoading = false;
  }

  async eventKeyup(event: any) {
    await this.getData(event.target.value);
  }
}
