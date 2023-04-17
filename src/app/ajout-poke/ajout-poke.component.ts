import { Component, Input } from '@angular/core';
import { PokemonsService } from '../pokemons.service';
import { Router } from '@angular/router';
import { Pokemon } from '../Pokemons.models';

@Component({
  selector: 'app-ajout-poke',
  templateUrl: './ajout-poke.component.html',
  styleUrls: ['./ajout-poke.component.css']
})
export class AjoutPokeComponent {
  @Input() pokemon: any;
  pokemons !: Pokemon[];

  types: any = [];

  constructor(private router: Router, private pokemonService: PokemonsService) {}

  ngOnInit() {
    this.types = this.pokemonService.PokemonTypes();
    this.pokemon = new Pokemon();
  }

  hasType(type: string): boolean {
    return this.pokemon.types.indexOf(type) > -1;
  }

  isTypeValid(type: string): boolean {
    if (this.pokemon.types.length === 1 && this.hasType(type)) {
      return false;
    }
    if (this.pokemon.types.length >= 3 && !this.hasType(type)) {
      return false;
    }
    return true;
  }

  selectType($event: any, type: string): void {
    let checked = $event.target.checked;
    if (checked) {
      this.pokemon.types.push(type);
    } else {
      let index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit(): void{
    if (this.pokemon.picture != '') {
      if (this.pokemon.name.match('^[a-zA-Zàéèç]{1,25}$')) {
        if (this.pokemon.rarity.match('^[*]{1,5}$')) {
          if (this.pokemon.hp > 0 && this.pokemon.hp <= 200) {
            if (this.pokemon.cp > 0 && this.pokemon.cp <= 200) {
              if (
                this.pokemon.types.length > 0 &&
                this.pokemon.types.length <= 3
              ) {
                let inTypeTable = true;
                for (let i = 0; i < this.pokemon.types.length; i++) {
                  if (!this.hasType(this.pokemon.types[i])) {
                    inTypeTable = false;
                  }
                }
                if (inTypeTable) {
                  this.pokemonService.createPokemon(this.pokemon).subscribe();
                  let link = ['/'];
                  this.router.navigate(link);
                }
              }
            }
          }
        }
      }
    }
  }
}

