const textInput = document.getElementById("text-input");

const checkButton = document.getElementById("check-btn");

const result = document.getElementById("result");

const form = document.getElementsByTagName("form")[0];

const getCleanStr = (str) => str.replace(/\W|_+/ig,"");

const isEmpty = (str) => str.length === 0;

const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return reversedStr === str;
}

const displayResult = () => {
  const textValue = textInput.value;
  const cleanValue = getCleanStr(textValue).toLowerCase();

  if(textValue.length === 0){
    alert("Please input a value");
  } else if(isPalindrome(cleanValue)) {
result.innerText = `${textValue} is a palindrome`;
  } else {
    result.innerText = `${textValue} is not a palindrome`;
  }


};

form.addEventListener("submit",(e)=>{
  e.preventDefault();
});

textInput.addEventListener("keypress", (key)=>{
  if(key.code === "Enter") {
    displayResult();
  }
});

textInput.addEventListener("focus",()=>{
  textInput.value = "";
  result.innerText = "";
})
checkButton.addEventListener("click",displayResult);
