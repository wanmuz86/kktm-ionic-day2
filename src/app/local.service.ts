import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  // I create an array of string... that is called todoList
  //todoList = ["Exercise","Hiking","Eat clean"]
  // I create an array of object... that is called todoList
  todoList = [
  //   {
  //   "id":1,
  //   "name":"Exercise",
  //   "location":"Apartment gym",
  //   "imageUrl":"https://media2.malaymail.com/uploads/articles/2020/2020-06/gym_rmco_1.jpg"
  // },
  // {
  //   "id":2,
  //   "name":"Hiking",
  //   "location":"Bukit Puchong",
  //   "imageUrl":"https://lh3.googleusercontent.com/BvWewe8ngRNFeAhD3rSzLt6AJ0fiC8U5NrismEDoUq3d-5ouS02YAiwRlebL_flb4GclA--lnp-S7zNYRF3uyw=s1200-c"
  // },
  // {
  //   "id":3,
  //   "name":"Eat Clean",
  //   "location":"get food from eatclean.com",
  //   "imageUrl":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2Fimage%2F2015%2F06%2Fmain%2F1508w-clean-salmon-plate.jpg%3Fitok%3Dl2-50hAi"
  // },
  // {
  //   "id":4,
  //   "name":"Hit 10 000 steps",
  //   "location":"Around the neighbourhood",
  //   "image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Chelsea1217.JPG/270px-Chelsea1217.JPG"
  // }
] 

  constructor() { }

  //Create

  addItem(newItem){
    this.todoList.push(newItem)
    localStorage.setItem("todos", JSON.stringify(this.todoList));

  }

  // Read all

  readAllItems(){
    let todos = JSON.parse(localStorage.getItem("todos"));
    if (todos){
      this.todoList = todos
    }
    else {
      this.todoList = []
    }
    return this.todoList
  }
  // Read an item

  readAnItem(id){
    // for(var i = 0; i < this.todoList.length;i++){
    //   if (this.todoList[i].id === parseInt(id)){
    //     return this.todoList[i]
    //   }
    // }
    // return null;
    const searchedItem = this.todoList.filter(val=>{
      return val.id === parseInt(id)
    })
    console.log(searchedItem);
    return searchedItem[0]
  }

  //Update


  // Delete
  deleteItem(id){
    this.todoList = this.todoList.filter(val=>{
      return val.id !== parseInt(id);
    })
    localStorage.setItem("todos", JSON.stringify(this.todoList));
    
  }


  getCurrentId(){
    if (this.todoList.length > 0){
    return this.todoList[this.todoList.length-1].id +1
    }
    else {
      return 1;
    }
  }
}
