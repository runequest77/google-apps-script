/** 
* 呼び出された関数名と引数をログに出力。デバッグ用です。
*/
function logFunctionNameAndArgs() {
  const functionName = logFunctionNameAndArgs.caller?.name || "anonymous";
  const args = [...arguments];
  console.log(`called:${functionName}`);
  if (args.length > 0) {
    console.log(`args:`, ...args);
  }
}


function logFunctionNameAndArgsTest() {
  //引数なしテスト
  sampleFuncA();
  //コンソールへの出力結果
  //called:sampleFuncA

  //引数ありテスト
  sampleFuncB("arg1","arg2");
  //コンソールへの出力結果
  //called:sampleFuncB
  //args: arg1 arg2
}
function sampleFuncA() {
  logFunctionNameAndArgs();
}
function sampleFuncB(x,y) {
  logFunctionNameAndArgs(x,y);
}
