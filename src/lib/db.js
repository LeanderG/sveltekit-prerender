import Database from 'better-sqlite3';
export const db = new Database('./src/files/MuseumFile2018_all.db', { fileMustExist: true });
