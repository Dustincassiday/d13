export interface AlertModel {
  category: string;
  type:
    | 'success'
    | 'info'
    | 'warning'
    | 'danger'
    | 'primary'
    | 'secondary'
    | 'light'
    | 'dark';
  message: string;
}
