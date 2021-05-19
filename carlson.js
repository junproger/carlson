		let flyway = 0;
		let flyjar = 100;
		let displHeight = window.innerHeight;
		let displWidth = Math.floor(window.innerWidth/8)*8;
		let marker = document.querySelector('#marker');
		let carlson = document.querySelector('#carlson');
		let malina = document.querySelector('#malina');
		let reply = document.querySelector('#reply');
		marker.style.left = displWidth/2 + 'px';
		reply.style.left = displWidth/2 - 60 + 'px';
		malina.style.left = displWidth/2 + +20 + 'px';
		malina.style.display = 'none';
		function animation() {
			if (flyway < displWidth/2 - 60) {
			carlson.src = 'carlson1.gif';
			malina.style.display = 'none';
			flyway += 4;
				} 
			if (flyway == displWidth/2 - 60) { 
			console.log('Достигли середины экрана ' + '(' + displWidth + '-' + '60) / 2' + ' = ' + flyway);
			reply.textContent = ' Ох, ёпт!.. ';
			}
			if (flyway > displWidth/2 - 80) { 
			carlson.src = 'carlson12.gif';
			malina.style.display = 'block';
			malina.src = 'malina-2-0.gif';
			flyway += 4;
			flyjar += 4;
				}
			if (flyway > displWidth/2 - 60) { 
			carlson.src = 'carlson2.gif';
			malina.style.display = 'block';
			malina.src = 'malina-3-0.gif';
			flyway += 4;
			flyjar += 8;
				}
			if (flyjar > displHeight/2 - 80) { 
			malina.style.display = 'block';
			malina.src = 'malina-4-0.gif';
			reply.textContent = '';
			flyjar += 8;
				}
			if (flyjar > displHeight - 80) { 
			malina.style.left = displWidth/2 - 40 + 'px';
			malina.style.display = 'block';
			malina.src = 'malina-6-0.gif';
			flyjar = displHeight - 80;
				}
			if (flyway > displWidth) { 
			flyjar = 100;
			flyway = -100;
			carlson.src = 'carlson1.gif';
			malina.style.left = displWidth/2 + +20 + 'px';
			malina.style.display = 'none';
			}
			carlson.style.left = flyway + 'px';
			malina.style.top = flyjar + 'px';
		}
		setInterval(animation, 100);