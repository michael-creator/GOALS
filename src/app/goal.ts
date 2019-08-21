export class Goal {
    showDescription: boolean;
  splice: any;
    constructor(public id: number,public name: string,public description: string , public completedate:Date){
      this.showDescription=false;
    }
  }