const userService = {
    createUser : async (email) => {
        try {
          const response = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
          if (response.ok) {
            console.log('User created successfully');
            return await response.json();
          } else {
            throw new Error('Failed to create user');
          }
        } catch (error) {
          console.error('Failed to create user:', error.message);
          throw error;
        }
    }
}

export default userService