import { readFileSync } from 'fs';
import { resolve } from 'path';
import { Response } from 'superagent';

export const cleanup = process.env.CLEANUP !== 'false';
export const env = process.env.ENV || 'dev';
export const region = process.env.REGION || 'ap-southeast-1';
export const envsName = env === 'local' ? 'local' : (env === 'local-k8s' ? 'local-k8s' : `${env}_${region}`);
export const envs = JSON.parse(readFileSync(resolve(__dirname, `../${envsName}.json`), 'utf8'));
export const config = JSON.parse(readFileSync(resolve(__dirname, `../config.json`), 'utf8'));
export const DEFAULTLAB = 'preneticshk';
export enum Partner { circle = 'circle', hbl = 'hbl', hkscreen = 'hkscreen', dnafit = 'dnafit', tasscare = 'tasscare', ukscreen = 'ukscreen' };

export const check = (res: Response, status: number) => {
    if (res.status !== status) {
        console.error(res.body);
    }
};

export const getEmailUsername = () => `test-automation+${generateCode(7)}@prenetics.com`;
const pick = (chars: string) => chars.charAt(Math.floor(Math.random() * chars.length));
export const generateCode = (length: number) => {
    const text: string[] = [];
    for (let i = 0; i < length; i++) {
        text.push(pick('0123456789'));
    }
    return text.join('');
};
