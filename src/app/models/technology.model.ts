interface ITechnology{
    name: string,
    rating: number
}

export class Technology implements ITechnology{
    constructor(
        public name: string = '', 
        public rating: number = 0
        ){}
}