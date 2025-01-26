// Type for the User details object
interface User {
    _id: string; // Unique identifier for the user
    email: string; // User's email address
    createdAt: string; // Date when the user was created
    updatedAt: string; // Date when the user was last updated
    __v: number; // Versioning property (MongoDB-specific)
  }
  