
// ページが読み込まれたときに実行される関数
$(document).ready(function() {

    document.addEventListener('scroll', function() {
        const frame = document.querySelector('.header .frame');
        const title = document.querySelector('.header .text');
        const scrollY = window.scrollY;
    
        // スクロール量に基づいて画像のスタイルを変更
        if (scrollY > 300) {
            frame.style.opacity = '0';
        } else if (scrollY > 3) {
            frame.style.transform = 'rotateZ(0deg) scale(5)';
            frame.style.opacity = '1';
            title.style.transform = 'rotateZ(0deg) translateY(-50%) translateX(-50%) scale(1.3)';
        } else {
            frame.style.transform = 'rotateZ(10deg) translateY(-50%) translateX(-50%) scale(1)';
            frame.style.opacity = '1';
            title.style.transform = 'rotateZ(10deg) translateY(-50%) translateX(-50%) scale(1)';

        }





    });


        // 動きのきっかけとなるアニメーションの名前を定義
    function fadeAnime(){

        // ふわっ
        $('.fadeUpTrigger').each(function(){ //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top+200;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight){
        $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        }else{
        $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
        });
    }
    
    // 画面をスクロールをしたら動かしたい場合の記述
        $(window).scroll(function (){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面をスクロールをしたら動かしたい場合の記述
    
    // 画面が読み込まれたらすぐに動かしたい場合の記述
        $(window).on('load', function(){
        fadeAnime();/* アニメーション用の関数を呼ぶ*/
        });// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


    window.addEventListener('scroll',function() {
        const height = window.innerHeight;                    //画面の高さを取得
        const scroll = this.pageYOffset;                      //スクロール量
        const marker = document.querySelectorAll('.marker-anime');  //マーカーを引く要素を取得
        const value = scroll - height + 0           //後ろの数字を弄ることで、イベント位置をずらす
      
        // markerクラスを持っている要素全てに処理を行う
        marker.forEach(function(element){
            //要素が画面内の指定の位置に来たら「on」クラスをつける
            if (scroll > element.getBoundingClientRect().top + value) {
                element.classList.add('on')
            }
        });
      })
  

});

