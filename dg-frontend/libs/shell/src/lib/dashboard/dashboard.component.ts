// import { Component, inject } from '@angular/core';
// import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
// import { map } from 'rxjs/operators';

// @Component({
//   selector: 'dg-frontend-dashboard',
//   templateUrl: './dashboard.component.html',
//   styleUrls: ['./dashboard.component.css']
// })
// export class DashboardComponent {
//   private breakpointObserver = inject(BreakpointObserver);

//   /** Based on the screen size, switch from standard to one column per row */
//   cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
//     map(({ matches }) => {
//       if (matches) {
//         return [
//           { title: 'Card 1', cols: 1, rows: 1 },
//           { title: 'Card 2', cols: 1, rows: 1 },
//           { title: 'Card 3', cols: 1, rows: 1 },
//           { title: 'Card 4', cols: 1, rows: 1 }
//         ];
//       }

//       return [
//         { title: 'Card 1', cols: 2, rows: 1 },
//         { title: 'Card 2', cols: 1, rows: 1 },
//         { title: 'Card 3', cols: 1, rows: 2 },
//         { title: 'Card 4', cols: 1, rows: 1 }
//       ];
//     })
//   );
// }


import { Component, inject } from '@angular/core';


import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

//Form

@Component({
  selector: 'dg-frontend-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class AppComponent {
  private breakpointObserver = inject(BreakpointObserver);

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
  
  title = 'dg-portal';

  favoriteSeason: string | undefined;
  seasons: string[] = ['Green', 'Orange', 'Red'];

  lateststatus: string[] = ['This is the latest update for your project'];


}
