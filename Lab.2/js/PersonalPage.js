import PersonalPageArrayModel from './model/PersonalPageArrayModel.js';
import PersonalPageArrayView from './view/PersonalPageArrayView.js';
import PersonalPageArrayController from './controller/PersonalPageArrayController.js';

var PersonalPageArrayModel = new PersonalPageArrayModel();
var PersonalPageArrayView = new PersonalPageArrayView(PersonalPageArrayModel);

var controller = new PersonalPageArrayController(PersonalPageArrayModel, PersonalPageArrayView);

window.controller = controller

controller.addRow("Name", "?")
controller.addRow("Birth_date", "?")
controller.addRow("Sex", "?")
controller.addRow("Email", "?")
