export const enum ROLES {
  CLIENT = 'cliente',
  ADMIN = 'admin',
  SELLER = 'asesor'
}

export const enum ROLESID {
  ADMIN = 1,
  SELLER = 2,
  CLIENT = 3,
}

export const roleColors = {
  [ROLES.CLIENT]: 'green',
  [ROLES.ADMIN]: 'blue',
  [ROLES.SELLER]: 'geekblue',
}