// request response formate


export class Test { 

    question:string=''            //Name must be same as database table column name 
    option1:string=''             //Used for get request
    option2:string=''
    option3:string=''
    option4:string=''
    correctAnswer:string=''

    constructor(question:string='',op1:string='',op2:string='',op3:string='',op4:string='',correctanswer:string='')
    //any name can be given here

    {
        this.question=question     //assigning question value into database 
        this.option1=op1
        this.option2=op2             //Used for Post Request
        this.option3=op3
        this.option4=op4
        this.correctAnswer=correctanswer

    }
}
