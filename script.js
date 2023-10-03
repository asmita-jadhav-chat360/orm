var short_lived_user_token;
var app_id;
var app_secret;

(function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk')
    );

function login() {
    app_id = document.getElementById('app_id').value;

    console.log('in func');

    FB.init({
        appId       : app_id,
        xfbml       : true,
        version     : 'v18.0'
    });

    console.log('after init');

    FB.login(function(response){
        if(response.status='connected'){
            console.log('Login successful.');
            console.log(response.authResponse)

            short_lived_user_token = response.authResponse.accessToken;


        } else {
            console.log('Unsuccessful Login');
        }
    });

    console.log('after login');
};

function secret_submit(){
    app_secret = document.getElementById('psw').value;
    login();
    //location.href='landing.html';
};


