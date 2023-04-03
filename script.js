// Função para decodificar Base64 e exibir o resultado na caixa de tempo

$(document).ready(function() {
    $("#decodeBtn").click(function() {
      const base64 = $("#base64").val();
      const decoded = atob(base64);
      $("#result").html(decoded);
    });
 
    // Função para contar vogais e consoantes e exibir o resultado na caixa de texto

    $("#countBtn").click(function() {
      const text = $("#text").val();
      const vowels = text.match(/[aeiou]/gi);
      const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi);
      $("#result").html("Vogais: " + vowels.length + "<br>Consoantes: " + consonants.length);
    });
  });

  $("#clearBtn").click(function() {
    $("#base64").val("");
    $("#text").val("");
   $("#result").html("");
  });
  