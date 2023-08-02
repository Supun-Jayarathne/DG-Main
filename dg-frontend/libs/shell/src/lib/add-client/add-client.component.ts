import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '@dg-frontend/data-access';

@Component({
  selector: 'dg-frontend-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  private returnUrl: string | undefined;
  addClientForm!: FormGroup;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addClientForm = new FormGroup({
      clientName: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      publicUrl: new FormControl('', [Validators.required]),
      isActive: new FormControl('', [Validators.required]),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  addClient = (addClientFormValue: any) => {
    //this.showError = false;
    const add = { ...addClientFormValue };

    console.log('add fsdfsd', add);

    this.clientService.addClientProject(add).subscribe({
      next: (res: any) => {
        console.log(res);

        // this.weatherData = res;
      },

      error: (error: any) => {
        console.log(error);
      },

      complete: () => {
        console.log('Request complete');
      },
    });

    // if (add.name || add.company || add.email) {
    //   //
    // }
    // if (add.email) {
    //   //
    // }
  };
}
