//加載動畫

//隱藏物件
function load_end(){
    //獲取動畫物件
    load = document.getElementById("loading");
    //將物件隱藏
    load.style.opacity="0";
    load.style.visibility="hidden";
}
//網頁加載完畢後延遲關閉
window.onload=function(){
    setTimeout('load_end()', 2000);
}


//輪播

//取得地址
src = document.querySelector('.intro-img').getAttribute('data-src');
//圖片渲染
function carousel(now_index,pre_index,next_index,img_list,src){
    //取得地址
    now = img_list[now_index].innerHTML;
    pre = img_list[pre_index].innerHTML;
    next = img_list[next_index].innerHTML;
    //渲染
    img_main.src = '../img/'+ src +'/'+ now 
    pre_img.src = '../img/'+ src +'/'+ pre 
    now_img.src = '../img/'+ src +'/'+ now 
    next_img.src = '../img/'+ src +'/'+ next 
}

//獲取相片列表
img_list = Array.from(document.querySelectorAll('.wrap-item'));
//獲取存放相片物件
img_main = document.querySelector('.main-img');
pre_img = document.querySelector('.pre-img');
now_img = document.querySelector('.now-img');
next_img = document.querySelector('.next-img');
//獲取按鈕
pre_btn = document.querySelector('.fa-chevron-left');
next_btn = document.querySelector('.fa-chevron-right');
//相片數量
list_length = img_list.length;
//設定索引值
pre_index = list_length - 1;
now_index = 0;
next_index = 1;
//預設渲染
carousel(now_index,pre_index,next_index,img_list,src);
//監聽前一張照片
pre_btn.addEventListener('click', (e)=>{
    next_index = now_index;
    now_index = pre_index;
    if(pre_index == 0){
        pre_index = list_length - 1;
    }else{
        pre_index-=1;
    }
    carousel(now_index,pre_index,next_index,img_list,src);
})
//監聽後一張照片
next_btn.addEventListener('click', (e)=>{
    pre_index = now_index;
    now_index = next_index;
    if(next_index == list_length - 1){
        next_index = 0;
    }else{
        next_index+=1;
    }
    carousel(now_index,pre_index,next_index,img_list,src);
})

//照片放大顯示

enlarge_img = document.getElementById('enlarge_img');
function enlarge(){
    var imgsrc = img_main.getAttribute("src");
    enlarge_img.style.display = 'block';
    enlarge_img.innerHTML = '<img src="' + imgsrc + '" />'
}

function closeimg(){
    enlarge_img.style.display = 'none';
}