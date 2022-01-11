import { ChangeEvent } from "react";

export interface Movement{
    MovementId:number;
    name:string,
    birthday:string,
    nationalId:string,
    gender:string,
    nationality:string,
    emergencyContact:string
} 
export interface Student{
    StudentId:number;
    name:string,
    birthday:string,
    nationalId:string,
    gender:string,
    nationality:string,
    emergencyContact:string,
    OnClose:()=>void;
} 
export interface MovementProp{
    isOpen:boolean;
    toggle:()=>void;
    from:string;
    to:string;
    ChangeDateFrom:(value:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
    ChangeDateTo:(value:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>void;
} 