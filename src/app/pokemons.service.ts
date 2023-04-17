import { Injectable } from "@angular/core";
import { Pokemon } from "./Pokemons.models";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, catchError, of, tap } from "rxjs";


@Injectable()
export class PokemonsService {

  constructor(private http:HttpClient) {
  }

  private pokemonsUrl = 'api/pokemons';


  getPokemons(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonsUrl);
  }


  /*getPokemons(): Pokemon[] {
    return POKEMONS
  }*/

  // getPokemon(id: number) {
  //   this.getPokemons().subscribe( pokemons => {
  //     pokemons.forEach(pokemon => {
  //         if (pokemon.id === id ){
  //           return pokemon;
  //         }else{
  //           return null;
  //         }
  //     })
  //   });
  //   //return of(new Pokemon);
  // }

  getPokemon(id: number): Observable<Pokemon> {
    const url = `${this.pokemonsUrl}/${id}`
    console.log("Get pokemon URL : " + url);
    return this.http.get<Pokemon>(url)
    
  }

  savePokemon(pokemon: Pokemon): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.put(this.pokemonsUrl, pokemon, httpOptions)
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon, httpOptions)
  }

  private log(log: string) {
    console.info(log);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`)
      return of(result as T);
    }
  }

  PokemonTypes(): string[]{
    return ['Plante', 'Feu', 'Eau', 'Insecte', 'Normal', 'Electrik', 'Poison', 'Fée', 'Vol', 'Roche', 'Sol', 'Combat', 'Psy', 'Spectre', 'Dragon', 'Acier', 'Glace'];
}

  deletePokemon(pokemon: Pokemon): Observable<null> {
    const url = `${this.pokemonsUrl}/${pokemon.id}`
    return this.http.delete(url).pipe(
      tap( () => this.log(`deleted Pokemon id=${pokemon.id}`)),
      catchError(this.handleError<any>('deletePokemon'))
    );
  }

  createPokemon(pokemon: Pokemon): Observable<Pokemon> {
    return this.http.post<Pokemon>(this.pokemonsUrl, pokemon)
}

  
}