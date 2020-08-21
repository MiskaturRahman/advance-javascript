async function fetchUsers() {
    const res = await fetch
        ('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data);

}
fetchUsers();


    // fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(data => data.json())
    //     .then(json => displayUser(json));

    // function displayUser(users) {
    //     // console.log("users", users); --- prints all the users in website only capturing data from another site using javascript

    //     const userNames = users.map(user => user.username);
    //     // console.log(userNames);---prints only user names

    //     const ul = document.getElementById("users-container"); //calling ul items and capturing value

    //     //for loop to iterate every items in a new const and adding to list
    //     for (let i = 0; i < userNames.length; i++) {
    //         const user = userNames[i];
    //         const li = document.createElement("li");
    //         li.innerText = user;
    //         ul.appendChild(li);
    //     }
    // }


