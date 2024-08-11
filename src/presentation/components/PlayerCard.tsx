import React from "react"
import { Player } from "../../domain/entitie/player"

interface Props{
  player: Player
  rank: number
  isDouble: boolean
}

const getPoints = (player: Player, isDouble:boolean) => {
  return isDouble ? player.doublePoints : player.singlePoints
}

export const PlayerCard: React.FC<Props> = ({ player, rank, isDouble }) => {

  return (
    <div className="player-card">
      <p>{rank}</p>
      <p>{player.name}</p>
      <p>{getPoints(player,isDouble)} {( getPoints(player,isDouble) == 1 ) ? 'punto' : 'puntos'  } </p>
    </div>
  )
}
