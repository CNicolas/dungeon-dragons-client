import { Injectable } from '@angular/core'
import { MatSnackBar, MatSnackBarConfig, MatSnackBarRef, SimpleSnackBar } from '@angular/material'

@Injectable()
export class SnackBarHelper {
  static readonly standardDuration: number = 5000

  private readonly commonConfig: Partial<MatSnackBarConfig> = {
    politeness: 'polite',
    horizontalPosition: 'center',
    verticalPosition: 'bottom'
  }

  constructor(private readonly snackBar: MatSnackBar) {
  }

  success(text: string,
          duration: number = SnackBarHelper.standardDuration,
          actionText: string = 'FERMER',
          userDismissAction: () => void = null): MatSnackBarRef<SimpleSnackBar> {

    const successSnackBar: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(text, actionText, {
      ...this.commonConfig,
      duration: duration,
      panelClass: ['snack-bar-success']
    })

    successSnackBar.onAction()
      .subscribe(userDismissAction)

    return successSnackBar
  }

  error(text: string,
        duration: number = -1,
        actionText: string = 'FERMER',
        userDismissAction: () => void = null): MatSnackBarRef<SimpleSnackBar> {

    const successSnackBar: MatSnackBarRef<SimpleSnackBar> = this.snackBar.open(text, actionText, {
      ...this.commonConfig,
      duration: duration > -1 ? duration : undefined,
      panelClass: ['snack-bar-error']
    })

    successSnackBar.onAction()
      .subscribe(userDismissAction)

    return successSnackBar
  }
}
