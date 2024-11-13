/**
 * Configuration for a WISE dialog.
 */
export class WISEDialogConfig {
  /**
   * ID of the element that describes the dialog.
   */
  ariaDescribedBy?: string | null = null;
  /**
   * ARIA label to assign to the dialog element.
   */
  ariaLabel?: string | null = null;
  /**
   * ID of the element that labels the dialog. If not set, `wise-dialog-title` will be used (if present).
   * Will be ignored if `ariaLabel` is set.
   */
  ariaLabelledBy?: string | null = null;
  /**
   * Whether the dialog is a modal dialog. Used to set the `aria-modal` attribute.
   */
  ariaModal?: boolean = true;
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
   * The ARIA role of the dialog.
   */
  role?: 'dialog' | 'alertdialog' = 'dialog';
  /**
   * The width of the dialog.
   */
  width?: 'sm' | 'md' | 'lg' | 'xl' = 'sm';
}
