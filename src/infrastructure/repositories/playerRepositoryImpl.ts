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
  plusDoublePoints(id: number, points: number): Promise<void> {
    return this.datasource.plusDoublePoints(id, points);
  }
  minusDoublePoints(id: number, points: number): Promise<void> {
    return this.datasource.minusDoublePoints(id, points);
  }
  plusSinglePoints(id: number, points: number): Promise<void> {
    return this.datasource.plusSinglePoints(id, points);
  }
  minusSinglePoints(id: number, points: number): Promise<void> {
    return this.datasource.minusSinglePoints(id, points);
  }
  deletePlayer(id: number): Promise<void> {
    return this.datasource.deletePlayer(id);
  }
}
