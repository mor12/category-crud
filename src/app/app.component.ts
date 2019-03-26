import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'josetest';

  public create_category_form: FormGroup;
  public create_product_form: FormGroup;
  public CategoryList: any;

  constructor(
    public fb: FormBuilder,
    private db: AngularFirestore
  ) {

    this.CategoryList = db.collection('/categories').valueChanges();

    this.create_category_form = fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
    });

  }

  create_category() {
    this.db.collection('/categories').add(this.create_category_form.value);
    this.create_category_form.reset();
    alert('categoria insertada con exito');
  }

  create_product() {
    this.db.collection(`/categories/${1}`)
  }
}
