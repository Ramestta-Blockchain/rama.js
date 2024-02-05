import { defaultExport } from "../default";

export interface IPlugin {
    setup(rama: typeof defaultExport, ...payload);
}
