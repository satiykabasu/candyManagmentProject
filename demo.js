document.querySelector("#candyForm").addEventListener("submit", addData)
function addData(event) {
  event.preventDefault();
  const candyName = document.querySelector("#name").value;
  const candyDescription = document.querySelector("#description").value;
  const candyPrice = document.querySelector("#price").value;
  const candyQuentity = document.getElementById("quantity").value;

  const user = {
    candyName,
    candyDescription,
    candyPrice,
    candyQuentity
  };
  axios.post("https://crudcrud.com/api/6c1fa6c2f33a4f78a8180677d52602c5/candysData",user)
    .then((res) => {
      displayUsers();
    })
    .catch((error) => {
      console.error(error);
    });
  document.querySelector("#candyForm").reset();
}

document.addEventListener("DOMContentLoaded", displayUsers);

function displayUsers() {
  const tableBody = document.querySelector("#candyTable tbody");

  axios.get("https://crudcrud.com/api/6c1fa6c2f33a4f78a8180677d52602c5/candysData")
    .then((res) => {
      res.data.forEach((user) => {
        const row = document.createElement("tr");
        row.innerHTML = `
           <td>${user.candyName}</td>
           <td>${user.candyDescription}</td>
           <td>${user.candyPrice}</td>
           <td>${user.candyQuentity}</td>
           <td class="actions">
             <button class="one-btn" onclick="buyOne('${user._id}','${user.candyName}','${user.candyDescription}','${user.candyPrice}','${user.candyQuentity}')">Buy One</button>
             <button class="two-btn" onclick="buyTwo('${user._id}','${user.candyName}','${user.candyDescription}','${user.candyPrice}','${user.candyQuentity}')">Buy Two</button>
             <button class="three-btn" onclick="buyThree('${user._id}','${user.candyName}','${user.candyDescription}','${user.candyPrice}','${user.candyQuentity}')">Buy Three</button>
             

           </td>
         `;

        tableBody.appendChild(row);
      });
    })
    .catch((error) => {
      console.error(error);
    });
}

function buyOne(index,name, description, price,totalQuentity) {
  if (totalQuentity <= 0) {
    alert("out of stock");
    return;
  }
 const currentQuentity = (totalQuentity) - 1;
 console.log(currentQuentity)
  const updatedValue = {
    candyName : name,
    candyDescription : description,
    candyPrice : price,
    candyQuentity : currentQuentity
  };
  console.log(updatedValue)
  axios.put(`https://crudcrud.com/api/6c1fa6c2f33a4f78a8180677d52602c5/candysData/${index}`,updatedValue)
    .then((res) => {
      console.log(res.data);
      displayUsers();
    })
    .catch((error) => {
      console.log(error);
    });
}

function buyTwo(index,name, description, price,totalQuentity) {
  if (totalQuentity <= 0) {
    alert("out of stock");
    return;
  }
 const currentQuentity = (totalQuentity) - 2;
 console.log(currentQuentity)
  const updatedValue = {
    candyName : name,
    candyDescription : description,
    candyPrice : price,
    candyQuentity : currentQuentity
  };
  console.log(updatedValue)
  axios.put(`https://crudcrud.com/api/6c1fa6c2f33a4f78a8180677d52602c5/candysData/${index}`,updatedValue)
    .then((res) => {
      console.log(res.data);
      displayUsers();
    })
    .catch((error) => {
      console.log(error);
    });
}

function buyThree(index,name, description, price,totalQuentity) {
  if (totalQuentity <= 0) {
    alert("out of stock");
    return;
  }
 const currentQuentity = (totalQuentity) - 3;
 console.log(currentQuentity)
  const updatedValue = {
    candyName : name,
    candyDescription : description,
    candyPrice : price,
    candyQuentity : currentQuentity
  };
  console.log(updatedValue)
  axios.put(`https://crudcrud.com/api/6c1fa6c2f33a4f78a8180677d52602c5/candysData/${index}`,updatedValue)
    .then((res) => {
      console.log(res.data);
      displayUsers();
    })
    .catch((error) => {
      console.log(error);
    });
}
