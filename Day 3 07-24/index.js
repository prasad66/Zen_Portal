var json = [{
    "id": "1",
    "name": "Ram",
    "age": 23,
    "email": "ram@gmail.com"
},
{
    "id": "2",
    "name": "Sam",
    "age": 25,
    "email": "sam@gmail.com"
}];
console.log("*********************************For Loop*********************************");
for (var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj);
}
console.log("");
console.log("*********************************For in Loop*********************************");
for (var key in json) {
    if (json.hasOwnProperty(key)) {
        console.log(json[key]);
    }
}
console.log("");
console.log("*********************************For Each Loop*********************************");
json.forEach(element => {
    console.log(element);
});
console.log("");
console.log("*********************************For of Loop*********************************");
for (const iterator of json) {
    console.log(iterator)
}

console.log("");
console.log("");

console.log("*********************************Resume in JSON format*********************************");

let resume = {
    "info": {
        "name": "Prasad",
        "label": "Developer",
        "email": "ndpk.prasad@gmail.com",
        "phone": "+917094634429",
        "summary": `"Strong engineering professional with a B.E focused in Mechanical Engineering from Government College of Engineering, Bargur. I was the 
        head of Innovation Committe under the Ministry of Human Resource Development - India . I along with my seniors formed the club culture in our college
        and was the President of Software Committe in the College. In my Final Year Won the NAFEMS India Engineering Contest which is based on 
        CFD(Computational Fluid Dynamics)"`,
        "location": {
            "address": "425 , Kollai Medu Keilvadugankuttai",
            "postalCode": "632202",
            "city": "Vellore",
            "country": "India",
            "countryCode": "IND",
        }
    },
    "work": [{
        "company": "Cognizant",
        "position": "Programmer Analyst ",
        "startDate": "2019-11-23",
        "summary": `Experienced Programming Analyst with a demonstrated history of working in the Software Development Life Cylcle & services industry. 
        Skilled in UI, Java, Spring, MVC and Boot, Hibernate, JPA, Microservices with basics of Spring Security with JWT. Also accquired a Agile as a skill
        of Practioner Level`,

    }],
    "education": [{
        "institution": "University",
        "universityName":"Anna University",
        "collegeName":"Government College of Engineering - Bargur, Tamil Nadu",
        "degree": "Bachelor of Engineering",
        "branch": "Mechanical Engineering",
        "startDate": "2015-08-03",
        "endDate": "2019-05-21",
        "gpa": "7.5",
    }],
    "skills": [{
        "name": "Web Development",
        "level": "Intermediate",
        "keywords": ["HTML", "CSS", "Javascript","Java","Spring","SpringMVC","SpringBoot", "JPA", "Hibernate", "Microservices"]
    }]
}
console.log(resume)
for (var key in resume) {
    if (resume.hasOwnProperty(key)) {
        console.log(key,resume[key]);
    }
}