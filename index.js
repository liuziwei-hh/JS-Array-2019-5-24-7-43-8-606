// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。 
 var a = '[a, b, c, d]'; 
 var b = [1, 2, 3, 4]; 
 //TODO 
 function issz(x) { 
 if (x instanceof Array) { 
 console.log("变量" + x + "是数组"); 
 } 
 else { 
 console.log("变量" + x + "不是数组"); 
 } 
 } 
 issz(a); 
 issz(b); 
   // 编写程序，将下面数组中的每一项都乘以2。 
 var a = [1, 2, 3, 4, 5]; 
 // TODO should output [2,4,6,8,10] 
 for (let i = 0; i < a.length; i++) { 
 a[i] *= 2; 
 } 
 console.log(a); 
   // 编写程序，按下面的要求输出结果。 
 var colors = ["Red", "Green", "White", "Black"]; 
 //TODO case 1 output: 'Red Green White Black' 
 // case 2 output: 'Red+Green+White+Black' 
 // case 3 output: 'Red,Green,White,Black' 
 console.log(colors.join(" ")); 
 console.log(colors.join("+")); 
 console.log(colors.toString()); 
 // 编写程序，将下面数组中的数字按从大到小的顺序排序。 
 var a = [5, 1, 8, 10, 4]; 
 //TODO should output: [10,8,5,4,1] 
 function sortNumber(a, b) { 
 return b - a; 
 } 
 console.log(a.sort(sortNumber)); 
 // 编程程序，找出下列数组中出现频率最高的元素。 
 var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
 //TODO should output: 'a' 
 var b=new Map(); 
 var maxv=-1; 
 var maxk; 
 for(let i =0;i<a.length;i++){ 
 if(b.has(a[i])){ 
 b.set(a[i],b.get(a[i])+1); 
 }else{ 
 b.set(a[i],1); 
 } 
 if(b.get(a[i])>maxv){ 
 maxv=b.get(a[i]); 
 maxk=a[i]; 
 } 
 } 
 //console.log(b); 
 console.log(maxk); 
