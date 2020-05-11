export class Empleado {
  nombre: string;
  apellidos: string;
  dni: string;
  email: string;
  departamento: string;
  activo: boolean;

  constructor(
    pNombre = '',
    pApellidos = '',
    pDni = '',
    pEmail = '',
    pDepartamento = '',
    pActivo = true
  ) {
    this.nombre = pNombre;
    this.apellidos = pApellidos;
    this.dni = pDni;
    this.email = pEmail;
    this.departamento = pDepartamento;
    this.activo = pActivo;
  }
}
