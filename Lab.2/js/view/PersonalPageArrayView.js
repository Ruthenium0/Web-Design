import PersonalPageView from './PersonalPageView.js';
export default class PersonalPageArrayView {
	constructor(itemListModel) {
		this.itemListModel = itemListModel;
		this.controllerOnCheckbox = null;
		this.controllerOnAddItem = null;
		this.controllerOnDelItem = null;

		
	}

	setControllerOnAddItem(controllerOnAddItem) {
		this.controllerOnAddItem = controllerOnAddItem;
	}

	toHtml() {
		const itemsHtml = this.itemListModel.items.map( (item) => {
			const itemView = new PersonalPageView(item);
			return itemView.toHtml();
		}).join("");
		return `
			<table class="table table-sm table-dark quiz-text" id="aboutmeTable">
			<thead>
				<tr>
					<th scope="col" class="col-2 col-sm-2">Topic</th>
					<th scope="col">Value</th>
				</tr>
			</thead>
			${itemsHtml}
			</table>
		`
	}
}