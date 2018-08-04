CREATE TABLE posts (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  short VARCHAR,
  body VARCHAR,
  created_at TIMESTAMP without time zone default (now() at time zone 'utc')
);
