const { Sequelize } = require("sequelize");
const Produtos = require("../models/produtos");

module.exports = {
  async getAll(req, res) {
    const sequelize = new Sequelize("china_commerce", "china", "12345", {
      host: "localhost",
      dialect: "mysql",
    });

    const produtos = await Produtos(sequelize, Sequelize.DataTypes).findAll();
    // SELECT * FROM produtos;

    res.status(200).send(produtos);
  },

  async create(req, res) {
    const sequelize = new Sequelize("china_commerce", "china", "12345", {
      host: "localhost",
      dialect: "mysql",
    });

    await Produtos(sequelize, Sequelize.DataTypes).create({
      nome: req.body.nome,
      descricao: req.body.descricao,
    });

    res.status(200).send({ mensagem: "Produto criado com sucesso" });
  },

  async update(req, res) {
    const sequelize = new Sequelize("china_commerce", "china", "12345", {
      host: "localhost",
      dialect: "mysql",
    });

    await Produtos(sequelize, Sequelize.DataTypes).update(
      {
        nome: req.body.nome,
        descricao: req.body.descricao,
      },
      { where: { id: req.params.id } }
    );

    res.status(200).send({ mensagem: "Produto editado com sucesso" });
  },
};
