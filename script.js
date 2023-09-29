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
    console.log('in func');
    FB.login(function(response){
        if(response.status='connected'){
            console.log('Login successful.');

            short_lived_user_token = response.authResponse.accessToken;

            FB.api('/me/ids_for_apps', function(response){
                app_id = response.data[0].id;
            });
        } else {
            console.log('Unsuccessful Login');
        }
    });

    console.log('after login');

    FB.init({
        appId       : app_id,
        xfbml       : true,
        version     : 'v18.0'
    });

    console.log('after init');

    document.getElementById('secretkey').style.display='block';
    document.getElementById('app_id').value = app_id;
};

function secret_submit(){
    app_secret = document.getElementById('psw').value;
    location.href='landing.html';
};


