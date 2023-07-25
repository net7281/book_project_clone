

export interface AuthState{
    token: string | null;
    loading : boolean;
    error : Error | null;
}

const options = { prefix : 'mybooks/auth' }

export const { success, pending, fail } = createActions({SUCCESS : (token: string) => token },)