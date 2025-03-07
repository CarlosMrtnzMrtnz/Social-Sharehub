import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import { NotExpr } from '@angular/compiler';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
    loginForm!:FormGroup
    userService = inject(UserService)
    constructor(private fb : FormBuilder){
        this.loginForm = fb.group({
            email: ['', []],
            password: ['', []]
        })
    }

    login () {
        if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value).subscribe({
                next:(resApi:any)=>{
                    Swal.fire({
                        icon:"success",
                        title:"Bienvenido"

                    })
                },
                error:(error:any)=>{
                    console.log(error);
                    Swal.fire({
                        icon:"warning",
                        title:"Ingrese su datos correctamente!"
                    })
                }
            })
        } else {

        }
    }
}
