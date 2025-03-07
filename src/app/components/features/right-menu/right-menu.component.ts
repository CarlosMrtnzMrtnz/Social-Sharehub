import { Component } from '@angular/core';
import { UserService } from '../../../services/users/user.service';

@Component({
  selector: 'app-right-menu',
  imports: [],
  templateUrl: './right-menu.component.html',
  styleUrl: './right-menu.component.css'
})
export class RightMenuComponent {
    constructor(private userService:UserService){}

    dataUsers!:Array<any>
    ngOnInit() {
        this.userService.getUser().subscribe({
            next:(data:any)=>{
                console.log(data);
                this.dataUsers = data
            },
            error:(error:Error)=>{}
        })
    }
}
