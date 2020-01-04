function logNumbers() {
  console.log(1);
  setTimeout(function() {
    console.log(2);
  }, 1000);
  setTimeout(function() {
    console.log(3);
  }, 0);
  console.log(4);
}

logNumbers();
//1 because its chronologically the first with  no time out
//4 due to no time out it runs before the time out functions
//3 waits 0 seconds before calling
//2 waits 1 second before calling

// even though 3's set timeout has no delay, the callback fubnction 
//is placed into the event loops