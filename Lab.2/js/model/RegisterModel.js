export default class RegisterModel
{
   constructor()
   {
    this.id = self.crypto.randomUUID();
    this.username = document.getElementById("username");
    this.email = document.getElementById("email");
    this.birthdate = document.getElementById("start");
    this.sex = sex_check();
    this.password =  document.getElementById("password");
    this.password_repeat =  document.getElementById("cf_password");

   
    this.username.addEventListener("change", (e) => this.onClick(e));
    this.email.addEventListener("change", (e) => this.onClick(e));
    this.birthdate.addEventListener("change", (e) => this.onClick(e));
    this.sex.addEventListener("change", (e) => this.onClick(e));
    this.password.addEventListener("change", (e) => this.onClick(e));
    this.password_repeat.addEventListener("change", (e) => this.onClick(e));

    this.onChangeCallback = null;
    return this.initOnModelChange();
   } 
    get sex_check()
   {
       let inp = document.getElementsByName('inlineRadioOptions');
       for (let i = 0; i < inp.length; i++) {
           if (inp[i].type == "radio" && inp[i].checked) {
              return inp[i].value;
           }
       }
   }
 
   get is_valid() {
    if (this.username.value.length <= 0) { return false; }
    if (this.birthdate.value.length <= 0) { return false; }
    if (this.sex.value.length <= 0) { return false; }
    if (this.email.value.length <= 0) { return false; }
    if (this.password.value.length <= 0) { return false; }
    if (this.password_repeat.value.length <= 0) { return false; }

    return this.password.value === this.password_repeat.value;
}

setOnChangeCallback(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
}

onClick(e) {
    this.onChangeCallback()
}

initOnModelChange() {
    let handler = {
        set: (obj, prop, val) => {
            obj[prop] = val;
            if (this.onChangeCallback) this.onChangeCallback(this);
            return true;
        }
    }
    return new Proxy(this, handler);
}
}

