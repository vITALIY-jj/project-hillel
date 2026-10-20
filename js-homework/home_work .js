//1
const API = "https://6ad75db395e98f36aef25952.mockapi.io/api/v1/:endpoint"

//async function getItems() {
  //const response = await fetch(API);

  //if (!response.ok) {
    //throw new Error ("Error")
  //}

  //const data = await response.json();
  //console.log(data);

  //return data;
  
//}

//2 

//async function addItem() {
  //const response = await fetch(API, {
    //method: "POST", 
    //headers: {
      //"content-Type" : "application/json",
    //},
   // body: JSON.stringify(item),
  //});

  //if (!response.ok) {
    //throw new Error ("Error");
 //}

  //return await response.json();
//};


//3

async function deleteID() {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  
  if (!response.ok) {
    throw new Error ("Error");
  }

  console.log(`Елемент ${id} видалено`);
}