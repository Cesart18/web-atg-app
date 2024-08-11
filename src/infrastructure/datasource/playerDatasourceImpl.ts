import { PlayerDatasource } from "../../domain/datasource/playerDatasource";
import { PlayerModel } from "../../domain/models/playerModel";



export class PlayerDatasourceImpl implements PlayerDatasource{
    private urlApi:string;
    constructor(urlApi:string){
        this.urlApi = urlApi;
    }
    async addMatch(ids: number[], score: string): Promise<void> {
        const token = localStorage.getItem('token')
        const url = `${this.urlApi}/api/match`

            const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ?? ''
                  },
                  body: JSON.stringify({ids, score})
            })
            if (!resp.ok){
                const errorData = await resp.json();
                throw new Error(errorData);
            }
        
    }
    async getPlayerById(id: number): Promise<PlayerModel> {
        const url = `${this.urlApi}/api/player/${id}`;
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            return data;
        } catch (error) {
            throw new Error(`Error al buscar el usuario con el id ${id}`)
        }
    }
    
    async createPlayer(name: string): Promise<void> {
        const token = localStorage.getItem('token')
        const url = `${this.urlApi}/api/player`;
        
        const resp = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ?? ''
                  },
                body: JSON.stringify({name}),
            })
            if (!resp.ok){
                const errorData = await resp.json();
                throw new Error(errorData);
            }
    }
    async getPlayers(): Promise<PlayerModel[]> {
        const url = `${this.urlApi}/api/players`
        try {
            const resp = await fetch(url)
        const data = await resp.json();
        return data as PlayerModel[];
        } catch (error) {
            throw new Error('Error al cargar usuarios')
        }
    }

    updatePlayer(_newName: string): Promise<void> {
        throw new Error("Method not implemented.");
    }


    async togglePayedBalls(id: number): Promise<void> {
        const token = localStorage.getItem('token')
        const url = `${this.urlApi}/api/toggle_payedballs/${id}`
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ?? ''
                  },
            })
        } catch (error) {
            throw new Error('error al cambiar de estado')
        }
    }


    async toggleMemberShip(id: number): Promise<void> {
        const token = localStorage.getItem('token')
        const url = `${this.urlApi}/api/toggle_membership/${id}`
        try {
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ?? ''
                  },
            })
        } catch (error) {
            throw new Error('error al cambiar de estado')
        }
    }

    async deletePlayer(id: number): Promise<void> {
        const token = localStorage.getItem('token')
        const url = `${this.urlApi}/api/player/${id}`;
        try {
            await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token ?? ''
                },
            })
        } catch (error) {
            throw new Error('error al eliminar usuario')
        }
    }
    

}