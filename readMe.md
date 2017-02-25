# 我的博客

## 算法和数据结构
### 冒泡排序
```javascript
function bubbleSort(arr, callback) {
	if(Object.prototype.toString.call(arr) !== '[object Array]') {
		return;
	}
	if(typeof callback === 'undefined') {
		callback = function (a, b) {
			return a-b;
		}
	}

	var count = 0;
	for(var i = 0; i < arr.length-1; i++) {
		var flag = true;
		for(var j = 0; j < arr.length-i-1; j++) {
			count++;
			if(callback(arr[j], arr[j+1]) > 0) {
				flag = false;
				var temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
		if(flag) {
			break;
		}
	}
	return arr;
}
```
