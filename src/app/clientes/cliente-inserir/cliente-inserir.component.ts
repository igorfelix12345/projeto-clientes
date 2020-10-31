//import { Component, EventEmitter, Output } from '@angular/core';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
//import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})
export class ClienteInserirComponent {

  constructor (public clienteService: ClienteService){

  }


  //@Output() clienteAdicionado = new EventEmitter<Cliente>();
  //nome: string;
  //fone: string;
  //email: string;
  onAdicionarCliente(form: NgForm) {
    if (form.invalid) return;

    // Enviando os dados para o cliente service
    this.clienteService.adicionarCliente(
      // Capturando os dados do formulário:
      form.value.nome,
      form.value.fone,
      form.value.email
    );

    // Limpando os campos do formulário:
    form.resetForm();

    // const cliente: Cliente = {
    //   nome: form.value.nome,
    //   fone: form.value.fone,
    //   email: form.value.email,
    // };
    // this.clienteAdicionado.emit(cliente);
  }
}
