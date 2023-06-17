function cifrar() {
    var input = document.getElementById('input-text').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
      if (input[i].toLowerCase() === 'e') {
        output += '0';
      } else {
        output += input[i];
      }
    }

    document.getElementById('output-text').value = output;
  }

  function descifrar() {
    var input = document.getElementById('input-text').value;
    var output = '';

    for (var i = 0; i < input.length; i++) {
      if (input[i] === '0') {
        output += 'e';
      } else {
        output += input[i];
      }
    }

    document.getElementById('output-text').value = output;
  }
  