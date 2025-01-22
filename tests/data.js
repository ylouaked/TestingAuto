export const registerData = {
    short_password:{ 
    user: 'UtilisateurTest',
    email: 'abcd@yopmail.com',
    psw: '123',
     },
    
    invalid_email:{
        user: 'UtilisateurTest',
        email: 'email1',
        psw: '123456',
       },

        email_already_used:{
            user: 'UtilisateurTest',
            email: 'condor@yopmail.com',
            psw: '123456',
        },

        valid_data:{
            user:'UtilisateurTest',
            email:'yopmail@yopmail.com',
            psw:'123456' ,
        }

    }
    export const loginData = {
        valid_user: {
            email: 'condor@yopmail.com',
            psw: '1234567'
        },
        invalid_email: {
            email: 'efg@yopmail.com',
            psw: '1234563'
        },
        invalid_password: {
            email: 'condor@yopmail.com',
            psw: '0123456'
        }
    };
    