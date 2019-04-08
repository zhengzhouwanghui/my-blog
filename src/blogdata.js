import AV from "leancloud-storage";


// testData.save({
//     words:'hi'
// }).then(function(){
//     alert('11111111');
// })

const APP_ID ='pF6xoDyrCb64EUGUU4zNCN3X-gzGzoHsz';
const APP_KEY = 'zyFoWlbakqcPEmGcoLrvBngM';
// const AV = require('leancloud-storage');
AV.init({
    appId:APP_ID,
    appKey:APP_KEY
});
//console.log(AV);
let TestData = AV.Object.extend('blogdata');
let query = new AV.Query('blogdata')
let testData = new TestData(); 
// testData.save({words:'hi'}).then(function(aa){
//     console.log(aa)
// })
// query.find().then(function(aa){
//     console.log(333);
//             console.log(aa)
//         })

        // var userResults = [];
        // query.find({
        //   success: function(results) {
        //     // Do something with the returned AV.Object values
        //     for (var i = 0; i < results.length; i++) {
        //       var object = results[i];
        //       userResults.push(object);
        //       alert(object.id + ' - ' + object.get('playerName'));
        //     }
        //   },
        //   error: function(error) {
        //     alert("Error: " + error.code + " " + error.message);
        //   }
        // });
        // console.log(userResults);//控制台的输出结果为空，外部无法用这个方法获取到查询的结果
export default {testData,query};
