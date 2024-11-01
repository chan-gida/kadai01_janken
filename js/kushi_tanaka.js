// jsチェック：alert
// alert("テスト")
// console.log("first")

// Deferred文脈の作成
var num1, num2; //グローバル変数で設定しないと$.when以降の変数として当たらない（if内のみの変数となってしまう）
var num1Ready = $.Deferred();
var num2Ready = $.Deferred();

// 左側のサイコロの挙動
$(".btn1").on("click", function () {
    var sai = $(this).val() //直前の押されたボタンのvalueを変数設定
    console.log(sai) //変数を表示

    // 片方のサイコロの出目による条件分け
    if (num2 % 2 === 0) { // 左サイコロの出目が偶数の場合
        if (Math.random() < 0.7) {
            num1 = Math.floor(Math.random() * 3) * 2 + 1; //60%の確率で奇数： 乱数設定0〜3*2+1
        } else {
            num1 = Math.floor(Math.random() * 3) * 2 + 2; //40%の確率で偶数： 乱数設定0〜3*2+2
        }
    } else if (num2 % 2 === 1) { // 左サイコロの出目が奇数の場合
        if (Math.random() < 0.7) {
            num1 = Math.floor(Math.random() * 3) * 2 + 2; //60%の確率偶数： 乱数設定0〜3*2+1
        } else {
            num1 = Math.floor(Math.random() * 3) * 2 + 1; //40%の確率で奇数： 乱数設定0〜3*2+2
        }
    } else {
        num1 = Math.floor(Math.random() * 6) + 1 //確率指定なし1〜6
    }
    
    console.log(num1)
    num1Ready.resolve(); //準備完了
    console.log("完了")

    if (num1 === 1) { //出目が1の場合
        $(this).fadeOut();
        $(".deme1").fadeIn();
    } else if (num1 === 2) { //出目が2の場合
        $(this).fadeOut();
        $(".deme2").fadeIn();
    } else if (num1 === 3) { //出目が3の場合
        $(this).fadeOut();
        $(".deme3").fadeIn();
    } else if (num1 === 4) { //出目が4の場合
        $(this).fadeOut();
        $(".deme4").fadeIn();
    } else if (num1 === 5) { //出目が5の場合
        $(this).fadeOut();
        $(".deme5").fadeIn();
    } else if (num1 === 6) { //出目が6の場合
        $(this).fadeOut();
        $(".deme6").fadeIn();
    }
});

// 右側のサイコロの挙動
$(".btn2").on("click", function () {
    var sai = $(this).val() //直前の押されたボタンのvalueを変数設定
    console.log(sai) //変数を表示

    // 片方のサイコロの出目による条件分け
    if (num1 % 2 === 0) { // 左サイコロの出目が偶数の場合
        if (Math.random() < 0.7) {
            num2 = Math.floor(Math.random() * 3) * 2 + 1; //60%の確率で奇数： 乱数設定0〜3*2+1
        } else{
            num2 = Math.floor(Math.random() * 3) * 2 + 2; //40%の確率で偶数： 乱数設定0〜3*2+2
        }
    } else if (num1 % 2 === 1) { // 左サイコロの出目が奇数の場合
        if (Math.random() < 0.7) {
            num2 = Math.floor(Math.random() * 3) * 2 + 2; //60%の確率偶数： 乱数設定0〜3*2+1
        } else {
            num2 = Math.floor(Math.random() * 3) * 2 + 1; //40%の確率で奇数： 乱数設定0〜3*2+2
        }
    } else {
        num2 = Math.floor(Math.random() * 6)  + 1 //確率指定なし1〜6
    }

        console.log(num2)
        num2Ready.resolve(); //準備完了
            console.log("完了")

        if(num2 === 1) { //出目が1の場合
            $(this).fadeOut();
            $(".deme1").fadeIn();
        } else if (num2 === 2) { //出目が2の場合
            $(this).fadeOut();
            $(".deme2").fadeIn();
        } else if (num2 === 3) { //出目が3の場合
            $(this).fadeOut();
            $(".deme3").fadeIn();
        } else if (num2 === 4) { //出目が4の場合
            $(this).fadeOut();
            $(".deme4").fadeIn();
        } else if (num2 === 5) { //出目が5の場合
            $(this).fadeOut();
            $(".deme5").fadeIn();
        } else if (num2 === 6) { //出目が6の場合
            $(this).fadeOut();
            $(".deme6").fadeIn();
        }  
});


// 両方のサイコロの変数が揃った時の挙動
$.when(num1Ready, num2Ready).done(function () {
    var sum = num1 + num2;
    console.log(sum)
    if ((num1 == 1) && (num2 == 1)) { //出目が1のゾロ目場合
        console.log("1&1")
        $(".kekka").html("メガジョッキ1杯 無料")
    } else if ((num1 == num2) && !(num1 == 1)) { //出目が1以外のゾロ目場合
        console.log("ゾロ目")
        $(".kekka").html("1杯 無料")
    } else if (sum % 2 === 0) { //出目の合計が偶数場合
        console.log("半額")
        $(".kekka").html("1杯 半額")
    } else if (sum % 2 === 1) { //出目の合計が奇数場合
        console.log("倍量倍額")
        // $(".kekka").html("メガジョッキ（倍量倍額）")
        $(".kekka").html("メガジョッキ 倍量！倍額！")
    }
})