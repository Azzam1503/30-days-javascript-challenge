//Task 6 - Use closures to create a simple module for managing a collection of itmes. Implement methods to add, remove and lsit items.

function createItemManager(){
    let items = [];    
    return {
        add(item){
            if(items.indexOf(item) !== -1){
                console.log("Item already exist")
                return;
            }
           items.push(item);
           console.log(`${item} added`); 
        },

        remove(item){
            if(items.length == 0){
                console.log("list is empty");
            }else if(items.indexOf(item) == -1){
                console.log("Item not found");
            }else{
                items.splice(items.indexOf(item), 1);
                console.log(`${item} removed successfully`)
            }
        },
        getItems(){
            console.log(items);
        }

    }
}

const itemManger = createItemManager();
itemManger.add("Item 1");
itemManger.add("Item 2");
itemManger.add("Item 3");
itemManger.getItems();
itemManger.remove("Item 2");
itemManger.getItems();

