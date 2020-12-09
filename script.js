var ordered_list=[]

function image_pattern()
{    
    image.style.padding="15px"
    image.onmouseleave=change_pattern
}
function change_pattern()
{
    image.style.padding="0px"
    image.onmouseover=image_pattern
}
function image_pattern1()
{
    image1.style.padding="15px"
    image1.onmouseleave=change_pattern1
}
function change_pattern1()
{
    image1.style.padding="0px"
    image1.onmouseover=image_pattern1
}
function image_pattern2()
{
    image2.style.padding="15px"
    image2.onmouseleave=change_pattern2
}
function change_pattern2()
{
    image2.style.padding="0px"
    image2.onmouseover=image_pattern2
}
function image_pattern3()
{
    image3.style.padding="15px"
    image3.onmouseleave=change_pattern3
}
function change_pattern3()
{
    image3.style.padding="0px"
    image3.onmouseover=image_pattern3
}




var image=document.getElementById('image1')
var image1=document.getElementById('image2')
var image2=document.getElementById('image3')
var image3=document.getElementById('image4')
image.onmouseover=image_pattern
image1.onmouseover=image_pattern1
image2.onmouseover=image_pattern2
image3.onmouseover=image_pattern3





