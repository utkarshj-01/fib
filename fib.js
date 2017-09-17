function fibo(){
var a=new Array();
a[0]=0;
a[1]=1;
var i=2;
while(1)
{

a[i]=a[i-1]+a[i-2];
i++;
if(a[i-1]+a[i-2]>30)
break;
}
return(a);
}

var c=new Array(fibo());
var n=c.length;

console.log(c);
module.exports=fibo;
