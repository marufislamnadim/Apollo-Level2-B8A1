const multiplyValue = (value:number, multiplier:number=2):number =>{
    return value * multiplier;
}

const processInput =(value:number | string | boolean):string | number=>{
    if(typeof value === 'number'){
        return value*10; 
    }else if(typeof value === 'string'){
        return value.trim().toLowerCase();
    } else{
        if (value === true) {
            return 'Active'
        } else return 'Inactive';
    }
}

const formatCoordinate = ( tupleArray: readonly [latitude: number, longitude: number, locationName: string]):string=>{
    const [latitude, longitude, locationName] = tupleArray;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
}

const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    let finalArray:T[] = [];    
    for (let i = 0; i < arrays.length; i++) {
        const currentArray = arrays[i];
        for (let j = 0; j < currentArray.length; j++) {
            finalArray.push(currentArray[j]);
        }
    }
    return finalArray;
}

interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (array:Course[], minStudents:number):Course[] =>{
    const popularCourses:Course[] = [];
    for (let i = 0; i < array.length; i++){
        const currentCourse = array[i]; 
        if (currentCourse.students >=minStudents && currentCourse.isPublished){
            popularCourses.push(currentCourse);
        }
    }
    return popularCourses;
}
