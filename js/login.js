document.getElementById('submit-btn').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passField = document.getElementById('user-password');
    const password = passField.value;
    if(email === 'test@email.com' && password === 'password'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Tui amr Sontan hober joggo na... tui taka pabi na .. ja vag.');
    }
})