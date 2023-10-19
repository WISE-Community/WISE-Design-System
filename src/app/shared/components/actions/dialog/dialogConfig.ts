export class WISEDialogConfig {
  /**
   * Whether the dialog should close when the backdrop is clicked.
   */
  closeOnBackdropClick?: boolean = true;
  /**
   * Whether the dialog should close when the escape key is pressed.
   */
  closeOnEscape?: boolean = true;
  /**
   * Data to be passed to the dialog content component.
   */
  data?: any = null;
  /**
   * The position of the dialog on the screen.
   */
  position?: 'top' | 'bottom' | 'middle' = 'middle';
  /**
   * The width of the dialog.
   */
  width?: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
}
