# JavaScript OOP

## Parts of OOP

Object-Oriented Programming is built on four main principles:

### 1. Encapsulation

Bundling data (properties) and methods (functions) together within an object, hiding internal implementation details from the outside world.

### 2. Abstraction

Exposing only essential features of an object while hiding complexity. Users interact with simple interfaces without needing to understand internal workings.

### 3. Inheritance

Creating a hierarchy where objects can inherit properties and methods from parent objects, promoting code reuse and logical organization.

### 4. Polymorphism

Objects can take multiple forms. Methods with the same name can behave differently depending on the object calling them. This allows flexible and reusable code.

---

## Object Literal

An object literal is the simplest way to create objects in JavaScript. It's a collection of key-value pairs enclosed in curly braces.

```javascript
const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  email: "john@example.com",

  // Method
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },

  // Shorthand method syntax (ES6)
  greet() {
    console.log(`Hello, I'm ${this.firstName}`);
  },
};

console.log(user.firstName); // Output: John
console.log(user.getFullName()); // Output: John Doe
user.greet(); // Output: Hello, I'm John
```

---

## Constructor Function

Constructor functions are regular functions used with the `new` keyword to create and initialize objects. By convention, they're capitalized.

```javascript
function User(firstName, lastName, age) {
  // 'this' refers to the newly created object
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  this.getFullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

const user1 = new User("John", "Doe", 30);
const user2 = new User("Jane", "Smith", 28);

console.log(user1.getFullName()); // Output: John Doe
console.log(user2.age); // Output: 28
console.log(user1 instanceof User); // Output: true
```

**What happens with the `new` keyword:**

1. A new empty object `{}` is created
2. `this` is bound to that new object
3. The function executes, adding properties and methods to `this`
4. The function implicitly returns `this` (the new object)

---

## Prototypes

Every JavaScript function has a `prototype` property—an object that serves as a template for instances. Methods defined on the prototype are shared among all instances, making them memory efficient.

### Prototype Chain

Objects inherit from their prototype. When accessing a property, JavaScript looks up the prototype chain:

```
instance → instance.__proto__ → Constructor.prototype → Object.prototype → null
```

### Adding Methods to Prototypes

```javascript
function User(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Add method to prototype (shared across all instances)
User.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

User.prototype.introduce = function () {
  console.log(`Hi, I'm ${this.getFullName()}`);
};

const user1 = new User("John", "Doe");
const user2 = new User("Jane", "Smith");

user1.introduce(); // Output: Hi, I'm John Doe
user2.introduce(); // Output: Hi, I'm Jane Smith

// All instances share the same method
console.log(user1.getFullName === user2.getFullName); // Output: true
```

### Prototype Inheritance

Create a chain where one constructor's prototype inherits from another:

```javascript
// Parent constructor
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, I'm ${this.name}`);
};

// Child constructor
function Employee(name, jobTitle) {
  Person.call(this, name); // Call parent constructor
  this.jobTitle = jobTitle;
}

// Set up inheritance chain
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function () {
  console.log(`${this.name} is working as a ${this.jobTitle}`);
};

const emp = new Employee("John", "Developer");
emp.greet(); // Output: Hello, I'm John (inherited from Person)
emp.work(); // Output: John is working as a Developer
```

---

## Classes

ES6 introduced classes, which provide a cleaner syntax for OOP. Under the hood, they're still using prototypes and constructor functions—classes are syntactic sugar.

### Basic Class Syntax

```javascript
class User {
  // Constructor method runs when 'new' is called
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Methods are automatically added to the prototype
  getFullName() {
    return this.firstName + " " + this.lastName;
  }

  introduce() {
    console.log(`Hi, I'm ${this.getFullName()}`);
  }
}

const user1 = new User("John", "Doe", 30);
user1.introduce(); // Output: Hi, I'm John Doe
console.log(user1.getFullName()); // Output: John Doe
```

### Inheritance with `extends`

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Employee extends Person {
  constructor(name, jobTitle) {
    super(name); // Calls the parent constructor
    this.jobTitle = jobTitle;
  }

  work() {
    console.log(`${this.name} is working as a ${this.jobTitle}`);
  }
}

const emp = new Employee("Jane", "Manager");
emp.greet(); // Output: Hello, I'm Jane (inherited)
emp.work(); // Output: Jane is working as a Manager
```

### Static Methods

Methods that belong to the class itself, not to instances:

```javascript
class MathUtils {
  static add(a, b) {
    return a + b;
  }
}

console.log(MathUtils.add(5, 3)); // Output: 8
// const utils = new MathUtils();
// utils.add(5, 3);  // Error: utils.add is not a function
```

### Getters and Setters

```javascript
class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // Getter
  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  // Setter
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const user = new User("John", "Doe");
console.log(user.fullName); // Output: John Doe
user.fullName = "Jane Smith";
console.log(user.firstName); // Output: Jane
```

---

## Instances (new, this)

### The `new` Keyword

The `new` keyword is essential for OOP in JavaScript. It creates an instance and performs the following steps:

1. Creates a new object
2. Sets the object's internal `[[Prototype]]` to the constructor's prototype
3. Calls the constructor with `this` bound to the new object
4. Returns the new object (unless the constructor explicitly returns an object)

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar instanceof Car); // Output: true
console.log(myCar.brand); // Output: Toyota
```

### The `this` Keyword

`this` refers to the current object context. Its value depends on how a function is called:

**In constructor/class:** `this` refers to the newly created instance.

```javascript
class User {
  constructor(name) {
    this.name = name; // 'this' is the new instance
  }

  getName() {
    return this.name; // 'this' is the object calling the method
  }
}

const user = new User("Alice");
console.log(user.getName()); // Output: Alice
```

**In methods:** `this` refers to the object the method is called on.

```javascript
const obj = {
  name: "Bob",
  greet: function () {
    console.log(this.name); // 'this' is obj
  },
};

obj.greet(); // Output: Bob
```

**Arrow functions:** Arrow functions don't have their own `this`—they inherit it from the surrounding context.

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  // Regular method
  greetRegular() {
    console.log(this.name);
  }

  // Arrow function (inherits 'this' from class)
  greetArrow = () => {
    console.log(this.name);
  };
}

const user = new User("Charlie");
user.greetRegular(); // Output: Charlie
user.greetArrow(); // Output: Charlie
```

**Bind, Call, Apply:** Explicitly set `this` context.

```javascript
function introduce() {
  console.log(`I'm ${this.name}`);
}

const person = { name: "David" };

introduce.call(person); // Output: I'm David
introduce.apply(person); // Output: I'm David
const boundIntro = introduce.bind(person);
boundIntro(); // Output: I'm David
```

---

## Summary

| Approach             | Syntax                         | Memory Efficiency         | Use Case                    |
| -------------------- | ------------------------------ | ------------------------- | --------------------------- |
| Object Literal       | `{ }`                          | Good for single object    | Simple, one-off objects     |
| Constructor Function | `function User() {}` + `new`   | Poor (methods duplicated) | Legacy code, simple apps    |
| Prototypes           | `Constructor.prototype.method` | Excellent                 | Custom inheritance patterns |
| Classes              | `class User { }`               | Excellent                 | Modern, large applications  |
