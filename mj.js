var MathJaxProcessor = function(element) {
  // markdown turns ` into <code>, which we need to strip out again
  var needsMathJax = false;
  var codes = Array.prototype.slice.call(element.querySelectorAll("code"));
  codes.forEach(function(codeElement) {4
    var s = codeElement.innerHTML;
    if(s.match(/^\\+\[/) && s.match(/\\+\]$/)) {
      codeElement.outerHTML = s.replace(/\\\\/g,"\\");
      needsMathJax = true;
    }
  });
  if(needsMathJax) MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
};
