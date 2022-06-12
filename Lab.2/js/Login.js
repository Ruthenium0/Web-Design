import LoginModel from './model/LoginModel.js';
import LoginView from './view/LoginView.js';
import LoginController from './controller/LoginController.js';

var loginModel = new LoginModel();
var loginView = new LoginView(loginModel);
var controller = new LoginController(loginModel, loginView);

window.controller = controller

