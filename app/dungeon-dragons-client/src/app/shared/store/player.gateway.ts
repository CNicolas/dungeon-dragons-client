import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Player} from '@dungeon-dragons-model/player'
import {Observable} from 'rxjs'
import {Endpoints} from '../utils/endpoints.enum'

@Injectable()
export class PlayerGateway {
  constructor(private readonly httpClient: HttpClient) {
  }

  fetchPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(Endpoints.player)
  }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(Endpoints.player, player)
  }
}
