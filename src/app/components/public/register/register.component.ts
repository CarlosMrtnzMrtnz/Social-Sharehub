import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/users/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
    registerForm!: FormGroup
    private userService = inject(UserService)
    constructor(private fb : FormBuilder) {
        this.registerForm = this.fb.group({
            email: ['', [Validators.required, Validators.email]],
            userName:['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
            password:['', [Validators.required], Validators.minLength(5), Validators.maxLength(15)]
        })
    }
    register () {
        this.registerForm.value
        if (this.registerForm.valid) {
            this.userService.createUser(this.registerForm.value).subscribe({
                next:(data:any)=>{
                    console.log(data);
                    Swal.fire({
                        icon:"success",
                        title:"Bienvenido!",
                        text:"Conoce nuevos amigos!"
                    })
                    this.registerForm.reset()
                },
                error(error:any) {
                    console.log(error);
                    Swal.fire({
                        icon:"warning",
                        title:"Incirrecto!",
                        text:`${error.error.error}!`
                    })
                },
            })
        } else {
            Swal.fire({
                icon:"warning",
                title:"Incirrecto!",
                text:"Debe diligenciar el formulario correctamente!"
            })
        }
    }
}
