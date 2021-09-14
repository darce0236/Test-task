create Table users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(50),
  createdAt timestamp with time zone NOT NULL DEFAULT now(),
  deletedAt timestamp with time zone
);
