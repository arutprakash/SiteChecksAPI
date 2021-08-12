A API to have periodic checks and logging of you website of desire.

1 The API listens on a port and accepts incoming HTTP/HTTPS requests for POST, GET, PUT, DELETE

2 The API allows the client to connect, create, edit and delete their profile as a user.

3 The API allows a authenticated user to use their token to create a new "check" on websites of their desire

4 In the background, workers perform all the "checks" at a invertval of 60 minutes and send alerts to the users on their registered phone (via Twilio) when a check changes its states from "up" to "down", or vise versa.

5 The logs of all the checks and tokens are saved to the file system and compressed every 24 hours.
