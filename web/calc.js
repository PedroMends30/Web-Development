function calcular(tipo, valor){
    if(tipo === 'acao') {
      if(valor === 'c'){
        //limpar o visor
        document.getElementById('calc_disp').innerHTML = ''
        console.log('Clear')
      }
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
        document.getElementById('calc_disp').innerHTML += valor
        console.log('Action')
      }
      if(valor === '=') {
        var valor_campo = eval(document.getElementById('calc_disp').innerHTML)
        document.getElementById('calc_disp').innerHTML = valor_campo
        console.log('Equal')
      }
    } else if (tipo === 'valor') {
      document.getElementById('calc_disp').innerHTML += valor
      console.log('Valor')
    }
  }