function solution(answers) {
  var answer = [];

  const calculate1 = (arr) => {
    let correct = 0;
    for (let i = 0; i < arr.length; i++) {
      if ((i % 5) + 1 === arr[i]) correct++;
    }
    return correct;
  };

  const calculate2 = (arr) => {
    let correct = 0;
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0 && arr[i] === 2) correct++;
      else if (i % 8 === 1 && arr[i] === 1) correct++;
      else if (i % 8 === 3 && arr[i] === 3) correct++;
      else if (i % 8 === 5 && arr[i] === 4) correct++;
      else if (i % 8 === 7 && arr[i] === 5) correct++;
    }

    return correct;
  };

  const calculate3 = (arr) => {
    let correct = 0;

    for (let i = 0; i < arr.length; i++) {
      if ((i % 10 === 0 || i % 10 === 1) && arr[i] === 3) correct++;
      else if ((i % 10 === 2 || i % 10 === 3) && arr[i] === 1) correct++;
      else if ((i % 10 === 4 || i % 10 === 5) && arr[i] === 2) correct++;
      else if ((i % 10 === 6 || i % 10 === 7) && arr[i] === 4) correct++;
      else if ((i % 10 === 8 || i % 10 === 9) && arr[i] === 5) correct++;
      //console.log(correct);
    }
    return correct;
  };

  let max = 0;

  let answer1 = calculate1(answers);
  let answer2 = calculate2(answers);
  let answer3 = calculate3(answers);

  if (max < answer1) max = answer1;
  if (max < answer2) max = answer2;
  if (max < answer3) max = answer3;

  if (answer1 === max) answer.push(1);
  if (answer2 === max) answer.push(2);
  if (answer3 === max) answer.push(3);
  //console.log(answer1, answer2, answer3)
  return answer;
}

console.log(solution([3, 3, 2]));
