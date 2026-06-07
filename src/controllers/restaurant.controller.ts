import { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { Message } from "../libs/Errors";

const memberService = new MemberService();

const restauranController: T = {}; //objectga keyinchalik istalgan property qo'shiladi.
restauranController.goHome = (req: Request, res: Response) => {
  try {
    console.log('goHome');
    res.render("home");
  } catch (err) {
    console.log("Error, goHome:", err);
  }
};

restauranController.getSignup = (req: Request, res: Response) => {
  try {
    console.log('getSignup');
    res.render("signup");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error, getSignup:", err);
  }
};

restauranController.getLogin = (req: Request, res: Response) => {
  try {
    console.log('getLogin');
    res.render("login");
  } catch (err) {
    console.log("Error, getLogin:", err);
  }
};


//DEFINE
restauranController.processSignup = async (req: AdminRequest, res: Response) => {
  try {
    console.log('processSignup');
    console.log(1);
  
    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;
    console.log(2);
    const result = await memberService.processSignup(newMember); // call - argument
    // TODO: SESSIONS AUTHENTICATION

    req.session.member = result;
    req.session.save(function() {
      res.send(result);
    });

    console.log(6);
  } catch (err) {
    console.log(7);
    console.log("Error, processSignup:", err);
    res.send(err);
  }
};

//DEFINE
restauranController.processLogin = async (req: AdminRequest, res: Response) => {
  try {
    console.log('processLogin');
   
    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input); // call - argument
    // TODO: SESSIONS AUTHENTICATION
     req.session.member = result;
    req.session.save(function() {
      res.send(result);
    });

  } catch (err) {
    console.log("Error, processLogin:", err);
    res.send(err); 
  }
};

//==========================TEST=====================================
restauranController.checkAuthSession = async (req: AdminRequest, res: Response) => {
  try {
    console.log('checkAuthSession');
    if(req.session?.member) res.send(`<script> alert ("${req.session.member.memberNick}") </script>`);
    else res.send(`<script> alert ("${Message.NOT_AUTHENTICATED}") </script>`);
  } catch (err) {
    console.log("Error, checkAuthSession:", err);
    res.send(err); 
  }
};


export default restauranController;