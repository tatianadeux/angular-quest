import { Skill } from "./skill.model";

export class Developer {
    constructor(
        public lastName: string,
        public firstName: string,
        public age: number,
        public gender: string,
        public biography: string,
        public skillsList: Skill[]

    ) {}
}
