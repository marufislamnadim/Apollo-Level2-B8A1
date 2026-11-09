# BLOG Title: Explain how Access Modifiers (public, private, protected, and readonly) work in TypeScript OOP with examples.

## Introduction

In TypeScript, **Access Modifiers** control how class properties and methods can be accessed or modified. They mainly help implementing encapsulation in Object-Oriented Programming (OOP).

TypeScript provides four key access modifiers: `public`, `private`, `protected` and `readonly`. 

## 1. Public

The `public` modifier allows a property or method to be accessed from anywhere, including outside the class and from its subclasses. It is the default access modifier in TypeScript.

```typescript
class Student {
    public name: string = "Rakib";
}

const student = new Student();
console.log(student.name); // Rakib
```

## 2. Private

The `private` modifier restricts access to a property or method within the class where it is declared. It cannot be accessed directly from outside the class or from subclasses.

```typescript
class Student {
    private studentId: number = 101;
}
```

The `studentId` property cannot be accessed directly outside the `Student` class.

## 3. Protected

The `protected` modifier allows access within the declaring class and its subclasses, but not from outside those classes.

```typescript
class Student {
    protected course: string = "Software Engineering";
}

class ScholarshipStudent extends Student {
    getCourse(): string {
        return this.course;
    }
}
```

Here, `ScholarshipStudent` can access the inherited `course` property because it is protected.

## 4. Readonly

The `readonly` modifier allows a property to be assigned during declaration or inside the constructor, but restricts reassigning/modifying values later.

```typescript
class Student {
    readonly studentId: number;

    constructor(id: number) {
        this.studentId = id;
    }
}
```

Once initialized, `studentId` cannot be reassigned with different value.

## Conclusion

Access modifiers help control data visibility and improve encapsulation in TypeScript OOP.

- `public`: Accessible everywhere.
- `private`: Accessible only within the declaring class.
- `protected`: Accessible within the class and its subclasses.
- `readonly`: Prevents reassignment after initialization.

Using these features appropriately makes code more secure, organized, and maintainable.