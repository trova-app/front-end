import Pool from './Pool'

export const logout = () => {
    const user = Pool.getCurrentUser()
    if (user) {
        user.signOut()
    }
}