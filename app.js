var passport = document.getElementById('passport');
var formArea = document.getElementById('formArea');
var aboutYou = document.getElementById('aboutYou');

passport.addEventListener('click', () =>{
event.preventDefault();
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
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="checkbox" id="inlineCheckbox3" value="option3" disabled>
            <label class="form-check-label" for="inlineCheckbox3">Non-Binary</label>
          </div>
          <br>
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
`;


})
aboutYou.addEventListener('click', () =>{
event.preventDefault();
formArea.innerHTML ="";


})