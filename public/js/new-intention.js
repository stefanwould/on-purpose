'use strict';

var saved = {};
var amount_cards = 0;

$(document).ready(function() {
	initializePage();
})

function initializePage() {
	amount_cards = parseInt($("#amount_cards").text());
	console.log(amount_cards);
}

function pressed(name, save) {
	if (save){
		saved[name] = true;
	}
	$("#location-info").hide();
	$("#description-info").hide();
	$("#duration-info").hide();
	$("#"+name).fadeIn();

	var count = Object.keys(saved).length;
	if (count == amount_cards){
		$("#sendButton").addClass("button-balanced");
	}

	console.log(count);
}

function explainIntention(){
	$("#intentionExplanation").toggle();
}

function startIntention(title, description, duration) {
	var count = Object.keys(saved).length;
	if (count == amount_cards){
		$.post("/save_intention",{
			"title": title,
			"description": description,
			"duration": duration
		}, changeToQuestion);
	}
}

function changeToQuestion(result){
	window.location.href = "/questions/"+result.id;
}




