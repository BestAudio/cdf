$(function(){

    //手机号验证
    inputVerify('userphone','手机号')

    //验证码验证
    inputVerify('usernote','验证码')

    //密码验证
    inputVerify('userpass','密码')

    //密码一致性验证
    inputVerify('re_userpass','密码')
})

//正则
function regExpCdf(type,str){
    switch(type){
        case 'userphone':var reg = /^1\d{10}$/; break;
        case 'usernote':var reg = /^\d{6}$/; break;
        case 'userpass':var reg = /((?=.*[0-9])(?=.*[A-z]))|((?=.*[A-z])(?=.*[^A-z0-9]))|((?=.*[0-9])(?=.*[^A-z0-9]))^.{6,16}$/; break;
        case 're_userpass':var reg = /((?=.*[0-9])(?=.*[A-z]))|((?=.*[A-z])(?=.*[^A-z0-9]))|((?=.*[0-9])(?=.*[^A-z0-9]))^.{6,16}$/; break;
        default:return;
    }
    return reg.test(str)
}
// 验证
function inputVerify(name,type){

    $("#"+name).on('focus',function(){
        let str =  $("#"+name).val();
        let result = regExpCdf(name,str);
        if(!result && str !== null && str !== ""){
            $('.send_code').css({'background':"#cecece"});
            $(this).siblings('.wrong').css({'display':"block"});
            $(this).siblings('.hint').css({'display':"block"});
            $(this).siblings('.hint').children('.hint_letter').html(type+'格式错误');
            $('.send_code').attr({'disabled':true});
        }else if(str == null || str == ""){
            if($(this).siblings('.wrong').css('display') == 'block'){
                 $(this).siblings('.hint').css({'display':"block"});
            if(name == 'userpass'){
                $(this).siblings('.hint').children('.hint_letter').html(type+'不可为空');
            }else{
                $(this).siblings('.hint').children('.hint_letter').html('请输入'+type);
            }
            }
        }else if(result){
            $(this).siblings('.right').css({'display':"block"});
            $(this).siblings('.wrong').css({'display':"none"});
            $(this).siblings('.hint').css({'display':"none"});
        }
    })

    $("#"+name).on('input',function(){
        let str =  $("#"+name).val();
        let result = regExpCdf(name,str);
        if(result){
            $(this).siblings('.right').css({'display':"block"});
            $(this).siblings('.wrong').css({'display':"none"});
            $(this).siblings('.hint').css({'display':"none"});
            if(name == 'userphone'){
                $('.send_code').attr({'disabled':false});
                $('.send_code').css({'background':"#b81c22"});
            }
            if(name == 're_userpass'){
                let password = $("#userpass").val();
                console.log(password)
                console.log(str)
                if(str == password){
                    $(this).siblings('.right').css({'display':"block"});
                    $(this).siblings('.wrong').css({'display':"none"});
                    $(this).siblings('.hint').css({'display':"none"});
                }else{
                    $(this).siblings('.right').css({'display':"none"});
                    $(this).siblings('.wrong').css({'display':"block"});
                    $(this).siblings('.hint').css({'display':"block"}); 
                    $(this).siblings('.hint').children('.hint_letter').html('密码不一致，请重新输入密码'); 
                }
            }else{
                $(this).siblings('.right').css({'display':"block"});
                $(this).siblings('.wrong').css({'display':"none"});
                $(this).siblings('.hint').css({'display':"none"});
            }
        }else{
            $(this).siblings('.right').css({'display':"none"});
            if(name == 'userphone'){
                $('.send_code').css({'background':"#cecece"});
                $('.send_code').attr({'disabled':true});
            }
        }
    })

    $("#"+name).on('blur',function(){
        let str =  $("#"+name).val();
        let result = regExpCdf(name,str);
        if(!result && str !== null && str !== ""){
            $('.send_code').css({'background':"#cecece"});
            $(this).siblings('.wrong').css({'display':"block"});
            $(this).siblings('.hint').css({'display':"none"});
            $('.send_code').attr({'disabled':true});
        }else if(str == null || str == ""){
            $(this).siblings('.wrong').css({'display':"block"});
            $(this).siblings('.hint').css({'display':"none"});
            if(name == 'userpass'){
                $(this).siblings('.hint').children('.hint_letter').html(type+'不可为空');
            }else{
                $(this).siblings('.hint').children('.hint_letter').html('请输入'+type);
            }
            
        }else if(result){
            $(this).siblings('.right').css({'display':"block"});
            $(this).siblings('.wrong').css({'display':"none"});
            $(this).siblings('.hint').css({'display':"none"});
        }
    })
}
