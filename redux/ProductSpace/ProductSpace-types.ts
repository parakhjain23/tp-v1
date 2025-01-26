  // Type for the project details object
  interface ProjectSpace {
    _id: string;
    title: string;
    description: string;
    createdBy: string;
    avatar: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }
  
  // Combined initial state type
  interface ProductSpaceState {
    producSpaces: ProjectSpace[];
  }
  