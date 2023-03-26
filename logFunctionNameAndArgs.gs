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
