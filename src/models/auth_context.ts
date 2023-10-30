export default interface IAuthContext {
    token: string,
    auth: boolean,

    login(): void
}
