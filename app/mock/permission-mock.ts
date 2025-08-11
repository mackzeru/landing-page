export const permissionMock = [
  {
    _id: "66edf5f166d31b0c12e29290",
    resource: "users",
    actions: [
      { resource: "users", action: "read", route: "/api/users" },
      { resource: "users", action: "create", route: "/api/users/create" },
    ],
  },
  {
    _id: "66edf5f166d31b0c12e29291",
    resource: "posts",
    actions: [
      { resource: "posts", action: "read", route: "/api/posts" },
      { resource: "posts", action: "create", route: "/api/posts/create" },
    ],
  },
];
