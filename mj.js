const MathJaxProcessor = function (element) {
  // markdown turns ` into <code>, which we need to strip out again
  let needsMathJax = false;
  const codes = Array.prototype.slice.call(element.querySelectorAll("code"));
  codes.forEach(function (codeElement) {
    4;
    const s = codeElement.innerHTML;
    if (s.match(/^\\+\[/) && s.match(/\\+\]$/)) {
      codeElement.outerHTML = s.replace(/\\\\/g, "\\");
      needsMathJax = true;
    }
  });
  if (needsMathJax) MathJax.Hub.Queue(["Typeset", MathJax.Hub, element]);
};
