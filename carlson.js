		let flyjar = 100; // Полет банки от верхнего края top
		let flyway = -100; // Полет Карлсона от левого края left
		let displHeight = Math.floor(window.innerHeight/8)*8; // Высота дисплея от 8 пикселей
		let displWidth = Math.floor(window.innerWidth/8)*8; // Ширина дисплея от 8 пикселей
		let marker = document.querySelector('#marker'); // Маркер середины экрана по ширине
		let carlson = document.querySelector('#carlson'); // Изображение фигуры Карлсона
		let malina = document.querySelector('#malina'); // Изображение банки с варением
		let reply = document.querySelector('#reply'); // Реплика Карлсона, роняющего банку
		malina.hidden = true; // Банка с варением еще не падает
		carlson.src = 'carlson1.gif';
		malina.style.display = 'none';
		malina.style.left = displWidth/2 + 'px';
		marker.style.left = displWidth/2 + 'px';
		reply.style.left = displWidth/2 - 60 + 'px';
		function animation() {
			if (flyway < displWidth/2 - 60) {
			malina.style.display = 'none';
			carlson.src = 'carlson1.gif';
			malina.hidden = true;
			flyjar = 100; 
			flyway += 4;
				}
			if (flyway == displWidth/2 - 60) {
			console.log('Достигнута середина экрана ' + displWidth + '/2' + '-' + '60' + ' = ' + flyway);
				}
			if (flyway > displWidth/2 - 80) {
			reply.textContent = ' Ох, ёпт!.. ';
			malina.style.display = 'block';
			carlson.src = 'carlson12.gif';
			malina.src = 'malina-2-0.gif';
			malina.hidden = false;
			flyway += 4;
			flyjar += 8;
				}
			if (flyway > displWidth/2 - 60) {
			malina.style.display = 'block';
			carlson.src = 'carlson2.gif';
			malina.src = 'malina-3-0.gif';
			malina.hidden = false;
			flyway += 2;
			flyjar += 8;
				}
			if (flyjar > displHeight/2 - 60) {
			malina.style.display = 'block';
			malina.src = 'malina-4-0.gif';
			reply.textContent = '';
			malina.hidden = false;
			flyway += 2;
			flyjar += 8;
				}
			if (flyjar > displHeight - 60) {
			malina.style.left = displWidth/2 - 60 + 'px';
			malina.style.display = 'block';
			malina.src = 'malina-6-0.gif';
			flyjar = displHeight - 60;
			malina.hidden = false;
				}
			if (flyway > displWidth) {
			malina.style.left = displWidth/2 + 'px'; // Возврат к исходным значениям
			malina.style.display = 'none';
			carlson.src = 'carlson1.gif';
			malina.hidden = true;
			malina.src = '';
			flyway = -100;
			flyjar = 100;
				}
			carlson.style.left = flyway + 'px';
			malina.style.top = flyjar + 'px';
			}
		setInterval(animation, 100);
		
