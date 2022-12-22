const uploadImg = document.querySelector('.upload-img'),
      uploadFile = document.querySelector('[type="file"]');


uploadImg.addEventListener('click', () => {
    uploadFile.click();
    uploadFile.addEventListener('change' , function (event) {
        let fReader = new FileReader();
        fReader.readAsDataURL(uploadFile.files[0]);
        fReader.onloadend = function(event){
            let img = document.getElementById("img-target");
            img.src = event.target.result;
            document.querySelector('.bg-profile-img').style.cssText = 'z-index:-1;'
        };
    });
});



const Allchoice = document.querySelectorAll('[type="radio"]'),
      JobDescription = document.querySelector('.Job-description'),
      container = document.querySelector('.main-conetnt'), 
      mediaQueryCondition = window.matchMedia( '( max-width: 746px )' );

Allchoice.forEach( (ele, i) => {
    ele.addEventListener('click', () => {
        if( i === 2) {
            JobDescription.classList.add('active');
            if ( mediaQueryCondition.matches ) {
                container.style.cssText = 'height : 996.559px; padding: 20px 0;'; 
            }else{
                container.style.cssText = 'height : 866.559px; padding: 20px 0;';
            }
        }else{
            JobDescription.classList.remove('active');
            container.style.cssText = 'height : 100vh; padding: 0 0;';
            let setTime = setTimeout( () => {
                JobDescription.children[1].value = '';
                clearTimeout(setTime);
            }, 500 );
        }
    });
})






const signin = document.querySelector('.form-div.signin'),
      login = document.querySelector('.form-div.login'),
      loginLink = document.querySelector('.login-link'),
      signLink = document.querySelector('.sign-link'),
      info = document.querySelector('.info'),
      col1 = document.querySelector('.col-1');




loginLink.addEventListener('click', () => {
    signin.classList.remove('active');
    col1.classList.remove('resize');
    info.innerHTML = `
    <div class="logo">
        <a href="index.html">
            <i class="fa-sharp fa-solid fa-graduation-cap"></i>
            <span>LTZ</span>
        </a>
    </div>
    <h1>Welcome! </br> First things Login to</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore amet dolore, repellendus sed illo nisi sunt fugiat, esse eaque obcaecati sit dicta veniam, ut minus. Et nostrum maxime assumenda.lor </p>`;
    login.classList.add('active');
});


signLink.addEventListener('click', () => {
    login.classList.remove('active');
    col1.classList.add('resize');
    info.innerHTML = `
    <div class="logo">
        <a href="index.html">
            <i class="fa-sharp fa-solid fa-graduation-cap"></i>
            <span>LTZ</span>
        </a>
    </div>
    <h1>Welcome To Our Aria! </br> First things, Register to : </h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum tempore amet dolore, repellendus sed illo nisi sunt fugiat, esse eaque obcaecati sit dicta veniam, ut minus. Et nostrum maxime assumenda.lor </p>`;
    signin.classList.add('active');
});