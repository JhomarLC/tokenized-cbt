import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface AdminProfile { 'email' : string, 'full_name' : string }
export interface BalanceWithHistory {
  'balance' : bigint,
  'history' : Array<Transaction>,
}
export interface Message { 'msg' : string, 'mtype' : string }
export interface StudentProfile {
  'student_id' : string,
  'email' : string,
  'full_name' : string,
  'program' : string,
}
export interface StudentType {
  'principal' : Principal,
  'profile' : StudentProfile,
}
export interface Transaction {
  'status' : string,
  'info' : string,
  'date_time' : bigint,
  'sign' : string,
  'amount' : bigint,
}
export interface TransactionBalances {
  'principal' : Principal,
  'balanceHistory' : BalanceWithHistory,
  'profile' : StudentProfile,
}
export interface _SERVICE {
  'addIncentive' : ActorMethod<[Principal, bigint], Message>,
  'addProfile' : ActorMethod<[Principal, StudentProfile], Message>,
  'balanceOf' : ActorMethod<[Principal], bigint>,
  'getAdminProfile' : ActorMethod<[Principal], [Principal, AdminProfile]>,
  'getProfile' : ActorMethod<[Principal], [Principal, StudentProfile]>,
  'getSymbol' : ActorMethod<[], string>,
  'historyOf' : ActorMethod<[Principal], Array<Transaction>>,
  'isAdmin' : ActorMethod<[Principal], boolean>,
  'makeClaimedTransaction' : ActorMethod<[string, Principal], Message>,
  'payOut' : ActorMethod<[], Message>,
  'payoutTransfer' : ActorMethod<[Principal, bigint], Message>,
  'seeAllAdmins' : ActorMethod<[], Array<[Principal, AdminProfile]>>,
  'seeAllClaimedTransaction' : ActorMethod<[], Array<[string, Principal]>>,
  'seeAllStudents' : ActorMethod<[], Array<StudentType>>,
  'seeAllTransactions' : ActorMethod<[], Array<TransactionBalances>>,
  'transfer' : ActorMethod<[Principal, bigint], Message>,
  'whoAmI' : ActorMethod<[], Principal>,
  'withdraw' : ActorMethod<[string, bigint], Message>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: ({ IDL }: { IDL: IDL }) => IDL.Type[];
