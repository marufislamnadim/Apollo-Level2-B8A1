# BLOG Title:  Provide a practical example of combining Union (|) and Intersection (&) types in TypeScript.

## Introduction

The **Union Types (`|`)** allows a variable to hold values of different possible types, while **Intersection Types (`&`)** combines multiple types into one, requiring an object to satisfy all the combined type definitions.

By combining these two concepts, we can represent different forms of data while ensuring that they share common properties.

Let's explore this concept further using an example of students and courses.

## 1. Defining Different Student Types Using Union Types

Consider that, we have two categories of students: regular students and scholarship students.

A regular student has basic student information, while a scholarship student has additional scholarship-related information.

We can define these two types separately:

```typescript
// Another example
type RegularStudent = {
    category: "regular";
    name: string;
    enrolledCourse: string;
};

type ScholarshipStudent = {
    category: "scholarship";
    name: string;
    enrolledCourse: string;
    scholarshipAmount: number;
};
```

Now, we can combine these types using a union:

```typescript
type Student = RegularStudent | ScholarshipStudent;
```

Here, `Student` represents either a `RegularStudent` or a `ScholarshipStudent`.



## 2. Combining Common Properties Using Intersection Types

Suppose every student, regardless of their category, must have a unique student ID and an enrollment date.

Instead of repeating these properties in both student types, we can define them separately:

```typescript
type StudentRecord = {
    studentId: string;
    enrollmentDate: Date;
};
```

Now, we can combine the `Student` union with `StudentRecord` using an intersection:

```typescript
type EnrolledStudent = Student & StudentRecord;
```

The `&` operator combines the common student record properties with every possible student type.

As a result, both regular and scholarship students must have:

- `studentId`
- `enrollmentDate`
- `name`
- `enrolledCourse`
- Their respective category-specific properties

## Conclusion

Union and intersection types complement each other and make TypeScript applications more flexible and maintainable.