export default class RegisterController {
	constructor(RegisterModel, RegisterView) {
		this.RegisterModel = RegisterModel;
		this.RegisterView = RegisterView;
		this.RegisterModel.setOnChangeCallback((e) => this.onChangeCallback(e));
		this.RegisterView.setOnChangeCallback((e) => this.onChangeCallback(e));
		
		this.initOnModelChange();
	}

	onChangeCallback(obj) {
		/* updates UI when a model has changed (title, done attributes) */
		this.RegisterView.onUpdate(!this.RegisterModel.is_valid)
	}


	initOnModelChange() {
		/* updates UI when a model list has changed (adds, deletes items) */
	  
		let handler = {
			set: (obj, prop, val) => {
				obj[prop] = val;
				// console.log(obj, prop, val)
				return true;
			},
			get(object, property) { 
				if(object.hasOwnProperty(property)){
					for(var prop in object[property]){
						this[prop] = object[property][prop] //set class instance props
					}
				}
				return object[property]; // don't need to return
			}
		}
		this.RegisterModel = new Proxy(this.RegisterModel, handler);
	}
}
