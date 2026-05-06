//dynamically generalize
type generalize<T> = Array<T>;

const numbers: generalize<number> = [1, 2, 3, 4];
const strings: generalize<string> = ["abir", "arafat", "abir2"];
const userList: generalize<{
    name: string;
    age: number;
}> = [
        {
            name: "abir",
            age: 25
        },
        {
            name: "arafat",
            age: 25
        }
    ]

interface ApiResponse<T, X = null> {
    statusCode: number;
    message: string;
    data: T;//dynamic data type
    extraData?: X;//additional data type
}
interface Review {
    comment: string;
    rating: number;

}
const reviewResponse: ApiResponse<Review, { totalReviews: number }> = {
    statusCode: 200,
    message: "review fetched successfully",
    data: {
        comment: "Thank you for your review",
        rating: 5
    },
    extraData: {
        totalReviews: 100
    }
}
console.log(reviewResponse);
//user interface
interface User {
    name: string,
    age: number;
}
const userResponse: ApiResponse<User> = {
    statusCode: 200,
    message: "User fetched successfully",
    data: {
        name: "Abir",
        age: 23
    },
    extraData: null
}
console.log(userResponse);

//generic function
const addToStudent = <T, X>(StudentInfo: T, StudentInfo2: X) => {
    return {
        ...StudentInfo, ...StudentInfo2
    }

}

const student1 = {
    id: 1,
    CourseName: "Next Level Student",
    name: "Abir",
    hasPen: true
}
const student2 = {
    id: 2,
    CourseName: "Next Level Student",
    name: "arafat",
    hasCar: true,
    isMarried: true
}

const result = addToStudent({ student1 }, { student2 });
console.log(result)