/** @format */
drinks = [
    {
        drink_name: "Sugar Cookie Martini",
        main_ingredients: "FOR THE MARTINI<br>1/2 c. whole milk<br>1/4 c. Baileys<br>2 oz. vanilla vodka<br>2 oz. amaretto<br>Ice<br>FOR THE RIM<br>1/2 c. vanilla frosting<br>1/4 c. sprinkles, plus 1 tsp., divided<br>Pre-made sugar cookie dough",
        recipe: "Step 1, Preheat oven to 350° and line a baking sheet with parchment paper. Roll sugar cookie dough out to ¼” thick. Using a cookie cutter, cut out desired shapes then place cookies on prepared baking sheet. Bake until just set and lightly golden around the edges, 12 minutes. Let cool. Step 2, Using an offset spatula, spread a thin layer of frosting onto rim of two martini glasses. Pour ¼ cup sprinkles onto a small plate then dip rims in sprinkles to coat. Use an offset to frost cookies with frosting then decorate with remaining 2 tablespoons sprinkles. Step 3, In a cocktail shaker, combine milk, Baileys, vodka, and amaretto. Add ice and shake until cold. Pour into glasses and garnish rim with a cookie.",
        calories: 496,
    },
    {
        drink_name: "White Christmas Margaritas",
        main_ingredients: "1 (14-oz.) can unsweetened coconut milk, 2 tbsp. cream of coconut, 12 oz. silver tequila, 8 oz. triple sec, 1/4 c. lime juice, 4 c. ice",
        recipe: "Step 1, Combine coconut milk, cream of coconut, tequila, triple sec, lime juice and ice in a blender. Blend until smooth. Step 2, Rim glasses with lime wedge and dip in sanding sugar. Pour into glass and garnish with lime and cranberries.",
        calories: 537,
    },
    {
        drink_name: "Classic Eggnog",
        main_ingredients: "2 c. milk, 1/2 tsp. ground cinnamon, plus more for garnish, 1/2 tsp. ground nutmeg, 1/2 tsp. pure vanilla extract, 6 large egg yolks, 1/2 c. granulated sugar, 1 c. heavy cream, 1 c. bourbon or rum (optional), Whipped cream, for serving",
        recipe: "Step 1, In a small saucepan over low heat, combine milk, cinnamon, nutmeg, and vanilla and slowly bring mixture to a low boil. Step 2, Meanwhile, in a large bowl, whisk egg yolks with sugar until yolks are pale in color. Slowly add hot milk mixture to egg yolks in batches to temper the eggs and whisk until combined. Step 3, Return mixture to saucepan and cook over medium heat until slightly thick (and coats the back of a spoon) but does not boil. (If using a candy thermometer, mixture should reach 160º.). Step 5, Remove from heat and stir in heavy cream and, if using, bourbon. Refrigerate until chilled. Step 5, When ready to serve, garnish with whipped cream and cinnamon.",
        calories: 451,
    },
    {
        drink_name: "The Holiday Cocktail",
        main_ingredients: "1.5 oz Ketel One Botanical Grapefruit and Rose Vodka, .5 oz Aperol, .75 oz simple syrup, .5 oz fresh lemon juice",
        recipe: "Shake ingredients in ice filled shaker 25 times. Pour into a champagne flute. Top with whipped cream, and edible rose petal garnish.",
        calories: 426,
    },
    {
        drink_name: "Winter Wonderland",
        main_ingredients: "1.5 oz vodka, .75 oz peppermint schnapps, .75 oz white chocolate liqueur, Candy cane, Red sugar",
        recipe: "Mix and chill ingredients. Pour into a red sugar-rimmed martini glass. Garnish with a candy cane hanging on the rim.",
        calories: 438,
    },
];
const drinkInformation = (index) => {
    console.log(drinks[index].drink_name);
    $(".info").eq(index).html(`${drinks[index].drink_name}<br>${drinks[index].main_ingredients}`);
};
  
const showInformation = () => {
    jQuery.each($(".box"), drinkInformation);
  
    $(".box").on("click", function () {
      let indexOfDrink = $(".box").index(this);
      console.log(drinks[indexOfDrink].calories);
      $(this).find("p.info").html(`Calories<br>${drinks[indexOfDrink].calories}`);
    });
  
    $(".box").on("mouseover", function () {
      let indexOfDrink = $(".box").index(this);
      $(this).find("p.info").html(`Recipe<br>${drinks[indexOfDrink].recipe}`);
    });
  
    $(".box").on("mouseout", function () {
      let indexOfDrink = $(".box").index(this);
      $(this).find("p.info").html(`${drinks[indexOfDrink].drink_name}<br>${drinks[indexOfDrink].main_ingredients}`);
    });
};
  
$(document).ready(showInformation);