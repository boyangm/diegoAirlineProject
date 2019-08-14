var passport = document.getElementById('passport');
var formArea = document.getElementById('formArea');
var aboutYou = document.getElementById('aboutYou');
var comments = document.getElementById('comments');
var headeroptions = document.getElementsByClassName('headeroptions');

function tabby(num){
 for(var i = 0 ; i< 3; i++){
    headeroptions[i].classList.remove('activity');
 }
 headeroptions[num].classList.add('activity');

}
passport.addEventListener('click', () =>{
event.preventDefault();
tabby(0);
formArea.innerHTML ="";
formArea.innerHTML =` 
<form>
<div class="form-group">
  <label for="passportNumber">Passport Number:</label>
  <input type="password" class="form-control" id="passportNumber" name="passportNumber" placeholder="Passport Number">
</div>
    <div class="form-group">
      <label for="passportCountry">Passport Country</label>
      <input type="email" class="form-control" id="passportCountry" name="passportCountry" placeholder="Passport Country">
    </div>
    <div class="form-group">
      <label for="passportExpDate">Passport Exp Date:</label>
      <input type="date" class="form-control" id="passportExpDate" name="passportExpDate">
    </div>
    <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
            <label class="form-check-label" for="inlineCheckbox1">Male</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2">
            <label class="form-check-label" for="inlineCheckbox2">Female</label>
          </div>
          <br>
          <br>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;


})
aboutYou.addEventListener('click', () =>{
event.preventDefault();
tabby(1);
formArea.innerHTML ="";
formArea.innerHTML =`
<form >
<label>Drinks:</label>
<div class="input-group mb-3">
        <div class="input-group-prepend">
          <label class="input-group-text" for="inputGroupSelect01">Drink Choice</label>
        </div>
        <select class="custom-select" id="inputGroupSelect01">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
</div>
<div class="form-group">
    <label for="dietaryRestriction">Dietary Restriction</label>
    <input type="text" class="form-control" id="dietaryRestriction" placeholder="Dietary Restriction">
</div>

<div class="form-group">
    <label for="exampleInputPassword1">Cell Phone Number</label>
    <input type="text" class="form-control" id="cellphoneNumber" name ="cellphoneNumber"placeholder="555-555-5555">
</div>

      <button type="submit" class="btn btn-primary">Submit</button>
</form>`;


})
comments.addEventListener('click', () =>{
    event.preventDefault();
    tabby(2);
    formArea.innerHTML ="";
    formArea.innerHTML =`
    <form>
    <div class="form-group">
    <label for="notes">Leave Us a Comment!</label>
    <textarea class="form-control" id="notes" name="notes" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
    `;
})
window.onload = function() {
    tabby(0);
} 