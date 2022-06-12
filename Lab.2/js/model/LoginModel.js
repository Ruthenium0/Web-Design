export default class LoginModel {
	constructor() {
		this.id = self.crypto.randomUUID();
		this.email = document.getElementById("email")
		this.password = document.getElementById("password")
		this.remember_me = document.getElementById("exampleCheck1")

		this.email.addEventListener("change", (e) => this.onClick(e));
		this.password.addEventListener("change", (e) => this.onClick(e));
		this.remember_me.addEventListener("change", (e) => this.onClick(e));

		this.onChangeCallback = null;
		return this.initOnModelChange();
	}
	
	get is_valid() {
		if (this.email.value.length <= 0) { return false; }
		if (this.password.value.length <= 0) { return false; }

		return true;
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

