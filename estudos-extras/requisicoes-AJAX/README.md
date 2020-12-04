# 🤔 AJAX 🤔

##  Como fazer requisições AJAX com JAVASCRIPT PURO (XmlHttpRequest)

**Link video aula:** https://www.youtube.com/watch?v=bpx0r_PLLBo&feature=youtu.be

- Asynchronous Javascript and XML (JavaScript e XML Assíncronos)
- Permite fazer requisições em HTTP em segundo plano
- Ganhou o objeto xmlHttpRequest que padronizou os Browsers
- Usado para fazer requisições API
- Permite o compartilhamento assíncrono de informações entre cliente e servidor. 
- As informações trocadas entre cliente e servidor geralmente estão no formato de um JSON.

---
### Usaremos um API Fake

- https://jsonplaceholder.typicode.com/

---
## Propiedades e eventos importantes no xhr

- ### ReadyState
        - Ele representa o estdo atual da sua aplicação

   - **São Eles**
        - 0 - Requisição na inicializada
        - 1 - Estabeleceu requisição com o servidor
        - 2 - Pedido recebido
        - 3 - Processando o pedido
        - 4 - Solicitação concluída e Resposta Pronta