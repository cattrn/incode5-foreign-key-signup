INSERT INTO users (first_name, last_name, email, password)
VALUES
  ('Cat', 'Turnbull', 'cfdhjksf@gmail.com', 'fdshjfkdhsjfkdhsjsdk'),
  ('Sophal', 'Lee', 'cfdhsjreyuwi@gmail.com', 'fdshjfkdhsjfkdhsjsdk'),
  ('Tati', 'Tait', 'fdshjks@gmail.com', 'fdshjfkdhsjfkdhsjsdk'),
  ('Shubham', 'Bhavsar', 'reyuwi@gmail.com', 'fdshjfkdhsjfkdhsjsdk');

INSERT INTO schedules (user_id, day, start_time, end_time)
VALUES
  (2, 1, '14:00', '16:00'),
  (2, 2, '12:00', '16:00'),
  (2, 3, '10:00', '16:00');
