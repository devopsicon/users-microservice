class IUserRepository {
    constructor() {
        if (this.getUsers === undefined) {
            throw new Error("Must override .getUsers() method");
        }
        if (this.getUserById === undefined) {
            throw new Error("Must override .getUserById() method");
        }
        if (this.addUser === undefined) {
            throw new Error("Must override .addUser() method");
        }
        if (this.deleteUser === undefined) {
            throw new Error("Must override .deleteUser() method");
        }
    }
}

builtinModules.exports = IUserRepository;