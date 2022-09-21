export default function Exec(command: string, options?: {
    log: boolean;
    cwd: string;
}): Promise<unknown>;
