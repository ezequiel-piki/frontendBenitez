export interface misDatos {
datosPersonales   :    DatosPersonales;
formacionAcademica: FormacionAcademica;
habilidades       :      Habilidades[];
}

export interface DatosPersonales {
imagen:          string;
email:           string;
telefono:        string;
primerNombre:    string;
segundoNombre:   string;
apellido:        string;
domicilio:       string;
codigoPostal:    string;
localidad:       string;
provincia:       string;
pais:            string;
nacionalidad:    string;
fechaNacimiento: string;
}

export interface FormacionAcademica {
colegio:        string;
periodoEscolar: string;
titulo:         string;
}

export interface Habilidades {
id       :      number;
name:      string;
image:         string;
level: string;
descripcion:    string;
marca:         string;
}