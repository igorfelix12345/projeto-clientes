//import { Component, EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-inserir',
  templateUrl: './cliente-inserir.component.html',
  styleUrls: ['./cliente-inserir.component.css'],
})

export class ClienteInserirComponent implements OnInit {

  private modo: string = "criar";
  private idCliente: string;
  public cliente: Cliente;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
        if (paramMap.has("idCliente")) {
          this.modo = "editar";
          this.idCliente = paramMap.get("idCliente");
          this.cliente =
              this.clienteService.getCliente(this.idCliente);
        } else {
          this.modo = "criar";
          this.idCliente = null;
        }
      }
    );
  }

  constructor(
      public clienteService: ClienteService,
      public route: ActivatedRoute
      ) { }


  //@Output() clienteAdicionado = new EventEmitter<Cliente>();
  //nome: string;
  //fone: string;
  //email: string;
  onSalvarCliente(form: NgForm) {
    if (form.invalid) return;

    if (this.modo === "criar") {

      // Enviando os dados para o cliente service
      this.clienteService.adicionarCliente(
        // Capturando os dados do formulário:
        form.value.nome,
        form.value.fone,
        form.value.email
      );

    } else {

      this.clienteService.atualizarCliente(
        this.idCliente,
        form.value.nome,
        form.value.fone,
        form.value.email
      );

    }


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
