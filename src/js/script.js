// Classe para representar um Usuário
class Usuario {
    constructor(nome, email) {
      this.nome = nome;
      this.email = email;
    }
  }
  
  // Array para armazenar os usuários
  let usuarios = [];
  
  // Função para adicionar um novo usuário
  function addUser() {
    const nome = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (nome && email) {
      const usuario = new Usuario(nome, email);
      usuarios.push(usuario);
      renderList();
      clearForm();
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
  
  // Função para listar os usuários
  function renderList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML = "";
  
    usuarios.forEach((usuario, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${usuario.nome} - ${usuario.email}
        <button onclick="editUser(${index})">Editar</button>
        <button onclick="deleteUser(${index})">Excluir</button>
      `;
      userList.appendChild(li);
    });
  }
  
  // Função para editar um usuário
  function editUser(index) {
    const usuario = usuarios[index];
    document.getElementById("name").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
  
    deleteUser(index);
  }
  
  // Função para deletar um usuário
  function deleteUser(index) {
    usuarios.splice(index, 1);
    renderList();
  }
  
  // Função para limpar o formulário
  function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
  }
  
  // Adicionando o evento de clique ao botão de cadastro
  document.getElementById("addUserButton").addEventListener("click", addUser);