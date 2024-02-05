import { BaseContractMethod } from ".";
import { Logger } from "../utils";

export abstract class BaseContract {

    constructor(public address: string, public logger:Logger) {

    }

    abstract method(methodName: string, ...args): BaseContractMethod;
}