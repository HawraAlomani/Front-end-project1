// function to copy quotes by passing the id of p
function copyFunction(id) {
  const copyText = document.getElementById(id).textContent;
  const textArea = document.createElement("textarea");
  textArea.textContent = copyText;
  document.body.append(textArea);
  textArea.select();
  document.execCommand("copy");
  textArea.remove();
  alert("The quote is copied!");
}
