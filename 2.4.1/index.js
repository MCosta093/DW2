const medicos = [
  {
    nome: 'Leticia',
    sobrenome: 'Costana',
    genero: 'feminino',
    imagemPerfil: 'http://placekitten.com/400/400'
  },
  {
    nome: 'Adimaldo',
    sobrenome: 'Pinto',
    genero: 'masculino',
    imagemPerfil: 'http://placekitten.com/401/401'
  },
  {
    nome: 'Noah',
    sobrenome: 'Lutus',
    genero: 'nao-binario',
    imagemPerfil: 'http://placekitten.com/402/402'
  },
];

function listarMedicos() {
  const listaMedicos = document.getElementById('listaMedicos');

  medicos.forEach(medico => {
    const genero = medico.genero === 'masculino' ? 'Dr' : 'Dra';
    const apresentacao = `${genero}. ${medico.nome} ${medico.sobrenome}`;
    const listItem = document.createElement('li');
    const img = document.createElement('img');

    img.src = medico.imagemPerfil;
    img.alt = apresentacao;

    listItem.appendChild(img);
    listItem.appendChild(document.createTextNode(apresentacao));
    listaMedicos.appendChild(listItem);
  });
}


window.onload = listarMedicos;