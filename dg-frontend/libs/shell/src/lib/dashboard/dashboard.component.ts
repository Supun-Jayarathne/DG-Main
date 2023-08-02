import { Component, OnInit, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientProjectService } from '@dg-frontend/data-access';


@Component({
  selector: 'dg-frontend-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  private breakpointObserver = inject(BreakpointObserver);


  constructor(private router: Router,
    private clientProjectService: ClientProjectService
    ) { }

  ngOnInit(): void {
    this.getAllClientProjects()
   }
 
   getAllClientProjects() {
     this.clientProjectService.getClientProjects()
     .subscribe({
       next: (res: any) => {
         console.log(res);
       },
       error: (error: any) => {
         console.log(error);
       },
       complete: () => {
         console.log('Request complete');
       }
     });
   }
 
   public onRoute=()=> {
     this.router.navigate(
       ['/liveView'],
       { queryParams: { name: 'Tafi' } }
     );
   }

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Client Project 1', cols: 1, rows: 1 },
          { title: 'Client Project 2', cols: 1, rows: 1 },
          { title: 'Client Project 3', cols: 1, rows: 1 },
          { title: 'Client Project 4', cols: 1, rows: 1 },
          { title: 'Client Project 5', cols: 1, rows: 1 },
          { title: 'Client Project 6', cols: 1, rows: 1 },
          { title: 'Client Project 7', cols: 1, rows: 1 },
          { title: 'Client Project 8', cols: 1, rows: 1 },
          { title: 'Client Project 9', cols: 1, rows: 1 },
          { title: 'Client Project 10', cols: 1, rows: 1 },
          { title: 'Client Project 11', cols: 1, rows: 1 },
          { title: 'Client Project 12', cols: 1, rows: 1 },
          { title: 'Client Project 13', cols: 1, rows: 1 },
          { title: 'Client Project 14', cols: 1, rows: 1 },
          { title: 'Client Project 15', cols: 1, rows: 1 },
          { title: 'Client Project 16', cols: 1, rows: 1 },
          { title: 'Client Project 17', cols: 1, rows: 1 },
          { title: 'Client Project 18', cols: 1, rows: 1 },
          { title: 'Client Project 19', cols: 1, rows: 1 },
          { title: 'Client Project 20', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Client Project 1', cols: 1, rows: 1 },
        { title: 'Client Project 2', cols: 1, rows: 1 },
        { title: 'Client Project 3', cols: 1, rows: 1 },
        { title: 'Client Project 4', cols: 1, rows: 1 },
        { title: 'Client Project 5', cols: 1, rows: 1 },
        { title: 'Client Project 6', cols: 1, rows: 1 },
        { title: 'Client Project 7', cols: 1, rows: 1 },
        { title: 'Client Project 8', cols: 1, rows: 1 },
        { title: 'Client Project 9', cols: 1, rows: 1 },
        { title: 'Client Project 10', cols: 1, rows: 1 },
        { title: 'Client Project 11', cols: 1, rows: 1 },
        { title: 'Client Project 12', cols: 1, rows: 1 },
        { title: 'Client Project 13', cols: 1, rows: 1 },
        { title: 'Client Project 14', cols: 1, rows: 1 },
        { title: 'Client Project 15', cols: 1, rows: 1 },
        { title: 'Client Project 16', cols: 1, rows: 1 },
        { title: 'Client Project 17', cols: 1, rows: 1 },
        { title: 'Client Project 18', cols: 1, rows: 1 },
        { title: 'Client Project 19', cols: 1, rows: 2 },
        { title: 'Client Project 20', cols: 1, rows: 1 }
      ];
    })
  );
  
  selectedtrafficlight: string | undefined;
  trafficlights: string[] = ['Green', 'Orange', 'Red'];

  lateststatus: string[] = ['This is the latest update for your project'];
}
