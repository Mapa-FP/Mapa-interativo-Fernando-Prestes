// Verifica se o tutorial já foi exibido nesta sessão
if (!sessionStorage.getItem('introSeen')) {
  introJs().setOptions({
    steps: [{
      intro: "Olá, bem-vindo ao nosso mapa interativo do Fernando Prestes. Agora você passará por um pequeno tutorial."
    }, {
      element: document.querySelector('#intromap'),
      intro: "Esta grande área representa um andar da escola. Após o tutorial, arraste para os lados para acessar outros andares."
    }, {
      element: document.querySelector('img[usemap="#térreo"]'),
      intro: `

        <style>
            table {
                width: 100%;
                text-align: left;
                border-collapse: collapse;
            }
            th, td {
                padding: 10px;
                border: 1px solid #000;
            }
        </style>

    <table border="1" style="width: 100%; text-align: left; border-collapse: collapse;">
      <thead>
        <tr>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="background-color: gray; color: white;">Cinza</td>
          <td>Salas comuns do ensino médio</td>
        </tr>
        <tr>
          <td style="background-color: blue; color: white;">Azul</td>
          <td>Áreas acessíveis ou com computadores</td>
        </tr>
        <tr>
          <td style="background-color: red; color: white;">Vermelha</td>
          <td>Áreas desativadas ou inacessíveis</td>
        </tr>
        <tr>
          <td style="background-color: cyan; color: black;">Ciano</td>
          <td>Salas de desenho</td>
        </tr>
        <tr>
          <td>Outras cores</td>
          <td>Explore e descubra!</td>
        </tr>
      </tbody>
    </table>
  `
  },{
    element: document.querySelector('img[usemap="#térreo"]'),
    intro: `Áreas cinza não são clicáveis para interação.
            Áreas vermelhas incluem apenas a secretaria e o anfiteatro.
            Áreas azuis, ciano e outras são clicáveis`
  }, {
      element: document.querySelector('#intronav'),
      intro: `
             <style> 
                  p {
                      text-align: center;
                  }

                  img {
                      display: block;
                      margin: 0 auto;
                      width: 80%;
                  }
              </style>

                  <p>Esqueceu algo? Acesse [Ajuda]</p>
                  <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28242, 5, 5, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e">
                  `
  }],
  showProgress: true,
  showBullets: false,
  disableInteraction: true
}).start();

// Marca o tutorial como exibido para esta sessão
sessionStorage.setItem('introSeen', 'true');
}
