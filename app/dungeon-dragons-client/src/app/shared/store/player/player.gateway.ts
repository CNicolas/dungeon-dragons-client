import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Player } from '@dungeon-dragons-model/player'
import { Observable } from 'rxjs'
import { Endpoints } from '../../../core'

@Injectable()
export class PlayerGateway {
  constructor(private readonly httpClient: HttpClient) {
  }

  fetchPlayer(playerId: number): Observable<Player> {
    const url = Endpoints.player.replace(':playerId', String(playerId))
    return this.httpClient.get<Player>(url)
  }

  fetchPlayers(): Observable<Player[]> {
    return this.httpClient.get<Player[]>(Endpoints.players)
  }

  createPlayer(player: Player): Observable<Player> {
    return this.httpClient.post<Player>(Endpoints.players, player)
  }

  updatePlayer(player: Player): Observable<Player> {
    return this.httpClient.put<Player>(Endpoints.players, player)
  }
}
