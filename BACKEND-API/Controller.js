const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const bcrypt = require('bcrypt');
const models=require('../BACKEND-API/models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let empresa=models.Empresa;
let usuario=models.Usuario;
let produto=models.Produto;

// Efetuar Login
app.post('/login', async (req, res) => {
  try {
    const usuarioEncontrado = await usuario.findOne({
      where: { nomeUsuario: req.body.nomeUsuario },
    });

    if (usuarioEncontrado) {
      const senhaCorrespondente = await bcrypt.compare(
        req.body.senhaUsuario,
        usuarioEncontrado.senhaUsuario
      );

      if (senhaCorrespondente) {
        res.send(usuarioEncontrado);
        
      } else {
        res.status(401).send(JSON.stringify('Senha incorreta'));
      }
    } else {
      res.status(401).send(JSON.stringify('Senha incorreta'));
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor.' });
  }
});

//Atualizar senha
app.post('/atualizacaoSenha', async (req, res) => {
  try {
    const usuarioEncontrado = await usuario.findOne({
      where: { id: req.body.id },
    });

    if (usuarioEncontrado) {
      const senhaCorrespondente = await bcrypt.compare(
        req.body.senhaAntiga,
        usuarioEncontrado.senhaUsuario
      );

      if (senhaCorrespondente) {
        if (req.body.novaSenha === req.body.confNovaSenha) {
          const novoHashSenha = await bcrypt.hash(req.body.novaSenha, 10);
          usuarioEncontrado.senhaUsuario = novoHashSenha;
          await usuarioEncontrado.save();

          res.status(200).send(JSON.stringify('Senha atualizada com sucesso!'));
        } else {
          res.status(400).send(JSON.stringify('Senha e Confirmação não conferem!'));
        }
      } else {
        res.status(404).send(JSON.stringify('Senha anterior nao encontrada!'));
      }
    } else {
      res.status(404).send(JSON.stringify('Usuário não encontrado!'));
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro no servidor durante a atualização de senha.' });
  }
});

// Cadastrar usuário
app.post('/cadastroUsuario', async (req, res) => {
  try {
    const administrador = await usuario.findOne({
      where: { id: req.body.idAdministrador },
    });

    if (!administrador) {
      return res.status(404).send(JSON.stringify('Administrador não encontrado'));
    }
    const usuarioJaExiste = await usuario.findOne({
      where: { nomeUsuario: req.body.novoUsuario,}
    });
    if (usuarioJaExiste === null) {
      const senhaAdminCorreta = await bcrypt.compare(
        req.body.senhaAdm,
        administrador.senhaUsuario
      );
  
      if (!senhaAdminCorreta) {
        return res.status(404).send(JSON.stringify('Senha do administrador não encontrada'));
      }
      
      const senhaHash = await bcrypt.hash(req.body.senhaNovoUsuario, 10);
  
      const novoUsuario = await usuario.create({
        id: null,
        nomeUsuario: req.body.novoUsuario,
        emailUsuario: req.body.emailNovoUsuario,
        senhaUsuario: senhaHash,
        tipoUsuario: req.body.tipoNovoUsuario,
        empresaId: administrador.empresaId,
      });
     
    } else {
      return res.status(409).send(JSON.stringify('Usuario já cadastrado!'));
    }
    
     return res.status(201).send(JSON.stringify('Usuario cadastrado!'));
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
  }
});

//Cadastrar produto
app.post('/cadastroProduto', async (req, res)=> {
    let response=await produto.findOne({
        where:{nomeProduto:req.body.nomeNovoModelo}
    });
    if (response === null){
        let novoModelo = await produto.create({
            id: null,
            nomeProduto: req.body.nomeNovoModelo,
            precoProduto: req.body.novoValorModelo,
            imagemProduto: req.body.novaImagemModelo,
            categoriaProduto: req.body.novaCategoriaModelo,            
        });
        return res.status(201).send(JSON.stringify('Cadastro efetuado com sucesso!'));
    } else {
      return res.status(409).send(JSON.stringify('Produto presente na base de dados!'));
    }
});


//Listar produtos
app.get('/listagemProdutos', async (req, res) => {
  try {
    const orderBy = req.query.orderBy || 'nomeProduto'; 
    
    const produtos = await produto.findAll({
      order: [[orderBy, 'ASC']],
    });

    res.status(200).json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao listar os produtos.' });
  }
});

  app.post('/edicaoProduto', async (req, res) => {
    try {
      let existingProdutoEditar = await produto.findOne({
        where: { id: req.body.selectModel }
      });
      
      if (existingProdutoEditar === null) {
        return res.status(405).send(JSON.stringify('Modelo Não Confere com o Listado Acima'));
      } else {

        if (req.body.novoModelo != null){
          existingProdutoEditar.nomeProduto=req.body.novoModelo;
      } else {
        existingProdutoEditar.nomeProduto=existingProdutoEditar.nomeProduto;
      }
      
      if (req.body.novoValor != null){
        existingProdutoEditar.precoProduto=req.body.novoValor;

      } else {
        existingProdutoEditar.nomeProduto=existingProdutoEditar.nomeProduto;
      }
      if (req.body.novaImagemMod != null){
        existingProdutoEditar.imagemProduto=req.body.novaImagemMod;
      } else {
        existingProdutoEditar.imagemProduto=existingProdutoEditar.imagemProduto;
      }
          existingProdutoEditar.save();
          return res.status(200).send(JSON.stringify('Modelo Editado Com Sucesso!'));

      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao editar o modelo' });
    }
  });

  // Excluir modelo
  app.delete('/exclusaoProduto', async (req, res) => {
    try {
      let existingProdutoExcluir = await produto.findOne({
        where: { nomeProduto: req.body.selectModel }
      });
      
      if (existingProdutoExcluir === null) {
        return res.status(405).send(JSON.stringify('Modelo Não Confere com o Listado Acima'));
      } else {
        existingProdutoExcluir.destroy();
        return res.status(200).send(JSON.stringify('Modelo Excluído Com Sucesso!'));
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Erro ao excluir o modelo' });
    }
  });

let port=process.env.PORT || 3000;
app.listen(port, (req, res)=>{
    console.log('Servidor Rodando!');
})
