import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private auth: Auth) { }

  register({ correo, contra }: any){

    return createUserWithEmailAndPassword(this.auth, correo, contra);

  }

  inicio({ correo, contra }: any){

    return signInWithEmailAndPassword(this.auth, correo, contra);

  }

}
