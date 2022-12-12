// request response formate


export class Test { 

    Question:string=''            //Name must be same as database table column name 
    Option1:string=''             //Used for get request
    Option2:string=''
    Option3:string=''
    Option4:string=''
    CorrectAnswer:string=''

    constructor(question:string='',op1:string='',op2:string='',op3:string='',op4:string='',correctanswer:string='')
    //any name can be given here

    {
        this.Question=question     //assigning question value into database 
        this.Option1=op1
        this.Option2=op2             //Used for Post Request
        this.Option3=op3
        this.Option4=op4
        this.CorrectAnswer=correctanswer

    }
}
