




const form= document.getElementById('formTicket')
const inputs=document.querySelectorAll('#formTicket input')
const select=form.getElementsByTagName('select')[0]

const totalTag= document.getElementById('total')

const resetBtn=document.getElementById('reset')
const submitBtn=document.getElementById('submit')


const expressions={
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    surname:  /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    number:/^\d{1,999999}$/
}

const fal={
    name: false,
    surname: false,
    email: false,
    number: false
}

const validForm=(e)=>{
    switch(e.target.name){
        case "name":
            if (expressions.name.test(e.target.value)){
                document.getElementById('group__name').classList.remove('form__group-incorrect')
                document.getElementById('group__name').classList.add('form__group-correct')
                document.querySelector('#group__name i').classList.remove('fa-circle-xmark')
                document.querySelector('#group__name i').classList.add('fa-circle-check')
                document.querySelector('#group__name .form__input-error').classList.remove('form__input-error-active')
                fal['name']=true
            } else{
                document.getElementById('group__name').classList.add('form__group-incorrect')
                document.getElementById('group__name').classList.remove('form__group-correct')
                document.querySelector('#group__name i').classList.remove('fa-circle-check')
                document.querySelector('#group__name i').classList.add('fa-circle-xmark')
                document.querySelector('#group__name .form__input-error').classList.add('form__input-error-active')
            }
        break;
        case "surname":
            if (expressions.surname.test(e.target.value)){
                document.getElementById('group__surname').classList.remove('form__group-incorrect')
                document.getElementById('group__surname').classList.add('form__group-correct')
                document.querySelector('#group__surname i').classList.remove('fa-circle-xmark')
                document.querySelector('#group__surname i').classList.add('fa-circle-check')
                document.querySelector('#group__surname .form__input-error').classList.remove('form__input-error-active')
                fal['surname']=true
            } else{
                document.getElementById('group__surname').classList.add('form__group-incorrect')
                document.getElementById('group__surname').classList.remove('form__group-correct')
                document.querySelector('#group__surname i').classList.remove('fa-circle-check')
                document.querySelector('#group__surname i').classList.add('fa-circle-xmark')
                document.querySelector('#group__surname .form__input-error').classList.add('form__input-error-active')
            }
        break;
        case "email":
            if (expressions.email.test(e.target.value)){
                document.getElementById('group__email').classList.remove('form__group-incorrect')
                document.getElementById('group__email').classList.add('form__group-correct')
                document.querySelector('#group__email i').classList.remove('fa-circle-xmark')
                document.querySelector('#group__email i').classList.add('fa-circle-check')
                document.querySelector('#group__email .form__input-error').classList.remove('form__input-error-active')
                fal['email']=true
            } else{
                document.getElementById('group__email').classList.add('form__group-incorrect')
                document.getElementById('group__email').classList.remove('form__group-correct')
                document.querySelector('#group__email i').classList.remove('fa-circle-check')
                document.querySelector('#group__email i').classList.add('fa-circle-xmark')
                document.querySelector('#group__email .form__input-error').classList.add('form__input-error-active')
            }
        break;
        case "number":
            if (expressions.number.test(e.target.value)& e.target.value>0){
                document.getElementById('group__ticket').classList.remove('form__group-incorrect')
                document.getElementById('group__ticket').classList.add('form__group-correct')
                document.querySelector('#group__ticket i').classList.remove('fa-circle-xmark')
                document.querySelector('#group__ticket i').classList.add('fa-circle-check')
                document.querySelector('#group__ticket .form__input-error').classList.remove('form__input-error-active')
                fal['number']=true
            } else{
                document.getElementById('group__ticket').classList.add('form__group-incorrect')
                document.getElementById('group__ticket').classList.remove('form__group-correct')
                document.querySelector('#group__ticket i').classList.remove('fa-circle-check')
                document.querySelector('#group__ticket i').classList.add('fa-circle-xmark')
                document.querySelector('#group__ticket .form__input-error').classList.add('form__input-error-active')
            }
        break;
        
    }
}



inputs.forEach((input) =>{
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm)
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if( fal.name && fal.surname && fal.email && fal.number ){
        document.getElementById('form__sms-ok').classList.add('form__sms-ok-active')
        document.querySelectorAll('.form__group-correct').forEach((icono)=>{
            icono.classList.remove('form__group-correct');
        });
}else{
    document.getElementById('form__sms').classList.add('form__sms-active')
}
})