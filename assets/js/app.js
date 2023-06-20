let cl =console.log;
const studentcontainer =document.getElementById('studentcontainer');
const formcontainer =document.getElementById('formcontainer')
const fromcontrols =document.getElementById('fname');
const lnamecontrol = document.getElementById('lname');
const emailcontrol =document.getElementById('email');
const contactcontrol =document.getElementById('contact');

let stdarry =[];

const templating =(arr)=>{
    let result =" ";
    arr.forEach((ele,i )=> {
        result += 
                    `
                            <tr>
                                <td>${i + 1}</td>
                                <td>${ele.fname}</td>
                                <td>${ele.lname}</td>
                                <td>${ele.email}</td>
                                <td>${ele.contact}</td>
                            </tr>

                    `
    });
    studentcontainer.innerHTML =result;
};

templating(stdarry);

const onformSumbithandler =(eve)=>{
    eve.preventDefault()
    // cl('submit is triggred')
    let obj ={
        fname :fromcontrols.value,
        lname :lnamecontrol.value,
        email :emailcontrol.value,
        contact : contactcontrol.value
    };
    
    stdarry.push(obj);
    eve.target.reset()
    templating(stdarry)

};

formcontainer.addEventListener("submit" ,onformSumbithandler)


