//Replace Text function    
$(function () { 
  count = 0; 
  descriptionArray = ["Please Choose Your Desired Language", "Veuillez choisir la langue souhaitée", "Por favor, elija su idioma deseado", "Vă rugăm să alegeți limba dorită", "Proszę wybrać żądany język"]; 
  setInterval(function () { 
    count++; 
    $("#description").fadeOut(500, function () { 
      $(this).text(descriptionArray[count % descriptionArray.length]).fadeIn(500); 
    }); 
  }, 2000); 
}); 
//End Replace Text function 