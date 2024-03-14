export const idlFactory = ({ IDL }) => {
  const Message = IDL.Record({ 'msg' : IDL.Text, 'mtype' : IDL.Text });
  const StudentProfile = IDL.Record({
    'student_id' : IDL.Text,
    'email' : IDL.Text,
    'full_name' : IDL.Text,
    'program' : IDL.Text,
  });
  const AdminProfile = IDL.Record({
    'email' : IDL.Text,
    'full_name' : IDL.Text,
  });
  const Transaction = IDL.Record({
    'status' : IDL.Text,
    'info' : IDL.Text,
    'date_time' : IDL.Int,
    'sign' : IDL.Text,
    'amount' : IDL.Nat,
  });
  const StudentType = IDL.Record({
    'principal' : IDL.Principal,
    'profile' : StudentProfile,
  });
  const BalanceWithHistory = IDL.Record({
    'balance' : IDL.Nat,
    'history' : IDL.Vec(Transaction),
  });
  const TransactionBalances = IDL.Record({
    'principal' : IDL.Principal,
    'balanceHistory' : BalanceWithHistory,
    'profile' : StudentProfile,
  });
  return IDL.Service({
    'addIncentive' : IDL.Func([IDL.Principal, IDL.Nat], [Message], []),
    'addProfile' : IDL.Func([IDL.Principal, StudentProfile], [Message], []),
    'balanceOf' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'getAdminProfile' : IDL.Func(
        [IDL.Principal],
        [IDL.Principal, AdminProfile],
        ['query'],
      ),
    'getProfile' : IDL.Func(
        [IDL.Principal],
        [IDL.Principal, StudentProfile],
        ['query'],
      ),
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'historyOf' : IDL.Func([IDL.Principal], [IDL.Vec(Transaction)], ['query']),
    'isAdmin' : IDL.Func([IDL.Principal], [IDL.Bool], []),
    'makeClaimedTransaction' : IDL.Func(
        [IDL.Text, IDL.Principal],
        [Message],
        [],
      ),
    'payOut' : IDL.Func([], [Message], []),
    'payoutTransfer' : IDL.Func([IDL.Principal, IDL.Nat], [Message], []),
    'seeAllAdmins' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Principal, AdminProfile))],
        ['query'],
      ),
    'seeAllClaimedTransaction' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Principal))],
        ['query'],
      ),
    'seeAllStudents' : IDL.Func([], [IDL.Vec(StudentType)], ['query']),
    'seeAllTransactions' : IDL.Func(
        [],
        [IDL.Vec(TransactionBalances)],
        ['query'],
      ),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [Message], []),
    'whoAmI' : IDL.Func([], [IDL.Principal], []),
    'withdraw' : IDL.Func([IDL.Text, IDL.Nat], [Message], []),
  });
};
export const init = ({ IDL }) => { return []; };
