import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'app-add-edit-product',
    templateUrl: './add-edit-product.component.html',
    styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
    form: FormGroup;
    operacion: string = 'Agregar ';

    constructor(private fb: FormBuilder, private _productService: ProductService, private router: Router, private aRouter: ActivatedRoute) {
        this.form = this.fb.group({
            namep: ['', Validators.required],
            description: ['', Validators.required],
            price: [null, Validators.required],
            stock: [null, Validators.required],
        })
    }

    ngOnInit(): void {
    }



    addProduct() {

        const product: Product = {
            namep: this.form.value.namep,
            description: this.form.value.description,
            price: this.form.value.price,
            stock: this.form.value.stock
        }
        this._productService.saveProduct(product).subscribe(()=>{
            console.log('Producto Agregado')
        })
    }
}