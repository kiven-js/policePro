
// $( function () {
//     $.ajax({
//       type: "POST" ,
//       dataType: "json" ,
//       url: 'http://127.0.0.1:5500/urtil/data.json' ,
//       success: function (result) {
//         // var str = "" ;
//         //         $.each(result, function (index,obj){             
//         //         str += "<a href='" + obj[ "url" ] + "' target='_blank'><img src='" + obj[ "img" ] + "' /></a>" ;                  
//         //         });
//         // $( "#ok" ).append(str);
//         console.log(result)
//       }
//     });
// });
let oldArr = [];
 let getData =  $.ajax({
    type: "get",//请求方式
    url: "http://127.0.0.1:5500/urtil/data.json",//地址，就是json文件的请求路径
    dataType: "json",//数据类型可以为 text xml json  script  jsonp
    async: false,
    success: function(data){
        $.each(data,function(index,item){
            
            let html = `
            <div class="col-md-4 mb-4 d-flex justify-content-center " style="height: 220px;">
            <div class="card border-primary mb-3 " style=" max-width: 360px;max-height:40px;background-color: #007291;">
                <div class="card-header text-white">`+item.header+`</div>
                <div class="card-body bg-white shadow rounded">
                  <h5 class="card-title text-black font-weight-bold">`+item.title+`</h5>
                  <p class="textScale card-text text-black-50 " style="max-height:60px">`+item.content+`</p>
                </div>
                <div class="card-footer border-black-20 text-black-50 bg-white" >`+item.time+`</div>
              </div>
        </div>
            `
            oldArr.push(html);
            
            $('#htmldata').append(html)
        })
    }
})


$('.addData').click(()=>{
    getData();
})
