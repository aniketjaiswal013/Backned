let i,j,count,num=[2,2,1,1,1,1,1,2,2]
for(i=0;i<num.length;i++)
{
    count=1;
for(j=i+1;j<num.length;j++)
{
    if(num[i]==num[j])
    count++;
    if(count>num.length/2)
    console.log(num[i]);
}
}