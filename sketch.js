var page = 0;
var yr2009;
var yr2009a;
var yr2009b;
var yr2012;
var yr2012a;
var yr2012b;
var yr2015;
var yr2015a;
var yr2018;
var yr2018a;
var w = 1800;
var h = 1200;

function preload(){
	yr2009 = loadImage('img/p4img.jpg');
	yr2009a = loadImage('img/p4img2.jpg');
	yr2009b = loadImage('img/p4img3.jpg');
	yr2012 = loadImage('img/p4img4.jpg');
	yr2012a = loadImage('img/p4img5.jpg');
	yr2012b = loadImage('img/p4img10.jpg');
	yr2015 = loadImage('img/p4img6.jpg');
	yr2015a = loadImage('img/p4img7.jpg');
	yr2018 = loadImage('img/p4img8.jpg');
	yr2018a = loadImage('img/p4img9.jpg');
}

function setup() {
	createCanvas(w, h);

}

function draw() {

//BUTTON FUNCTIONALITY

		//Application intro screen
		if (page == 0){
			image(yr2009, 0, 0, w, h);
    }

		//back to 2009
		if (mouseIsPressed && mouseX > 266 && mouseX < 430 && mouseY > 20 && mouseY < 124){
			page = 0;
		}

		//yr2009a screen - mock hover
    if (mouseIsPressed && mouseX > 590 && mouseX < 670 && mouseY > 342 && mouseY < 422){
      page = 1;
    }

		// yr 2009b screen - mock hover
    if (mouseIsPressed && mouseX > 564 && mouseX < 694 && mouseY > 830 && mouseY < 960){
      page = 2;
    }

		//2012 screen
    if (mouseIsPressed && mouseX > 552 && mouseX < 716 && mouseY > 20 && mouseY < 124){
      page = 3;
    }

		//2012a screen - mock hover
    if (mouseIsPressed && mouseX > 370 && mouseX < 400 && mouseY > 530 && mouseY < 560){
      page = 4;
    }

		//2015
    if (mouseIsPressed && mouseX > 838 && mouseX < 1002 && mouseY > 20 && mouseY < 124){
      page = 5;
    }

		//2015 hover
		if (mouseIsPressed && mouseX > 884 && mouseX < 984 && mouseY > 400 && mouseY < 500){
			page = 6;
		}

		//2018
		if (mouseIsPressed && mouseX > 1122 && mouseX < 1286 && mouseY > 20 && mouseY < 124){
			page = 7;
		}

		//2018 hover
		if (mouseIsPressed && mouseX > 1328 && mouseX < 1380 && mouseY > 930 && mouseY < 980){
			page = 8;
		}

		//2012b hover
		if (mouseIsPressed && mouseX > 150 && mouseX < 180 && mouseY > 1020 && mouseY < 1050){
			page = 9;
		}

//IMAGES / Screenshots

		//yr2009a hover
    if(page == 1){
    	image(yr2009a, 0, 0, w, h);
    }

		//yr 2009b hover
		if(page == 2){
			image(year2009b, 0, 0, w, h);
		}

		//initial yr2012 page
		if(page == 3){
			image(yr2012, 0, 0, w, h);
		}

		//2012a hover
		if(page == 4){
			image(yr2012a, 0, 0, w, h);
		}

		//2012b
		if(page == 9){
			image(yr2012b, 0, 0, w, h);
		}

		//2015
		if(page == 5){
			image(yr2015, 0, 0, w, h);
		}

		//2015 hover
		if(page == 6){
			image(yr2015a, 0, 0, w, h);
		}

		//2018
		if(page == 7){
			image(yr2018, 0, 0, w, h);
		}

		//2018 hover
		if(page == 8){
			image(yr2018a, 0, 0, w, h);
		}



}
