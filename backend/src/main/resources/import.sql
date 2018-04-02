/* Tables will be created based on entities
 * After creation of databse tables data will be inserted from this file*/


-- initialize new data
INSERT INTO go.movie (title, year) VALUES ('Dabbang', '2014');
INSERT INTO go.movie (title, year) VALUES ('Jai Ho', '2015');

INSERT INTO go.person (first_name, last_name) VALUES ('Pranay', 'Damake');
INSERT INTO go.person (first_name, last_name) VALUES ('Salman', 'Khan');

INSERT INTO go.idea (description, title) VALUES ('description of idea1', 'Idea1');
INSERT INTO go.idea (description, title) VALUES ('description of superb idea', 'Superb Idea');

-- password for users => $2a$10$5f5zZzjQ9TsTcBwob2hTr.tDr7qBI0vd35QkFYoV3d6RrCi5EMzJK = password
INSERT INTO users (username, email, password, enabled) VALUES ('pranay', 'pranaydamke@gmail.com', '$2a$10$5f5zZzjQ9TsTcBwob2hTr.tDr7qBI0vd35QkFYoV3d6RrCi5EMzJK', true);
INSERT INTO users (username, email, password, enabled) VALUES ('harrier', 'harrier@abc.com','$2a$10$5f5zZzjQ9TsTcBwob2hTr.tDr7qBI0vd35QkFYoV3d6RrCi5EMzJK', true);
INSERT INTO users (username, email, password, enabled) VALUES ('system', 'system@def.com','$2a$10$5f5zZzjQ9TsTcBwob2hTr.tDr7qBI0vd35QkFYoV3d6RrCi5EMzJK', true);

insert into role(role_id, name) values (1,'ROLE_GUEST');
insert into role(role_id, name) values (2,'ROLE_USER');
insert into role(role_id, name) values (3,'ROLE_ADMIN');

-- all roles to pranay user
insert into user_role(user_id, role_id) values (1,1);
insert into user_role(user_id, role_id) values (1,2);
insert into user_role(user_id, role_id) values (1,3);
-- harrier has role user
insert into user_role(user_id, role_id) values (2,2);
-- system has role guest
insert into user_role(user_id, role_id) values (3,1);
