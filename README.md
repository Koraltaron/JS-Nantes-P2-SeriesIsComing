# Series Is Coming / Series Are Coming

Context : Wild Code School 2nd Project - code a website running on ReactJS and TypeScript for the first time, and that mobilizes main React features (props, React hooks, router, etc.).
This project has been conducted under Scrum methodology during 4 weeks, including modeling on excalidraw and then Figma and an oral presentation. 

Objectives : 
- The user can navigate on the website through different pages named Home, Series, Contact and About (+ Detail and Favorite).
- Four series are used in this project : Game of Thrones, Breaking Bad, Prison Break and The Walkind Dead.
- The data used are stored in a homemade object in the server part of the app and then fetched and load using Express.
- On Series page the user can see all the characters from the series he choosed, click on them to get their informations and have the ability to move to the top thanks to scroll-up button. The user can therefore refine his/her search by using the search filter bar or the Series specific filter buttons included in the left-hand pannel on the page.
- On Detail page the user can also add a character to its favorite section and then go back to the Series page he/she was on before.
- On Favorite page the user can click on any character and be redirected to its Detail page, or he/she can choose to remove the character from the favorite section.
- About section is a mock page.
- Contact page is a classic form page, where the input fields are controlled and retrieved to the console after submission (prior to potential Back End instruction). A context is use to display the user filled name in the header section of the App after the form submission.

Technologies : 
- ReactJS
- TypeScript
- HTML and CSS/SASS
- NodeJS

ReactJS features implemented :
- loader,
- context,
- hooks (useEffect, useState),
- custom hooks (useUser, useFilter),
- local storage manipulation,
- JS table methods (filter, maps, find).

Screenshots :

Desktop version :

Page Home : 
![image](https://github.com/user-attachments/assets/52b4b58e-7b2a-4b08-9bd9-56a8c9e7f109)
![image](https://github.com/user-attachments/assets/ae6a1319-c035-4530-a1ac-de2d6d5d0074)

Page Series : 
![image](https://github.com/user-attachments/assets/57d018bc-973c-4334-993c-920931b24aad)
![image](https://github.com/user-attachments/assets/0721c3ba-c27c-47f8-8eb3-32e75fe16c7e)
![image](https://github.com/user-attachments/assets/d8ad30c1-8772-42a4-a6e6-dc9ddde1505b)

Page Detail : 
![image](https://github.com/user-attachments/assets/a6b689e5-035f-4caf-a099-279b508ae35a)


Page Contact : 
![image](https://github.com/user-attachments/assets/7f3f3651-33d1-46ae-b52d-47fef6c1a79a)
![image](https://github.com/user-attachments/assets/e42a26b9-8d71-48ef-9df5-7e3dae3f21bf)

Page Favorite : 
![image](https://github.com/user-attachments/assets/2a2da291-2779-4949-9423-040383d9c0bc)
![image](https://github.com/user-attachments/assets/9b6f722d-a73e-4f54-923b-1b845232861a)

Perspectives : 
- Add more reliable media queries, especially on Detail page to improve the webpage responsivity.
- Using a reliable database of series Characters instead of fetching a moke API and add more keys to add relevant filter options for other series than Game of Thrones.
- Provide pre-render of the images and handle for errors.

Project team members : 
- <a href="https://github.com/FAlex357">Alexandre</a>
- <a href="https://github.com/Romain-Christophe">Romain Christophe</a>
- <a href="https://github.com/quentinlqs">Quentin Loquais</a>
- <a href="https://github.com/JLRWOLF44">Jean-louis Roger</a>
