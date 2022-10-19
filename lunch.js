const food = function () {
    this.sandwich = {}
    this.bread = bread => {
        this.sandwich.bread = bread
        return this;
    }
    this.sauce = sauce => {
        this.sandwich.sauce = sauce
        return this;
    }
    this.filling = filling => {
        this.sandwich.filling = filling
        return this;
       }
    this.makeSandwich = () => {
    
    return 'Here is your lunch.  It is a sandwich with ' + this.sandwich.bread + ' and ' + this.sandwich.filling + ' with a little ' + this.sandwich.sauce;
    }
    // more methods
   }


exports.nutrition = food;

   