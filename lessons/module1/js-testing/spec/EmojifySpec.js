// describe(); -- used to group up a series of tests

// it(); -- an individual test case

// expect(); -- checks the result of the individual test case

describe ("emojify function",function () {
  it("replaces 'pizza' with '🍕'", function (){
    var result = emojify("I like pizza!");
    expect(result).toEqual ("I like 🍕!")
  });

  it ("replaces 'taco' with '🌮 '", function (){
var result = emojify("two tacosplease.");
expect(result).toEqual("Two 🌮  please.");
  });

    it("ignores case", function (){
      var result = emojify("I like PIZZA!");
      expect(result).toEqual ("I like 🍕!");
  });

    it ("works for more than 1 word", function () {
      var result = emojify("I like pizza. Pizza is my favorite food.");
      expect(result).toEqual("I like 🍕. 🍕 is my favorite food.");
    });
    
    it("works for plural", function (){
      var result = emojify("pizzas are here!");
      expect(result).toEqual("🍕 are here!");
    });
});

