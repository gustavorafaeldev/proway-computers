import { Injectable } from '@angular/core';
import { IProduto, produtos } from 'src/app/produtos';
import { ProdutosRoutingModule } from './produtos/produtos-routing.module';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;
  
  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId: number){
    return this.produtos.find(produto => produto.id = produtoId);
  }
}
