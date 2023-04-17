import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemons.models';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  pokemons !: Pokemon[]
  pokemon: any = null;

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonsService) {}

  ngOnInit(): void {
      
  }

  goBack(): void{
    this.router.navigate(['/'])
  }

}
