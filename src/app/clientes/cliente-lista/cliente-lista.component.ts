import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css']
})
export class ClienteListaComponent implements OnInit {

  clientes = [
    {
      nome: 'José',
      fone: '11223344',
      email: 'jose@exemplo.com'
    },
    {
      nome: 'Maria',
      fone: '22334455',
      email: 'maria@exemplo.com'
    },
    {
      nome: 'Joaquina',
      fone: '581515151',
      email: 'joaquina@exemplo.com'
    }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
