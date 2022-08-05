function hi(){
    console.log('hi')
}
const btn = document.getElementById('inputName');

btn.addEventListener('click', function handleClick(e) {
  e.preventDefault();
  const firstNameInput = document.getElementById('inputName');
  console.log(firstNameInput.value);
  firstNameInput.value = '';
});