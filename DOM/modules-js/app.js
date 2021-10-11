import loggerFunc from './logger.js';
// import all fieds in constant file
import * as typeConstant from './type-const.js';
import * as counter from './count.js';

loggerFunc("triệu hồi message...", typeConstant.TYPE_WARN);
loggerFunc("triệu hồi message...");
console.log(counter.counter); // 1
counter.increment();
console.log(counter.counter); // 2
