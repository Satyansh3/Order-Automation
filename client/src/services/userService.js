const userService = {
  createUser: async (userData) => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        console.log('User saved successfully');
        return await response.json();
      } else {
        throw new Error('Failed to save user');
      }
    } catch (error) {
      console.error('Failed to save user', error.message)
      throw error;
    }
  },
  getAllUsers: async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        return await response.json();
      } else {
        throw new Error('Failed to fetch users');
      }
    } catch (error) {
      console.error('Failed to fetch users:', error.message);
      throw error;
    }
  }
}

export default userService