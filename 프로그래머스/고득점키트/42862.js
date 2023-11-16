function solution(n, lost, reserve) {
  var answer = 0;
  // 빌려야하는 학생 배열 : need
  // 빌려줄 수 있는 학생 배열 : provide

  let provide = reserve.filter((el) => {
    return !lost.includes(el);
  });

  let need = lost.filter((el) => {
    return !reserve.includes(el);
  });

  let whoIsGet = [];

  for (let provider of provide) {
    if (need.includes(provider - 1) && !whoIsGet.includes(provider - 1)) {
      whoIsGet.push(provider - 1);
    } else if (
      need.includes(provider + 1) &&
      !whoIsGet.includes(provider + 1)
    ) {
      whoIsGet.push(provider + 1);
    }
  }

  let whoIsNotGet = need.filter((el) => {
    return !whoIsGet.includes(el);
  });

  answer = n - whoIsNotGet.length;

  console.log(answer);
  console.log(whoIsNotGet);
  return answer;
}

solution(5, [2, 4], [3, 1]);
