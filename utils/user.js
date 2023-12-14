const { UserModel } = require('../models');

async function createUser(user) {
  const createdUser = await UserModel.create(user);
  return createdUser;
}

async function getUsers(pageNumber) {
  const pageSize = 10;

  const users = await UserModel.findAndCountAll({
    offset: (pageNumber - 1) * pageSize,
    limit: 10,
    order: [['updatedAt', 'DESC']],
  });

  const totalPages = Math.ceil(users.count / pageSize);

  return {
    users,
    totalPages,
  };
}

async function getUserById(userId) {
  const user = await UserModel.findByPk(userId);
  return user;
}

async function updateUserById(userId, updateData) {
  const [updatedCount] = await UserModel.update(updateData, {
    where: { id: userId },
  });
  return updatedCount;
}

async function deleteUserById(userId) {
  const deletedCount = await UserModel.destroy({
    where: { id: userId },
  });
  return deletedCount;
}

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
