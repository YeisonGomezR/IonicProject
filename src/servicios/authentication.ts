import {Injectable} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()

export class Authentication{

    constructor (private angularFire: AngularFireAuth){
     }
    
    crearUsuarioConCorreoyContraseña(email, password){ //crea un usuario por correo y contraseña
        this.angularFire.auth.createUserWithEmailAndPassword(email, password);
    }

    crearUsuarioConGoogle(){   
        let provider = new firebase.auth.GoogleAuthProvider();
        return this.crearUsuarioConProveedor(provider);
    }

    crearUsuarioConFacebook(){   
        let provider = new firebase.auth.FacebookAuthProvider();
        return this.crearUsuarioConProveedor(provider);
    }

    crearUsuarioConProveedor(provider){
        return this.angularFire.auth.signInWithRedirect(provider)
        .then(result =>{
            return firebase.auth().getRedirectResult;
        });
    }
    
}
