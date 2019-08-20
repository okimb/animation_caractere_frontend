import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Appsettings} from '../../settings/app.setting';
import {Character} from '../../models/Character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  constructor(private http: HttpClient) { }
  // Afficher tous les characters
  findAllCharacters() {
    return this.http.get(Appsettings.APP_URL + '/animes');
  }

  // trouver un character par son identifiant
  findCharacterById(idCharacter: number) {
    return this.http.get(Appsettings.APP_URL + '/animes' + idCharacter);
  }

  // creer un character
  saveCharacter(character: Character) {
    return this.http.post(Appsettings.APP_URL + '/animes', character);
  }

  // partager un character
  sharCharacter(idCharacter: number, partage: boolean) {
    return this.http.get(Appsettings.APP_URL + '/animes/share/' + idCharacter + '/' + partage);
  }
}
