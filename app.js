
var claimsList = [];
var totalPayedOut = 0;

function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
	claimsList.push(this); //added to immediately push new claims into array
}

var claim1 = new Claim("John Doe", "Specialist", 1100);

var claim2 = new Claim("Jane Doe", 'Optical', 100);

var claim3 = new Claim("Joe Johnson", "Emergency", 31000);

var claim4 = new Claim("Sharon Smith", "Emergency", 1300);

var claim5 = new Claim("Steve Wright", "Primary Care", 770);

var claim6 = new Claim('Bill Smith', 'Optical', 150);

var claim7 = new Claim('Bobby Bubba', 'Emergency', 12000);

var claim8 = new Claim('Richard Hugh', 'Primary Care', 400);

var claim9 = new Claim ('Sandy Beach', 'Specialist', 2000);

var claim10 = new Claim('Sally Seashore', 'Primary Care', 250);


//function to determine percent covered
function calcPercentCovered(claim) {
	var claimType = claim.visitType;
	switch(claimType) {
		case 'Optical':
			return 0;
			break;
		case 'Specialist':
			return 10;
			break;
		case 'Emergency':
			return 100;
			break;
		case 'Primary Care':
			return 50;
			break;
		default:
			break;
	}
}
//function to determine amount covered
function calcAmountCovered(claim) {
	var claimCost = claim.visitCost;
	var amountCovered = calcPercentCovered(claim) * claimCost / 100;
	return amountCovered;
}

for (var i = 0; i < claimsList.length; i++) {
	totalPayedOut += calcAmountCovered(claimsList[i]);
}

$(document).ready(function () {

	//loops through all claims, and creates li per each with preformatted output
	for (var i = 1; i <= claimsList.length; i++) {
		$('.claimsList').append('<li class="claim" id="'+i+'">\n' +
														'<h3>Patient Name: '+claimsList[i-1].patientName+'</h3> \n' +
														'<p>Visit Cost: $'+claimsList[i-1].visitCost+'</p> \n' +
													 	'<p>Claim Type: '+claimsList[i-1].visitType+'</p> \n' +
													 	'<p>Percent Covered: ' + calcPercentCovered(claimsList[i-1]) + '% </p>' +
													 	'<p>Paid Out: $' + calcAmountCovered(claimsList[i-1]) + '</p> \n' +
														'</li>'

		);
	}
	$('.footer').append('<h4>Total amount of claims paid: $' + totalPayedOut + '.');

	$('li').on('click', function() {
		$(this).children('p').slideToggle('fast');
	});



});
