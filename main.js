function start(){
    document.getElementById('start').style.display ='none';
    document.getElementById('question-container1').style.display='block';
  };

function next1(){
    let selectedAnswer = document.getElementById('workHours');
    if(selectedAnswer.value !== ""){
        document.getElementById('question-container1').style.display ='none';
        document.getElementById('question-container2').style.display='block';
        window.selectedAnswer1 = selectedAnswer.value;
        console.log (selectedAnswer1);
    }else{
        alert('回答を入力してください。');
    }
};

function next2(){
    let selectedAnswer = document.getElementById('monthlySalary');
    if(selectedAnswer.value !== ""){
    document.getElementById('question-container2').style.display ='none';
    document.getElementById('question-container3').style.display='block';
    window.selectedAnswer2 = selectedAnswer.value;
    console.log (selectedAnswer2);
    }else{
        alert('回答を入力してください。');
    }
};

function back1(){
    document.getElementById('question-container1').style.display ='block';
    document.getElementById('question-container2').style.display='none';
};

function back2(){
    document.getElementById('question-container2').style.display ='block';
    document.getElementById('question-container3').style.display='none';
};

function restart(){
    location.reload()
}


function calculateSalary() {
    // フォームから値を取得
    let selectedAnswer = document.getElementById('bathroomTime');
    if(selectedAnswer.value !== ""){
        document.getElementById('question-container3').style.display ='none';
        document.getElementById('result-container').style.display='block';
        window.selectedAnswer3 = selectedAnswer.value;
        console.log (selectedAnswer3);

        //計算
        let resultElement = $('.result'); // 要素の取得に修正

        let daySalary = Math.round(parseFloat(document.getElementById('question-container2').value) * 10000 / 20);
        let minutesSalary = Math.round(daySalary / parseFloat(selectedAnswer1) / 60);
        let minutes_bathroom = Math.round(minutesSalary * parseFloat(selectedAnswer3));
      let monthly_bathroom = minutes_bathroom * 20;
      resultElement.hide().html(`あなたがトイレで稼ぐ月給は${monthly_bathroom}円です。`).fadeIn(1000);
        }else{
            alert('回答を入力してください。');
        }


    const workHours = parseFloat(document.getElementById('workHours').value);
    const monthlySalary = parseFloat(document.getElementById('monthlySalary').value);
    const bathroomTime = parseFloat(document.getElementById('bathroomTime').value);

    let resultElement = $('.result'); // 要素の取得に修正

    if (!isNaN(workHours) && !isNaN(monthlySalary) && !isNaN(bathroomTime)) {
      let daySalary = Math.round(monthlySalary * 10000 / 20);
      let minutesSalary = Math.round(daySalary / workHours / 60);
      let minutes_bathroom = Math.round(minutesSalary * bathroomTime);
      let monthly_bathroom = minutes_bathroom * 20;
      resultElement.hide().html(`あなたがトイレで稼ぐ月給は${monthly_bathroom}円です。`).fadeIn(1000);
    } else {
      // フェードインアニメーションを追加
      resultElement.hide().html(`真面目に入力しろや`).fadeIn(1000);
    }
  }

 // $(document).ready(function () {
    // ページが読み込まれたら実行されるコード

    // .titleと.question要素にフェードインアニメーションを追加
    //$('.title, .question').fadeIn(1000);

    // ボタンがクリックされたときの処理
   // $('.button li').on('click', function () {
    //  calculateSalary(); // 既存の関数を呼び出す

     // // 結果の要素にフェードインアニメーションを追加
    //  $('.result').hide().fadeIn(1000);
  //  });
 // });

