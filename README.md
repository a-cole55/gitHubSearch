GitHub User Search

Roadmap
 Users can search for GitHub users by username.
 Each search result will detail the users profile picture, number of followers, number of public repositories, and provide a direct link to the user's GitHub profile.


To view the hosted project, visit: https://searchgh.netlify.app/


Setup
The following instructions assume you already have an IDE (We recommend Visual Studio Code!) installed on your computer.

To get GitHub running on your local machine, you will need to do the following:

Clone the repo to your computer.
Open a terminal in your IDE and cd to the directory in which you cloned the repo.
Run "npm start" in your IDE terminal. This will launch the react application in your browser.



Something interesting/significant:
This is the first project where I have made multiple get requests within one page. It was challenging figuring out the logic of how to display each users follower and public repository count but I was able to think creatively in implementing this feature. It led me to explore UseEffect and research Promise.All which is a new concept to me. With more time I will learn more about this functionality to improve the efficiency of this project.

Proudest Accomplishment:
My proudest accomplishment of this project is being able to fetch data from separate API's to gather the data needed for the search results of this page. Again, figuring this out was very challenging and took much more time than initially anticipated but I was able to get it done. 

Future Contributions to this project:
I would like to turn the search bar into it's own component and get the functionality working on the search page. For now, it just displays the original query from the home page. I would also like to implement useContext so that I'm not prop drilling. Also I plan to add a bit more information about each user to the search results page such as their bio/description and possibly their location. 



