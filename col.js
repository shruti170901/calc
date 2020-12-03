new Vue({
  el: '#app',
  data: {
    plants: [
      {
        id: 1,
        name: "Cactaceae Houseleek",
        img: "https://github.com/OlgaKoplik/CodePen/blob/master/plants/1.png?raw=true",
        price: 3.19,
        quantity: 1,
      },
      {
        id: 2,
        name: "Echeveria purpusorum",
        img: "https://github.com/OlgaKoplik/CodePen/blob/master/plants/2.png?raw=true",
        price: 2.99,
        quantity: 1,
      },
      {
        id: 3,
        name: "Echeveria agavoides",
        img: "https://github.com/OlgaKoplik/CodePen/blob/master/plants/3.png?raw=true",
        price: 3.39,
        quantity: 1,
      }],
    checkout: false,
  },
  computed: {
    sum: function(){
      return this.plants.reduce((sum, plant) => {
        return sum + (plant.price*plant.quantity);
      }, 0)
    }
  },
  methods: {
    add(plant) {
      plant.quantity+=1;
    },
    decrease(plant) {
      if(plant.quantity > 1){
        plant.quantity-=1;
      }else{
        this.remove(plant.id);
      }
    },
    remove(plantIDToRemove) {
      this.plants = this.plants.filter((plant)=>{
        return  plant.id !== plantIDToRemove;
      });
    },
    checkoutCart(){
      this.checkout = !this.checkout;
    }
  },
})
