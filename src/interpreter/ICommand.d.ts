export default interface ICommand {
    switch: string;
    switchEnd: string;
    callback(code: string, current_index: number): boolean;
}
//# sourceMappingURL=ICommand.d.ts.map