// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

Product.belongsToMany(Tag, {
  through: {
    model: Tag,
  },
  as: 'product_tags'
});

Tag.belongsToMany(Product, {
  through: {
    model: ProductTag,
  },
  as: 'tag_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
