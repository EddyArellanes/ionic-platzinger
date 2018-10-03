export enum Status {
  Online = 'Online',
  Offline = 'Offline',
  Busy = 'Busy',
  AppearOffline = 'Appear Offline',
  Away = 'Away'
}
export interface User {
  id: number,
  uid: number,
  name: string;
  email: string
  nick: string
  age: number;
  active: boolean;
  friend: boolean
  status: Status;
}