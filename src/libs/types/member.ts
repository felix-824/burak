import {ObjectId} from "mongoose"
import { MemberType } from "../enums/member.enum"
import { Request } from "express";
import { Session } from "express-session";

export interface Member {
    _id: ObjectId;
    memberType: MemberType;
    memberNick: string;
    memberPhone: string;
    memberPassword?: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints: string;
    createAt: Date;
    updatedAt: Date;
}


export interface MemberInput {
    memberType?: MemberType;
    memberNick?: string;
    memberPhone: string;
    memberPassword: string;
    memberAddress?: string;
    memberDesc?: string;
    memberImage?: string;
    memberPoints?: string;
}

export interface LoginInput {
    memberNick: string;
    memberPassword: string;
}

export interface AdminRequest extends Request {
    member: Member;
    session: Session & {member: Member};
}