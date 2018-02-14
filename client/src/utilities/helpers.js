export const xmlToJson = function (xml) {
  // Create the return object
  var obj = {};

  if (xml.nodeType === 1) { // element
    // do attributes
    if (xml.attributes.length > 0) {
      // obj = {};

      for (var j = 0; j < xml.attributes.length; j++) {
        var attribute = xml.attributes.item(j);
        obj[attribute.nodeName] = attribute.nodeValue;
      }
    }
  }

  // do children
  if (xml.hasChildNodes()) {
    for (var i = 0; i < xml.childNodes.length; i++) {
      var item = xml.childNodes.item(i);
      var nodeName = item.nodeName;
      if (typeof (obj[nodeName]) === "undefined") {
        obj[nodeName] = xmlToJson(item);
      } else {
        if (typeof (obj[nodeName].push) === "undefined") {
          var old = obj[nodeName];
          obj[nodeName] = [];
          obj[nodeName].push(old);
        }
        obj[nodeName].push(xmlToJson(item));
      }
    }
  }

  delete obj['#text'];

  return obj;
};

export const loadScript = (src) => {
  const ref = window.document.querySelector('script');
  const script = window.document.createElement('script');
  script.src = src;
  script.async = true;
  ref.parentNode.insertBefore(script, ref);
};

export const isEmpty = (obj) => {
	return Object.keys(obj).length === 0;
}

export const once = (func, context) => {
	let flag = false;
	return function(...params){
		if (!flag){
			func.apply(context, params);
			flag = true;
		}
	}
}

export const deepCopy = (obj) => {
	return JSON.parse(JSON.stringify(obj))
};

export const createObjectFromArray = (array, key) => {
	const obj = {};
	array.forEach(item => {
		obj[item.tag] = item;
	});
	return obj;
};
