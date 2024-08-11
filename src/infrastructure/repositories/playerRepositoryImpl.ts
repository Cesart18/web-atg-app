import { urlApi } from '../../config/constant/constant';
import { PlayerDatasource } from '../../domain/datasource/playerDatasource';
import { PlayerModel } from '../../domain/models/playerModel';
import { PlayerRepository } from '../../domain/repositories/playerRepository';
import { PlayerDatasourceImpl } from '../datasource/playerDatasourceImpl';

export class PlayerRepositoryImpl implements PlayerRepository {
  private datasource: PlayerDatasource;
  constructor(datasource: PlayerDatasource) {
    this.datasource = datasource ?? new PlayerDatasourceImpl(urlApi ?? '');
  }
  addMatch(ids: number[], score: string): Promise<void> {
    return this.datasource.addMatch(ids,score)
  }
  getPlayerById(id: number): Promise<PlayerModel> {
    return this.datasource.getPlayerById(id);
  }

  createPlayer(name: string): Promise<void> {
    return this.datasource.createPlayer(name);
  }
  getPlayers(): Promise<PlayerModel[]> {
    return this.datasource.getPlayers();
  }
  updatePlayer(newName: string): Promise<void> {
    return this.datasource.updatePlayer(newName);
  }

  togglePayedBalls(id: number): Promise<void> {
    return this.datasource.togglePayedBalls(id);
  }
  toggleMemberShip(id: number): Promise<void> {
    return this.datasource.toggleMemberShip(id);
  }
  deletePlayer(id: number): Promise<void> {
    return this.datasource.deletePlayer(id);
  }
}
