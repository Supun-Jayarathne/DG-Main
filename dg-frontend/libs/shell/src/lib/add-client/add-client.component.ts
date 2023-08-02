import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ClientProjectService } from '@dg-frontend/data-access';
import { clientProjectDto } from 'libs/data-access/src/lib/interfaces/clientProjectDto.interfaces';

@Component({
  selector: 'dg-frontend-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})
export class AddClientComponent {
  private returnUrl: string | undefined;
  addClientForm!: FormGroup;

  constructor(
    private clientProjectService: ClientProjectService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.addClientForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      company: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      url: new FormControl('', [Validators.required]),
      active: new FormControl(false, [Validators.required]),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  addClient = (addClientFormValue: any) => {
    //this.showError = false;
    const add = { ...addClientFormValue };
    const clientProjectObject: clientProjectDto = {
      name: add.name,
      company: add.company,
      email: add.email,
      url: add.url,
      active: add.active,
      
    }

    this.clientProjectService.addClientProject(clientProjectObject).subscribe({
      next: (res: any) => {
        console.log(res);

      },

      error: (error: any) => {
        console.log(error);
      },

      complete: () => {
        console.log('Request complete');
      },
    });
  };
}
