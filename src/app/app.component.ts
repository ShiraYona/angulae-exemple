import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServicerTService } from './services/servicer-t.service';
import { product } from './model/product.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  productForm: FormGroup;

  constructor(private servicrt: ServicerTService, private fb: FormBuilder) {
    this.productForm = this.fb.group({
      categoryName: ['', Validators.required], 
      productId: [0], 
      categoryId: [null, Validators.required], 
      price: [null], 
      name: [''],
      img: [''], 
      description: [''], 
    });
  }
  t: product[] = [];
  ngOnInit(): void {
    this.load()
  }
  load() {
    this.servicrt.getf().subscribe(e => this.t = e)
  }
  isFormVisible: boolean = false
  title = 'projectT';
  tt() {
    this.isFormVisible = !this.isFormVisible;
  }
  newProduct!: product
  onSubmit() {
    if (this.productForm.valid) {
      this.newProduct = this.productForm.value; // Get the form value
      this.servicrt.SaveProduct(this.newProduct).subscribe(j => this.newProduct = j)
      this.resetForm();
      this.load()
    } else {
      console.error('Form is invalid');
    }
  }
  update(product: product) {
    this.productForm.patchValue({
      categoryName: product.categoryName,
      productId: product.productId, // Set the product ID for updates
      categoryId: product.categoryId,
      price: product.price,
      name: product.name,
      img: product.img,
      description: product.description
    });
    this.isFormVisible = !this.isFormVisible
    this.load()
  }
  b: boolean = false
  deletep(productId: number) {
    this.servicrt.deleteproduct(productId).subscribe(e => {
      if (e) {
        this.t = this.t.filter(product => product.productId !== productId);
        console.log("Delete succeeded");
      } else {
        console.error("Delete failed");
      }
    });
  }
  resetForm() {
    this.isFormVisible = !this.isFormVisible
    this.productForm.reset();
  }



}
