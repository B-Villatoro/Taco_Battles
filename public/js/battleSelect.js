$(document).ready(function(){

    $(document).on("change",".userSelect",function(){
        let user = $(".userSelect").val();

        
        console.log(user);
    });
});
console.log("working?");
