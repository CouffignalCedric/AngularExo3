import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
    visible: boolean = false
    name : string ='Doe';
    firstName : string = 'John';
    age : number = 25;
    quote : string = '';
    photo : string = 'https://randomuser.me/api/portraits/lego/2.jpg';
  
    maskAge(){
     this.visible = !this.visible;

    }}
    class User {
      name : string ='Doe';
    firstName : string = 'John';
    age : number = 25;
    quote : string = '';
    photo : string = '';
    
    constructor(name:string, firstName:string, age:number, quote:string, photo:string){
      this.name= name ;
      this.firstName = firstName;
      this.age = age;
      this.quote= quote;
      this.photo= photo;
    }
    
}
      let user2 = new User("toto","titi",32,'','');