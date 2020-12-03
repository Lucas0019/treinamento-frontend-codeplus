const api = (config, callback) => {
  const xhrRequest = new XMLHttpRequest();

  // addEventListener() registra uma única espera de evento em um único alvo. 
  //O alvo do evento pode ser um único elemento em um documento, o documento em si, 
  //uma janela, ou um XMLHttpRequest.

  //O evento readystatechange é ativado quando o atributo readyState de um documento é alterado.
  xhrRequest.addEventListener('readystatechange', function () {
    if (this.readyState === 4) {
      const data = JSON.parse(this.response);


      callback(data);
    }
  });

  xhrRequest.open(config.method, config.url);
  xhrRequest.send(config.data);
}



export default api