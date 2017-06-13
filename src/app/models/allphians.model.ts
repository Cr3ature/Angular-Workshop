interface IAllPhian{
    id: number,
    name: string,
    imageUrl: string,
    keyrole: string
}

export class AllPhian implements IAllPhian{
    constructor(
        public id: number, 
        public name: string,
        public imageUrl: string,
        public keyrole: string
        ){}
}