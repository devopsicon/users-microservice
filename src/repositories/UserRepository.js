import IUserRepository from "./IUserRepository";
import dataStore from "nedb";

class UserRepository extends IUserRepository {
    constructor() {
        super();
        var fileName = __dirname + '/users.db';
        this.db = new dataStore({ filename: fileName, autoload: true});
    }
    // Get all Users data
    getUsers() {
        var document;
        return new Promise((resolve, reject) => {
            this.db.find({ company: 'devopsicon'}, function (err, docs) {
                document = docs;

                try {
                    resolve(document);
                } catch (error) {
                    reject(error);   
                }
            });
        });
    }
    // Get data by user Id
    getUserById(id) {
        var document;
        return new Promise((resolve, reject) => {
            this.db.find({ _id: id}, function (err, docs) {
                document = docs;

                try {
                    resolve(document);
                } catch (error) {
                    reject(error);   
                }
            });
        });
    }
    // Insert data into database
    addUser(data) {
        var document;
        return new Promise((resolve, reject) => {
            this.db.insert(data, function (err, docs) {
                console.log('Inserted data', doc.name, 'with Id', doc._id);

                try {
                    resolve(doc);
                } catch (error) {
                    reject(error);   
                }
            });
        });
    }
    // delete user
    deleteUser(id) {
        var document;
        return new Promise((resolve, reject) => {
            this.db.remove({ _id: id}, {}, function (err, docRemoved) {
                document = docRemoved;

                try {
                    resolve(document);
                } catch (error) {
                    reject(error);   
                }
            });
        });
    }
}