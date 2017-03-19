var formGenerate = {
	createForm: function() {
		var element = document.createElement('form');
		element.classList.add('test-form');
		element.style.fontFamily = 'Arial';
		element.style.maxWidth = '600px';
		element.style.margin = '0 auto';

		var body = document.querySelector('body');
		body.appendChild(element);
	},

	createHeading: function() {
		var element  = document.createElement('h3');
		element.style.textAlign = 'center';
		element.innerHTML = "Тест по программированию";

		var form = document.querySelector('.test-form');
		form.appendChild(element);
	},

	createFormTitle: function (questionText){
		var element  = document.createElement('h4');
		element.style.margin = '15px 0 10px';
		element.innerHTML = questionText;

		var form = document.querySelector('.test-form');
		form.appendChild(element);
	},

	createFormRow: function (labelText) {
		var labelForm = document.createElement('label');
		labelForm.innerHTML = "Вариант ответа " + labelText;
		labelForm.style.overflow = 'hidden';
		labelForm.style.display = 'block';
		labelForm.style.paddingLeft = '30px';

		var form = document.querySelector('.test-form');
		form.appendChild(labelForm);


		var checkbox = document.createElement('input');
		checkbox.type = 'checkbox';
		checkbox.style.float = 'left';

		labelForm.appendChild(checkbox);
	},

	createFormButton: function() {
		var buttonRow = document.createElement('div');
		buttonRow.style.textAlign = 'center';
		buttonRow.style.padding = '20px';

		var form = document.querySelector('.test-form');
		form.appendChild(buttonRow);

		var button = document.createElement('input');
		button.type = 'submit';
		button.value = 'Проверить мои результаты';
		button.style.padding = '15px 20px';

		buttonRow.appendChild(button);
	},

	createPage: function () {
		this.createForm();
		this.createHeading();
		
		this.createFormTitle("1. Вопрос №1");
		this.createFormRow("№1");
		this.createFormRow("№2");
		this.createFormRow("№3");

		this.createFormTitle("2. Вопрос №2");
		this.createFormRow("№1");
		this.createFormRow("№2");
		this.createFormRow("№3");

		this.createFormTitle("3. Вопрос №3");
		this.createFormRow("№1");
		this.createFormRow("№2");
		this.createFormRow("№3");

		this.createFormButton();
	}
};

formGenerate.createPage();





