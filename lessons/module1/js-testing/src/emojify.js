function emojify (text) {
  text = text.replace(/pizzas?/ig, "🍕");
  return text.replace(/tacos?/ig, "🌮 ");
};
//  i is for "ignore case(upper/lower)", 
//  g is for "global", 
//  ? is to make the preceding character optional//

/*EMOJIS: 🍔 🌮 🍣 🍟 */