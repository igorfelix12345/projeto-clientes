import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-cliente-lista',
  templateUrl: './cliente-lista.component.html',
  styleUrls: ['./cliente-lista.component.css'],
})
export class ClienteListaComponent
  implements OnInit, OnDestroy {


  clientes: Cliente[] = [];
  private clientesSubscription: Subscription;

  constructor(public clienteService: ClienteService) {}

  /**
   * Método executado quando o componente
   * é criado na memória, antes mesmo de ser
   * desenhado na tela do usuário.
   */
  ngOnInit(): void {
    this.clienteService.getClientes();
    this.clientesSubscription = this.clienteService
    .getListaClientesAtualizadaObservable()
    .subscribe((clientes: Cliente[]) => {
      this.clientes = clientes;
    });
  }

  /**
   * Método executado pelo Angular, quando
   * este componente, ou instância desse componente,
   * for removido e destruído
   */
  ngOnDestroy(): void {
    // Estamos removendo nossa inscrição para receber
    // alertas das novidades do objeto observado:
    this.clientesSubscription.unsubscribe();
  }

}
