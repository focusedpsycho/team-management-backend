# team-management-backend

1) npm install
2) use the sql scripts in database/sql to create functions, tables etc. starting with initial_setup.sql
3) set env variables  either as a one off or to your .bashrc or using windows UI.
   The mysql driver uses the following
   const dbHost = process.env.DB_HOST;
   const dbUser = process.env.DB_USER;
   const dbName = process.env.DB_NAME;
   const dbPassword = process.env.DB_PASSWORD;

4) npm start