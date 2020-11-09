P422 Project Proposal

Cooper Martin

This project will be an informational web application that hosts leaderboards for in-game scores and times for various video games. This project aims to include the following features:

- An interface that allows for viewing any and all records for existing games.
  - Page that displays list of all available games.
  - Page that displays list of all available levels for selected game.
  - Page that displays list of all submitted records for selected level.
    - Records can be filtered by rank, verification status, and other various applicable variables such as character or vehicle used.
  - Page that displays list of all world records for all available levels for selected game.
    - World records can be filtered by same metrics as mentioned above.
  - Page that displays list of other various rankings and statistics for selected game.
    - This may include an overall ranking, world record count, and other various interesting stats for both a selected game and all games.
  - Page that displays user information for selected user.
    - Viewable information includes username, social media, recent submissions, all submissions, etc.
  - Page that allows for new user to register for a site account.
    - This may or may not include the ability to sign in with 3rd party accounts.
  - Home page that contains general information about the application and direction on where to go to access desired pages.
  - Navigation bar on all pages that allows users to sign in and out, and access any of the above pages.
  - Embedded submission page for selected level that allows users to submit scores and other information.
    - Other information may include proof and/or other entities such as those mentioned above.
  - Page that allows for multiple submissions for different levels in selected game.
  - Page that allows users to tweak and alter site settings.
- A database to store record information for all games.
- A database to store encoded user information.
- The client side will be written in Angular.
- The server side will be written with Javascript.
- MongoDB will be used for database management.

It&#39;s worth noting that it&#39;s possible that some of the individual features may not be included due to time constraints, such as custom users. At minimum, the project will allow for accessing all preloaded record information for at least one game via the pages listed above. To get a relative idea of what this site is aiming to look like functionally, take a look at speedrun.com, which is a similar site that hosts leaderboards for full game speedruns for various video games.