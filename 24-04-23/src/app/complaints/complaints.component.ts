import { Component } from '@angular/core';
import { ComplaintsService } from '../services/complaints.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

export interface Prod {
  flag: string;
  name: string;
}

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css'],
})
export class ComplaintsComponent {
  stateCtrl = new FormControl('');
  filteredStates: Observable<Prod[]>;

  pproducts: Prod[] = [
    {
      name: 'Hair dryer',
      flag: 'http://localhost/hair dryer.jpg',
    },
    {
      name: 'Silapathikaram',
      flag: 'http://localhost/sila.jpg',
    },
    {
      name: 'Earing',
      flag: 'http://localhost/earing.jpg',
    },
    {
      name: 'Vanilla essence',
      flag: 'http://localhost/essence.jpg',
    },
    {
      name: 'Almond Nuts',
      flag: 'http://localhost/badam.jpg',
    },
    {
      name: 'Makeup brushes',
      flag: 'http://localhost/up.jpg',
    },
    {
      name: 'Tomato',
      flag: 'http://localhost/t.jpg',
    },
    {
      name: 'Brush holder',
      flag: 'http://localhost/h.jpg',
    },
    {
      name: 'cookware sets',
      flag: 'http://localhost/c.jpg',
    },
    {
      name: 'Bracelet',
      flag: 'http://localhost/B.jpg',
    },
    {
      name: 'Dish washer',
      flag: 'http://localhost/v.jpg',
    },
    {
      name: 'Aurilea',
      flag: 'http://localhost/a.jpg',
    },
  ];
  //
  fname: any;
  email: any;
  message: any;
  product: any;
  errors: string[] = [];
  //
  constructor(private cs: ComplaintsService) {
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((prod) => (prod ? this._filterStates(prod) : this.pproducts.slice()))
    );
    //

    //
  }

  //
  ngOnInit(): void {}
  submit() {
    this.errors = [];
    if (this.errors.length == 0) {
      let obj = {
        id: Math.round(Math.random() * 100000),
        fname: this.fname,
        email: this.email,
        message: this.message,
        product: this.product,
      };
      this.cs.postComplaint(obj).subscribe({
        next: () => {
          console.log(obj);
          alert('Submitted Successfully');
          (this.fname = ''),
            (this.email = ''),
            (this.message = ''),
            (this.product = '');
        },
        error: () => alert(' Some issue with your complaint'),
      });
    }
  }
  //
  private _filterStates(value: string): Prod[] {
    const filterValue = value.toLowerCase();
    return this.pproducts.filter((state) =>
      state.name.toLowerCase().includes(filterValue)
    );
  }
}
