import { IFilterOptions } from '../interfaces/filter.interface';
import { IUser } from '../interfaces/user/user.interface';
import { isWithinInterval } from 'date-fns';

const filterUsersListByName = (name: string, usersList: IUser[]): IUser[] => {
  const NAME_NOT_TYPPED = name === undefined || name === '';
  if (NAME_NOT_TYPPED) {
    return usersList;
  }
  let result: IUser[] = [];
  result = usersList.filter((user) => {
    return user.nome.toLowerCase().includes(name.toLowerCase());
  });
  return result;
};

/* --- */

const filterUsersListByStatus = (
  status: boolean,
  usersList: IUser[]
): IUser[] => {
  let result: IUser[] = [];

  result = usersList.filter((user) => {
    return user.ativo === status;
  });

  return result;
};

/* --- */

const filterUsersByRangeDate = (
  startDate: Date | undefined,
  endDate: Date | undefined,
  usersList: IUser[]
): IUser[] => {
  const DATES_NOT_SELECTED = startDate === undefined || endDate === undefined;

  if (DATES_NOT_SELECTED) {
    return usersList;
  }

  let result: IUser[] = [];

  result = usersList.filter((user) => {
    return isWithinInterval(new Date(user.dataCadastro), {
      start: startDate,
      end: endDate,
    });
  });

  return result;
};

/* --- */

const filterUsersList = (
  filterOptions: IFilterOptions,
  usersList: IUser[]
): IUser[] => {
  let filteredList: IUser[] = [];

  filteredList = filterUsersListByName(filterOptions.name, usersList);
  filteredList = filterUsersListByStatus(filterOptions.status, filteredList);
  filteredList = filterUsersByRangeDate(
    filterOptions.startDate,
    filterOptions.endDate,
    filteredList
  );
  return filteredList;
};

export { filterUsersList };
