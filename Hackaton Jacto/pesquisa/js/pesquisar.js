window.onload = function() {

  carregarDados();
};

function carregarDados(){
  $.getJSON('../mock/doencas.json', function (data) {
    if (data.Doencas.length > 0) {
        var arrItems = [];              // The array to store JSON data.

        $.each(data, function (index, value) {
            arrItems.push(value);       // Push the value inside the array.
        });
      }

      mostrarDados(arrItems[0]);
      
    });
}


function mostrarDados(dados = []){
      var ele = document.getElementById('dados');
      ele.innerHTML =  '<div class="container-fluid" id="dados"></div>';

      $.each(dados, function (i, v) {
        ele.innerHTML = ele.innerHTML + 
        '<div class="informacao col-lg-3 col-md-12 mb-3 mb-lg-0">' +
           '<div class="bg-image hover-overlay ripple shadow-1-strong rounded" data-ripple-color="light">' +
              '<p>' + dados[i]['Nome'] + '</p>' +
                '<p>'+
                    '<a href="#!" data-toggle="modal" data-target="#modal_doenca'+i+'">'+
                        '<img src="' + dados[i]['Imagem'] + '"'+
                            'class="doenca-img">' +
                    '</a></p></div></div>';

          ele.innerHTML = ele.innerHTML +
          '<div class="modal fade" id="modal_doenca'+i+'" tabindex="-1" role="dialog"'+
            'aria-labelledby="exampleModalCenterTitle" aria-hidden="true">' +
            '<div class="modal-dialog modal-dialog-centered" role="document">'+
                '<div class="modal-content">'+
                    '<div class="modal-header">'+
                        '<h5 class="modal-title" id="exampleModalLongTitle">'+ dados[i]['Nome'] + '</h5>'+
                        '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                    '</div>' +
                    '<div class="modal-body">' +
                    '<img src="' + dados[i]['Imagem'] + '" class="imgModel_doenca" /></div>' +
                    '<div>' +
                        '<h5 class="text-left">' + dados[i]['Descricao'] + '</h5></div>' +
                    '<div class="VerMais"><button type="button" class="btn btn-primary botaoVerMais" data-dismiss="modal">Ver mais</button></div>' +

                    '<div class="modal-footer"><button type="button" class="btn btn-secondary botaoFechar" data-dismiss="modal">Fechar</button></div></div></div></div>';

    });
}

function FiltrarCultura(){
  $.getJSON('../mock/doencas.json', function (data) {
    if (data.Doencas.length > 0) {
        var arrItems = [];              // The array to store JSON data.

        $.each(data, function (index, value) {
            arrItems.push(value);       // Push the value inside the array.
        });
      }

      var dados = arrItems[0].filter(validaCultura)

      mostrarDados(dados);
      
    });
}

function validaCultura(value) {
  var cultura = document.getElementById("selCultura").value;

  return value["Cultura"] == cultura;
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  function FiltrarFolha(){
    $.getJSON('../mock/doencas.json', function (data) {
      if (data.Doencas.length > 0) {
          var arrItems = [];              // The array to store JSON data.
  
          $.each(data, function (index, value) {
              arrItems.push(value);       // Push the value inside the array.
          });
        }
  
        var dados = arrItems[0].filter(validaFolha)
  
        mostrarDados(dados);
        
      });
  }
  
  function validaFolha(value) {
    var folha = document.getElementById("selFolha").value;
  
    return value["SintomasFolha"] == folha;
  }

  function FiltrarFruto(){
    $.getJSON('../mock/doencas.json', function (data) {
      if (data.Doencas.length > 0) {
          var arrItems = [];              // The array to store JSON data.
  
          $.each(data, function (index, value) {
              arrItems.push(value);       // Push the value inside the array.
          });
        }
  
        var dados = arrItems[0].filter(validaFruto)
  
        mostrarDados(dados);
        
      });
  }
  
  function validaFruto(value) {
    var fruto = document.getElementById("selFruto").value;
  
    return value["SintomasFruto"] == fruto;
  }