import { Injectable, ErrorHandler } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SfErrorHandlerService implements ErrorHandler {

  constructor(private snackBar: MatSnackBar) { }

  handleError(error: any): void {

    // Navigation to the error page should be implemented instead of showing an error notification
    this.snackBar.open('Something went wrong', '', {
      verticalPosition: 'top',
      duration: 3000,
      panelClass: ['danger-snack-bar', 'mat-snack-bar-container', 'mat-simple-snackbar']
    });

    console.log(`Failed because: ${error.message}`);
    console.error(error);
  }
}
