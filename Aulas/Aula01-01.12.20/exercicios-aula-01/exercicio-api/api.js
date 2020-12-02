const api = (config, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function() {
    if (this.readyState === 4) {
      const data = JSON.parse(this.response);
      callback(data);
    }
  });
  xhr.open(config.method, config.url);
  xhr.send(config.data);
}

export default api