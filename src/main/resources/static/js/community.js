

function post(){
    var questionId = $("#question_id").val();
    let content = $("#comment_content").val();
    $.ajax({
        type:"POST",
        url:"/comment",
        contentType:'application/json',
        data: JSON.stringify({
            "parentId":questionId,
            "content":content,
            "type":1
        }),
        success:function (response){
            if(response.code == 200){
                $("#comment_section").hidden();
            }else {
                if (response.code == 2003) {
                    var isAccepted = confirm(response.message);
                    if (isAccepted) {
                        window.open("https://github.com/login/oauth/authorize?client_id=f4710ab19e53f4b4b73f&redirect_uri=http://localhost:8080/callback&scope=user&state=1");
                        window.localStorage
                    }
                } else {
                    alert(response.message);
                }
            }
        },
        dataType:"json"

    });
    console.log(questionId);
    console.log(content);

}