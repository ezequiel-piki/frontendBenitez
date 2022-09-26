import { Component, OnInit}                from '@angular/core'              ;
            
import { Router }                           from '@angular/router'            ;
import { FormsModule } from '@angular/forms';
import { LoginUsuario } from '../../class/login-usuario';
import { AuthService }                      from '../../services/auth.service';
import { TokenService } from '../../services/token.service';


@Component({
  selector   : 'app-loggin',
  templateUrl: './loggin.component.html',
  styles     : []
})

export class LogginComponent implements OnInit {
 
  isLogged      = false;
  isLogginFail  = false;
  loginUsuario! : LoginUsuario;
  nombreUsuario!: string;
  password!     : string;
  roles         : string[] = [];
  errMsj!       : string;


/* emailPattern : string  = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  _auth      : Auth    = new Auth();

  formulario:FormGroup=this.formBuilder.group({
  
  userId     :['',[Validators.required,
               Validators.pattern(this.emailPattern)]],
  
  password  :['',[Validators.required,
                        Validators.minLength(6)]],
  
 
}) */

  constructor(
              private router      : Router     ,
              private auth        : AuthService,
              private tokenService:TokenService) { }

              ngOnInit(): void {
                if(this.tokenService.getToken()){
                  this.isLogged = true;
                  this.isLogginFail = false;
                  this.roles = this.tokenService.getAuthorities();
                }
              }

/* campoValido(campo:string){
    return this.formulario.controls[campo].errors &&
    this.formulario.controls[campo].touched
  } */

  onLogin(): void{

    this.loginUsuario = new LoginUsuario(this.nombreUsuario, this.password); 

    this.auth.login(this.loginUsuario).subscribe(data =>{
        this.isLogged     = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles        = data.authorities;
        this.router.navigate(['portfolio'])
      },
      err =>{
        this.isLogged     = false;
        this.isLogginFail = true;
        this.errMsj       = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

  
  
 }