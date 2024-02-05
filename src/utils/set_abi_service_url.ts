import { service, ABIService } from "../services";

export const setAbiApi = (url: string) => {
    const urlLength = url.length;
    if (url[urlLength - 1] !== '/') {
        url += '/';
    }
    service.abi = new ABIService(url);
};
