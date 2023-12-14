const { user: userUtils } = require('../utils');

async function createUser(req, res) {
  try {
    const { firstName, lastName, age } = req.body;
    if (!firstName || !lastName || !age) {
      return res
        .status(400)
        .json({
          isSuccess: false,
          message:
            'Please provide firstName, lastName and age must be greater than 0',
        });
    }

    const createdUser = await userUtils.createUser(req.body);

    return res.status(201).json({ isSuccess: true, data: createdUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ isSuccess: false, message: error.message });
  }
}

async function getUser(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const user = await userUtils.getUserById(id);
    if (!user) {
      return res
        .status(404)
        .json({ isSuccess: false, message: 'User not found' });
    }

    return res.status(200).json({ isSuccess: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ isSuccess: false, message: error.message });
  }
}

async function getUsers(req, res) {
  try {
    const { page = 1 } = req.query;
    const { users, totalPages } = await userUtils.getUsers(page);
    return res
      .status(200)
      .json({ isSuccess: true, data: { users, totalPages, page } });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ isSuccess: false, message: error.message });
  }
}

async function updateUser(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const { age } = req.body;
    if (typeof parseInt(age) !== 'number') {
      return res.status(400).json({ message: 'Invalid age' });
    }

    const updatedCount = await userUtils.updateUserById(id, req.body);
    if (!updatedCount) {
      return res
        .status(404)
        .json({ isSuccess: false, message: 'User not found' });
    }

    return res.status(200).json({ isSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ isSuccess: false, message: error.message });
  }
}

async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(400).json({ message: 'Invalid id' });
    }

    const deletedCount = await userUtils.deleteUserById(id);
    if (!deletedCount) {
      return res
        .status(404)
        .json({ isSuccess: false, message: 'User not found' });
    }

    return res.status(200).json({ isSuccess: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ isSuccess: false, message: error.message });
  }
}

module.exports = {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
};
